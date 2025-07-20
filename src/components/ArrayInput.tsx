import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface ArrayInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  isValid?: boolean;
  errorMessage?: string;
  helperText?: string;
}

export default function ArrayInput({ 
  value, 
  onChangeText, 
  placeholder = "Enter numbers separated by commas", 
  label,
  isValid = true,
  errorMessage,
  helperText
}: ArrayInputProps) {
  const handleTextChange = (text: string) => {
    const cleanText = text.replace(/[^0-9,.-\s]/g, '').replace(/,+/g, ',');
    onChangeText(cleanText);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          !isValid && styles.inputError
        ]}
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        keyboardType="numbers-and-punctuation"
        placeholderTextColor="#999"
        multiline={false}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {!isValid && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      {isValid && helperText && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputError: {
    borderColor: '#ff6b6b',
  },
  errorText: {
    fontSize: 14,
    color: '#ff6b6b',
    marginTop: 4,
  },
  helperText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});