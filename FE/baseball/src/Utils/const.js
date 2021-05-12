export const BLANK = '';

// style

export const BLOCK = 'block';
export const NONE = 'none';
export const FLEX = 'flex';

// String

export const HOME_TITLE = "Team Illy'swing BASEBALL";
export const MATCH_INFO_TITLE = '⚾ Choose the Game ⚾︎';
export const GAME = 'Game';
export const PLAYER = 'Player';

// url

export const BACKGROUND_URL =
  'https://upload.wikimedia.org/wikipedia/commons/8/80/Munhak_baseball_stadium_2012.png';

// etc

export const defaultInning = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const baseRunner = {
  R0: [false, false, false],
  R1: [true, false, false],
  R2: [false, true, false],
  R3: [false, false, true],
  R12: [true, true, false],
  R23: [false, true, true],
  R13: [true, false, true],
  R123: [true, true, true],
};

export const gameDisplayTable = {
  H: {
    R0: {
      base: baseRunner.R1,
      score: 0,
    },
    R1: {
      base: baseRunner.R12,
      score: 0,
    },
    R2: {
      base: baseRunner.R13,
      score: 0,
    },
    R3: {
      base: baseRunner.R1,
      score: 1,
    },
    R12: {
      base: baseRunner.R123,
      score: 0,
    },
    R23: {
      base: baseRunner.R13,
      score: 1,
    },
    R13: {
      base: baseRunner.R12,
      score: 1,
    },
    R123: {
      base: baseRunner.R123,
      score: 1,
    },
  },
  D: {
    R0: {
      base: baseRunner.R2,
      score: 0,
    },
    R1: {
      base: baseRunner.R23,
      score: 0,
    },
    R2: {
      base: baseRunner.R2,
      score: 1,
    },
    R3: {
      base: baseRunner.R2,
      score: 1,
    },
    R12: {
      base: baseRunner.R23,
      score: 1,
    },
    R23: {
      base: baseRunner.R2,
      score: 2,
    },
    R13: {
      base: baseRunner.R23,
      score: 1,
    },
    R123: {
      base: baseRunner.R23,
      score: 2,
    },
  },
  T: {
    R0: {
      base: baseRunner.R3,
      score: 0,
    },
    R1: {
      base: baseRunner.R1,
      score: 1,
    },
    R2: {
      base: baseRunner.R3,
      score: 1,
    },
    R3: {
      base: baseRunner.R3,
      score: 1,
    },
    R12: {
      base: baseRunner.R3,
      score: 2,
    },
    R23: {
      base: baseRunner.R3,
      score: 2,
    },
    R13: {
      base: baseRunner.R3,
      score: 2,
    },
    R123: {
      base: baseRunner.R3,
      score: 3,
    },
  },
  HR: {
    R0: {
      base: baseRunner.R0,
      score: 1,
    },
    R1: {
      base: baseRunner.R0,
      score: 2,
    },
    R2: {
      base: baseRunner.R0,
      score: 2,
    },
    R3: {
      base: baseRunner.R0,
      score: 2,
    },
    R12: {
      base: baseRunner.R0,
      score: 3,
    },
    R23: {
      base: baseRunner.R0,
      score: 3,
    },
    R13: {
      base: baseRunner.R0,
      score: 3,
    },
    R123: {
      base: baseRunner.R0,
      score: 4,
    },
  },
  B4: {
    R0: {
      base: baseRunner.R1,
      score: 0,
    },
    R1: {
      base: baseRunner.R12,
      score: 0,
    },
    R2: {
      base: baseRunner.R12,
      score: 0,
    },
    R3: {
      base: baseRunner.R13,
      score: 0,
    },
    R12: {
      base: baseRunner.R123,
      score: 0,
    },
    R23: {
      base: baseRunner.R123,
      score: 0,
    },
    R13: {
      base: baseRunner.R123,
      score: 0,
    },
    R123: {
      base: baseRunner.R123,
      score: 1,
    },
  },
};

export const hitterAction = {
  HIT: 'HIT',
  DOUBLE: 'DOUBLE',
  TRIPLE: 'TRIPLE',
  HR: 'HR',
  B4: 'B4',
};

export const initialBaseState = {
  first: {
    position: `first`,
    runner: 0,
    isRunner: false,
  },
  second: {
    position: `second`,
    runner: 0,
    isRunner: false,
  },
  third: {
    position: `third`,
    runner: 0,
    isRunner: false,
  },
};

export const baseStatement = [
  {
    player: null,
    isRunner: false,
  },
  {
    player: null,
    isRunner: false,
  },
  {
    player: null,
    isRunner: false,
  },
];
