import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'; // Corrected typo: changed "ABCEDF" to "ABCDEF"
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomBackground(color);
  };

  return (
    <>
      {/* Status Bar */}
      <StatusBar backgroundColor={randomBackground} />
      {/* Main Heading */}
      <View
        style={[styles.headingContainer, {backgroundColor: randomBackground}]}>
        <Text style={styles.headingText}>Random Color Maker</Text>
      </View>
      {/* Main Color Container */}
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        {/* Color Change Button */}
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Generate Color</Text>
          </View>
        </TouchableOpacity>
        {/* Color Code */}
        <View>
          <Text selectable style={styles.colorCode}>
            {randomBackground}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  actionButton: {
    borderRadius: 20,
    backgroundColor: '#16BFFD',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 20,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  headingText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  colorCode: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    borderRadius: 8,
  },
});
