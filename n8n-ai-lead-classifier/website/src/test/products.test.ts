import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/lib/site-data";

const priceOf = (name: string) => PRODUCTS.find((p) => p.name === name)?.price;

describe("Bread prices (₹)", () => {
  it("Classic Sourdough is ₹180", () => expect(priceOf("Classic Sourdough")).toBe(180));
  it("Whole Wheat Bread is ₹90", () => expect(priceOf("Whole Wheat Bread")).toBe(90));
  it("Multigrain Bread is ₹130", () => expect(priceOf("Multigrain Bread")).toBe(130));
  it("Golden Brioche is ₹160", () => expect(priceOf("Golden Brioche")).toBe(160));
  it("Classic White Bread is ₹75", () => expect(priceOf("Classic White Bread")).toBe(75));
  it("Garlic Herb Bread is ₹150", () => expect(priceOf("Garlic Herb Bread")).toBe(150));
});
