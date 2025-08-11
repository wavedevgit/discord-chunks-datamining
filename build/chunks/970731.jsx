/** Chunk was on web.js **/
/** chunk id: 970731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DF: () => h,
  ZP: () => y,
  _F: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk921944 = require("./921944.js"),
  Chunk519254 = require("./519254.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var h = function(e) {
    return e.TOP_CENTER = "caretTopCenter", e.TOP_RIGHT = "caretTopRight", e.TOP_LEFT = "caretTopLeft", e.BOTTOM_CENTER = "caretBottomCenter", e.BOTTOM_LEFT = "caretBottomLeft", e.BOTTOM_RIGHT = "caretBottomRight", e.LEFT_CENTER = "caretLeftCenter", e.LEFT_TOP = "caretLeftTop", e.RIGHT_CENTER = "caretRightCenter", e.RIGHT_TOP = "caretRightTop", e
  }({}),
  m = function(e) {
    return e[e.ADJACENT = 0] = "ADJACENT", e[e.STACKED = 1] = "STACKED", e
  }({});
let g = Object.freeze({
    brand: Chunk519254.colorBrand,
    primary: Chunk519254.colorPrimary
  }),
  E = Object.freeze({
    brand: "always-white",
    primary: "header-primary"
  }),
  b = Object.freeze({
    brand: "always-white",
    primary: "text-default"
  });

function y(e) {
  let {
    color: t = "brand",
    className: n,
    header: i,
    headerClassName: d,
    content: _,
    contentClassName: h,
    buttonCTA: m,
    secondaryButtonCTA: y,
    onClick: O,
    onSecondaryClick: v,
    buttonProps: I = {
      color: a.zx.Colors.BRAND,
      look: a.zx.Looks.FILLED
    },
    secondaryButtonProps: T = {
      color: a.zx.Colors.BRAND_INVERTED
    },
    onComponentMount: S,
    asset: A,
    markAsDismissed: N,
    caretPosition: C = "caretTopCenter",
    buttonLayout: R = 0
  } = e;
  (0, l.ZP)(() => {
    null == S || S()
  });
  let P = null != y,
    w = e => {
      O(e), null == N || N(c.L.PRIMARY)
    },
    D = () => {
      null == v || v(), null == N || N(c.L.SECONDARY)
    };
  return <div className={o()(n, g[t], u.upsellTooltipWrapper, u[C])}>{A}{null == i ? null : <s.X6q color={E[t]} className={o()(d, u.upsellTooltipHeader)} variant={"heading-md/semibold"}>{i}</s.X6q>}{<s.Text color={b[t]} className={o()(h, u.content)} variant={"text-sm/normal"}>{_}</s.Text>}{null != m || P ? <div className={o()(u.upsellButtonsContainer, {
        [u.upsellButtonsAdjacent]: 0 === R,
        [u.upsellButtonsStacked]: 1 === R
      })}>{P ? <a.zx{...p(f({}, T), {
        fullWidth: 1 === R,
        onClick: D,
        children: y
      })} /> : null}{null == m ? null : <a.zx{...p(f({}, I), {
        fullWidth: !P || 1 === R,
        onClick: w,
        children: m
      })} />}</div> : null}</div>
}
y.CaretPosition = h, y.ButtonLayout = m