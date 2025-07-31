/** Chunk was on 91396 **/
t.d(n, {
  Z: () => a
}), t(388685);
var o = t(73800),
  r = t(81063);
let i = ["embedded_cover", "embedded_background"];

function a(e) {
  let {
    applicationId: n,
    size: t,
    names: a = i
  } = e, [c, l] = o.useState(null), [d, s] = o.useState(!0), p = (0, r.xF)(n, c, t), b = o.useRef(a);
  return o.useEffect(() => {
    b.current = a
  }), o.useEffect(() => {
    let {
      current: e
    } = b;
    null != n && (0, r.Vh)(n).then(n => {
      for (let [t, o] of(s(!1), Object.entries(n)))
        if (null != o && "" !== o.id && e.includes(o.name)) return void l(o.id)
    })
  }, [n]), {
    url: p,
    state: d ? "loading" : null != p ? "fetched" : "not-found"
  }
}