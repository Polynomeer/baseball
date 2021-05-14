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

export const initialBaseList = [];

export const initialRunnerState = {
  base: 0,
  player: null,
};
export const playDelayTime = 1000;

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
