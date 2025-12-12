/** Chunk was on web.js **/
/** chunk id: 690725, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  f: () => a
}), require("./415506.js");
var Chunk4646 = require("./4646.js"),
  Chunk665672 = require("./665672.js");
try {
  r = require(Object(function() {
    var e = Error("Cannot find module '@shopify/react-native-skia'");
    throw module.code = "MODULE_NOT_FOUND", module
  }())).Skia
} catch (e) {
  r = null
}
async function a(e) {
  let {
    assetsToLoad: t,
    drawImage: r,
    exportConfigs: a
  } = e, s = await (0, i.k2)(t);
  await s.loadFonts();
  {
    let e = n(503082).Z,
      t = n(97008).Z,
      i = document.createElement("canvas"),
      l = new e(i, s),
      c = new t,
      u = new o.Z(l, c);
    r(u.canvas);
    let d = await u.export(a);
    return i.remove(), d
  }
}