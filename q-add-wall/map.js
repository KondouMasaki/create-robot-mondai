var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,'J',0,0,0,5,0,0,0,0,0,1],
		[1,'I',0,0,0,0,0,0,0,0,0,1],
		[1,'H',0,0,0,0,0,0,0,0,0,1],
		[1,'G',0,0,0,0,0,0,0,0,0,1],
		[1,'F',0,0,0,0,0,0,0,0,0,1],
		[1,'E',0,0,0,0,0,0,0,0,0,1],
		[1,'D',0,0,0,0,0,0,0,0,0,1],
		[1,'C',0,0,0,0,0,0,0,0,0,1],
		[1,'B',0,0,0,0,0,0,0,0,0,1],
		[1,'A',0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 10,
		"direction": 0,
		"life": 65535,
		"speed": 1,
		"soft": false
	},
	// %goals% : ゴール数
	// %state% : stateの値
	// %statecolor% : stateの値を色にする
	// %statedirection% : stateの値を方向にする
	"hint": "ゴールへ行こう、間に合うかな",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "ふえるカベ",
		"previous": "",
		"next": "",
		"genurl": "https://kondoumasaki.github.io/create-robot-mondai/q-add-wall/render.html"
	},
	"useMapPreProcess": true,
	"preProcessDescriptions": [
		{ "c": 'A', "d": 'はじめは 0 で、3 ターン目に 1 になる' },
		{ "c": 'B', "d": 'はじめは 0 で、4 ターン目に 1 になる' },
		{ "c": 'C', "d": 'はじめは 0 で、5 ターン目に 1 になる' },
		{ "c": 'D', "d": 'はじめは 0 で、6 ターン目に 1 になる' },
		{ "c": 'E', "d": 'はじめは 0 で、7 ターン目に 1 になる' },
		{ "c": 'F', "d": 'はじめは 0 で、8 ターン目に 1 になる' },
		{ "c": 'G', "d": 'はじめは 0 で、9 ターン目に 1 になる' },
		{ "c": 'H', "d": 'はじめは 0 で、10 ターン目に 1 になる' },
		{ "c": 'I', "d": 'はじめは 0 で、11 ターン目に 1 になる' },
		{ "c": 'J', "d": 'はじめは 0 で、12 ターン目に 1 になる' },
		{ "c": 'K', "d": 'はじめは 0 で、13 ターン目に 1 になる' },
		{ "c": 'L', "d": 'はじめは 0 で、14 ターン目に 1 になる' },
		{ "c": 'M', "d": 'はじめは 0 で、15 ターン目に 1 になる、N から Z も同じ' },
		{ "c": 'N', "d": '' },
		{ "c": 'O', "d": '' },
		{ "c": 'P', "d": '' },
		{ "c": 'Q', "d": '' },
		{ "c": 'R', "d": '' },
		{ "c": 'S', "d": '' },
		{ "c": 'T', "d": '' },
		{ "c": 'U', "d": '' },
		{ "c": 'V', "d": '' },
		{ "c": 'W', "d": '' },
		{ "c": 'X', "d": '' },
		{ "c": 'Y', "d": '' },
		{ "c": 'Z', "d": '' },
	],	// [ { "c": char, "d": str }, ... ]
	"robot": {
		"type": 0,
		"Basic": {
			"forward": true,
			"turn_right": true,
			"turn_left": true,
			"nop": true
		},
		"Standard": {
			"floor_color_is": false,
			"robot_direction_is": false,
			"movable_is": false
		},
		"Advanced": {
			"times_loop": false,
			"floor_color_loop": false,
			"movable_loop": false
		},
		"Expert": {
			"write_register": true,
			"read_register": true,
			"get_floor_color": true,
			"get_direction": true
		},
		"Enhanced": {
			"values_equal_is": true,
			"values_equal_loop": true,
			"infinity_loop": true,
			"is_movable_to": true
		},
		"Superior": {
			"add_register": true,
			"sub_register": true,
			"add_register_index": true,
			"sub_register_index": true,
			"set_register_index": true,
			"get_register_index": true
		},
		"Replete": {
			"read_cell_value": true,
			"read_cell_value_index": true,
			"write_cell_value": true,
			"values_compare": true,
			"expression_if": true,
			"expression_loop": true
		},
		"Master": {
		}
	},
	"chars": [
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
	],
	"hintBlocks": '',
	"map2": [],
	"chars2": [],
	"pmaps": [],	// [ <map>, ... ]
	"pcords": [],	// [ { "y": num, "x": num, "v": str }, ... ]
	
	"image_file_dir": '../img/'
}
// end=%%
;

/**
 * マップに数字以外の場合を埋め込んだ場合のプリプロセス
 */
Map.prototype.mapPreProcess = function() {
	// set map values to Map.prototype.pmaps[i], Map.prototype.pcords
	Map.prototype.pmaps = [];
	const pmaps = Map.prototype.pmaps;
	pmaps.push([]);
	
	Map.prototype.pcords = [];
	const pcords = Map.prototype.pcords;
	
	for (let i = 0; i < 12; i++) {
		const row = [];
		for (let j = 0; j < 12; j++) {
			const v = Map.prototype.map[i][j];
			if (isNaN(v)) {
				const t = v.toLowerCase();
				switch(t) {
					case 'a':
					case 'b':
					case 'c':
					case 'd':
					case 'e':
					case 'f':
					case 'g':
					case 'h':
					case 'i':
					case 'j':
					case 'k':
					case 'l':
					case 'm':
					case 'n':
					case 'o':
					case 'p':
					case 'q':
					case 'r':
					case 's':
					case 't':
					case 'u':
					case 'v':
					case 'w':
					case 'x':
					case 'y':
					case 'z':
						pcords.push( { "y": i, "x": j, "v": t } );
						row.push(0);
						break;
						break;
				}
			}
			else {
				row.push(v);
			}
		}
		pmaps[0].push(row);
	}
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	// if pettern is <empty string> selected "ぜんぶ"
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	// t is turns value, pos is robot info { "x": num, "y": num, "direction": num }
	const asc = t + 94;	// t = 2 -> a
	if (t > 122) {
		return;
	}
	const c = String.fromCharCode(asc);
	const cords = Map.prototype.pcords;
	for (let i = cords.length - 1; i >= 0; i--) {
		const cord = cords[i];
		if (cord.v == c) {
			Map.prototype.map[cord.y][cord.x] = 1;
		}
	}
};
