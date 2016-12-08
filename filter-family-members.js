var route = ['L2', 'L5', 'L5', 'R5', 'L2', 'L4', 'R1', 'R1', 'L4', 'R2', 'R1', 'L1', 'L4', 'R1', 'L4', 'L4', 'R5', 'R3', 'R1', 'L1', 'R1', 'L5', 'L1', 'R5', 'L4', 'R2', 'L5', 'L3', 'L3', 'R3', 'L3', 'R4', 'R4', 'L2', 'L5', 'R1', 'R2', 'L2', 'L1', 'R3', 'R4', 'L193', 'R3', 'L5', 'R45', 'L1', 'R4', 'R79', 'L5', 'L5', 'R5', 'R1', 'L4', 'R3', 'R3', 'L4', 'R185', 'L5', 'L3', 'L1', 'R5', 'L2', 'R1', 'R3', 'R2', 'L3', 'L4', 'L2', 'R2', 'L3', 'L2', 'L2', 'L3', 'L5', 'R3', 'R4', 'L5', 'R1', 'R2', 'L2', 'R4', 'R3', 'L4', 'L3', 'L1', 'R3', 'R2', 'R1', 'R1', 'L3', 'R4', 'L5', 'R2', 'R1', 'R3', 'L3', 'L2', 'L2', 'R2', 'R1', 'R2', 'R3', 'L3', 'L3', 'R4', 'L4', 'R4', 'R4', 'R4', 'L3', 'L1', 'L2', 'R5', 'R2', 'R2', 'R2', 'L4', 'L3', 'L4', 'R4', 'L5', 'L4', 'R2', 'L4', 'L4', 'R4', 'R1', 'R5', 'L2', 'L4', 'L5', 'L3', 'L2', 'L4', 'L4', 'R3', 'L3', 'L4', 'R1', 'L2', 'R3', 'L2', 'R1', 'R2', 'R5', 'L4', 'L2', 'L1', 'L3', 'R2', 'R3', 'L2', 'L1', 'L5', 'L2', 'L1', 'R4'];

var getDist = function (route) {
  var numVisits = {};
  var pos = [0, 0];
  var facing = 'north';
  var numSteps;
  for (var i = 0; i < route.length; i++) {
    facing = getDirection(facing, route[i][0]);
    numSteps = +route[i].split('').splice(1).join('');
    pos = calcPos(pos, facing, numSteps);
  }
  return {
    pos: pos,
    dist: Math.abs(pos[0]) + Math.abs(pos[1])
  };
};

var calcPos = function (pos, facing, numSteps) {
  if (facing === 'north') {
    pos[1] += numSteps;
  }
  if (facing === 'south') {
    pos[1] -= numSteps;
  }
  if (facing === 'west') {
    pos[0] -= numSteps;
  }
  if (facing === 'east') {
    pos[0] += numSteps;
  }
  return pos;
}

var getDirection = function (facing, leftOrRight) {
  if (facing === 'north') {
    if (leftOrRight === 'L') {
      return 'west';
    } else if (leftOrRight === 'R') {
      return 'east';
    }
  }

  if (facing === 'west') {
    if (leftOrRight === 'L') {
      return 'south';
    } else if (leftOrRight === 'R') {
      return 'north';
    }
  }

  if (facing === 'south') {
    if (leftOrRight === 'L') {
      return 'east';
    } else if (leftOrRight === 'R') {
      return 'west';
    }
  }

  if (facing === 'east') {
    if (leftOrRight === 'L') {
      return 'north';
    } else if (leftOrRight === 'R') {
      return 'south';
    }

  }
};