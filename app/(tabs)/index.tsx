import { Image, StyleSheet } from 'react-native';
// Update the import path if the file exists elsewhere, for example:
import ParallaxScrollView from '../../components/ParallaxScrollView';
// Or, if the file does not exist, create 'ParallaxScrollView.tsx' in the components folder.
// Update the import path if the file exists elsewhere, for example:
// import { Welcome } from '../../components/Welcome';
// Or, if the file does not exist, create 'Welcome.tsx' in the components folder.
import { Welcome } from '../../components/Welcome';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Welcome />
    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});