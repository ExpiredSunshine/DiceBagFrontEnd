// Simulated API call for dice rolling
const rollDiceAPI = async (diceType, quantity) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // For now, use Math.random() to generate results
  // Later this will be replaced with actual API call
  const results = [];
  const maxValue = getMaxValue(diceType);

  for (let i = 0; i < quantity; i++) {
    const roll = Math.floor(Math.random() * maxValue) + 1;
    results.push(roll);
  }

  return {
    diceType,
    quantity,
    results,
    total: results.reduce((sum, roll) => sum + roll, 0),
    timestamp: new Date().toISOString(),
  };
};

// Get max value for each die type
const getMaxValue = diceType => {
  const diceValues = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100,
  };

  return diceValues[diceType] || 6;
};

// Main rolling function
export const rollDice = async diceQuantities => {
  const rollPromises = [];
  const diceTypes = Object.keys(diceQuantities);

  // Create promises for each die type that has quantity > 0
  diceTypes.forEach(diceType => {
    const quantity = diceQuantities[diceType];
    if (quantity > 0) {
      rollPromises.push(rollDiceAPI(diceType, quantity));
    }
  });

  // Wait for all rolls to complete
  const results = await Promise.all(rollPromises);

  // Calculate grand total
  const grandTotal = results.reduce((sum, result) => sum + result.total, 0);

  return {
    rolls: results,
    grandTotal,
    timestamp: new Date().toISOString(),
  };
};

// Format roll results for display
export const formatRollResults = rollData => {
  if (!rollData || !rollData.rolls) return [];

  return rollData.rolls.map(roll => ({
    diceType: roll.diceType.toUpperCase(),
    quantity: roll.quantity,
    results: roll.results,
    total: roll.total,
    displayText: `${roll.quantity}D${getMaxValue(roll.diceType)}: ${roll.results.join(', ')} = ${roll.total}`,
  }));
};
