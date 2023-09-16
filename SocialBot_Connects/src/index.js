import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, Clipboard } from 'react-native';
import axios from 'axios';
import Features from './features';
import {Api_key} from '@env'

export default function ChatGPT() {
  const [messages, setMessages] = useState([]);
  const [showFeatures, setShowFeatures] = useState(true);
  const [apiKey, setApiKey] = useState(Api_key);
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const [textInput, setTextInput] = useState('');

  const handleSubmit = async () => {
    try {
      const prompt = textInput;
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

      setMessages([...messages, { role: 'user', text: textInput }, { role: 'bot', text: botResponse }]);
      setTextInput('');

      // Check if the user's input is empty (no text), and if it is, set showFeatures to true
      if (textInput.trim() === '') {
        setShowFeatures(true);
      } else {
        setShowFeatures(false);
      }
      
    } catch (error) {
      console.error('An error occurred while making the API request:', error);
    }
  };

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bot.png')} style={styles.icon} />
      {showFeatures ? (
        <Features />
      ) : (
        <FlatList
  data={messages}
  keyExtractor={(item, index) => index.toString()}
  style={styles.body}
  renderItem={({ item }) => (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Text style={{ fontWeight: 'bold', color: item.role === 'user' ? 'gray' : '#213555' }}>
        {item.role === 'user' ? 'Soban' : 'Bot:'}
      </Text>
      {item.role === 'bot' && ( // Render only for bot responses
        <TouchableOpacity onPress={() => copyToClipboard(item.text)}>
          <Text style={[styles.BotMessage, styles.copyable]}>
            {item.text}
          </Text>
        </TouchableOpacity>
      )}
      {item.role === 'user' && ( // Render only for user (Soban) messages
        <Text style={[styles.userMessage, styles.copyable]}>
          {item.text}
        </Text>
      )}
    </View>
  )}
/>

      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder="Ask me Everything"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Let's Go</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    width: '92%',
  },
  icon: {
    marginTop: 60,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
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
    height: 60,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    elevation: 5,
  },
  button: {
    width: 70,
    height: 60,
    backgroundColor: '#213555', // Adjust the color as needed
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
    marginLeft: 6,
    elevation: 6,
  },
  copyable: {
    backgroundColor: 'lightblue', // Customize the background color for copyable text
  },
});
