/** Chunk was on 5606 **/
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
let _ = {
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
      fit: f = "layout",
      glowAmount: b = 8,
      blurAmount: h = 30,
      hueRotate: A = 0,
      isReducedMotion: E
    } = e, x = i.useRef(null), O = i.useRef(null), {
      status: C,
      buffer: y
    } = (0, d.CE)(a.A), j = i.useContext(o.C), T = null != E ? E : j.reducedMotion.enabled;
    return (0, r.jsxs)("div", {
      ref: x,
      className: s()(p.kL, n),
      style: {
        "--custom-glow-amount": "".concat(b, "px"),
        "--custom-blur-amount": "".concat(h, "px"),
        "--custom-hue-rotate": "".concat(A, "deg")
      },
      children: [C !== d.BW.Loading && (0, r.jsx)(c.w, {
        buffer: y,
        artboard: g,
        artboardProperties: _,
        eventTargetRef: x,
        className: p.Q_,
        ref: O,
        fit: f,
        withReducedMotion: T ? "halt" : "play"
      }), (0, r.jsx)(u.ZpM, {
        type: null != m ? m : u.sl2.CUSTOM,
        className: s()(p.Nr, l),
        children: t
      })]
    })
  }