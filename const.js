//Background color
const BACKGROUND = (223,220,204);

//Colors
const BLACK= (0,0,0);

const GREEN = (16,250,54);
const ORANGE = (250,150,15);
const RED = (250,16,16);
const BLUE = (16,63,250);
const YELLOW = (241,250,16);
const WHITE = (255,255,255);

const colors = [GREEN,ORANGE,RED,BLUE,YELLOW,WHITE];

const edges = new Map();
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



//const edges_list = list(edges.items())

const corners = new Map();
corners.set([WHITE, ORANGE, GREEN], 'DFI');
corners.set([WHITE, ORANGE, BLUE], 'AER');
corners.set([WHITE, GREEN, RED], 'CJM');
corners.set([WHITE, RED, BLUE], 'BNQ');
corners.set([YELLOW, GREEN, ORANGE], 'ULG');
corners.set([YELLOW, GREEN, RED], 'VKP');
corners.set([YELLOW, RED, BLUE], 'WOT');
corners.set([YELLOW, ORANGE, BLUE], 'XHS');


//const corners_list = list(corners.items())

/*
//Window size
const width,height
width, height = 500,300*/
