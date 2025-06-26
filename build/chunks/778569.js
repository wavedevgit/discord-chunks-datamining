/** Chunk was on 91396 **/
t.d(n, {
  Z: () => i
}), t(388685);
var o = t(73800),
  r = t(81063);
let a = ["embedded_cover", "embedded_background"];

function i(e) {
  let {
    applicationId: n,
    size: t,
    names: i = a
  } = e, [c, l] = o.useState(null), [d, s] = o.useState(!0), p = (0, r.xF)(n, c, t), u = o.useRef(i);
  return o.useEffect(() => {
    u.current = i
  }), o.useEffect(() => {
    let {
      current: e
    } = u;
    null != n && (0, r.Vh)(n).then(n => {
      for (let [t, o] of(s(!1), Object.entries(n)))
        if (null != o && "" !== o.id && e.includes(o.name)) return void l(o.id)
    })
  }, [n]), {
    url: p,
    state: d ? "loading" : null != p ? "fetched" : "not-found"
  }
}