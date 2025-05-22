import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

// If the file exists at app/components/ThemedText, keep this line.
// Otherwise, update the import path to the correct location, for example:
import { ThemedText } from '../components/ThemedText';
// Or create the file at app/components/ThemedText.tsx if missing.
import { ThemedView } from '../components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
