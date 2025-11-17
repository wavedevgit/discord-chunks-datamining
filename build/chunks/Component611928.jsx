/** Chunk was on 69844 **/
/** chunk id: 611928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cm: () => m,
  ZP: () => g,
  _6: () => h,
  aV: () => p,
  z6: () => u
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk878342 = require("./878342.js"),
  Chunk481060 = require("./481060.js"),
  Chunk20379 = require("./20379.js");

function u(e) {
  let {
    scrollPosition: t
  } = e;
  return (0, a.jsx)(o.animated.div, {
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
  return (0, a.jsx)(t, {
    className: d.icon,
    color: c.TVs.colors.HEADER_PRIMARY,
    size: "md"
  })
}

function m(e) {
  let {
    onClick: t,
    icon: n
  } = e;
  return (0, a.jsx)(c.P3F, {
    className: d.iconButton,
    onClick: t,
    children: (0, a.jsx)(n, {
      color: "currentColor",
      size: "sm"
    })
  })
}
var h = ((r = {}).OVERLAY = "overlay", r.RELATIVE = "relative", r);

function g(e) {
  let {
    className: t,
    variant: n,
    children: r
  } = e, l = i.useMemo(() => "overlay" === n ? d.overlay : d.relative, [n]);
  return (0, a.jsx)("div", {
    className: s()(d.headerBar, l, t),
    children: r
  })
}