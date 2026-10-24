
import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PracticeTracker from '../components/PracticeTracker';
import Stopwatch from '../components/Stopwatch';
import useStopwatch from '../hooks/useStopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <Text style={styles.subtitle}>
        Track your practice and laboratory time.
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <View style={styles.button}>
          <Button
            title="Start"
            onPress={handleStart}
            disabled={isRunning}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Stop"
            onPress={handleStop}
            disabled={!isRunning}
          />
        </View>
      </View>

      <Text style={styles.footer}>
        Keep practicing. Every problem counts!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eff6ff',
  },
  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 24,
  },
  controls: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginTop: 8,
  },
  footer: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 10,
  },
});
