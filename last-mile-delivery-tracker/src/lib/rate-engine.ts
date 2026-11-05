export function calculateVolumetricWeight(l: number, b: number, h: number): number {
  return (l * b * h) / 5000;
}

export function calculateCharge(
  actualWeight: number,
  volumetricWeight: number,
  baseRate: number,
  weightRate: number,
  codSurcharge: number,
  paymentType: "PREPAID" | "COD"
): { billedWeight: number; totalCharge: number } {
  const billedWeight = Math.max(actualWeight, volumetricWeight);
  
  // Base rate applies to the base condition (e.g. first 1kg or flat fee).
  // Assuming base rate covers first 1 kg, and weightRate is for additional weight.
  // Wait, the spec says "bills on higher of actual vs volumetric weight, applies zone rate from correct rate card, and adds COD surcharge if applicable".
  // Let's assume rate = baseRate + (billedWeight * weightRate).
  
  let totalCharge = baseRate + (billedWeight * weightRate);
  
  if (paymentType === "COD") {
    totalCharge += codSurcharge;
  }
  
  return { billedWeight, totalCharge };
}
