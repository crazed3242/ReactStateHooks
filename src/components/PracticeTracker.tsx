import { Button, StyleSheet, Text, View } from 'react-native';

type PracticeTrackerProps = {
    solved: number;
    onSolve: () => void;
    onReset: () => void;
};

export default function PracticeTracker({
    solved,
    onSolve,
    onReset,
}: PracticeTrackerProps) {
    return (
        <View style = {styles.card}>
            <Text style = {styles.heading}> Practice Tracker</Text>
            <Text style = {styles.counter}> Solved: {solved}</Text>

            {solved >= 5 && (
                <Text style = {styles.success}> Great job!</Text>
            )}

            <View style = {styles.button}>
                <Button title = "Reset" onPress = {onReset} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 14,
        marginBottom: 20,

    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 14,
        color: '#172554',
    },

    counter: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2563eb',
    },

    success: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#15803d',
        marginBottom: 12,
    },

    button: {
        marginTop: 8,
    },
});