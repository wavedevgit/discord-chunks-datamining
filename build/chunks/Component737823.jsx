/** Chunk was on 28636 **/
/** chunk id: 737823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => b,
  T4: () => p,
  XQ: () => h,
  Z5: () => m,
  ns: () => u
});
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk397927 = require("./397927.js"),
  Chunk982339 = require("./982339.js");

function u(e) {
  let {
    scrollPosition: t
  } = e;
  return (0, a.jsx)(c.animated.div, {
    className: d.tB,
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
    className: d.Kk,
    color: o.LU0.colors.TEXT_STRONG,
    size: "md"
  })
}

function h(e) {
  let {
    onClick: t,
    icon: n
  } = e;
  return (0, a.jsx)(o.DUT, {
    className: d.gb,
    onClick: t,
    children: (0, a.jsx)(n, {
      color: "currentColor",
      size: "sm"
    })
  })
}
var m = ((l = {}).OVERLAY = "overlay", l.RELATIVE = "relative", l);

function b(e) {
  let {
    className: t,
    variant: n,
    children: l
  } = e, i = r.useMemo(() => "overlay" === n ? d.Lw : d.V8, [n]);
  return (0, a.jsx)("div", {
    className: s()(d.jr, i, t),
    children: l
  })
}