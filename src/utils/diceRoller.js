import { rollDiceAPI } from '../api/diceApi';

// Fallback random generation when API fails
const fallbackRoll = (diceType, quantity) => {
  console.warn('Using fallback random generation due to API failure');

  const maxValue = getMaxValue(diceType);
  const results = [];

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
    fallback: true,
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
  try {
    // Call the secure backend API directly
    const response = await rollDiceAPI(diceQuantities);
    return response;
  } catch (error) {
    console.warn('API call failed, using fallback:', error.message);

    // Fallback: generate results locally for each die type
    const results = [];
    let grandTotal = 0;

    for (const [diceType, quantity] of Object.entries(diceQuantities)) {
      if (quantity > 0) {
        const fallbackResult = fallbackRoll(diceType, quantity);
        results.push(fallbackResult);
        grandTotal += fallbackResult.total;
      }
    }

    return {
      rolls: results,
      grandTotal,
      timestamp: new Date().toISOString(),
    };
  }
};

// Format roll results for display
export const formatRollResults = rollData => {
  if (!rollData || !rollData.rolls || !Array.isArray(rollData.rolls)) return [];

  return rollData.rolls
    .map(roll => {
      if (!roll || typeof roll !== 'object') return null;

      return {
        diceType: (roll.diceType || 'D6').toUpperCase(),
        quantity: roll.quantity || 0,
        results: Array.isArray(roll.results) ? roll.results : [],
        total: roll.total || 0,
        displayText: `${roll.quantity || 0}D${getMaxValue(roll.diceType)}: ${Array.isArray(roll.results) ? roll.results.join(', ') : ''} = ${roll.total || 0}`,
        fallback: Boolean(roll.fallback),
      };
    })
    .filter(Boolean); // Remove any null entries
};
