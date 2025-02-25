/** Chunk was on 79120 **/
"use strict";
n.d(t, {
  Z: () => o
}), n(47120);
var r = n(192379),
  l = n(81063);
let i = ["embedded_cover", "embedded_background"];

function o(e) {
  let {
    applicationId: t,
    size: n,
    names: o = i
  } = e, [a, s] = r.useState(null), [c, u] = r.useState(!0), d = (0, l.getAssetImage)(t, a, n), f = r.useRef(o);
  return r.useEffect(() => {
    f.current = o
  }), r.useEffect(() => {
    let {
      current: e
    } = f;
    null != t && (0, l.getAssets)(t).then(t => {
      for (let [n, r] of(u(!1), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) {
          s(r.id);
          return
        }
    })
  }, [t]), {
    url: d,
    state: c ? "loading" : null != d ? "fetched" : "not-found"
  }
}