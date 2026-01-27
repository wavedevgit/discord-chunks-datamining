/** Chunk was on web.js **/
/** chunk id: 686189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk253932 = require("./253932.js"),
  Chunk486020 = require("./486020.js");

function o(e) {
  let {
    displayProfile: t,
    size: n,
    canAnimate: o,
    pendingBanner: s
  } = e, l = i.kt.getSetting(), c = null == t ? true : t.getPreviewBanner(s, o, n), [u, d] = (0, r.useState)((null == t ? true : t.banner) == null ? "COMPLETE" : "SHOULD_LOAD");
  return (0, r.useEffect)(() => {
    if (null == c || "SHOULD_LOAD" !== u) return;
    d("LOADING");
    let e = new Image;
    e.src = c, e.onload = () => d("COMPLETE")
  }, [c, u]), (0, r.useEffect)(() => {
    if (l) return;
    let e = null == t ? true : t.getPreviewBanner(s, true, n);
    null != e && (0, a.o4)(e) && (new Image().src = e)
  }, [l, t, n, s]), {
    bannerSrc: c,
    status: u
  }
}