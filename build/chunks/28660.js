/** Chunk was on web.js **/
/** chunk id: 28660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk695346 = require("./695346.js"),
  Chunk768581 = require("./768581.js");

function o(e) {
  let {
    displayProfile: t,
    size: n,
    canAnimate: o,
    pendingBanner: s
  } = e, l = i.QK.getSetting(), c = null == t ? true : t.getPreviewBanner(s, o, n), [u, d] = (0, r.useState)((null == t ? true : t.banner) == null ? "COMPLETE" : "SHOULD_LOAD");
  return (0, r.useEffect)(() => {
    if (null == c || "SHOULD_LOAD" !== u) return;
    d("LOADING");
    let e = new Image;
    e.src = c, e.onload = () => d("COMPLETE")
  }, [c, u]), (0, r.useEffect)(() => {
    if (l) return;
    let e = null == t ? true : t.getPreviewBanner(s, true, n);
    null != e && (0, a.F8)(e) && (new Image().src = e)
  }, [l, t, n, s]), {
    bannerSrc: c,
    status: u
  }
}