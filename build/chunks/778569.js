/** Chunk was on 13368 **/
/** chunk id: 778569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk81063 = require("./81063.js");
let o = ["embedded_cover", "embedded_background"];

function l(e) {
  let {
    applicationId: t,
    size: n,
    names: l = o
  } = e, [a, c] = r.useState(null), [u, s] = r.useState(true), d = (0, i.xF)(t, a, n), f = r.useRef(l);
  return r.useEffect(() => {
    f.current = l
  }), r.useEffect(() => {
    let {
      current: e
    } = f;
    null != t && (0, i.Vh)(t).then(t => {
      for (let [n, r] of(s(false), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
    })
  }, [t]), {
    url: d,
    state: u ? "loading" : null != d ? "fetched" : "not-found"
  }
}