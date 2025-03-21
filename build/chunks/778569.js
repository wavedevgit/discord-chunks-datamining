/** Chunk was on 98977 **/
n.d(e, {
  Z: () => l
}), n(47120);
var r = n(192379),
  s = n(81063);
let i = ["embedded_cover", "embedded_background"];

function l(t) {
  let {
    applicationId: e,
    size: n,
    names: l = i
  } = t, [a, u] = r.useState(null), [o, c] = r.useState(!0), d = (0, s.xF)(e, a, n), A = r.useRef(l);
  return r.useEffect(() => {
    A.current = l
  }), r.useEffect(() => {
    let {
      current: t
    } = A;
    null != e && (0, s.Vh)(e).then(e => {
      for (let [n, r] of(c(!1), Object.entries(e)))
        if (null != r && "" !== r.id && t.includes(r.name)) {
          u(r.id);
          return
        }
    })
  }, [e]), {
    url: d,
    state: o ? "loading" : null != d ? "fetched" : "not-found"
  }
}