//This probably does not work due to something setup with npm? Do I need a package.json?

const outcomes = {
    'rock': { 'rock': 'draw', 'paper': 'lose', 'scissors': 'win' },
    'paper': { 'rock': 'win', 'paper': 'draw', 'scissors': 'lose' },
    'scissors': { 'rock': 'lose', 'paper': 'win', 'scissors': 'draw' }
};

export {outcomes};