/** Chunk was on 65174 **/
/** chunk id: 970731, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  DF: () => h,
  ZP: () => v
});
var n, l, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk921944 = require("./921944.js"),
  Chunk164208 = require("./164208.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
var h = ((n = {}).TOP_CENTER = "caretTopCenter", n.TOP_RIGHT = "caretTopRight", n.TOP_LEFT = "caretTopLeft", n.BOTTOM_CENTER = "caretBottomCenter", n.BOTTOM_LEFT = "caretBottomLeft", n.BOTTOM_RIGHT = "caretBottomRight", n.LEFT_CENTER = "caretLeftCenter", n.LEFT_TOP = "caretLeftTop", n.RIGHT_CENTER = "caretRightCenter", n.RIGHT_TOP = "caretRightTop", n),
  m = ((l = {})[l.ADJACENT = 0] = "ADJACENT", l[l.STACKED = 1] = "STACKED", l);
let T = Object.freeze({
    brand: Chunk164208.colorBrand,
    primary: Chunk164208.colorPrimary
  }),
  O = Object.freeze({
    brand: "always-white",
    primary: "header-primary"
  }),
  g = Object.freeze({
    brand: "always-white",
    primary: "text-default"
  });

function v(e) {
  let {
    color: t = "brand",
    className: r,
    header: n,
    headerClassName: l,
    content: o,
    contentClassName: h,
    buttonCTA: m,
    secondaryButtonCTA: v,
    onClick: b,
    onSecondaryClick: P,
    buttonProps: C = {
      color: u.zx.Colors.BRAND,
      look: u.zx.Looks.FILLED
    },
    secondaryButtonProps: E = {
      color: u.zx.Colors.BRAND_INVERTED
    },
    onComponentMount: R,
    asset: y,
    markAsDismissed: w,
    caretPosition: j = "caretTopCenter",
    buttonLayout: N = 0
  } = e;
  (0, s.ZP)(() => {
    null == R || R()
  });
  let L = null != v;
  return (0, a.jsxs)("div", {
    className: i()(r, T[t], p.upsellTooltipWrapper, p[j]),
    children: [y, null == n ? null : (0, a.jsx)(c.Heading, {
      color: O[t],
      className: i()(l, p.upsellTooltipHeader),
      variant: "heading-md/semibold",
      children: n
    }), (0, a.jsx)(c.Text, {
      color: g[t],
      className: i()(h, p.content),
      variant: "text-sm/normal",
      children: o
    }), null != m || L ? (0, a.jsxs)("div", {
      className: i()(p.upsellButtonsContainer, {
        [p.upsellButtonsAdjacent]: 0 === N,
        [p.upsellButtonsStacked]: 1 === N
      }),
      children: [L ? (0, a.jsx)(u.zx, _(f({}, E), {
        fullWidth: 1 === N,
        onClick: () => {
          null == P || P(), null == w || w(d.L.SECONDARY)
        },
        children: v
      })) : null, null == m ? null : (0, a.jsx)(u.zx, _(f({}, C), {
        fullWidth: !L || 1 === N,
        onClick: e => {
          b(e), null == w || w(d.L.PRIMARY)
        },
        children: m
      }))]
    }) : null]
  })
}
v.CaretPosition = h, v.ButtonLayout = m