/** Chunk was on web.js **/
/** chunk id: 126982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk750143 = require("./750143.js"),
  Chunk434742 = require("./434742.js"),
  Chunk60314 = require("./60314.js"),
  Chunk732779 = require("./732779.js"),
  Chunk79276 = require("./79276.js");
let O = e => {
  let {
    className: t,
    style: n
  } = e;
  return (0, l.e7)([d.Z], () => d.Z.useReducedMotion) ? (0, r.jsx)("img", {
    src: b.Z,
    className: t,
    style: n,
    alt: ""
  }) : (0, r.jsxs)(f.Z, {
    tabIndex: false,
    className: t,
    style: n,
    autoPlay: true,
    loop: true,
    children: [(0, r.jsx)("source", {
      src: y.Z,
      type: "video/webm"
    }), (0, r.jsx)("img", {
      src: b.Z,
      className: t,
      style: n,
      alt: ""
    })]
  })
};

function v(e) {
  let {
    step: t,
    onClose: n,
    isOrbCheckout: a
  } = e, l = (0, u.Z)(m.X), {
    footerNode: d
  } = (0, _.JL)(), f = (0, p.G6)() && !s.tq, b = null != d ? d.offsetWidth : true, y = i.useMemo(() => f && null != b && (t === h.h8.ADD_PAYMENT_STEPS || a) ? b : true, [f, b, t, a]);
  if (t === h.h8.BENEFITS || t === h.h8.CONFIRM) return null;
  let v = null != y ? {
      width: y + 2
    } : true,
    S = null != y ? {
      width: y + 3
    } : true;
  return (0, r.jsxs)("div", {
    className: g.headerContainer,
    style: v,
    children: [!l && (0, r.jsx)("div", {
      className: g.headerImageContainer,
      "aria-hidden": "true",
      "data-accessibility": "desaturate",
      style: S,
      children: a ? (0, r.jsx)(O, {
        className: o()(g.headerImage, g.orbCheckoutHeaderVideo)
      }) : (0, r.jsx)("img", {
        src: E,
        alt: "",
        className: g.headerImage
      })
    }), (0, r.jsx)(c.olH, {
      "data-migration-pending": true,
      withCircleBackground: true,
      className: g.closeButton,
      onClick: n
    })]
  })
}