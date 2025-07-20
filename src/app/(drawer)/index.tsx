import { CustomButton, NumberInput } from "@/components";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const isFirstValid =
      firstNumber.trim() !== "" && !isNaN(Number(firstNumber));
    const isSecondValid =
      secondNumber.trim() !== "" && !isNaN(Number(secondNumber));
    setIsButtonEnabled(isFirstValid && isSecondValid);
  }, [firstNumber, secondNumber]);

  const handleAddNumbers = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    const sum = num1 + num2;
    setResult(sum);
  };

  const isFirstNumberValid = firstNumber === "" || !isNaN(Number(firstNumber));
  const isSecondNumberValid =
    secondNumber === "" || !isNaN(Number(secondNumber));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Two Numbers</Text>

      <NumberInput
        value={firstNumber}
        onChangeText={setFirstNumber}
        placeholder="Enter first number"
        label="First Number"
        isValid={isFirstNumberValid}
      />

      <NumberInput
        value={secondNumber}
        onChangeText={setSecondNumber}
        placeholder="Enter second number"
        label="Second Number"
        isValid={isSecondNumberValid}
      />

      <CustomButton
        title="Add Two Numbers"
        onPress={handleAddNumbers}
        disabled={!isButtonEnabled}
      />

      <Text style={styles.resultLabel}>
        Total: {result !== null ? result : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});
