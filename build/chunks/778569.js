/** Chunk was on 13368 **/
n.d(t, {
  Z: () => o
}), n(47120);
var a = n(192379),
  i = n(81063);
let r = ["embedded_cover", "embedded_background"];

function o(e) {
  let {
    applicationId: t,
    size: n,
    names: o = r
  } = e, [l, c] = a.useState(null), [_, s] = a.useState(!0), u = (0, i.xF)(t, l, n), d = a.useRef(o);
  return a.useEffect(() => {
    d.current = o
  }), a.useEffect(() => {
    let {
      current: e
    } = d;
    null != t && (0, i.Vh)(t).then(t => {
      for (let [n, a] of(s(!1), Object.entries(t)))
        if (null != a && "" !== a.id && e.includes(a.name)) {
          c(a.id);
          return
        }
    })
  }, [t]), {
    url: u,
    state: _ ? "loading" : null != u ? "fetched" : "not-found"
  }
}