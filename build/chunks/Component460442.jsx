/** Chunk was on 95320 **/
/** chunk id: 460442, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  BF: () => f,
  Yb: () => g,
  gS: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk865444 = require("./865444.js");

function c(e) {
  let {
    icon: t,
    style: r
  } = e;
  return (0, n.jsx)("div", {
    className: l()(a.Lw, r),
    children: t
  })
}

function d(e) {
  let {
    isHoveringOrFocusing: t
  } = e;
  return (0, n.jsx)(c, {
    style: l()(a.AI, t && a.mW),
    icon: (0, n.jsx)(s.rOg, {
      size: "custom",
      color: o.A.colors.WHITE,
      width: 38,
      height: 38,
      className: l()(a.x6, a.AI),
      "aria-label": u.intl.string(u.t.L5Pt9L)
    })
  })
}

function f(e) {
  let {
    count: t
  } = e;
  return (0, n.jsx)(c, {
    style: a.RF,
    icon: (0, n.jsxs)(s.EYj, {
      variant: "text-sm/medium",
      color: "always-white",
      children: ["+", t + 1]
    })
  })
}

function g(e) {
  let {
    count: t
  } = e;
  return (0, n.jsx)(c, {
    style: a.RF,
    icon: (0, n.jsx)(s.EYj, {
      variant: "text-sm/medium",
      color: "always-white",
      children: u.intl.format(u.t.F6iMs4, {
        count: t
      })
    })
  })
}