//Background color
export const BACKGROUND = 'rgb(204, 202, 187)';

//Colors
export const BLACK = 'rgb(0, 0, 0)';
export const GREEN = 'rgb(16, 250, 54)';
export const ORANGE = 'rgb(250, 150, 15)';
export const RED = 'rgb(250, 16, 16)';
export const BLUE = 'rgb(16, 63, 250)';
export const YELLOW = 'rgb(241, 250, 16)';
export const WHITE = 'rgb(255, 255, 255)';

export const colors = [GREEN,ORANGE,RED,BLUE,YELLOW,WHITE];

export const edges = new Map();
edges.set([WHITE, BLUE], 'AQ');
edges.set([WHITE, ORANGE], 'DE');
edges.set([WHITE, GREEN], 'CI');
edges.set([WHITE, RED], 'BM');
edges.set([YELLOW, ORANGE], 'XG');
edges.set([YELLOW, GREEN], 'UK');
edges.set([YELLOW, RED], 'VO');
edges.set([YELLOW, BLUE], 'WS');
edges.set([ORANGE, BLUE], 'HR');
edges.set([ORANGE, GREEN], 'FL');
edges.set([GREEN, RED], 'JP');
edges.set([RED, BLUE], 'NT');

export const edges_key_list = Array.from(edges.keys());

export const corners = new Map();
corners.set([WHITE, ORANGE, GREEN], 'DFI');
corners.set([WHITE, ORANGE, BLUE], 'AER');
corners.set([WHITE, GREEN, RED], 'CJM');
corners.set([WHITE, RED, BLUE], 'BNQ');
corners.set([YELLOW, GREEN, ORANGE], 'ULG');
corners.set([YELLOW, GREEN, RED], 'VKP');
corners.set([YELLOW, RED, BLUE], 'WOT');
corners.set([YELLOW, ORANGE, BLUE], 'XHS');


export const corners_key_list = Array.from(corners.keys());