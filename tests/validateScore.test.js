import { describe, it, expect } from "vitest";
import { validateScore } from "../src/validateScore.js";

describe("validateScore", () => {
  it("should return valid result for a normal score", () => {
    const result = validateScore(75);
    expect(result.valid).toBe(true);
    expect(result.score).toBe(75);
    expect(result.passed).toBe(true);
    expect(result.grade).toBe("C");
  });

  it("should return invalid for non-numeric score", () => {
    const result = validateScore("abc");
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss eine Zahl sein");
  });

  it("should return invalid for out of range score", () => {
    const result = validateScore(150);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss zwischen 0 und 100 liegen");
  });

  it("should return invalid when score is missing", () => {
    const result = validateScore(null);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score ist erforderlich");
  });

  it("should enforce strict validation", () => {
    const result = validateScore(75.5, { strictMode: true });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss eine ganze Zahl sein");
  });

  it("should apply bonus points correctly", () => {
    const result = validateScore(85, { bonusCategories: ["sports", "music"] });
    expect(result.score).toBe(89);
    expect(result.grade).toBe("B");
  });

  it("should pass/fail based on custom passing score", () => {
    const result = validateScore(58, { passingScore: 55 });
    expect(result.passed).toBe(true);
  });

  it("should handle edge cases at grade boundaries", () => {
    expect(validateScore(90).grade).toBe("A");
    expect(validateScore(80).grade).toBe("B");
    expect(validateScore(70).grade).toBe("C");
    expect(validateScore(60).grade).toBe("D");
    expect(validateScore(59).grade).toBe("F");
  });
});
''