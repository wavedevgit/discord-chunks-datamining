/** Chunk was on 69400 **/
n.d(t, {
  Z: () => i
}), n(388685);
var r = n(73800),
  l = n(81063);
let o = ["embedded_cover", "embedded_background"];

function i(e) {
  let {
    applicationId: t,
    size: n,
    names: i = o
  } = e, [u, c] = r.useState(null), [a, s] = r.useState(!0), f = (0, l.xF)(t, u, n), d = r.useRef(i);
  return r.useEffect(() => {
    d.current = i
  }), r.useEffect(() => {
    let {
      current: e
    } = d;
    null != t && (0, l.Vh)(t).then(t => {
      for (let [n, r] of(s(!1), Object.entries(t)))
        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id)
    })
  }, [t]), {
    url: f,
    state: a ? "loading" : null != f ? "fetched" : "not-found"
  }
}