var Map = function() {
};
Map.prototype = 
// %%=start
{
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,5,1,1,1,1,1,1],
		[1,1,1,1,1,'A',1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,0,0,0,1,1,1,1,1],
		[1,1,1,0,0,0,0,0,1,1,1,1],
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
		"soft": false
	},
	// %goals% : ゴール数
	// %state% : stateの値
	// %statecolor% : stateの値を色にする
	// %statedirection% : stateの値を方向にする
	"hint": "10 マス以上乗ってからゴールへ行こう",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "10 マス以上",
		"previous": "",
		"next": "",
		"genurl": "https://kondoumasaki.github.io/create-robot-mondai/q-move-at-least-10/render.html"
	},
	"useMapPreProcess": true,
	"preProcessDescriptions": [
		{ "c": 'A', "d": '10 マス以上乗ったかを調べる赤いマス'}
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
	Map.prototype.pcords = [];
	const pcords = Map.prototype.pcords;
	
	const map = Map.prototype.map;
	
	pmaps.push([]);
	for (let i = 0; i < 12; i++) {
		const row = [];
		for (let j = 0; j < 12; j++) {
			const v = map[i][j];
			if (isNaN(v)) {
				if (v.toLowerCase() == 'a') {
					row.push(2);
					pcords.push( { "y": i, "x": j, "v": 'a' } );
				}
				else {
					row.push(0);
				}
			}
			else {
				row.push(parseInt(v));
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
	const cords = Map.prototype.pcords;
	for (let k = cords.length - 1; k >= 0; k--) {
		const cord = cords[k];
		if ((cord.x == pos.x) && (cord.y == pos.y)) {
			// 判定
			const none = Map.prototype.image_file_dir+'none.png';
			let count = 0;
			for (let i = 0; i < 12; i++) {
				for (let j = 0; j < 12; j++) {
					const attr = document.getElementById('map_'+i+'_'+j).getElementsByTagName('img')[0].getAttribute('src');
					if (attr != none) {
						count++;
					}
				}
			}
			if (count < 10) {
				const map = Map.prototype.map;
				for (let i = 0; i < 12; i++) {
					for (let j = 0; j < 12; j++) {
						if (map[i][j] == 5) {
							map[i][j] = 1;
						}
					}
				}
			}
		}		
	}
};
