import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToChatbot = () => {
    navigation.navigate('ChatBot');
  };

  const navigateToSummary = () => {
    navigation.navigate('SummaryGenerator');
  };

  const navigateToPlagiarismChecker = () => {
    navigation.navigate('HashTagGenerator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>SOCIALBOT CONNECT</Text>
      </View>
      
      <View style={styles.rowContainer}>
        {/* Personal Chatbot */}
        <TouchableOpacity onPress={navigateToChatbot} style={styles.columnItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/chatgptIcon.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconText}>Personal Chatbot</Text>
        </TouchableOpacity>

        {/* Summary Text */}
        <TouchableOpacity onPress={navigateToSummary} style={styles.columnItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/TextSummerizer.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconText}>Summary Text</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        {/* Plagiarism Checker */}
        <TouchableOpacity
          onPress={navigateToPlagiarismChecker}
          style={styles.columnItem}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/hashTag.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconText}>Hashtag Generator </Text>
        </TouchableOpacity>
        {/* Add another container here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
    fontWeight: '900',
    opacity:0.7
  },
  
  titleIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginBottom: 40,
    borderRadius: 50,
  },
  rowContainer: {
  
    flexDirection: 'row',
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
  },
  columnItem: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#213555',
    opacity: 0.8,
    marginHorizontal: 5, 
    elevation:30
    // Add margin between columns
  },
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
  },
  iconText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;

