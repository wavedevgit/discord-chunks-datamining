/** Chunk was on web.js **/
/** chunk id: 763673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk289397 = require("./289397.js"),
  Chunk723702 = require("./723702.js"),
  Chunk581057 = require("./581057.js");

function c(e) {
  let {
    getImgCache: t
  } = (0, l.TW)(), n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
  return (0, r.useMemo)(() => {
    var r, i, a;
    let l = (0, s.n)("collectibles/".concat(e.src, "img.png")),
      c = (0, s.n)("collectibles/".concat(e.src, "asset.webm")),
      u = (0, s.n)("collectibles/".concat(e.src, "static.png"));
    if (e.preview) return {
      staticAsset: null == (i = t(e.src)) ? true : i.staticUrl,
      animatedAsset: null == (a = t(e.src)) ? true : a.animatedUrl
    };
    let d = (null != (r = platform.name) ? r : "unknown").toLowerCase();
    return {
      staticAsset: u,
      animatedAsset: n || (0, o.isLinux)() || "safari" === d ? l : c
    }
  }, [e.preview, e.src, t, n])
}