/** Chunk was on web.js **/
/** chunk id: 778569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk81063 = require("./81063.js");
let o = ["embedded_cover", "embedded_background"];

function a(e) {
  let {
    applicationId: t,
    size: n,
    names: a = o,
    format: s = "png"
  } = e, [l, c] = r.useState(null), [u, d] = r.useState(true), f = (0, i.xF)(t, l, n, s), p = u ? "loading" : null != f ? "fetched" : "not-found", _ = r.useRef(a);
  return r.useEffect(() => {
    _.current = a
  }), r.useEffect(() => {
    let {
      current: e
    } = _;
    null != t && (0, i.Vh)(t).then(t => {
      for (let [n, r] of(d(false), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
    })
  }, [t]), {
    url: f,
    state: p
  }
}