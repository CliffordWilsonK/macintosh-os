/**
 * Utility functions for handling audio playback with browser autoplay policies
 */

/**
 * Safely plays an audio with error handling for autoplay policy violations
 * @param audioFunction - The play function from useSoundEffect hook
 * @param fallbackMessage - Optional message to log if playback fails
 */
export const safeAudioPlay = (
  audioFunction: () => void, 
  fallbackMessage?: string
): void => {
  try {
    audioFunction();
  } catch (error) {
    console.log(fallbackMessage || 'Audio playback failed:', error);
  }
};

/**
 * Creates a user interaction listener that enables audio playback after first interaction
 * @param onFirstInteraction - Callback function to execute on first user interaction
 * @returns Cleanup function to remove event listeners
 */
export const createUserInteractionListener = (
  onFirstInteraction: () => void
): (() => void) => {
  const handleFirstInteraction = () => {
    onFirstInteraction();
    cleanup();
  };

  const cleanup = () => {
    document.removeEventListener('click', handleFirstInteraction);
    document.removeEventListener('keydown', handleFirstInteraction);
    document.removeEventListener('touchstart', handleFirstInteraction);
  };

  document.addEventListener('click', handleFirstInteraction);
  document.addEventListener('keydown', handleFirstInteraction);
  document.addEventListener('touchstart', handleFirstInteraction);

  return cleanup;
};

/**
 * Hook-like utility for managing audio that requires user interaction
 * @param playAudio - Function that plays the audio
 * @param autoPlayDelay - Delay in milliseconds before attempting to play (default: 2000)
 */
export const useDelayedAudioWithUserInteraction = (
  playAudio: () => void,
  autoPlayDelay: number = 2000
) => {
  let hasUserInteracted = false;
  let shouldPlay = false;
  let cleanup: (() => void) | null = null;

  const attemptPlay = () => {
    if (hasUserInteracted && shouldPlay) {
      safeAudioPlay(playAudio, 'Startup sound playback failed');
    }
  };

  // Set up the delayed play trigger
  const delayTimer = setTimeout(() => {
    shouldPlay = true;
    attemptPlay();
  }, autoPlayDelay);

  // Set up user interaction listener
  cleanup = createUserInteractionListener(() => {
    hasUserInteracted = true;
    attemptPlay();
  });

  // Return cleanup function
  return () => {
    clearTimeout(delayTimer);
    if (cleanup) cleanup();
  };
};