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

// Wrapper to call the secure backend API with fallback
const rollDiceAPIWrapper = async (diceType, quantity) => {
  try {
    // Create dice quantities object with only the requested die type
    const diceQuantities = {
      d4: 0,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 0,
      d20: 0,
      d100: 0,
      [diceType]: quantity,
    };

    // Call the secure backend API
    const response = await rollDiceAPI(diceQuantities);

    // Return the roll result
    return response.rolls[0];
  } catch (error) {
    console.warn('API call failed, using fallback:', error.message);
    return fallbackRoll(diceType, quantity);
  }
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
      rollPromises.push(rollDiceAPIWrapper(diceType, quantity));
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
