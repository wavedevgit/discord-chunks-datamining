/** Chunk was on 93886 **/
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(347469),
  s = n(899812);

function c(e) {
  let {
    resizableNode: t,
    minHeight: n,
    onResize: a
  } = e, i = (0, o.Z)({
    minDimension: n,
    resizableDomNodeRef: t,
    onElementResize: a,
    orientation: o.y.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, r.jsx)("div", {
    onPointerDown: i,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: n,
    initialHeight: i,
    minHeight: o
  } = e, d = a.useRef(null), [u, m] = a.useState(i);
  return (0, r.jsxs)("div", {
    ref: d,
    className: s.container,
    style: {
      minHeight: o,
      height: u
    },
    children: [(0, r.jsx)(c, {
      resizableNode: d,
      minHeight: o,
      onResize: m
    }), (0, r.jsx)("div", {
      className: l()(s.subPanelContent, n),
      children: t
    })]
  })
}