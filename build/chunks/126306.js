/** Chunk was on web.js **/
"use strict";
n.d(t, {
  l: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(846519),
  l = n(186325),
  c = n(630588);
let u = 200;
var d = function(e) {
  return e[e.TRANSLATE = 1] = "TRANSLATE", e[e.SCALE = 2] = "SCALE", e[e.FADE = 3] = "FADE", e
}(d || {});
let f = Object.freeze({
    1: c.translate,
    2: c.scale,
    3: c.fade
  }),
  _ = Object.freeze({
    top: c.animatorTop,
    bottom: c.animatorBottom,
    left: c.animatorLeft,
    right: c.animatorRight,
    center: c.animatorCenter,
    window_center: c.animatorCenter
  });

function p(e) {
  let {
    position: t,
    type: n,
    children: o
  } = e, {
    reducedMotion: d
  } = i.useContext(l.S), p = d.enabled ? 3 : n, [h, g] = i.useState(null != t), [m] = i.useState(() => new s.V7), [E, v] = i.useState(!0), b = i.useRef(null);
  return i.useLayoutEffect(() => {
    var e;
    null === (e = b.current) || void 0 === e || e.addEventListener("transitionend", () => {
      v(!1)
    }), setTimeout(() => {
      v(!1)
    }, u)
  }, []), i.useEffect(() => () => m.stop(), [m]), i.useEffect(() => {
    null != t && m.start(10, () => g(!0))
  }, [t, m]), (0, r.jsx)("div", {
    "data-popout-animating": E,
    className: a()(null != t ? _[t] : null, {
      [f[p]]: null != t,
      [c.didRender]: h
    }),
    children: o
  })
}
p.Types = d