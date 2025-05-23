! function (e) {
	function t(o) {
		if (r[o]) return r[o].exports;
		var i = r[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
	}
	var r = {};
	return t.m = e, t.c = r, t.p = "", t(0)
}([function (e, t) {
	if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
	AFRAME.registerComponent("environment", {
		schema: {
			active: {
				default: !1
			},
			preset: {
				default: "default",
				oneOf: ["none", "default", "contact", "egypt", "checkerboard", "forest", "goaland", "yavapai", "goldmine", "arches", "threetowers", "poison", "tron", "japan", "dream", "volcano", "starry", "osiris"]
			},
			seed: {
				type: "int",
				default: 1,
				min: 0,
				max: 1e3
			},
			skyType: {
				default: "color",
				oneOf: ["none", "color", "gradient", "atmosphere"]
			},
			skyColor: {
				type: "color"
			},
			horizonColor: {
				type: "color"
			},
			lighting: {
				default: "distant",
				oneOf: ["none", "distant", "point"]
			},
			shadow: {
				default: !1
			},
			shadowSize: {
				default: 10
			},
			lightPosition: {
				type: "vec3",
				default: {
					x: 0,
					y: 1,
					z: -.2
				}
			},
			fog: {
				type: "float",
				default: 0,
				min: 0,
				max: 1
			},
			flatShading: {
				default: !1
			},
			playArea: {
				type: "float",
				default: 1,
				min: .5,
				max: 10
			},
			stageSize: {
				type: "number",
				default: 200,
				min: 1,
				max: 2e4
			},
			ground: {
				default: "hills",
				oneOf: ["none", "flat", "hills", "canyon", "spikes", "noise"]
			},
			groundYScale: {
				type: "float",
				default: 3,
				min: 0,
				max: 50
			},
			groundTexture: {
				default: "none",
				oneOf: ["none", "checkerboard", "squares", "walkernoise"]
			},
			groundColor: {
				type: "color",
				default: "#553e35"
			},
			groundColor2: {
				type: "color",
				default: "#694439"
			},
			groundDensity: {
				type: "number",
				default: 64,
				min: 8,
				max: 1024
			},
			groundFrequency: {
				type: "number",
				default: 10,
				min: .1,
				max: 1e3
			},
			dressing: {
				default: "none",
				oneOf: ["none", "cubes", "pyramids", "cylinders", "hexagons", "stones", "trees", "mushrooms", "towers", "apparatus", "arches", "torii"]
			},
			dressingAmount: {
				type: "int",
				default: 10,
				min: 0,
				max: 1e3
			},
			dressingColor: {
				type: "color",
				default: "#795449"
			},
			dressingScale: {
				type: "float",
				default: 5,
				min: 0,
				max: 100
			},
			dressingVariance: {
				type: "vec3",
				default: {
					x: 1,
					y: 1,
					z: 1
				}
			},
			dressingUniformScale: {
				default: !0
			},
			dressingOnPlayArea: {
				type: "float",
				default: 0,
				min: 0,
				max: 1
			},
			grid: {
				default: "none",
				oneOf: ["none", "1x1", "2x2", "crosses", "dots", "xlines", "ylines"]
			},
			gridColor: {
				type: "color",
				default: "#ccc"
			}
		},
		multiple: !1,
		presets: {
			none: {},
			default: {
				active: !0,
				seed: 1,
				skyType: "atmosphere",
				skyColor: "#88c",
				horizonColor: "#ddd",
				lighting: "distant",
				lightPosition: {
					x: -.11,
					y: 1,
					z: .33
				},
				fog: .78,
				flatShading: !1,
				playArea: 1,
				ground: "hills",
				groundYScale: 3,
				groundTexture: "checkerboard",
				groundColor: "#454545",
				groundColor2: "#5d5d5d",
				dressing: "none",
				dressingAmount: 10,
				dressingColor: "#795449",
				dressingScale: 1,
				dressingVariance: {
					x: 0,
					y: 0,
					z: 0
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "none",
				gridColor: "#ccc",
				shadow: !1
			},
			contact: {
				active: !0,
				seed: 14,
				skyType: "gradient",
				skyColor: "#478d54",
				horizonColor: "#b696cb",
				lighting: "distant",
				lightPosition: {
					x: 0,
					y: 2.01,
					z: -1
				},
				fog: .8,
				flatShading: !1,
				playArea: 1,
				ground: "spikes",
				groundYScale: 4.91,
				groundTexture: "none",
				groundColor: "#2e455f",
				groundColor2: "#694439",
				dressing: "apparatus",
				dressingAmount: 7,
				dressingColor: "#657067",
				dressingScale: 20,
				dressingVariance: {
					x: 20,
					y: 20,
					z: 20
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "1x1",
				gridColor: "#478d54",
				shadow: !1
			},
			egypt: {
				active: !0,
				seed: 26,
				skyType: "gradient",
				skyColor: "#1b7660",
				horizonColor: "#e4b676",
				lighting: "distant",
				lightPosition: {
					x: 0,
					y: 1.65,
					z: -1
				},
				fog: .75,
				flatShading: !1,
				playArea: 1,
				ground: "hills",
				groundYScale: 5,
				groundTexture: "walkernoise",
				groundColor: "#664735",
				groundColor2: "#6c4b39",
				dressing: "pyramids",
				dressingAmount: 10,
				dressingColor: "#7c5c45",
				dressingScale: 5,
				dressingVariance: {
					x: 20,
					y: 20,
					z: 20
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "spots",
				gridColor: "#e4b676",
				shadow: !1
			},
			checkerboard: {
				active: !0,
				seed: 1,
				skyType: "gradient",
				skyColor: "#0d0d0d",
				horizonColor: "#404040",
				lighting: "distant",
				lightPosition: {
					x: 0,
					y: 1,
					z: -.2
				},
				fog: .81,
				flatShading: !0,
				playArea: 1,
				ground: "hills",
				groundYScale: 4.81,
				groundTexture: "checkerboard",
				groundColor: "#252525",
				groundColor2: "#111111",
				dressing: "cubes",
				dressingAmount: 10,
				dressingColor: "#9f9f9f",
				dressingScale: 1.51,
				dressingVariance: {
					x: 5,
					y: 20,
					z: 5
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "dots",
				gridColor: "#ccc",
				shadow: !1
			},
			forest: {
				active: !0,
				seed: 8,
				skyType: "gradient",
				skyColor: "#24b59f",
				horizonColor: "#eff9b7",
				lighting: "distant",
				lightPosition: {
					x: -1.2,
					y: .88,
					z: -.55
				},
				fog: .8,
				flatShading: !1,
				playArea: 1,
				ground: "noise",
				groundYScale: 4.18,
				groundTexture: "squares",
				groundColor: "#937a24",
				groundColor2: "#987d2e",
				dressing: "trees",
				dressingAmount: 500,
				dressingColor: "#888b1d",
				dressingScale: 1,
				dressingVariance: {
					x: 10,
					y: 10,
					z: 10
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "none",
				gridColor: "#c5a543",
				shadow: !1
			},
			goaland: {
				active: !0,
				seed: 17,
				skyType: "gradient",
				skyColor: "#14645f",
				horizonColor: "#a3dab8",
				lighting: "point",
				lightPosition: {
					x: .1,
					y: 4,
					z: .56
				},
				fog: .73,
				flatShading: !1,
				playArea: 1,
				ground: "noise",
				groundYScale: .81,
				groundTexture: "none",
				groundColor: "#ae3241",
				groundColor2: "#db4453",
				dressing: "mushrooms",
				dressingAmount: 150,
				dressingColor: "#a9313d",
				dressingScale: 5,
				dressingVariance: {
					x: 5,
					y: 10,
					z: 5
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "dots",
				gridColor: "#239893",
				shadow: !1
			},
			yavapai: {
				active: !0,
				seed: 11,
				skyType: "gradient",
				skyColor: "#239849",
				horizonColor: "#cfe0af",
				lighting: "distant",
				lightPosition: {
					x: .5,
					y: 1,
					z: 0
				},
				fog: .8,
				flatShading: !0,
				playArea: 1,
				ground: "canyon",
				groundYScale: 9.76,
				groundTexture: "walkernoise",
				groundColor: "#C66344",
				groundColor2: "#c96b4b",
				dressing: "stones",
				dressingAmount: 500,
				dressingColor: "#C66344",
				dressingScale: .06,
				dressingVariance: {
					x: .2,
					y: .1,
					z: .2
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 1,
				grid: "none",
				gridColor: "#239893",
				shadow: !1
			},
			goldmine: {
				active: !0,
				seed: 53,
				skyType: "gradient",
				skyColor: "#1e1c1a",
				horizonColor: "#8c7964",
				lighting: "point",
				lightPosition: {
					x: -.09,
					y: 3,
					z: .33
				},
				fog: .43,
				flatShading: !0,
				playArea: 1.08,
				ground: "canyon",
				groundYScale: 50,
				groundTexture: "none",
				groundColor: "#353535",
				groundColor2: "#454545",
				dressing: "hexagons",
				dressingAmount: 300,
				dressingColor: "#fe921b",
				dressingScale: .5,
				dressingVariance: {
					x: 2,
					y: 8,
					z: 2
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: .03,
				grid: "none",
				gridColor: "#ccc",
				shadow: !1
			},
			threetowers: {
				active: !0,
				seed: 5,
				skyType: "gradient",
				skyColor: "#23a06b",
				horizonColor: "#f5e170",
				lighting: "distant",
				lightPosition: {
					x: .5,
					y: 1,
					z: 0
				},
				fog: .8,
				flatShading: !1,
				playArea: 1,
				ground: "spikes",
				groundYScale: 4.26,
				groundTexture: "walkernoise",
				groundColor: "#273a49",
				groundColor2: "#2b464f",
				dressing: "towers",
				dressingAmount: 3,
				dressingColor: "#5f6d94",
				dressingScale: 50,
				dressingVariance: {
					x: 10,
					y: 100,
					z: 10
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "none",
				gridColor: "#239893",
				shadow: !1
			},
			poison: {
				active: !0,
				seed: 92,
				skyType: "gradient",
				skyColor: "#1ea84a",
				horizonColor: "#177132",
				lighting: "distant",
				lightPosition: {
					x: .5,
					y: 1,
					z: 0
				},
				fog: .8,
				flatShading: !1,
				playArea: 1,
				ground: "canyon",
				groundYScale: 9.76,
				groundTexture: "none",
				groundColor: "#851f31",
				groundColor2: "#912235",
				dressing: "hexagons",
				dressingAmount: 20,
				dressingColor: "#c7415b",
				dressingScale: 20,
				dressingVariance: {
					x: 20,
					y: 200,
					z: 20
				},
				dressingUniformScale: !1,
				dressingOnPlayArea: 0,
				grid: "crosses",
				gridColor: "#1ea84a",
				shadow: !1
			},
			arches: {
				active: !0,
				seed: 19,
				skyType: "atmosphere",
				skyColor: "#8cbdc8",
				horizonColor: "#ddd",
				lighting: "distant",
				lightPosition: {
					x: -.11,
					y: .16,
					z: .33
				},
				fog: .67,
				flatShading: !0,
				playArea: 1,
				ground: "canyon",
				groundYScale: 10,
				groundTexture: "walkernoise",
				groundColor: "#a87d6f",
				groundColor2: "#795449",
				dressing: "arches",
				dressingAmount: 6,
				dressingColor: "#795449",
				dressingScale: 26,
				dressingVariance: {
					x: 20,
					y: 40,
					z: 20
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: .04,
				grid: "none",
				gridColor: "#ccc",
				shadow: !1
			},
			tron: {
				active: !0,
				seed: 14,
				skyType: "gradient",
				skyColor: "#091b39",
				horizonColor: "#284a9e",
				lighting: "distant",
				lightPosition: {
					x: -.72,
					y: .62,
					z: .4
				},
				fog: .8,
				flatShading: !1,
				playArea: 1,
				ground: "spikes",
				groundYScale: 4.91,
				groundTexture: "none",
				groundColor: "#061123",
				groundColor2: "#694439",
				dressing: "towers",
				dressingAmount: 5,
				dressingColor: "#fb000e",
				dressingScale: 15,
				dressingVariance: {
					x: 20,
					y: 20,
					z: 20
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "1x1",
				gridColor: "#fb000e",
				shadow: !1
			},
			japan: {
				active: !0,
				seed: 14,
				skyType: "gradient",
				skyColor: "#7e5db5",
				horizonColor: "#b4adda",
				lighting: "distant",
				lightPosition: {
					x: 1.33,
					y: 1,
					z: .24
				},
				fog: .9,
				flatShading: !1,
				playArea: 1,
				ground: "hills",
				groundYScale: 25,
				groundTexture: "walkernoise",
				groundColor: "#7e5db5",
				groundColor2: "#cabdf5",
				dressing: "torii",
				dressingAmount: 4,
				dressingColor: "#bc5e7c",
				dressingScale: 15,
				dressingVariance: {
					x: 0,
					y: 0,
					z: 0
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 0,
				grid: "spots",
				gridColor: "#e4b676",
				shadow: !1
			},
			dream: {
				active: !0,
				seed: 17,
				skyType: "gradient",
				skyColor: "#87faf4",
				horizonColor: "#b34093",
				lighting: "distant",
				lightPosition: {
					x: -.72,
					y: .53,
					z: .97
				},
				fog: .8,
				flatShading: !1,
				playArea: 1,
				ground: "hills",
				groundYScale: 20,
				groundTexture: "checkerboard",
				groundColor: "#b34093",
				groundColor2: "#c050a2",
				dressing: "mushrooms",
				dressingAmount: 300,
				dressingColor: "#3cf7ed",
				dressingScale: .2,
				dressingVariance: {
					x: .2,
					y: .2,
					z: .2
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 1,
				grid: "none",
				gridColor: "#239893",
				shadow: !1
			},
			volcano: {
				active: !0,
				seed: 92,
				skyType: "gradient",
				skyColor: "#4a070f",
				horizonColor: "#f62300",
				lighting: "point",
				lightPosition: {
					x: .5,
					y: 2.25,
					z: 0
				},
				fog: .87,
				flatShading: !1,
				playArea: 1,
				ground: "canyon",
				groundYScale: 9.76,
				groundTexture: "walkernoise",
				groundColor: "#fb0803",
				groundColor2: "#510000",
				dressing: "arches",
				dressingAmount: 15,
				dressingColor: "#fb0803",
				dressingScale: 3,
				dressingVariance: {
					x: 10,
					y: 100,
					z: 10
				},
				dressingUniformScale: !1,
				dressingOnPlayArea: .2,
				grid: "none",
				gridColor: "#fa0e00",
				shadow: !1
			},
			starry: {
				active: !0,
				seed: 1,
				skyType: "atmosphere",
				skyColor: "#88c",
				horizonColor: "#ddd",
				lighting: "distant",
				lightPosition: {
					x: 0,
					y: -.01,
					z: -.46
				},
				fog: .7,
				flatShading: !1,
				playArea: 1,
				ground: "hills",
				groundYScale: 3,
				groundTexture: "none",
				groundColor: "#553e35",
				groundColor2: "#694439",
				dressing: "none",
				dressingAmount: 100,
				dressingColor: "#795449",
				dressingScale: 5,
				dressingVariance: {
					x: 1,
					y: 1,
					z: 1
				},
				dressingUniformScale: !0,
				grid: "1x1",
				dressingOnPlayArea: 0,
				gridColor: "#39d2f2",
				shadow: !1
			},
			osiris: {
				active: !0,
				seed: 46,
				skyType: "atmosphere",
				skyColor: "#88c",
				horizonColor: "#ddd",
				lighting: "distant",
				lightPosition: {
					x: 0,
					y: .02,
					z: -.46
				},
				fog: 0,
				flatShading: !1,
				playArea: 1,
				ground: "hills",
				groundYScale: 3,
				groundTexture: "none",
				groundColor: "#9e7b47",
				groundColor2: "#9e7b47",
				dressing: "pyramids",
				dressingAmount: 7,
				dressingColor: "#9e7b47",
				dressingScale: 5,
				dressingVariance: {
					x: 30,
					y: 30,
					z: 30
				},
				dressingUniformScale: !0,
				grid: "dots",
				dressingOnPlayArea: 0,
				gridColor: "#daa452",
				shadow: !1
			},
			moon: {
				active: !0,
				seed: 11,
				skyType: "gradient",
				skyColor: "#000000",
				horizonColor: "#000000",
				lighting: "distant",
				lightPosition: {
					x: .5,
					y: 1,
					z: 0
				},
				fog: .8,
				flatShading: !0,
				playArea: 1,
				ground: "canyon",
				groundYScale: 9.76,
				groundTexture: "walkernoise",
				groundColor: "#D1D1D1",
				groundColor2: "#494949",
				dressing: "stones",
				dressingAmount: 500,
				dressingColor: "#494949",
				dressingScale: .06,
				dressingVariance: {
					x: .2,
					y: .1,
					z: .2
				},
				dressingUniformScale: !0,
				dressingOnPlayArea: 1,
				grid: "none",
				gridColor: "#239893",
				shadow: !1
			}
		},
		init: function () {
			this.environmentData = {}, this.rendererSystem = this.el.sceneEl.systems.renderer, this.STAGE_SIZE = this.data.stageSize, this.assets = {
				arches: [{
					type: "mesh",
					vertices: [409, 268, 4, 351, 228, 36, 336, 236, -57, -152, 391, 69, -135, 358, 88, -119, 330, 43, -20, 358, -35, -153, 357, -47, 37, 413, -26, -20, 411, -14, -302, 148, 154, -339, 121, -126, -389, 200, -88, -477, 193, -76, -314, 346, -19, -314, 306, -30, -250, 296, -73, -267, 237, -82, -212, 303, -68, -245, 200, -67, -223, 304, 108, -329, 299, 107, -289, 350, 76, -320, 342, 69, 119, 373, -39, 38, 370, 8, 113, 367, 52, 492, 202, -31, 462, 83, -104, 447, 71, -80, 426, 112, 25, 482, 189, -7, 222, 372, 6, 121, 402, 41, 87, 382, 67, 221, 346, 55, 559, 93, -13, 528, 47, 39, 505, 21, -111, 528, 54, -101, 616, 31, -53, 442, 256, -15, 300, 338, 19, 257, 308, -79, 408, 256, -74, 312, 352, -26, 384, 297, -31, 437, 257, -47, -29, 415, 53, -232, 377, 59, -139, 335, 77, -132, 344, 2, -18, 377, -37, -171, 387, -28, -254, 384, 18, -651, -27, 27, -435, -28, 179, -345, 149, 165, -272, -28, 23, -215, 146, -2, -279, -29, -59, -211, 145, -55, -337, -28, -128, -413, 247, 0, -293, 363, 24, -214, 254, -36, -164, 290, 33, -284, 150, 94, -218, 362, 105, 75, 369, 29, 518, 147, -63, 447, 190, -70, 445, 56, -105, 391, 185, -60, 431, 49, -33, 459, 83, 26, 470, 162, 42, 130, 390, 53, 167, 341, -30, 125, 394, -45, 239, 368, -17, 91, 414, 10, 450, 18, 2, 449, -27, -9, 436, -28, -58, 496, -27, -110, 582, -28, -140, 647, -27, -56, 325, 325, -45, -307, 297, -56, -647, -28, -45, -188, 310, -54, -264, 197, 113, -367, 175, 139, 8, 387, 82, 426, 45, -55, 114, 359, -28, 500, 27, 44, 461, -29, 13, -512, -27, -151, -152, 376, -38, -490, -28, 148, 12, 370, -28, 442, 160, 42, 465, 194, 32, 381, 183, -33, 649, -27, -34, 444, 16, 29, 616, -28, 25, 417, 267, -66, -132, 352, -34, -322, -27, 130, -271, 86, -115, -635, -28, -121, -291, 203, -99, 176, 405, -10, 561, 52, -93, 371, 305, 9, 311, 237, -22, 377, 200, -81, -129, 406, 46, -154, 371, 99, -82, 361, 71, -21, 354, 26, -91, 363, -27, -165, 413, -12, -414, 215, 110, -238, 127, 26, -408, -28, -128, -674, -28, -94, -446, 232, -39, -311, 226, -90, -255, 210, -61, -235, 192, -11, -217, 218, 58, -269, 299, 124, -386, 276, 78, -399, 281, 42, 15, 373, 58, 16, 393, 75, 549, 107, -46, 481, 188, -68, 409, 120, -41, 541, 81, 12, 230, 368, 41, 194, 350, -50, 224, 361, -50, 604, -28, -10, 602, -27, 35, 486, 56, -121, 502, 69, -120, 457, -27, -110, 226, 317, -40, -584, -28, -124, 439, -26, -30, 467, -26, 39, 547, -27, -146, 21, 368, 14, 466, 229, -29, 578, -27, 44, 609, -27, -96, 291, 356, -15, 290, 306, 34, 255, 321, 28, 231, 311, -5, -251, 386, 50, -183, 307, 87, -152, 307, 24, -264, 373, -12, -392, -27, 190, -333, -28, 84, -281, -27, 54, -270, -28, -23, -308, -28, -101, -687, -27, -59, 39, 418, 39, 413, 163, 25, 404, 206, -90, 54, 400, -31, 121, 352, 8, -454, 41, 148, -426, 9, 182, -564, 115, 3, -427, 27, -107, -548, 118, -32, -556, 122, -53, -517, 91, -101, -475, 54, 140, -461, 52, -134, -558, 119, -71, -434, 286, 59, -687, -31, 52, -595, 146, 22, -670, -28, 164, -537, 166, 122, -575, -28, 217, -566, 159, 65, -470, 152, 136, -712, -29, 102, -639, -29, 211, -532, -30, 181, -442, -30, -100],
					faces: [76, 104, 162, 1, 176, 103, 103, 76, 1, 2, 119, 73, 73, 105, 2, 2, 118, 152, 45, 161, 46, 46, 109, 45, 3, 120, 49, 49, 68, 3, 3, 121, 139, 139, 48, 3, 4, 122, 94, 94, 121, 4, 6, 123, 124, 9, 175, 81, 10, 169, 111, 10, 67, 92, 88, 43, 146, 11, 131, 114, 11, 128, 183, 13, 130, 15, 90, 184, 174, 90, 182, 184, 130, 184, 63, 14, 130, 63, 15, 130, 14, 16, 131, 12, 15, 168, 53, 18, 91, 17, 131, 16, 17, 65, 133, 132, 65, 132, 91, 67, 134, 166, 166, 92, 67, 20, 135, 92, 20, 166, 4, 4, 121, 20, 22, 135, 68, 25, 102, 96, 25, 157, 102, 69, 138, 157, 69, 157, 25, 39, 150, 71, 71, 141, 39, 28, 150, 149, 149, 72, 28, 142, 176, 105, 36, 140, 27, 27, 143, 36, 32, 115, 81, 32, 144, 161, 161, 80, 32, 77, 35, 144, 34, 26, 77, 78, 179, 96, 145, 152, 78, 178, 79, 145, 80, 146, 79, 147, 140, 36, 143, 108, 36, 143, 37, 148, 74, 95, 154, 154, 83, 74, 72, 149, 151, 151, 95, 72, 38, 150, 156, 40, 147, 106, 70, 140, 40, 40, 116, 70, 42, 162, 0, 35, 163, 162, 43, 145, 146, 46, 117, 41, 47, 158, 27, 48, 139, 175, 122, 138, 94, 157, 138, 123, 52, 178, 102, 52, 102, 6, 52, 124, 7, 7, 100, 52, 53, 125, 8, 57, 93, 181, 56, 169, 181, 59, 127, 58, 60, 173, 61, 62, 128, 11, 11, 112, 62, 65, 91, 167, 65, 167, 66, 126, 93, 21, 22, 68, 49, 72, 95, 29, 142, 29, 74, 74, 82, 142, 75, 107, 97, 75, 97, 103, 76, 97, 37, 104, 143, 31, 78, 152, 164, 78, 164, 179, 79, 178, 8, 97, 155, 159, 107, 98, 155, 83, 98, 82, 154, 95, 84, 39, 116, 86, 86, 156, 39, 87, 160, 116, 24, 145, 96, 162, 104, 0, 105, 118, 2, 43, 177, 119, 44, 177, 43, 91, 51, 167, 44, 88, 109, 46, 161, 117, 3, 68, 121, 3, 48, 120, 4, 166, 50, 50, 122, 4, 5, 123, 122, 123, 138, 122, 110, 124, 51, 170, 10, 111, 110, 91, 7, 7, 124, 110, 8, 125, 9, 9, 81, 8, 186, 12, 188, 92, 135, 10, 11, 114, 112, 64, 63, 137, 13, 15, 89, 89, 53, 100, 64, 168, 14, 14, 168, 15, 89, 100, 16, 16, 12, 89, 100, 18, 16, 17, 91, 132, 112, 19, 61, 18, 7, 91, 19, 17, 132, 133, 127, 59, 133, 59, 61, 136, 21, 22, 134, 127, 133, 20, 92, 166, 121, 135, 20, 158, 31, 27, 21, 135, 22, 23, 137, 136, 24, 102, 178, 178, 145, 24, 25, 179, 69, 26, 94, 138, 27, 140, 70, 27, 70, 141, 150, 177, 71, 28, 177, 150, 29, 142, 73, 73, 119, 29, 142, 82, 30, 30, 176, 142, 107, 75, 82, 31, 143, 27, 33, 81, 175, 31, 41, 104, 115, 79, 8, 32, 33, 144, 80, 115, 32, 33, 175, 139, 35, 162, 42, 77, 139, 34, 163, 26, 179, 163, 179, 164, 78, 96, 145, 177, 29, 119, 108, 143, 148, 148, 37, 159, 97, 159, 37, 74, 83, 82, 38, 149, 150, 156, 150, 39, 40, 106, 87, 87, 116, 40, 140, 147, 40, 161, 144, 42, 42, 117, 161, 41, 0, 104, 41, 117, 0, 0, 117, 42, 164, 118, 163, 1, 163, 118, 118, 176, 1, 118, 105, 176, 152, 118, 164, 43, 152, 145, 43, 119, 2, 71, 109, 141, 47, 41, 158, 44, 71, 177, 45, 109, 88, 45, 88, 146, 46, 47, 109, 141, 47, 27, 167, 50, 166, 49, 120, 165, 139, 121, 94, 5, 122, 50, 123, 51, 124, 157, 6, 102, 157, 123, 6, 100, 8, 178, 5, 167, 51, 6, 124, 52, 100, 178, 52, 53, 168, 125, 125, 165, 120, 54, 125, 168, 9, 48, 175, 120, 9, 125, 93, 10, 135, 181, 101, 56, 57, 169, 10, 59, 172, 61, 67, 170, 171, 67, 171, 127, 58, 127, 171, 129, 186, 113, 60, 61, 172, 61, 173, 112, 62, 112, 173, 174, 189, 129, 165, 64, 23, 64, 137, 23, 165, 22, 49, 64, 54, 168, 17, 114, 131, 17, 112, 114, 66, 133, 65, 19, 132, 133, 19, 133, 61, 134, 133, 66, 166, 134, 66, 166, 66, 167, 93, 135, 21, 68, 135, 121, 23, 136, 22, 94, 34, 139, 25, 96, 179, 26, 138, 69, 69, 179, 26, 30, 103, 176, 116, 141, 70, 39, 141, 116, 73, 142, 105, 143, 76, 37, 26, 35, 77, 103, 97, 76, 77, 144, 33, 33, 139, 77, 38, 151, 149, 80, 161, 45, 80, 45, 146, 81, 115, 8, 107, 155, 97, 82, 98, 107, 95, 151, 84, 38, 156, 85, 86, 116, 160, 96, 102, 24, 72, 29, 28, 29, 95, 74, 75, 30, 82, 108, 147, 36, 88, 44, 43, 91, 110, 51, 170, 67, 10, 11, 183, 131, 64, 14, 63, 89, 15, 53, 100, 7, 18, 112, 17, 19, 127, 134, 67, 136, 126, 21, 158, 41, 31, 33, 32, 81, 115, 80, 79, 177, 28, 29, 43, 2, 152, 71, 44, 109, 47, 46, 41, 141, 109, 47, 167, 5, 50, 123, 5, 51, 100, 53, 8, 125, 54, 165, 9, 120, 48, 93, 57, 10, 59, 58, 172, 174, 185, 189, 165, 54, 64, 165, 23, 22, 94, 26, 34, 30, 75, 103, 143, 104, 76, 26, 163, 35, 38, 85, 151, 192, 182, 191, 183, 128, 201, 12, 13, 89, 181, 169, 57, 186, 153, 113, 188, 183, 99, 184, 182, 63, 185, 13, 189, 180, 181, 93, 186, 99, 153, 189, 186, 129, 185, 184, 130, 186, 13, 12, 187, 93, 126, 193, 199, 194, 194, 196, 193, 200, 187, 195, 187, 197, 195, 187, 126, 197, 197, 190, 194, 190, 136, 137, 190, 196, 194, 63, 182, 192, 63, 192, 196, 192, 198, 196, 191, 182, 55, 193, 196, 198, 194, 199, 197, 195, 197, 199, 136, 197, 126, 190, 137, 63, 190, 63, 196, 197, 136, 190, 192, 191, 198, 201, 99, 183, 90, 55, 182, 181, 180, 101, 185, 130, 13, 186, 188, 99, 186, 189, 13, 187, 180, 93, 200, 101, 187, 183, 188, 131, 184, 185, 174, 180, 187, 101, 16, 18, 17, 12, 131, 188, 35, 42, 144, 163, 1, 162, 76, 162, 1, 79, 146, 145]
				}],
				stones: [{
					type: "mesh",
					vertices: [-376, 189, 42, 230, 223, -310, 353, 162, -62, 414, -23, -67, 256, 90, -475, 24, 85, -526, -418, -16, 57, -432, 66, -40, -199, 151, -376, -155, 49, 467, -91, 289, 201, 293, 197, 91, 81, -17, -480, 42, 108, 431, -359, -17, -250, 383, -19, -243, 194, -15, 270, -272, 180, 293, -86, 212, 262, 234, 54, 297, 395, 97, -302, -123, -21, -444, -416, -19, -123, -323, -18, 267, -100, -16, 429, -300, 96, -361, 163, -19, 409, 118, 201, -431, -241, -18, 391, -130, 274, -309, 306, -19, -399, -221, 96, 404],
					faces: [31, 18, 17, 0, 17, 18, 3, 20, 2, 18, 11, 10, 29, 27, 8, 27, 29, 1, 0, 18, 10, 10, 29, 0, 16, 19, 26, 11, 2, 1, 20, 30, 4, 20, 3, 15, 30, 12, 4, 4, 12, 5, 5, 27, 4, 4, 27, 20, 21, 25, 5, 7, 8, 25, 22, 7, 14, 7, 25, 14, 23, 28, 31, 0, 7, 17, 24, 26, 9, 31, 28, 9, 8, 27, 5, 2, 20, 1, 13, 19, 18, 10, 11, 1, 19, 13, 26, 3, 11, 19, 19, 16, 3, 11, 3, 2, 11, 18, 19, 20, 15, 30, 29, 10, 1, 25, 21, 14, 8, 5, 25, 5, 12, 21, 6, 7, 22, 7, 6, 23, 8, 0, 29, 8, 7, 0, 23, 31, 7, 13, 31, 9, 18, 31, 13, 9, 28, 24, 26, 13, 9, 27, 1, 20, 7, 31, 17]
				}, {
					type: "mesh",
					vertices: [-217, 34, -153, 198, 90, 20, 212, 85, 169, -131, 93, 171, 197, 113, 30, 173, 121, 164, 315, 29, -16, 219, 24, 189, 282, 50, -102, 232, 38, -181, -195, -9, -166, -156, 30, -207, -51, -9, -231, -180, 91, -173, -19, 73, -204, -280, 23, 96, -242, 100, 107, 3, 158, -82, 109, 88, 221, 275, -10, -40, 236, -10, -135, -178, 49, 184, -1, -10, -243, 265, -11, 109, -12, -9, 237, -36, 46, 251, -233, 86, -81, 93, 77, -171, -163, 133, 69, 18, 16, 263, 296, 44, 93, 131, -12, -226, -89, -10, -201, -273, -10, -51, -240, -9, 110, 190, -12, 192, -253, -11, -92, 42, 43, -258, -115, -11, 238, 168, 99, -88, -285, -10, 24, 71, 124, -158, 298, -10, 10, 116, 150, -24, -282, 44, 39],
					faces: [44, 16, 26, 13, 26, 16, 0, 26, 13, 27, 14, 41, 4, 5, 1, 7, 30, 2, 28, 5, 43, 41, 39, 27, 17, 43, 41, 43, 4, 39, 13, 28, 17, 17, 41, 13, 28, 43, 17, 24, 29, 38, 29, 35, 7, 18, 25, 29, 5, 18, 2, 18, 5, 3, 30, 42, 6, 30, 35, 23, 19, 20, 8, 8, 20, 9, 9, 39, 8, 1, 30, 8, 31, 37, 9, 11, 14, 37, 14, 27, 37, 32, 11, 12, 11, 37, 12, 11, 0, 13, 33, 40, 44, 44, 26, 33, 33, 0, 36, 34, 38, 15, 44, 40, 15, 21, 3, 16, 27, 39, 9, 2, 30, 1, 21, 25, 3, 16, 3, 28, 28, 3, 5, 4, 43, 5, 41, 43, 39, 13, 16, 28, 25, 21, 38, 38, 29, 25, 7, 18, 29, 29, 24, 35, 18, 7, 2, 18, 3, 25, 30, 23, 42, 30, 7, 35, 8, 30, 6, 6, 19, 8, 6, 42, 19, 8, 39, 1, 37, 31, 22, 27, 9, 37, 9, 20, 31, 10, 11, 32, 11, 10, 0, 12, 37, 22, 14, 13, 41, 14, 11, 13, 33, 26, 0, 36, 0, 10, 21, 44, 15, 16, 44, 21, 15, 40, 34, 38, 21, 15, 4, 1, 39, 5, 2, 1]
				}, {
					type: "mesh",
					vertices: [-101, 102, 57, 99, 35, 102, 40, 72, 80, 59, 14, -168, -186, 22, 45, -176, 25, -30, 66, -7, 146, 153, -7, 53, -110, 47, -96, -90, -8, -146, 150, -7, -12, -200, -7, 8, -173, -7, -55, 55, 46, -60, 125, -7, 110, 136, 30, -10, -149, 58, 68, -15, 82, -71, 98, -7, -86, -34, -6, -194, -33, -7, 171, -36, 65, 137, 38, -8, -192, -103, -9, 147, -12, 62, -152],
					faces: [2, 17, 0, 17, 8, 0, 17, 24, 8, 19, 24, 22, 5, 11, 4, 2, 13, 17, 17, 13, 24, 21, 23, 20, 1, 2, 21, 7, 15, 1, 7, 10, 15, 5, 9, 12, 15, 18, 13, 0, 5, 16, 0, 8, 5, 1, 15, 2, 10, 18, 15, 3, 13, 18, 24, 3, 22, 11, 23, 4, 4, 16, 5, 16, 4, 23, 24, 13, 3, 15, 13, 2, 6, 1, 21, 6, 21, 20, 6, 14, 1, 2, 0, 21, 1, 14, 7, 3, 18, 22, 8, 24, 19, 8, 19, 9, 12, 11, 5, 5, 8, 9, 16, 23, 21, 16, 21, 0]
				}, {
					type: "mesh",
					vertices: [86, 55, -18, 58, 38, 73, 97, -12, 79, 135, 7, 10, -93, -11, -72, -133, 5, 33, 13, 68, -32, 94, -11, -57, -90, 52, 53, -24, -11, -106, -13, -10, 104, -75, 49, -69, -12, 18, 114, 49, -12, -96, -46, -11, -85, -119, -11, -26, 48, 5, -111, -58, -11, 105, -117, -12, 52, -5, 35, -93, 123, -11, 7],
					faces: [5, 8, 11, 2, 3, 1, 8, 1, 6, 11, 8, 6, 6, 19, 11, 10, 12, 17, 20, 7, 3, 3, 7, 16, 16, 0, 3, 16, 9, 19, 14, 4, 9, 15, 18, 5, 5, 11, 15, 18, 17, 5, 19, 0, 16, 1, 3, 0, 0, 6, 1, 19, 6, 0, 12, 8, 17, 2, 1, 12, 12, 10, 2, 1, 8, 12, 3, 2, 20, 16, 13, 9, 16, 7, 13, 19, 4, 11, 15, 11, 4, 17, 8, 5, 9, 4, 19]
				}],
				torii: [{
					type: "mesh",
					mirror: !0,
					flatShading: !0,
					vertices: [692, 966, -52, 661, 834, -52, 692, 966, 52, 661, 834, 52, 0, 894, -52, 0, 776, -52, 0, 894, 52, 0, 776, 52, 518, 935, 52, 345, 913, 52, 170, 899, 52, 162, 779, 52, 328, 790, 52, 494, 808, 52, 170, 899, -52, 345, 913, -52, 518, 935, -52, 494, 808, -52, 328, 790, -52, 162, 779, -52, 0, 618, 16, 0, 697, 16, 0, 618, -16, 0, 697, -16, 586, 618, 16, 586, 697, 16, 586, 618, -16, 586, 697, -16, 331, -29, -75, 331, 766, -52, 369, -29, -65, 357, 766, -45, 396, -29, -37, 377, 766, -26, 406, -29, 0, 384, 766, 0, 396, -29, 37, 377, 766, 26, 369, -29, 65, 357, 766, 45, 331, -29, 75, 331, 766, 52, 294, -29, 65, 305, 766, 45, 267, -29, 37, 286, 766, 26, 257, -29, 0, 279, 766, 0, 267, -29, -37, 286, 766, -26, 294, -29, -65, 305, 766, -45, 0, 777, 85, 0, 681, 33, 333, 762, -75, 333, 806, -75, 371, 762, -65, 371, 806, -65, 398, 762, -37, 398, 806, -37, 408, 762, 0, 408, 806, 0, 398, 762, 37, 398, 806, 37, 371, 762, 65, 371, 806, 65, 333, 762, 75, 333, 806, 75, 296, 762, 65, 296, 806, 65, 268, 762, 37, 268, 806, 37, 258, 762, 0, 258, 806, 0, 268, 762, -37, 268, 806, -37, 296, 762, -65, 296, 806, -65, 0, 681, -33, 0, 777, -85, 52, 681, 33, 52, 777, 85, 52, 681, -33, 52, 777, -85],
					faces: [4, 10, 14, 1, 13, 17, 11, 6, 7, 0, 3, 1, 16, 1, 17, 4, 19, 5, 14, 18, 19, 15, 17, 18, 3, 8, 13, 13, 9, 12, 12, 10, 11, 19, 7, 5, 19, 12, 11, 18, 13, 12, 16, 2, 0, 15, 8, 16, 14, 9, 15, 23, 26, 22, 27, 24, 26, 25, 20, 24, 26, 20, 22, 23, 25, 27, 29, 30, 28, 31, 32, 30, 33, 34, 32, 35, 36, 34, 37, 38, 36, 39, 40, 38, 41, 42, 40, 43, 44, 42, 45, 46, 44, 47, 48, 46, 49, 50, 48, 51, 28, 50, 55, 56, 54, 57, 58, 56, 59, 60, 58, 61, 62, 60, 63, 64, 62, 79, 81, 83, 65, 66, 64, 82, 53, 78, 67, 68, 66, 81, 53, 80, 69, 70, 68, 83, 80, 82, 71, 72, 70, 79, 82, 78, 73, 74, 72, 75, 63, 59, 75, 76, 74, 77, 54, 76, 60, 68, 76, 4, 6, 10, 1, 3, 13, 11, 10, 6, 0, 2, 3, 16, 0, 1, 4, 14, 19, 14, 15, 18, 15, 16, 17, 3, 2, 8, 13, 8, 9, 12, 9, 10, 19, 11, 7, 19, 18, 12, 18, 17, 13, 16, 8, 2, 15, 9, 8, 14, 10, 9, 23, 27, 26, 27, 25, 24, 25, 21, 20, 26, 24, 20, 23, 21, 25, 29, 31, 30, 31, 33, 32, 33, 35, 34, 35, 37, 36, 37, 39, 38, 39, 41, 40, 41, 43, 42, 43, 45, 44, 45, 47, 46, 47, 49, 48, 49, 51, 50, 51, 29, 28, 55, 57, 56, 57, 59, 58, 59, 61, 60, 61, 63, 62, 63, 65, 64, 79, 52, 81, 65, 67, 66, 82, 80, 53, 67, 69, 68, 81, 52, 53, 69, 71, 70, 83, 81, 80, 71, 73, 72, 79, 83, 82, 73, 75, 74, 59, 57, 55, 55, 77, 75, 75, 73, 71, 71, 69, 75, 67, 65, 63, 63, 61, 59, 59, 55, 75, 75, 69, 67, 67, 63, 75, 75, 77, 76, 77, 55, 54, 76, 54, 56, 56, 58, 76, 60, 62, 68, 64, 66, 68, 68, 70, 72, 72, 74, 68, 76, 58, 60, 62, 64, 68, 68, 74, 76]
				}],
				hexagons: [{
					type: "extrude",
					vertices: [-.198, -.302, .197, -.3, .372, 0, .199, .298, -.202, .298, -.368, 0]
				}],
				towers: [{
					type: "extrude",
					vertices: [-.054, -.178, -.007, -.182, .069, -.027, .189, .079, .178, .124, -.007, .097, -.145, .182, -.178, .144, -.079, -.021]
				}, {
					type: "lathe",
					segments: 4,
					vertices: [.004, .02, .012, .092, .042, .166, .067, .55, .101, .594, .105, .838, .193, .934, .18, .994]
				}, {
					type: "lathe",
					segments: 5,
					vertices: [.069, .216, .067, .562, .126, .562, .128, .774, .191, .774, .193, .986]
				}],
				trees: [{
					type: "lathe",
					noise: .015,
					segments: 6,
					vertices: [1e-6, .826, .054, .832, .105, .854, .136, .9, .136, .958, .118, .994]
				}, {
					type: "lathe",
					noise: .015,
					segments: 14,
					vertices: [1e-6, .01, .069, .022, .13, .068, .178, .18, .189, .32, .191, .59, .193, .75, .138, .79, .018, .808, .018, .996]
				}, {
					type: "lathe",
					noise: .015,
					segments: 14,
					vertices: [1e-6, .436, .126, .46, .201, .57, .219, .72, .154, .846, .028, .884, .034, .996]
				}],
				apparatus: [{
					type: "lathe",
					segments: 10,
					vertices: [1e-6, .23, .042, .23, .069, .36, .038, .362, .038, .372, .06, .372, .073, .572, .024, .572, .024, .67, .069, .67, .075, .722, .097, .724, .105, .852, .083, .902, .065, .902, .065, .924, .128, .924, .146, .996]
				}, {
					type: "lathe",
					segments: 16,
					vertices: [1e-6, .232, .229, .182, .486, .07, .356, .182, .213, .242, .154, .242, .144, .262, .178, .262, .126, .314, .04, .328, .038, .374, .058, .374, .071, .408, .026, .406, .03, .42, .091, .418, .034, .496, .01, .498, .03, .506, .014, .998]
				}],
				mushrooms: [{
					type: "lathe",
					noise: .02,
					segments: 14,
					vertices: [1e-6, .006, .13, .018, .341, .084, .437, .144, .492, .234, .484, .246, .276, .232, .107, .284, .046, .346, .062, .852, .097, .956, .166, .998]
				}, {
					type: "lathe",
					noise: .02,
					segments: 10,
					vertices: [1e-6, .562, .091, .572, .172, .61, .223, .666, .256, .74, .258, .806, .246, .824, .062, .826, .065, .948, .097, .998]
				}, {
					type: "lathe",
					noise: .02,
					segments: 10,
					vertices: [1e-6, .768, .099, .772, .219, .802, .306, .844, .352, .886, .352, .908, .118, .904, .107, .93, .115, .966, .14, .996]
				}]
			};
			for (var e in this.assets)
				for (var t = 0; t < this.assets[e].length; t++) {
					var r = this.assets[e][t];
					if ("mesh" == r.type)
						for (var o = 0, i = r.vertices.length; o < i; o++) r.vertices[o] /= 1e3
				}
			this.userFog = this.el.sceneEl.getAttribute("fog"), this.sky = document.createElement("a-sky"), this.sky.setAttribute("radius", this.STAGE_SIZE), this.sky.setAttribute("theta-length", 110), this.sky.classList.add("environment"), this.stars = null, this.ground = document.createElement("a-entity"), this.ground.setAttribute("rotation", "-90 0 0"), this.ground.classList.add("environmentGround"), this.ground.classList.add("environment"), this.groundCanvas = null, this.groundTexture = null, this.groundMaterial = null, this.groundGeometry = null, this.dressing = document.createElement("a-entity"), this.dressing.classList.add("environmentDressing"), this.dressing.classList.add("environment"), this.gridCanvas = null, this.gridTexture = null, this.hemilight = document.createElement("a-entity"), this.hemilight.classList.add("environment"), this.hemilight.setAttribute("position", "0 50 0"), this.hemilight.setAttribute("light", {
				type: "hemisphere",
				color: "#CEE4F0",
				intensity: 1.256
			}), this.sunlight = document.createElement("a-entity"), this.sunlight.classList.add("environment"), this.sunlight.setAttribute("position", this.data.lightPosition), this.sunlight.setAttribute("light", {
				intensity: 1.884
			}), this.el.appendChild(this.hemilight), this.el.appendChild(this.sunlight), this.el.appendChild(this.ground), this.el.appendChild(this.dressing), this.el.appendChild(this.sky)
		},
		getFogColor: function (e, t) {
			var r;
			if ("color" == e || "none" == e) r = (new THREE.Color).setStyle(this.environmentData.skyColor, THREE.NoColorSpace);
			else if ("gradient" == e) r = (new THREE.Color).setStyle(this.environmentData.horizonColor, THREE.NoColorSpace);
			else if ("atmosphere" == e) {
				var o = [1, .5, .22, .1, .05, 0],
					i = ["#C0CDCF", "#81ADC5", "#525e62", "#2a2d2d", "#141616", "#000"];
				if (t <= 0) return "#000";
				t = Math.min(1, t);
				for (var n = 0; n < o.length; n++)
					if (t > o[n]) {
						var s = (new THREE.Color).setStyle(i[n - 1], THREE.NoColorSpace),
							a = (new THREE.Color).setStyle(i[n], THREE.NoColorSpace),
							l = (t - o[n]) / (o[n - 1] - o[n]);
						a.lerp(s, l), r = a;
						break
					}
			}
			return r.multiplyScalar(.9), r.lerp((new THREE.Color).setStyle(this.data.groundColor, THREE.NoColorSpace), .3), r.setRGB(r.r, r.g, r.b, THREE.SRGBColorSpace), "#" + r.getHexString()
		},
		update: function (e) {
			var t;
			this.data.preset ? (t = AFRAME.utils.clone(this.environmentData), this.environmentData = {}, Object.assign(this.environmentData, this.data), Object.assign(this.environmentData, this.presets[this.data.preset]), Object.assign(this.environmentData, this.el.components.environment.attrValue), console.log(this.environmentData)) : (t = e, this.environmentData = this.data);
			var r = this.environmentData.skyType,
				o = new THREE.Vector3(this.environmentData.lightPosition.x, this.environmentData.lightPosition.y, this.environmentData.lightPosition.z);
			if (o.normalize(), this.sunlight) {
				if (this.sunlight.setAttribute("position", this.environmentData.lightPosition), "atmosphere" != r) {
					var i = (new THREE.Color).setStyle(this.environmentData.skyColor, THREE.NoColorSpace);
					i.setRGB((i.r + 1) / 2, (i.g + 1) / 2, (i.b + 1) / 2, THREE.SRGBColorSpace), this.hemilight.setAttribute("light", {
						color: "#" + i.getHexString(),
						intensity: 1.884
					}), this.sunlight.setAttribute("light", {
						intensity: 1.884
					})
				} else this.hemilight.setAttribute("light", {
					color: "#CEE4F0",
					intensity: .314 + 1.57 * o.y
				}), this.sunlight.setAttribute("light", {
					intensity: .314 + 1.57 * o.y
				});
				this.sunlight.setAttribute("light", {
					castShadow: this.environmentData.shadow,
					shadowCameraLeft: -this.environmentData.shadowSize,
					shadowCameraBottom: -this.environmentData.shadowSize,
					shadowCameraRight: this.environmentData.shadowSize,
					shadowCameraTop: this.environmentData.shadowSize
				})
			}
			var n = this.environmentData.stageSize !== t.stageSize;
			if (n && (this.STAGE_SIZE = this.data.stageSize, this.sky.setAttribute("radius", this.STAGE_SIZE)), r !== t.skyType || this.environmentData.skyColor != t.skyColor || this.environmentData.horizonColor != t.horizonColor) {
				var s = {};
				s.shader = {
					none: "flat",
					color: "flat",
					gradient: "gradientshader",
					atmosphere: "skyshader"
				} [r], this.stars && this.stars.setAttribute("visible", "atmosphere" == r), "color" == r ? (s.color = this.environmentData.skyColor, s.fog = !1) : "gradient" == r && (s.topColor = (new THREE.Color).setStyle(this.environmentData.skyColor, THREE.NoColorSpace), s.bottomColor = (new THREE.Color).setStyle(this.environmentData.horizonColor, THREE.NoColorSpace)), this.sky.setAttribute("material", s)
			}
			"atmosphere" == r && (this.sky.setAttribute("material", {
				sunPosition: o
			}), this.setStars(2e3 * (1 - Math.max(0, 8 * (o.y + .08))))), this.environmentData.fog > 0 ? this.el.sceneEl.setAttribute("fog", {
				color: this.getFogColor(r, o.y),
				far: (1.01 - this.environmentData.fog) * this.STAGE_SIZE * 2
			}) : this.el.sceneEl.removeAttribute("fog"), this.sunlight.setAttribute("light", {
				type: "point" == this.environmentData.lighting ? "point" : "directional"
			}), this.sunlight.setAttribute("visible", "none" !== this.environmentData.lighting), this.hemilight.setAttribute("visible", "none" !== this.environmentData.lighting);
			var a = !this.groundGeometry || this.environmentData.seed != t.seed || this.environmentData.ground != t.ground || this.environmentData.playArea != t.playArea || this.environmentData.flatShading != t.flatShading || this.environmentData.groundDensity != t.groundDensity || this.environmentData.groundFrequency != t.groundFrequency || n;
			(a || this.environmentData.groundColor != t.groundColor || this.environmentData.groundColor2 != t.groundColor2 || this.environmentData.groundYScale != t.groundYScale || this.environmentData.groundTexture != t.groundTexture || this.environmentData.gridColor != t.gridColor || this.environmentData.grid != t.grid) && (this.updateGround(a), this.hemilight && this.hemilight.setAttribute("light", {
				groundColor: this.environmentData.groundColor
			})), (this.environmentData.seed != t.seed || this.environmentData.dressingOnPlayArea != t.dressingOnPlayArea || this.environmentData.dressing != t.dressing || this.environmentData.flatShading != t.flatShading || this.environmentData.dressingAmount != t.dressingAmount || this.environmentData.dressingScale != t.dressingScale || this.environmentData.dressingColor != t.dressingColor || this.environmentData.dressingVariance.x != t.dressingVariance.x || this.environmentData.dressingVariance.y != t.dressingVariance.y || this.environmentData.dressingVariance.z != t.dressingVariance.z || this.environmentData.dressingUniformScale != t.dressingUniformScale || n) && this.updateDressing(), this.sky.setAttribute("visible", "none" !== r), this.el.setAttribute("visible", this.environmentData.active), this.environmentData.active || (this.userFog ? this.el.sceneEl.setAttribute("fog", this.userFog) : this.el.sceneEl.removeAttribute("fog")), this.dumpParametersDiff()
		},
		remove: function () {
			this.userFog ? this.el.sceneEl.setAttribute("fog", this.userFog) : this.el.sceneEl.removeAttribute("fog"), this.el.removeChild(this.hemilight), this.el.removeChild(this.sunlight), this.groundTexture && this.groundTexture.dispose(), this.gridTexture && this.gridTexture.dispose(), this.groundMaterial && this.groundMaterial.dispose(), this.groundGeometry && this.groundGeometry.dispose(), this.el.removeChild(this.ground);
			var e = this.dressing.getObject3D("mesh");
			e && e.children.length > 0 && (e.children[0].material.dispose(), e.children[0].geometry.dispose()), this.el.removeChild(this.dressing), this.el.removeChild(this.sky), this.removeStars()
		},
		logPreset: function () {
			var e = "{";
			for (var t in this.schema)
				if ("preset" != t) {
					e += t + ": ";
					var r = this.schema[t].type;
					e += "vec3" == r ? "{ x: " + this.environmentData[t].x + ", y: " + this.environmentData[t].y + ", z: " + this.environmentData[t].z + "}" : "string" == r || "color" == r ? '"' + this.environmentData[t] + '"' : this.environmentData[t], e += ", "
				} e += "}", console.log(e)
		},
		dumpParametersDiff: function () {
			function e(e) {
				return Math.floor(1e3 * e) / 1e3
			}
			var t = [],
				r = "none" != this.data.preset && this.presets[this.data.preset];
			r && t.push("preset: " + this.data.preset);
			for (var o in this.schema)
				if (!("preset" == o || r && void 0 === r[o])) {
					var i = r ? r[o] : this.schema[o].default,
						n = this.environmentData[o],
						s = this.schema[o].type;
					if ("vec3" == s) {
						var a = i;
						"string" == typeof i && (i = i.split(" "), a = {
							x: i[0],
							y: i[1],
							z: i[2]
						}), e(a.x) == e(n.x) && e(a.y) == e(n.y) && e(a.z) == e(n.z) || t.push(o + ": " + e(n.x) + " " + e(n.y) + " " + e(n.z))
					} else i != n && ("number" == this.schema[o].type && (n = e(n)), t.push(o + ": " + n))
				} console.log("%c" + t.join("; "), "color: #f48;font-weight:bold")
		},
		random: function (e) {
			return parseFloat("0." + Math.sin(9999 * this.environmentData.seed * e).toString().substr(7))
		},
		updateGround: function (e) {
			var t = this.environmentData.groundDensity;
			if (e) {
				var o = "none" != this.environmentData.ground;
				if (this.ground.setAttribute("visible", o), !o) return;
				this.groundGeometry || (this.groundGeometry = new THREE.PlaneGeometry(this.STAGE_SIZE + 2, this.STAGE_SIZE + 2, t - 1, t - 1));
				for (var i = new r(this.environmentData.seed), n = this.groundGeometry.attributes.position.array, s = n.length, a = this.environmentData.groundFrequency, l = a / t, d = 0, h = 0, g = 2; g < s; g += 3)
					if ("flat" != this.environmentData.ground) {
						var u;
						switch (this.environmentData.ground) {
							case "hills":
								u = Math.max(0, i.noise(d, h, 0));
								break;
							case "canyon":
								u = .2 + .8 * i.noise(d, h, 0), u = Math.min(1, 10 * Math.pow(u, 2));
								break;
							case "spikes":
								u = this.random(g) < .02 ? this.random(g + 1) : 0;
								break;
							case "noise":
								u = this.random(g) < .35 ? this.random(g + 1) : 0
						}
						u += .1 * this.random(g + 2);
						var c = 2 * d / a - 1,
							m = 2 * h / a - 1,
							f = this.environmentData.playArea;
						c = Math.max(0, Math.min(1, (Math.abs(c) - (f - .9)) * (1 / f))), m = Math.max(0, Math.min(1, (Math.abs(m) - (f - .9)) * (1 / f))), u *= c > m ? c : m, u < .01 && (u = 0), n[g] = u, d += l, d >= a && (d = 0, h += l)
					} else n[g] = 0;
				this.groundGeometry.computeVertexNormals(), this.groundGeometry.attributes.position.needsUpdate = !0, this.groundGeometry.attributes.normal.needsUpdate = !0
			}
			this.ground.setAttribute("scale", {
				z: this.environmentData.groundYScale
			});
			var p = 2048,
				y = 20,
				v = this.STAGE_SIZE / y;
			this.groundCanvas && this.groundCanvas.width == p || (this.gridCanvas = document.createElement("canvas"), this.gridCanvas.width = p, this.gridCanvas.height = p, this.gridTexture = new THREE.Texture(this.gridCanvas), this.gridTexture.wrapS = THREE.RepeatWrapping, this.gridTexture.wrapT = THREE.RepeatWrapping, this.gridTexture.repeat.set(v, v), this.gridTexture.anisotropy = 4, this.rendererSystem.applyColorCorrection(this.gridTexture), this.groundCanvas = document.createElement("canvas"), this.groundCanvas.width = p, this.groundCanvas.height = p, this.groundTexture = new THREE.Texture(this.groundCanvas), this.groundTexture.wrapS = THREE.RepeatWrapping, this.groundTexture.wrapT = THREE.RepeatWrapping, this.groundTexture.repeat.set(v, v), this.groundTexture.anisotropy = 4, this.rendererSystem.applyColorCorrection(this.groundTexture), this.groundMaterialProps = {
				map: this.groundTexture,
				emissive: new THREE.Color(16777215),
				emissiveMap: this.gridTexture
			}, this.groundMaterialProps.flatShading = this.environmentData.flatShading, this.groundMaterial = new THREE.MeshLambertMaterial(this.groundMaterialProps));
			var C = this.groundCanvas.getContext("2d"),
				E = this.gridCanvas.getContext("2d");
			if (this.drawTexture(C, p, y), E.fillStyle = "#000000", E.fillRect(0, 0, p, p), this.drawGrid(E, p, y), this.groundTexture.needsUpdate = !0, this.gridTexture.needsUpdate = !0, e) {
				var x = new THREE.Mesh(this.groundGeometry, this.groundMaterial);
				this.ground.setObject3D("mesh", x)
			} else this.ground.getObject3D("mesh").material = this.groundMaterial;
			this.ground.setAttribute("shadow", {
				cast: !1,
				receive: this.environmentData.shadow
			})
		},
		drawGrid: function (e, t, r) {
			if ("none" != this.environmentData.grid) {
				var o, i, n, s = Math.floor(r / 2),
					a = t / (r / 2);
				switch (e.fillStyle = this.environmentData.gridColor, this.environmentData.grid) {
					case "1x1":
					case "2x2":
						for ("1x1" == this.environmentData.grid && (s *= 2, a = t / r), o = 0; o < s; o++) n = Math.floor(o * a), e.fillRect(0, n, t, 1), e.fillRect(n, 0, 1, t);
						break;
					case "crosses":
						var l = Math.floor(a / 20);
						for (o = 0; o < s + 1; o++)
							for (n = Math.floor(o * a), i = 0; i < s + 1; i++) {
								var d = Math.floor(-l + i * a);
								e.fillRect(d, n, 2 * l, 1), e.fillRect(n, d, 1, 2 * l)
							}
						break;
					case "dots":
						for (o = 0; o < s + 1; o++)
							for (i = 0; i < s + 1; i++) e.beginPath(), e.arc(Math.floor(i * a), Math.floor(o * a), 4, 0, 2 * Math.PI), e.fill();
						break;
					case "xlines":
						for (o = 0; o < s; o++) e.fillRect(Math.floor(o * a), 0, 1, t);
						break;
					case "ylines":
						for (o = 0; o < s; o++) e.fillRect(0, Math.floor(o * a), t, 1)
				}
			}
		},
		drawTexture: function (e, t, o) {
			e.fillStyle = this.environmentData.groundColor, e.fillRect(0, 0, t, t);
			var i, n, s, a, l, d, h;
			if ("none" != this.environmentData.groundTexture) switch (this.environmentData.groundTexture) {
				case "checkerboard":
					e.fillStyle = this.environmentData.groundColor2;
					var g = Math.floor(o / 2),
						u = t / (o / 2);
					for (i = 0; i < g + 1; i += 2)
						for (var c = 0; c < g + 1; c++) e.fillRect(Math.floor((i + c % 2) * u), Math.floor(c * u), Math.floor(u), Math.floor(u));
					break;
				case "squares":
					var m = 16,
						f = t / m;
					for (s = (new THREE.Color).setStyle(this.environmentData.groundColor, THREE.NoColorSpace), a = (new THREE.Color).setStyle(this.environmentData.groundColor2, THREE.NoColorSpace), i = 0; i < m * m; i++) n = this.random(i + 3) > .5 ? s.clone() : a.clone(), n.addScalar(.1 * this.random(i + 3) - .05), e.fillStyle = "#" + n.getHexString(THREE.NoColorSpace), e.fillRect(i % m * f, Math.floor(i / m) * f, f, f);
					break;
				case "noise":
					d = e.getImageData(0, 0, t, t), l = d.data, s = (new THREE.Color).setStyle(this.environmentData.groundColor, THREE.NoColorSpace), a = (new THREE.Color).setStyle(this.environmentData.groundColor2, THREE.NoColorSpace);
					var p = new THREE.Color(a.r - s.r, a.g - s.g, a.b - s.b),
						y = new r;
					for (i = 0, c = 0, h = l.length; i < h; i += 4, c++) {
						var v = y.noise(c % t / t * 3, c / t / t * 3, 0);
						l[i + 0] = Math.floor(255 * (s.r + p.r * v)), l[i + 1] = Math.floor(255 * (s.g + p.g * v)), l[i + 2] = Math.floor(255 * (s.b + p.b * v))
					}
					e.putImageData(d, 0, 0);
					break;
				case "walkernoise":
					var C = Math.floor(t / 2),
						E = document.createElement("canvas");
					E.width = C, E.height = C;
					var x = E.getContext("2d");
					x.fillStyle = this.environmentData.groundColor, x.fillRect(0, 0, C, C), d = x.getImageData(0, 0, C, C), l = d.data, s = (new THREE.Color).setStyle(this.environmentData.groundColor, THREE.NoColorSpace), a = (new THREE.Color).setStyle(this.environmentData.groundColor2, THREE.NoColorSpace);
					var S = [],
						T = 1e3;
					for (i = 0; i < T; i++) n = s.clone().lerp(a, Math.random()), S.push({
						x: Math.random() * C,
						y: Math.random() * C,
						r: Math.floor(255 * n.r),
						g: Math.floor(255 * n.g),
						b: Math.floor(255 * n.b)
					});
					for (var b = 5e3, w = 0; w < b; w++)
						for (i = 0; i < T; i++) {
							var A = S[i],
								D = 4 * Math.floor(A.y * C + A.x);
							l[D + 0] = A.r, l[D + 1] = A.g, l[D + 2] = A.b, A.x += Math.floor(3 * Math.random()) - 1, A.y += Math.floor(3 * Math.random()) - 1, A.x >= C && (A.x = A.x - C), A.y >= C && (A.y = A.y - C), A.x < 0 && (A.x = C + A.x), A.y < 0 && (A.y = C + A.y)
						}
					x.putImageData(d, 0, 0), e.drawImage(E, 0, 0, t, t)
			}
		},
		getAssetGeometry: function (e) {
			function t(e, t) {
				for (var r = e.attributes.position.array, o = r.length, i = 0; i < o; i += 3) r[i] = (s.random(i) - .5) * t, r[i + 1] = (s.random(i + o) - .5) * t, r[i + 2] = (s.random(i + 2 * o) - .5) * t;
				e.attributes.position.needsUpdate = !0
			}
			if (!e) return null;
			for (var r, o, i, n = [], s = this, a = 0; a < e.length; a++)
				if ("lathe" == e[a].type) {
					var l = -99999,
						d = [];
					for (i = e[a].vertices, r = 0; r < i.length; r += 2) d.push(new THREE.Vector2(i[r], i[r + 1])), i[r + 1] > l && (l = i[r + 1]);
					o = new THREE.LatheGeometry(d, e[a].segments || 8), o.applyMatrix4((new THREE.Matrix4).makeRotationFromEuler(new THREE.Euler(-Math.PI, 0, 0))), o.applyMatrix4((new THREE.Matrix4).makeTranslation(0, l, 0)), o = o.toNonIndexed(), n.push(o)
				} else if ("extrude" == e[a].type) {
				var h = new THREE.Shape;
				for (i = e[a].vertices, r = 0; r < i.length; r += 2) 0 == r ? h.moveTo(i[r], i[r + 1]) : h.lineTo(i[r], i[r + 1]);
				o = new THREE.ExtrudeGeometry(h, {
					amount: 1,
					bevelEnabled: !1
				}), o.applyMatrix4((new THREE.Matrix4).makeRotationFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0))), e[a].noise && t(o, e[a].noise), n.push(o)
			} else if ("mesh" == e[a].type) {
				o = new THREE.BufferGeometry, i = e[a].vertices;
				var g = e[a].faces,
					u = new Float32Array(i);
				if (o.setIndex(g), o.setAttribute("position", new THREE.BufferAttribute(u, 3)), e[a].mirror) {
					var c = o.clone();
					c.applyMatrix4((new THREE.Matrix4).makeRotationFromEuler(new THREE.Euler(0, Math.PI, 0)));
					var m = THREE.BufferGeometryUtils.mergeGeometries || THREE.BufferGeometryUtils.mergeBufferGeometries;
					o = m([o, c])
				}
				e[a].noise && t(o, e[a].noise), o = o.toNonIndexed(), o.computeVertexNormals(), n.push(o)
			}
			return n
		},
		updateDressing: function () {
			var e = new THREE.Object3D,
				t = [];
			if (this.dressing.setAttribute("visible", "none" != this.environmentData.dressing), "none" != this.environmentData.dressing) {
				var r;
				switch (this.environmentData.dressing) {
					case "cubes":
						r = [new THREE.BoxGeometry(1, 1, 1)], r[0].applyMatrix4((new THREE.Matrix4).makeTranslation(0, .5, 0));
						break;
					case "pyramids":
						r = [new THREE.ConeGeometry(1, 1, 4, 1, !0)], r[0].applyMatrix4((new THREE.Matrix4).makeTranslation(0, .5, 0));
						break;
					case "cylinders":
						r = [new THREE.CylinderGeometry(.5, .5, 1, 8, 1, !0)], r[0].applyMatrix4((new THREE.Matrix4).makeTranslation(0, .5, 0));
						break;
					default:
						if (r = this.getAssetGeometry(this.assets[this.environmentData.dressing]), !r) return
				}
				for (var o = 0, i = 88343; o < this.environmentData.dressingAmount; o++, i++) {
					var n, s = r[Math.floor(this.random(33 + o) * r.length)].clone(),
						a = this.environmentData.dressingScale,
						l = new THREE.Vector3(this.environmentData.dressingVariance.x, this.environmentData.dressingVariance.y, this.environmentData.dressingVariance.z),
						d = this.random(i) < this.environmentData.dressingOnPlayArea;
					n = d ? 15 * this.random(i + 1) : 10 + Math.max(l.x, l.z) + 10 * this.random(i + 1) + this.random(i + 2) * this.STAGE_SIZE / 3;
					var h = this.random(i + 3) * Math.PI * 2,
						g = new THREE.Matrix4,
						u = this.random(i + 4),
						c = this.environmentData.dressingUniformScale;
					g.compose(new THREE.Vector3(Math.cos(h) * n, 0, Math.sin(h) * n), (new THREE.Quaternion).setFromAxisAngle(new THREE.Vector3(0, 1, 0), (this.random(i + 5) - .5) * l.length() * Math.PI * 2), new THREE.Vector3(a + (c ? u : this.random(i + 6)) * l.x, a + (c ? u : this.random(i + 7)) * l.y, a + (c ? u : this.random(i + 8)) * l.z)), s.applyMatrix4(g), t.push(s)
				}
				var m = THREE.BufferGeometryUtils.mergeGeometries || THREE.BufferGeometryUtils.mergeBufferGeometries,
					f = m(t);
				f.attributes.position.needsUpdate = !0;
				var p = new THREE.MeshLambertMaterial({
					color: new THREE.Color(this.environmentData.dressingColor)
				});
				this.rendererSystem.applyColorCorrection(p.color);
				var y = new THREE.Mesh(f, p);
				e.add(y), this.dressing.setObject3D("mesh", e)
			}
		},
		createStars: function () {
			for (var e = 2e3, t = new THREE.BufferGeometry, r = new Float32Array(3 * e), o = this.STAGE_SIZE - 1, i = new THREE.Vector3, n = 0; n < r.length; n += 3) i.set(this.random(n + 23) - .5, this.random(n + 24), this.random(n + 25) - .5), i.normalize(), i.multiplyScalar(o), r[n] = i.x, r[n + 1] = i.y, r[n + 2] = i.z;
			t.setAttribute("position", new THREE.BufferAttribute(r, 3)), t.setDrawRange(0, 0);
			var s = new THREE.PointsMaterial({
				size: .01,
				color: 13421772,
				fog: !1
			});
			this.rendererSystem.applyColorCorrection(s.color), this.stars.setObject3D("mesh", new THREE.Points(t, s))
		},
		removeStars: function () {
			if (this.stars) {
				var e = this.stars.getObject3D("mesh");
				e.material.dispose(), e.geometry.dispose(), this.el.removeChild(this.stars), this.stars = null
			}
		},
		setStars: function (e) {
			e = Math.floor(Math.min(2e3, Math.max(0, e))), 0 === e ? this.removeStars() : (this.stars || (this.stars = document.createElement("a-entity"), this.stars.id = "stars", this.createStars(), this.el.appendChild(this.stars)), this.stars.getObject3D("mesh").geometry.setDrawRange(0, e))
		}
	}), 
	// 	AFRAME.registerShader("skyshader", {
	// 	schema: {
	// 		exposureBias: {
	// 			type: "number",
	// 			default: 1,
	// 			min: 0,
	// 			max: 10,
	// 			is: "uniform"
	// 		},
	// 		turbidity: {
	// 			type: "number",
	// 			default: 2,
	// 			min: 0,
	// 			max: 20,
	// 			is: "uniform"
	// 		},
	// 		reileigh: {
	// 			type: "number",
	// 			default: 1,
	// 			min: 0,
	// 			max: 4,
	// 			is: "uniform"
	// 		},
	// 		mieCoefficient: {
	// 			type: "number",
	// 			default: .005,
	// 			min: 0,
	// 			max: .1,
	// 			is: "uniform"
	// 		},
	// 		mieDirectionalG: {
	// 			type: "number",
	// 			default: .8,
	// 			min: 0,
	// 			max: 1,
	// 			is: "uniform"
	// 		},
	// 		// sunPosition: {
	// 		// 	type: "vec3",
	// 		// 	default: {
	// 		// 		x: 0,
	// 		// 		y: 0,
	// 		// 		z: -1
	// 		// 	},
	// 		// 	is: "uniform"
	// 		// },
	// 		// color: {
	// 		// 	type: "color",
	// 		// 	default: "#fff"
	// 		// }
	// 	},
	// 	vertexShader: ["varying vec3 vWorldPosition;", "void main() {", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "vWorldPosition = worldPosition.xyz;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
	// 	fragmentShader: ["#include <common>", "#include <dithering_pars_fragment>", "uniform sampler2D skySampler;", "varying vec3 vWorldPosition;", "vec3 cameraPos = vec3(0., 0., 0.);", "uniform float exposureBias;", "uniform float turbidity;", "uniform float reileigh;", "uniform float mieCoefficient;", "uniform float mieDirectionalG;", "const float e = 2.71828182845904523536028747135266249775724709369995957;", "const float pi = 3.141592653589793238462643383279502884197169;", "const float n = 1.0003;", "const float N = 2.545E25;", "const float pn = 0.035;", "const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);", "const vec3 K = vec3(0.686, 0.678, 0.666);", "const float v = 4.0;", "const float rayleighZenithLength = 8.4E3;", "const float mieZenithLength = 1.25E3;", "const vec3 up = vec3(0.0, 1.0, 0.0);", "const float EE = 1000.0;", "const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;", "const float cutoffAngle = pi/1.95;", "const float steepness = 1.5;", "vec3 totalRayleigh(vec3 lambda)", "{", "return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));", "}", "vec3 simplifiedRayleigh()", "{", "return 0.0005 / vec3(94, 40, 18);", "}", "float rayleighPhase(float cosTheta)", "{   ", "return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));", "}", "vec3 totalMie(vec3 lambda, vec3 K, float T)", "{", "float c = (0.2 * T ) * 10E-18;", "return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;", "}", "float hgPhase(float cosTheta, float g)", "{", "return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));", "}", "float sunIntensity(float zenithAngleCos)", "{", "return EE * max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos))/steepness)));", "}", "// Filmic ToneMapping http://filmicgames.com/archives/75", "float A = 0.15;", "float B = 0.50;", "float C = 0.10;", "float D = 0.20;", "float E = 0.02;", "float F = 0.30;", "float W = 1000.0;", "vec3 Uncharted2Tonemap(vec3 x)", "{", "return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;", "}", "void main() ", "{", "float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);", "float reileighCoefficient = reileigh - (1.0* (1.0-sunfade));", "vec3 sunDirection = normalize(sunPosition);", "float sunE = sunIntensity(dot(sunDirection, up));", "vec3 betaR = simplifiedRayleigh() * reileighCoefficient;", "vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;", "float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));", "float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));", "float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));", "vec3 Fex = exp(-(betaR * sR + betaM * sM));", "float cosTheta = dot(normalize(vWorldPosition - cameraPos), sunDirection);", "float rPhase = rayleighPhase(cosTheta*0.5+0.5);", "vec3 betaRTheta = betaR * rPhase;", "float mPhase = hgPhase(cosTheta, mieDirectionalG);", "vec3 betaMTheta = betaM * mPhase;", "vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));", "Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));", "vec3 direction = normalize(vWorldPosition - cameraPos);", "float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]", "float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]", "vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);", "vec3 L0 = vec3(0.1) * Fex;", "float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);", "L0 += (sunE * 19000.0 * Fex)*sundisk;", "vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));", "vec3 texColor = (Lin+L0);", "texColor *= 0.04;", "texColor += vec3(0.0,0.001,0.0025)*0.3;", "vec3 curr = Uncharted2Tonemap(exposureBias*texColor);", "vec3 color = curr*whiteScale;", "vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));", "gl_FragColor.rgb = retColor;", "gl_FragColor.a = 1.0;", "#include <dithering_fragment>", "}"].join("\n")
	// }), 
		AFRAME.registerShader("gradientshader", {
		schema: {
			topColor: {
				type: "color",
				default: "#ff0000",
				is: "uniform"
			},
			bottomColor: {
				type: "color",
				default: "0 0 1",
				is: "uniform"
			}
		},
		vertexShader: ["varying vec3 vWorldPosition;", "void main() {", " vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", " vWorldPosition = worldPosition.xyz;", " gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );", "}"].join("\n"),
		fragmentShader: ["#include <common>", "#include <dithering_pars_fragment>", "uniform vec3 bottomColor;", "uniform vec3 topColor;", "uniform float offset;", "varying vec3 vWorldPosition;", "void main() {", " float h = normalize( vWorldPosition ).y;", " gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), 0.8 ), 0.0 ) ), 1.0 );", " #include <dithering_fragment>", "}"].join("\n")
	});
	var r = function (e) {
		var t;
		this.grad3 = [
			[1, 1, 0],
			[-1, 1, 0],
			[1, -1, 0],
			[-1, -1, 0],
			[1, 0, 1],
			[-1, 0, 1],
			[1, 0, -1],
			[-1, 0, -1],
			[0, 1, 1],
			[0, -1, 1],
			[0, 1, -1],
			[0, -1, -1]
		], this.p = [];
		var r;
		for (r = 0; r < 256; r++) t = parseFloat("0." + Math.sin(9999 * e * r).toString().substr(7)), this.p[r] = Math.floor(256 * t);
		for (this.perm = [], r = 0; r < 512; r++) this.perm[r] = this.p[255 & r]
	};
	r.prototype.dot = function (e, t, r, o) {
		return e[0] * t + e[1] * r + e[2] * o
	}, r.prototype.mix = function (e, t, r) {
		return (1 - r) * e + r * t
	}, r.prototype.fade = function (e) {
		return e * e * e * (e * (6 * e - 15) + 10)
	}, r.prototype.noise = function (e, t, r) {
		var o = Math.floor(e),
			i = Math.floor(t),
			n = Math.floor(r);
		e -= o, t -= i, r -= n, o &= 255, i &= 255, n &= 255;
		var s = this.perm[o + this.perm[i + this.perm[n]]] % 12,
			a = this.perm[o + this.perm[i + this.perm[n + 1]]] % 12,
			l = this.perm[o + this.perm[i + 1 + this.perm[n]]] % 12,
			d = this.perm[o + this.perm[i + 1 + this.perm[n + 1]]] % 12,
			h = this.perm[o + 1 + this.perm[i + this.perm[n]]] % 12,
			g = this.perm[o + 1 + this.perm[i + this.perm[n + 1]]] % 12,
			u = this.perm[o + 1 + this.perm[i + 1 + this.perm[n]]] % 12,
			c = this.perm[o + 1 + this.perm[i + 1 + this.perm[n + 1]]] % 12,
			m = this.dot(this.grad3[s], e, t, r),
			f = this.dot(this.grad3[h], e - 1, t, r),
			p = this.dot(this.grad3[l], e, t - 1, r),
			y = this.dot(this.grad3[u], e - 1, t - 1, r),
			v = this.dot(this.grad3[a], e, t, r - 1),
			C = this.dot(this.grad3[g], e - 1, t, r - 1),
			E = this.dot(this.grad3[d], e, t - 1, r - 1),
			x = this.dot(this.grad3[c], e - 1, t - 1, r - 1),
			S = this.fade(e),
			T = this.fade(t),
			b = this.fade(r),
			w = this.mix(m, f, S),
			A = this.mix(v, C, S),
			D = this.mix(p, y, S),
			R = this.mix(E, x, S),
			M = this.mix(w, D, T),
			z = this.mix(A, R, T),
			k = this.mix(M, z, b);
		return k
	}
}]);