/** Chunk was on 28636 **/
/** chunk id: 737823, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => g,
  T4: () => p,
  XQ: () => h,
  Z5: () => m,
  ns: () => u
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk982339 = require("./982339.js");

function u(e) {
  let {
    scrollPosition: t
  } = e;
  return (0, l.jsx)(o.animated.div, {
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
  return (0, l.jsx)(t, {
    className: d.Kk,
    color: c.LU0.colors.TEXT_STRONG,
    size: "md"
  })
}

function h(e) {
  let {
    onClick: t,
    icon: n
  } = e;
  return (0, l.jsx)(c.DUT, {
    className: d.gb,
    onClick: t,
    children: (0, l.jsx)(n, {
      color: "currentColor",
      size: "sm"
    })
  })
}
var m = ((r = {}).OVERLAY = "overlay", r.RELATIVE = "relative", r);

function g(e) {
  let {
    className: t,
    variant: n,
    children: r
  } = e, a = i.useMemo(() => "overlay" === n ? d.Lw : d.V8, [n]);
  return (0, l.jsx)("div", {
    className: s()(d.jr, a, t),
    children: r
  })
}