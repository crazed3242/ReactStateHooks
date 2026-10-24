import { View, Text, StyleSheet } from 'react-native';

type StopwatchProps = {
    seconds: number;
    isRunning: boolean;
};

export default function Stopwatch({
    seconds,
    isRunning,

}: StopwatchProps) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime =
        `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    return (
        <View style = {styles.card}>
            <Text style = {styles.heading}> Lab Stopwatch</Text>
            <Text style = {styles.timer}>{formattedTime}</Text>

            <Text style = {[styles.status, {color: isRunning ? '#15803d' : '#64748b'},
            ]}
            >
                {isRunning ? 'Running...' : 'Paused'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 14,
        marginBottom: 20,
        alignItems: 'center',
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#172554',
        marginBottom: 12,
    },

    timer: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2563eb',
        fontVariant: ['tabular-nums'],
    },

    status: {
        fontSize: 17,
        fontWeight: '600',
        marginTop: 8,
    },
});