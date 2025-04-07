/** Chunk was on 87038 **/
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
  } = e, [c, a] = i.useState(null), [u, d] = i.useState(!0), p = (0, r.xF)(t, c, n), s = i.useRef(o);
  return i.useEffect(() => {
    s.current = o
  }), i.useEffect(() => {
    let {
      current: e
    } = s;
    null != t && (0, r.Vh)(t).then(t => {
      for (let [n, i] of(d(!1), Object.entries(t)))
        if (null != i && "" !== i.id && e.includes(i.name)) return void a(i.id)
    })
  }, [t]), {
    url: p,
    state: u ? "loading" : null != p ? "fetched" : "not-found"
  }
}