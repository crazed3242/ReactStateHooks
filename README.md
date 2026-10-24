
# IT313_Mabayo_JohnDaniel_ReactStateHooks

## Laboratory 5: React State & Hooks in Action

### Problem
The Lab Timer & Practice Tracker is a React Native application
that helps students track solved practice problems and monitor
the time spent working during laboratory sessions.

### Features
- Displays the number of solved problems.
- Increases the count using the Solve +1 button.
- Resets the practice counter independently of the timer.
- Displays "Great job!" when five or more problems are solved.
- Starts and stops a stopwatch.
- Displays elapsed time in MM:SS format.
- Shows "Running..." or "Paused" depending on the timer state.

### Approach
- useState manages the solved count and running status.
- useEffect manages the stopwatch interval and its cleanup.
- useStopwatch is a custom hook for reusable timer logic.
- PracticeTracker displays the counter and practice controls.
- Stopwatch displays the elapsed time and current status.
- LabScreen owns shared state and passes values and callbacks
  to its child components.
- Conditional rendering displays messages based on application state.

### Technologies
- React Native
- TypeScript
- Expo
- React Hooks

### Requirements
Install Node.js and npm, and install Expo Go on your phone.

### How to Run
1. Clone the repository.
2. Open the project folder in a terminal.
3. Install the project dependencies:

   npm install

4. Start Expo:

   npx expo start

5. Scan the QR code using Expo Go on your phone.
   Make sure your phone and computer can communicate over
   the network.

### Author
John Daniel B. Mabayo

### Course
IT 313 - Mobile Programming
