
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HashtagFeatures() {
  return (
    <View style={styles.featureContainer}>
      
      <View style={styles.feature}>
        <View style={styles.iconContainer}>
          <Image source={require('../../assets/daleIcon.png')} style={styles.icon} />
          <Text style={styles.featureName}>Customization and Suggestion</Text>
        </View>
        <Text style={styles.featureText}>
        Users can customize generated hashtags to suit their content and receive real-time 
        suggestions, ensuring they can create a unique and impactful social media presence effortlessly.
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing:2,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 13,
    lineHeight: 24,
    color: '#333',
  },
});
