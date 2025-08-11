/** Chunk was on web.js **/
/** chunk id: 778569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk81063 = require("./81063.js");
let o = ["embedded_cover", "embedded_background"];

function a(e) {
  let {
    applicationId: t,
    size: n,
    names: a = o
  } = e, [s, l] = r.useState(null), [c, u] = r.useState(true), d = (0, i.xF)(t, s, n), f = c ? "loading" : null != d ? "fetched" : "not-found", _ = r.useRef(a);
  return r.useEffect(() => {
    _.current = a
  }), r.useEffect(() => {
    let {
      current: e
    } = _;
    null != t && (0, i.Vh)(t).then(t => {
      for (let [n, r] of(u(false), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void l(r.id)
    })
  }, [t]), {
    url: d,
    state: f
  }
}