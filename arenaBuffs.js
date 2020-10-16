const templates = {
  weight: {
    key: 'weight',
    name: 'Weight',
    type: 'number',
    buff: null
  }, health: {
    key: 'health',
    name: 'Health',
    type: 'number',
    buff: {
      mode: 'add',
      amount: 350
    }
  }, eneCap: {
    key: 'eneCap',
    name: 'Energy Capacity',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, eneReg: {
    key: 'eneReg',
    name: 'Energy Regeneration',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, heaCap: {
    key: 'heaCap',
    name: 'Heat Capacity',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, heaCol: {
    key: 'heaCol',
    name: 'Cooling',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, phyRes: {
    key: 'phyRes',
    name: 'Physical Resistance',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.4
    }
  }, expRes: {
    key: 'expRes',
    name: 'Explosive Resistance',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.4
    }
  }, eleRes: {
    key: 'eleRes',
    name: 'Electric Resistance',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.4
    }
  }, phyDmg: {
    key: 'phyDmg',
    name: 'Physical Damage',
    type: 'range',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, phyResDmg: {
    key: 'phyResDmg',
    name: 'Physical Resistance Damage',
    type: 'number',
    buff: null
  }, eleDmg: {
    key: 'eleDmg',
    name: 'Electric Damage',
    type: 'range',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, eneDmg: {
    key: 'eneDmg',
    name: 'Energy Damage',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, eneCapDmg: {
    key: 'eneCapDmg',
    name: 'Energy Capacity Damage',
    type: 'number',
    buff: null
  }, eneRegDmg: {
    key: 'eneRegDmg',
    name: 'Energy Regeneration Damage',
    type: 'number',
    buff: null
  }, eleResDmg: {
    key: 'eleResDmg',
    name: 'Electric Resistance Damage',
    type: 'number',
    buff: null
  }, expDmg: {
    key: 'expDmg',
    name: 'Explosive Damage',
    type: 'range',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, heaDmg: {
    key: 'heaDmg',
    name: 'Heat Damage',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 1.2
    }
  }, heaCapDmg: {
    key: 'heaCapDmg',
    name: 'Heat Capacity Damage',
    type: 'number',
    buff: null
  }, heaColDmg: {
    key: 'heaColDmg',
    name: 'Cooling Damage',
    type: 'number',
    buff: null
  }, expResDmg: {
    key: 'expResDmg',
    name: 'Explosive Resistance Damage',
    type: 'number',
    buff: null
  }, walk: {
    key: 'walk',
    name: 'Walking Distance',
    type: 'number',
    buff: null
  }, jump: {
    key: 'jump',
    name: 'Jumping Distance',
    type: 'number',
    buff: null
  }, range: {
    key: 'range',
    name: 'Range',
    type: 'range',
    buff: null
  }, push: {
    key: 'push',
    name: 'Knockback',
    type: 'number',
    buff: null
  }, pull: {
    key: 'pull',
    name: 'Pull',
    type: 'number',
    buff: null
  }, recoil: {
    key: 'recoil',
    name: 'Recoil',
    type: 'number',
    buff: null
  }, advance: {
    key: 'advance',
    name: 'Advance',
    type: 'number',
    buff: null
  }, retreat: {
    key: 'retreat',
    name: 'Retreat',
    type: 'number',
    buff: null
  }, uses: {
    key: 'uses',
    name: 'Uses',
    type: 'number',
    buff: null
  }, backfire: {
    key: 'backfire',
    name: 'Backfire',
    type: 'number',
    buff: {
      mode: 'mul',
      amount: 0.8
    }
  }, heaCost: {
    key: 'heaCost',
    name: 'Heat Generation',
    type: 'number',
    buff: null
  }, eneCost: {
    key: 'eneCost',
    name: 'Energy Consumption',
    type: 'number',
    buff: null
  }
}


class BuffMethods
{
  static add (value, buffAmount) {
    return value + buffAmount;
  }

  static mul (value, buffAmount) {
    return value * buffAmount;
  }
}


module.exports = (key, value) => {

  if (!templates.hasOwnProperty(key)) {
    console.warn(`Unknown stat key '${key}'.\nReturning 0 for safety.`);
    return 0;
  }

  const template = templates[key];

  if (template.buff === null) {
    // Can't apply buffs to this stat
    return value;
  }

  const buffingMethod = BuffMethods[template.buff.mode];

  if (typeof value === 'number') {
    return buffingMethod(value, template.buff.amount);
  }
  
  if (Array.isArray(value)) {
    return value.map(x => buffingMethod(x));
  }

  console.warn(`Got invalid value to buff: ${value}.\nReturning 0 for safety.`);
  return 0;
};
