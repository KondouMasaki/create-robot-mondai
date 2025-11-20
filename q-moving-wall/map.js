var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,5,1,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,'A','B','C',1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 7,
		"direction": 0,
		"life": 65535,
		"speed": 1,
		"soft": true
	},
	// %goals% : ゴール数
	// %state% : stateの値
	// %statecolor% : stateの値を色にする
	// %statedirection% : stateの値を方向にする
	"hint": "カベにぶつからないようにゴールへ行こう",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "動くカベ",
		"previous": "",
		"next": "",
		"genurl": "https://kondoumasaki.github.io/create-robot-mondai/q-moving-wall/render.html"
	},
	"useMapPreProcess": true,
	"preProcessDescriptions": [
		{ "c": 'A', "d": '1 → 0 → 0 のじゅんでくり返す' },
		{ "c": 'B', "d": '0 → 1 → 0 のじゅんでくり返す' },
		{ "c": 'C', "d": '0 → 0 → 1 のじゅんでくり返す' },
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
			"floor_color_is": false,
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
	
	Map.prototype.pcords = [];
	const pcords = Map.prototype.pcords;
	
	const map = Map.prototype.map;
	const rows = map.length;
	for (let i = 0; i < rows; i++) {
		const r = [];
		for (let j = 0; j < 12; j++) {
			const v = map[i][j];
			if (isNaN(v)) {
				const lv = v.toLowerCase();
				switch(lv) {
					case 'a':
						r.push(1);
						break;
					case 'b':
						r.push(0);
						break;
					case 'c':
						r.push(0);
						break;
				}
				pcords.push({ "y": i, "x": j, "v": lv });
			}
			else {
				r.push(v);
			}
		}
		pmaps[0].push(r);
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
	const tn = t % 3;
	
	const ptn = { "a": 1, "b": 0, "c": 0 };
	switch(tn) {
		case 0:
			break;
		case 1:
			ptn.a = 0;
			ptn.b = 1;
			break;
		case 2:
			ptn.a = 0;
			ptn.c = 1;
			break;
	}
	const cords = Map.prototype.pcords;
	for (let i = cords.length - 1; i >= 0; i--) {
		const cord = cords[i];
		Map.prototype.map[cord.y][cord.x] = ptn[cord.v];
	}
};
