/** Chunk was on web.js **/
/** chunk id: 631452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk633130 = require("./633130.js"),
  Chunk213305 = require("./213305.js"),
  Chunk404726 = require("./404726.jsx"),
  Chunk98123 = require("./98123.js"),
  Chunk481060 = require("./481060.js"),
  Chunk46826 = require("./46826.js");
let p = {
    HoverLightmode: {
      posy: "number",
      posx: "number"
    },
    BaseGlow: {},
    ButtonFillLightmode: {},
    HoverDarkmode: {
      posy: "number",
      posx: "number"
    },
    BaseGlowRemapped: {},
    ButtonFillDarkmode: {}
  },
  _ = e => {
    let {
      children: t,
      className: n,
      cardClassName: a,
      cardType: _,
      artboard: h = "BaseGlowRemapped",
      fit: m = "layout",
      glowAmount: g = 8,
      blurAmount: E = 30,
      isReducedMotion: b
    } = e, y = i.useRef(null), O = i.useRef(null), {
      status: v,
      buffer: S
    } = (0, u.VG)(s.Z), I = i.useContext(l.S), T = null != b ? b : I.reducedMotion.enabled, C = {
      "--custom-glow-amount": "".concat(g, "px"),
      "--custom-blur-amount": "".concat(E, "px")
    };
    return (0, r.jsxs)("div", {
      ref: y,
      className: o()(f.container, n),
      style: C,
      children: [v !== u.Jt.Loading && (0, r.jsx)(c.v, {
        buffer: S,
        artboard: h,
        artboardProperties: p,
        eventTargetRef: y,
        className: f.glowAnimation,
        ref: O,
        fit: m,
        withReducedMotion: T ? "halt" : "play"
      }), (0, r.jsx)(d.Zbd, {
        type: null != _ ? _ : d.sje.CUSTOM,
        className: o()(f.card, a),
        children: t
      })]
    })
  }