/** Chunk was on 36526 **/
n.d(t, {
  Z: () => i
}), n(388685);
var r = n(192379),
  l = n(81063);
let u = ["embedded_cover", "embedded_background"];

function i(e) {
  let {
    applicationId: t,
    size: n,
    names: i = u
  } = e, [o, c] = r.useState(null), [a, s] = r.useState(!0), d = (0, l.xF)(t, o, n), p = r.useRef(i);
  return r.useEffect(() => {
    p.current = i
  }), r.useEffect(() => {
    let {
      current: e
    } = p;
    null != t && (0, l.Vh)(t).then(t => {
      for (let [n, r] of(s(!1), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
    })
  }, [t]), {
    url: d,
    state: a ? "loading" : null != d ? "fetched" : "not-found"
  }
}