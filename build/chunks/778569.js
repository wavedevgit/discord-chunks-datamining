/** Chunk was on web.js **/
/** chunk id: 778569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk81063 = require("./81063.js");
let a = ["embedded_cover", "embedded_background"];

function o(e) {
  let {
    applicationId: t,
    size: n,
    names: o = a,
    format: s = "png"
  } = e, [l, c] = r.useState(null), [u, d] = r.useState(true), f = (0, i.xF)(t, l, n, s), _ = u ? "loading" : null != f ? "fetched" : "not-found", p = r.useRef(o);
  return r.useEffect(() => {
    p.current = o
  }), r.useEffect(() => {
    let {
      current: e
    } = p;
    null != t && (0, i.Vh)(t).then(t => {
      for (let [n, r] of(d(false), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
    })
  }, [t]), {
    url: f,
    state: _
  }
}