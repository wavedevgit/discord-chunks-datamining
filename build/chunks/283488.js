/** Chunk was on web.js **/
/** chunk id: 283488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk139675 = require("./139675.js");
let a = ["embedded_cover", "embedded_background"];

function s(e) {
  let {
    applicationId: t,
    size: n,
    names: s = a,
    format: o = "png"
  } = e, [l, c] = r.useState(null), [u, d] = r.useState(true), f = (0, i.uD)(t, l, n, o), p = u ? "loading" : null != f ? "fetched" : "not-found", _ = r.useRef(s);
  return r.useEffect(() => {
    _.current = s
  }), r.useEffect(() => {
    let {
      current: e
    } = _;
    null != t && (0, i.Y)(t).then(t => {
      for (let [n, r] of(d(false), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
    })
  }, [t]), {
    url: f,
    state: p
  }
}