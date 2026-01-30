/** Chunk was on 94682 **/
/** chunk id: 460442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f,
  g: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk865444 = require("./865444.js");

function u(e) {
  let {
    icon: t,
    style: n
  } = e;
  return (0, r.jsx)("div", {
    className: i()(c.Lw, n),
    children: t
  })
}

function d(e) {
  let {
    isHoveringOrFocusing: t
  } = e;
  return (0, r.jsx)(u, {
    style: i()(c.AI, t && c.mW),
    icon: (0, r.jsx)(a.rOg, {
      size: "custom",
      color: o.A.colors.WHITE,
      width: 38,
      height: 38,
      className: i()(c.x6, c.AI),
      "aria-label": s.intl.string(s.t.L5Pt9L)
    })
  })
}

function f(e) {
  let {
    count: t
  } = e;
  return (0, r.jsx)(u, {
    style: c.RF,
    icon: (0, r.jsxs)(a.EYj, {
      variant: "text-sm/medium",
      color: "always-white",
      children: ["+", t + 1]
    })
  })
}