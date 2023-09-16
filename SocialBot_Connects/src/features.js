import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Features() {
  return (
    <View style={styles.featureContainer}>
      <Text style={styles.featureTitle}>Features</Text>
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/chatgptIcon1.png')} style={styles.icon} />
          <Text style={styles.featureName}>ChatGPT</Text>
        </View>
        <Text style={styles.featureText}>
          ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/daleIcon.png')} style={styles.icon} />
          <Text style={styles.featureName}>DALL-E</Text>
        </View>
        <Text style={styles.featureText}>
          DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>

      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/smartAi.png')} style={styles.icon} />
          <Text style={styles.featureName}>Smart AI</Text>
        </View>
        <Text style={styles.featureText}>
          A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  featureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  featureTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  feature: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 12,
  },
  featureName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 13,
    lineHeight: 24,
    color: '#333',
  },
});
