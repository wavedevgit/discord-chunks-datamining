/** Chunk was on web.js **/
/** chunk id: 690725, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  f: () => o
}), require("./415506.js");
var Chunk4646 = require("./4646.js"),
  Chunk665672 = require("./665672.js");
try {
  r = require(Object(function() {
    var e = Error("Cannot find module '@shopify/react-native-skia'");
    throw e.code = "MODULE_NOT_FOUND", e
  }())).Skia
} catch (e) {
  r = null
}
async function o(e) {
  let {
    assetsToLoad: t,
    drawImage: r,
    exportConfigs: o
  } = e, s = await (0, i.k2)(t);
  await s.loadFonts();
  {
    let e = n(503082).Z,
      t = n(97008).Z,
      i = document.createElement("canvas"),
      l = new e(i, s),
      c = new t,
      u = new a.Z(l, c);
    r(u.canvas);
    let d = await u.export(o);
    return i.remove(), d
  }
}