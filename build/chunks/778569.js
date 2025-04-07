/** Chunk was on 23491 **/
n.d(t, {
  Z: () => o
}), n(388685);
var i = n(192379),
  r = n(81063);
let l = ["embedded_cover", "embedded_background"];

function o(e) {
  let {
    applicationId: t,
    size: n,
    names: o = l
  } = e, [c, a] = i.useState(null), [u, d] = i.useState(!0), s = (0, r.xF)(t, c, n), p = i.useRef(o);
  return i.useEffect(() => {
    p.current = o
  }), i.useEffect(() => {
    let {
      current: e
    } = p;
    null != t && (0, r.Vh)(t).then(t => {
      for (let [n, i] of(d(!1), Object.entries(t)))
        if (null != i && "" !== i.id && e.includes(i.name)) return void a(i.id)
    })
  }, [t]), {
    url: s,
    state: u ? "loading" : null != s ? "fetched" : "not-found"
  }
}