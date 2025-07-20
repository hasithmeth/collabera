import { ArrayInput, CustomButton, NumberInput } from "@/components";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface TwoSumResult {
  indices: [number, number];
  values: [number, number];
  found: boolean;
}

export default function TwoSumII() {
  const [arrayInput, setArrayInput] = useState("");
  const [targetInput, setTargetInput] = useState("");
  const [result, setResult] = useState<TwoSumResult | null>(null);
  const [isValid, setIsValid] = useState(false);

  const parseArray = (input: string): number[] => {
    if (!input.trim()) return [];

    const numbers = input
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map((s) => parseFloat(s))
      .filter((n) => !isNaN(n));

    return numbers;
  };

  const isSorted = (arr: number[]): boolean => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  };

  useEffect(() => {
    const numbers = parseArray(arrayInput);
    const target = Number(targetInput);

    const hasValidArray = numbers.length >= 2 && isSorted(numbers);
    const hasValidTarget = !isNaN(target) && targetInput.trim() !== "";

    setIsValid(hasValidArray && hasValidTarget);
  }, [arrayInput, targetInput]);

  const twoSum = (numbers: number[], target: number): TwoSumResult => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        return {
          indices: [left + 1, right + 1],
          values: [numbers[left], numbers[right]],
          found: true,
        };
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return {
      indices: [-1, -1],
      values: [-1, -1],
      found: false,
    };
  };

  const handleSolve = () => {
    const numbers = parseArray(arrayInput);
    const target = Number(targetInput);
    const solution = twoSum(numbers, target);
    setResult(solution);
  };

  const loadExample = () => {
    setArrayInput("2, 7, 11, 15");
    setTargetInput("9");
    setResult(null);
  };

  const resetInputs = () => {
    setArrayInput("");
    setTargetInput("");
    setResult(null);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Two Sum II - Sorted Array</Text>

      <Text style={styles.description}>
        Given a sorted array and a target, find two numbers that add up to the
        target. Return their 1-based indices.
      </Text>

      <ArrayInput
        value={arrayInput}
        onChangeText={setArrayInput}
        placeholder="e.g., 2, 7, 11, 15"
        label="Sorted Array (comma-separated)"
      />

      <NumberInput
        value={targetInput}
        onChangeText={setTargetInput}
        placeholder="e.g., 9"
        label="Target Value"
      />

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Load Example"
          onPress={loadExample}
          disabled={false}
        />

        <CustomButton
          title="Find Two Sum"
          onPress={handleSolve}
          disabled={!isValid}
        />

        <CustomButton title="Reset" onPress={resetInputs} disabled={false} />
      </View>

      {result && (
        <View style={styles.resultContainer}>
          {result.found ? (
            <>
              <Text style={styles.resultTitle}>Solution Found!</Text>
              <Text style={styles.resultText}>
                Indices: [{result.indices[0]}, {result.indices[1]}]
              </Text>
              <Text style={styles.resultText}>
                Numbers: [{result.values[0]}, {result.values[1]}]
              </Text>
              <Text style={styles.resultText}>
                Sum: {result.values[0]} + {result.values[1]} ={" "}
                {result.values[0] + result.values[1]}
              </Text>
            </>
          ) : (
            <Text style={styles.noSolutionText}>No solution found</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    marginVertical: 16,
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
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
  resultTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4caf50",
    textAlign: "center",
    marginBottom: 12,
  },
  resultText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginVertical: 4,
  },
  noSolutionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#f44336",
    textAlign: "center",
  },
});
