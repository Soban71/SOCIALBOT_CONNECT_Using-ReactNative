import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import SummaryFeature from './SummaryFeature';
import axios from 'axios';
import {Api_key} from '@env'

export default function SummaryGenerator() {
  const [messages, setMessages] = useState([]);
  const [showFeatures, setShowFeatures] = useState(true);
  const [apiKey, setApiKey] = useState(Api_key);
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const [textInput, setTextInput] = useState('');

  const handleSubmit = async () => {
    try {
      const prompt = `Generate a summary in 3 lines: ${textInput}`; // Concatenate the prompt here
      console.log('Prompt:', prompt); // Log the prompt
      const requestData = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      };
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      };
      const response = await axios.post(apiUrl, requestData, { headers });
  
      const botResponse = response.data.choices[0].message.content;
  
      setMessages([...messages, { type: 'user', text: textInput }, { type: 'bot', text: botResponse }]);
      setTextInput('');

      if (textInput.trim() === '') {
        setShowFeatures(true);
      } else {
        setShowFeatures(false);
      }
      
    } catch (error) {
      console.error('An error occurred while making the API request:', error);
    }
  };
  

  // Function to update textInput as user types
  const handleTextChange = (text) => {
    setTextInput(text); // Update the text input value
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/TextSummerizer2.png')} style={styles.icon} />

      <Text style={styles.tittle}>Summary Generator </Text>

      {showFeatures ? (
        <SummaryFeature />
      ) : (

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>
              {item.type === 'user' ? 'Text' : 'Summary:'}
            </Text>
            <Text style={[styles.BotMessage, item.type === 'user' ? styles.userMessage : null]}>
              {item.text}
            </Text>
          </View>
        )}
      />
      ) }
      <View style={styles.inputContainer}>
      <ScrollView showsVerticalScrollIndicator={true}>
  <TextInput
    style={styles.input}
    value={textInput}
    onChangeText={handleTextChange}
    placeholder="Ask me Everything"
    textAlignVertical="top"
    multiline={true} // Set multiline to true
    numberOfLines={4} // Set the number of lines you want to display initially
  />
</ScrollView>


        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  tittle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing:5,
    marginBottom: 20,
  },
  body: {
    width: '102%',
  },
  icon: {
    marginTop: 60,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    minHeight: 100, // Adjust the minHeight as needed
    maxHeight: 200, // Set a maximum height if necessary
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    elevation: 5,
    marginTop: 10,
  },
  
  button: {
    width: 70,
    height: 60,
    backgroundColor: '#213555',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F0F0F0',
  },
  userMessage: {
    fontSize: 13,
    backgroundColor: '#F0F0F0',
    color: 'black',
    padding: 18,
    borderRadius: 10,
    marginLeft: 6,
    elevation: 6,
  },
  BotMessage: {
    fontSize: 13,
    backgroundColor: '#F0F0F0',
    color: 'black',
    padding: 18,
    borderRadius: 10,
    marginRight: 50,
    elevation: 6,
  },
});
