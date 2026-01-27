/** Chunk was on web.js **/
/** chunk id: 93532, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009);
async function a(e) {
  let t, {
      default: r
    } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
    a = r.createFile(false),
    o = new Promise(e => {
      a.onReady = e
    }),
    s = await e.arrayBuffer();
  for (let e of (s.fileStart = 0, a.appendBuffer(s), a.flush(), await o, i()(null != a.boxes, "mp4boxInputFile.boxes should not be null after parsing"), a.boxes)) "uuid" === e.type && (t = e.start);
  let l = e.slice(0, t, e.type),
    c = e.slice(t + 4, t + 8 + 16, e.type);
  return new Blob([l, new Uint8Array([0, 0, 0, 24]), c], {
    type: e.type
  })
}