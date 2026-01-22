/** Chunk was on web.js **/
/** chunk id: 816334, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  r: () => s
}), require("./65821.js");
var Chunk283639 = require("./283639.js"),
  Chunk913589 = require("./913589.js");
try {
  r = require(Object(function() {
    var e = Error("Cannot find module '@shopify/react-native-skia'");
    throw e.code = "MODULE_NOT_FOUND", e
  }())).Skia
} catch (e) {
  r = null
}
async function s(e) {
  let {
    assetsToLoad: t,
    drawImage: r,
    exportConfigs: s
  } = e, o = await (0, i.h9)(t);
  await o.loadFonts();
  {
    let e = n(507428).A,
      t = n(684266).A,
      i = document.createElement("canvas"),
      l = new e(i, o),
      c = new t,
      u = new a.A(l, c);
    r(u.canvas);
    let d = await u.export(s);
    return i.remove(), d
  }
}