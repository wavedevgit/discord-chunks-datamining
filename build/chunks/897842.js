/** Chunk was on 93886 **/
n.d(t, {
  A: () => u,
  default: () => m
});
var r = n(200651);
n(192379);
var a = n(120356),
  i = n.n(a),
  l = n(466377),
  o = n(310752),
  s = n(313201),
  c = n(731994),
  d = n(223692);
let u = "UPLOAD_ERROR_MODAL_KEY",
  m = e => {
    let {
      title: t,
      help: n,
      transitionState: a
    } = e, u = (0, s.Dt)();
    return (0, r.jsx)(l.Y0, {
      size: l.Cg.DYNAMIC,
      "aria-labelledby": u,
      transitionState: a,
      children: (0, r.jsx)("div", {
        className: i()(d.uploadModal, d.errorModal),
        children: (0, r.jsxs)("div", {
          className: d.inner,
          children: [(0, r.jsx)(o.Z, {
            icons: c.J6
          }), (0, r.jsx)("div", {
            id: u,
            className: d.title,
            children: t
          }), (0, r.jsx)("div", {
            className: d.instructions,
            children: n
          })]
        })
      })
    })
  }