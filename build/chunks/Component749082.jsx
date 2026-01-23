/** Chunk was on web.js **/
/** chunk id: 749082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk524007 = require("./524007.js"),
  Chunk844222 = require("./844222.js"),
  Chunk786558 = require("./786558.jsx"),
  Chunk799226 = require("./799226.js"),
  Chunk397927 = require("./397927.js"),
  Chunk289440 = require("./289440.js");
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
      isReducedMotion: y
    } = e, b = i.useRef(null), O = i.useRef(null), {
      status: v,
      buffer: A
    } = (0, u.CE)(o.A), I = i.useContext(l.C), S = null != y ? y : I.reducedMotion.enabled, T = {
      "--custom-glow-amount": "".concat(g, "px"),
      "--custom-blur-amount": "".concat(E, "px")
    };
    return (0, r.jsxs)("div", {
      ref: b,
      className: s()(f.kL, n),
      style: T,
      children: [v !== u.BW.Loading && (0, r.jsx)(c.w, {
        buffer: A,
        artboard: h,
        artboardProperties: p,
        eventTargetRef: b,
        className: f.Q_,
        ref: O,
        fit: m,
        withReducedMotion: S ? "halt" : "play"
      }), (0, r.jsx)(d.ZpM, {
        type: null != _ ? _ : d.sl2.CUSTOM,
        className: s()(f.Nr, a),
        children: t
      })]
    })
  }