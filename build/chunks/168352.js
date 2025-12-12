/** Chunk was on web.js **/
/** chunk id: 168352, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk357352 = require("./357352.js"),
  Chunk358085 = require("./358085.js"),
  Chunk396821 = require("./396821.js");

function c(e) {
  let {
    getImgCache: t
  } = (0, l.W_)(), n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, r.useMemo)(() => {
    var r, i, o;
    let l = (0, a.b)("collectibles/".concat(e.src, "img.png")),
      c = (0, a.b)("collectibles/".concat(e.src, "asset.webm")),
      u = (0, a.b)("collectibles/".concat(e.src, "static.png"));
    if (e.preview) return {
      staticAsset: null == (r = t(e.src)) ? true : r.staticUrl,
      animatedAsset: null == (i = t(e.src)) ? true : i.animatedUrl
    };
    let d = (null != (o = platform.name) ? o : "unknown").toLowerCase();
    return {
      staticAsset: u,
      animatedAsset: n || (0, s.isLinux)() || "safari" === d ? l : c
    }
  }, [e.preview, e.src, t, n])
}