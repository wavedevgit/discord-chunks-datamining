/** Chunk was on web.js **/
"use strict";
n.d(t, {
  z: () => f
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(642128),
  l = n(481060),
  c = n(393238),
  u = n(329332);
let d = 100;

function f(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: o,
    isExpanded: f
  } = e, [_, p] = i.useState(!1), [h, m] = i.useState(!0), [g, E] = i.useState(!1), v = null != f ? f : _, {
    ref: b,
    height: y = 0
  } = (0, c.Z)(), {
    ref: O,
    height: I = 0
  } = (0, c.Z)(), S = (0, l.q_F)({
    height: v ? y + I : I,
    config: s.config.stiff,
    onRest: () => E(!0)
  }, h ? "animate-never" : "respect-motion-settings"), T = i.useCallback(() => {
    p(!_)
  }, [_, p]);
  return i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      m(!1)
    }, d);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)("div", {
    className: a()(u.collapseable, {
      [u.toggled]: v
    }, n),
    children: (0, r.jsxs)(s.animated.div, {
      className: a()(u.contentExpandContainer, {
        [u.showOverflow]: v && g
      }),
      style: S,
      children: [(0, r.jsx)("div", {
        ref: O,
        className: a()(u.header, {
          [u.toggled]: v
        }),
        children: t({
          onClick: T
        })
      }), (0, r.jsx)("div", {
        ref: b,
        children: o
      })]
    })
  })
}