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
		[1,1,1,1,1,2,1,1,1,1,1,1],
		[1,1,1,5,2,0,2,5,1,1,1,1],
		[1,1,1,1,1,2,1,1,1,1,1,1],
		[1,1,1,1,1,5,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 5,
		"direction": 0,
		"life": 65535,
		"speed": 3,
		"soft": false
	},
	"hint": "赤いマスでは下を向いていないとダメだよ",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "赤は下",
		"previous": "",
		"next": "",
		"genurl": "https://kondoumasaki.github.io/create-robot-mondai/q-red-down/render.html"
	},
	"useMapPreProcess": false,
	"preProcessDescriptions": [],	// [ { "c": char, "d": str }, ... ]
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
	if ((Map.prototype.map[pos.y][pos.x] == 2) && (pos.direction != 2)) {
		for (let i = 0; i < 12; i++) {
			for (let j = 0; j < 12; j++) {
				if (Map.prototype.map[i][j] == 5) {
					Map.prototype.map[i][j] = 1;
				}
			}
		}
	}
};
