/** Chunk was on 2827 **/
/** chunk id: 749082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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
  m = e => {
    let {
      children: t,
      className: n,
      cardClassName: l,
      cardType: m,
      artboard: g = "BaseGlowRemapped",
      fit: A = "layout",
      glowAmount: f = 8,
      blurAmount: b = 30,
      hueRotate: h = 0,
      isReducedMotion: E
    } = e, O = i.useRef(null), C = i.useRef(null), {
      status: x,
      buffer: S
    } = (0, d.CE)(a.A), T = i.useContext(o.C), I = null != E ? E : T.reducedMotion.enabled;
    return (0, r.jsxs)("div", {
      ref: O,
      className: s()(_.kL, n),
      style: {
        "--custom-glow-amount": "".concat(f, "px"),
        "--custom-blur-amount": "".concat(b, "px"),
        "--custom-hue-rotate": "".concat(h, "deg")
      },
      children: [x !== d.BW.Loading && (0, r.jsx)(c.w, {
        buffer: S,
        artboard: g,
        artboardProperties: p,
        eventTargetRef: O,
        className: _.Q_,
        ref: C,
        fit: A,
        withReducedMotion: I ? "halt" : "play"
      }), (0, r.jsx)(u.ZpM, {
        type: null != m ? m : u.sl2.CUSTOM,
        className: s()(_.Nr, l),
        children: t
      })]
    })
  }