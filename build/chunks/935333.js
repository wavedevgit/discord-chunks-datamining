/** Chunk was on 16169 (100410ba0a7c3046.js) **/
s.d(e, {
  default: () => c
}), s(266796);
var i = s(200651),
  n = s(192379),
  a = s(481060),
  l = s(388032),
  r = s(488861);
let c = t => {
  let {
    transitionState: e,
    processFiles: s,
    onClose: c
  } = t;
  return n.useEffect(() => {
    (async () => {
      e === a.Dvm.ENTERED && (await s(), c())
    })()
  }, [c, s, e]), (0, i.jsx)(a.Y0X, {
    transitionState: e,
    size: a.CgR.SMALL,
    "aria-label": l.NW.string(l.t["B/HSDQ"]),
    children: (0, i.jsxs)(a.hzk, {
      className: r.modalContent,
      children: [(0, i.jsx)(a.$jN, {
        className: r.spinner
      }), (0, i.jsx)(a.hjN, {
        tag: a.RB0.H1,
        titleClassName: r.title,
        title: l.NW.string(l.t["B/HSDQ"]),
        className: r.__invalid_content,
        children: (0, i.jsx)(a.R94, {
          type: a.geA.DESCRIPTION,
          className: r.description,
          children: l.NW.string(l.t.k7OALi)
        })
      })]
    })
  })
}