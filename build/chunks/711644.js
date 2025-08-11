/** Chunk was on web.js **/
/** chunk id: 711644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722);
async function o(e) {
  let t, {
      default: r
    } = await n.e("32990").then(n.t.bind(n, 735630, 19)),
    o = r.createFile(false),
    a = new Promise(e => {
      o.onReady = e
    }),
    s = await e.arrayBuffer();
  for (let e of (s.fileStart = 0, o.appendBuffer(s), o.flush(), await a, i()(null != o.boxes, "mp4boxInputFile.boxes should not be null after parsing"), o.boxes)) "uuid" === e.type && (t = e.start);
  let l = e.slice(0, t, e.type),
    c = e.slice(t + 4, t + 8 + 16, e.type);
  return new Blob([l, new Uint8Array([0, 0, 0, 24]), c], {
    type: e.type
  })
}