const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-f1ab8989.js","js":["start-f1ab8989.js","chunks/index-3f446b4a.js","chunks/preload-helper-e4860ae8.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "grid",
				pattern: /^\/grid\/?$/,
				names: [],
				types: [],
				path: "/grid",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "ren",
				pattern: /^\/ren\/?$/,
				names: [],
				types: [],
				path: "/ren",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
