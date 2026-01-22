/** Chunk was on web.js **/
/** chunk id: 685944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk676279 = require("./676279.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk376747 = require("./376747.js"),
  Chunk679190 = require("./679190.js"),
  Chunk386224 = require("./386224.js"),
  Chunk568442 = require("./568442.js"),
  Chunk582860 = require("./582860.js");
let O = e => {
  let {
    className: t,
    style: n
  } = e;
  return (0, l.bG)([d.A], () => d.A.useReducedMotion) ? (0, r.jsx)("img", {
    src: b.A,
    className: t,
    style: n,
    alt: ""
  }) : (0, r.jsxs)(f.A, {
    tabIndex: false,
    className: t,
    style: n,
    autoPlay: true,
    loop: true,
    children: [(0, r.jsx)("source", {
      src: y.A,
      type: "video/webm"
    }), (0, r.jsx)("img", {
      src: b.A,
      className: t,
      style: n,
      alt: ""
    })]
  })
};

function A(e) {
  let {
    step: t,
    onClose: n,
    isOrbCheckout: a
  } = e, l = (0, u.A)(m.T), {
    footerNode: d
  } = (0, _.P5)(), f = (0, p.nr)() && !o.Fr, b = null != d ? d.offsetWidth : true, y = i.useMemo(() => f && null != b && (t === h.pn.ADD_PAYMENT_STEPS || a) ? b : true, [f, b, t, a]);
  if (t === h.pn.BENEFITS || t === h.pn.CONFIRM) return null;
  let A = null != y ? {
      width: y + 2
    } : true,
    v = null != y ? {
      width: y + 3
    } : true;
  return (0, r.jsxs)("div", {
    className: g.N1,
    style: A,
    children: [!l && (0, r.jsx)("div", {
      className: g.oZ,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      style: v,
      children: a ? (0, r.jsx)(O, {
        className: s()(g.F0, g.WL)
      }) : (0, r.jsx)("img", {
        src: E,
        alt: "",
        className: g.F0
      })
    }), (0, r.jsx)(c.s_y, {
      "data-migration-pending": true,
      withCircleBackground: true,
      className: g.b,
      onClick: n
    })]
  })
}