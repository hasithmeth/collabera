import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface NumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  isValid?: boolean;
}

export default function NumberInput({
  value,
  onChangeText,
  placeholder = "Enter a number",
  label,
  isValid = true,
}: NumberInputProps) {
  const handleTextChange = (text: string) => {
    const numericText = text.replace(/[^0-9.-]/g, "");
    onChangeText(numericText);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, !isValid && styles.inputError]}
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputError: {
    borderColor: "#ff6b6b",
  },
});
