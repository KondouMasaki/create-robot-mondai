var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,'B',1,'C',1,1,1,1,1],
		[1,1,1,1,5,1,5,1,1,1,1,1],
		[1,1,1,1,'D',1,'E',1,1,1,1,1],
		[1,1,1,1,0,'A',0,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 6,
		"direction": 0,
		"life": 65535,
		"speed": 1,
		"soft": false
	},
	// %goals% : ゴール数
	// %state% : stateの値
	// %statecolor% : stateの値を色にする
	// %statedirection% : stateの値を方向にする
	"hint": "マスの色を調べてゴールへ行こう",
	"state": 0,
	"goals": 1,
	"patterns": 2,
	"blocksLimit": 0,
	"links": {
		"question": "マスの色",
		"previous": "",
		"next": "",
		"genurl": "https://kondoumasaki.github.io/create-robot-mondai/q-colors/render.html"
	},
	"useMapPreProcess": true,
	"preProcessDescriptions": [
		{ "c": 'A', "d": 'パターン 1 なら 2、パターン 2 なら 3' },
		{ "c": 'B', "d": 'パターン 1 なら 2、パターン 2 なら 0' },
		{ "c": 'C', "d": 'パターン 1 なら 0、パターン 2 なら 3' },
		{ "c": 'D', "d": 'パターン 1 なら 0、パターン 2 なら 1' },
		{ "c": 'E', "d": 'パターン 1 なら 1、パターン 2 なら 0' },
	],	// [ { "c": char, "d": str }, ... ]
	"robot": {
		"type": 2,
		"Basic": {
			"forward": true,
			"turn_right": true,
			"turn_left": true,
			"nop": true
		},
		"Standard": {
			"floor_color_is": true,
			"robot_direction_is": false,
			"movable_is": false
		},
		"Advanced": {
			"times_loop": true,
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
	pmaps.push([]);
	
	const map = Map.prototype.map;
	for (let i = 0; i < 12; i++) {
		const row1 = [];
		const row2 = [];
		for (let j = 0; j < 12; j++) {
			const v = map[i][j];
			if (isNaN(v)) {
				switch(v.toLowerCase()) {
					case 'a':
						row1.push(2);
						row2.push(3);
						break;
					case 'b':
						row1.push(2);
						row2.push(0);
						break;
					case 'c':
						row1.push(0);
						row2.push(3);
						break;
					case 'd':
						row1.push(0);
						row2.push(1);
						break;
					case 'e':
						row1.push(1);
						row2.push(0);
						break;
				}
			}
			else {
				row1.push(v);
				row2.push(v);
			}
		}
		pmaps[0].push(row1);
		pmaps[1].push(row2);
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
};
