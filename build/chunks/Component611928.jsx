/** Chunk was on 92504 **/
/** chunk id: 611928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cm: () => m,
  ZP: () => f,
  _6: () => h,
  aV: () => p,
  z6: () => u
});
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk807794 = require("./807794.js"),
  Chunk481060 = require("./481060.js"),
  Chunk748650 = require("./748650.js");

function u(e) {
  let {
    scrollPosition: t
  } = e;
  return (0, r.jsx)(o.animated.div, {
    className: d.backdrop,
    style: {
      opacity: null == t ? true : t.to([0, 100], [0, 1])
    }
  })
}

function p(e) {
  let {
    icon: t
  } = e;
  return (0, r.jsx)(t, {
    className: d.icon,
    color: c.TVs.colors.TEXT_STRONG,
    size: "md"
  })
}

function m(e) {
  let {
    onClick: t,
    icon: n
  } = e;
  return (0, r.jsx)(c.P3F, {
    className: d.iconButton,
    onClick: t,
    children: (0, r.jsx)(n, {
      color: "currentColor",
      size: "sm"
    })
  })
}
var h = ((a = {}).OVERLAY = "overlay", a.RELATIVE = "relative", a);

function f(e) {
  let {
    className: t,
    variant: n,
    children: a
  } = e, l = i.useMemo(() => "overlay" === n ? d.overlay : d.relative, [n]);
  return (0, r.jsx)("div", {
    className: s()(d.headerBar, l, t),
    children: a
  })
}