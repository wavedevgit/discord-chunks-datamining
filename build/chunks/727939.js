/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(112724),
  a = n(241915),
  s = n(981631);
let l = 48,
  c = 32,
  u = 32,
  d = 32;

function f(e) {
  let {
    className: t,
    defaultPosition: n = s.VD2.BOTTOM_RIGHT,
    children: o,
    width: f,
    height: _
  } = e, [p, h] = i.useState(n);
  return (0, r.jsx)(a._, {
    className: t,
    position: p,
    id: 0,
    onMove: (e, t) => h(t),
    maxX: f,
    maxY: _,
    edgeOffsetTop: l,
    edgeOffsetBottom: c,
    edgeOffsetLeft: u,
    edgeOffsetRight: d,
    children: o
  })
}
let _ = (0, o.Z)(f)