/** Chunk was on web.js **/
/** chunk id: 690725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => a
}), require("./415506.js");
var Chunk4646 = require("./4646.js"),
  Chunk665672 = require("./665672.js");
async function a(e) {
  let {
    assetsToLoad: t,
    drawImage: a,
    exportConfigs: o
  } = e, s = await (0, r.k2)(t);
  await s.loadFonts();
  {
    let e = n(503082).Z,
      t = n(97008).Z,
      r = document.createElement("canvas"),
      l = new e(r, s),
      c = new t,
      u = new i.Z(l, c);
    a(u.canvas);
    let d = await u.export(o);
    return r.remove(), d
  }
}