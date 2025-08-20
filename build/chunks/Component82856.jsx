/** Chunk was on web.js **/
/** chunk id: 82856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => b,
  y: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk819640 = require("./819640.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b() {
  let e = (0, Chunk442837.e7)([Chunk479766.Z], () => Chunk479766.Z.balancePillOverlay);
  return (0, Chunk493773.ZP)(() => {
    setTimeout(() => {
      module || (0, Chunk751648.qD)(true)
    }, 300)
  }), (0, Chunk647438.useEffect)(() => () => {
    !(0, Chunk481060.$sL)() && module && (0, Chunk751648.qD)(false)
  }, [module]), null
}

function y(e) {
  var {
    pillRef: t,
    anchorPillType: n
  } = e, s = g(e, ["pillRef", "anchorPillType"]);
  let {
    balancePillOverlay: c
  } = (0, a.cj)([u.Z], () => ({
    balancePillOverlay: u.Z.balancePillOverlay
  })), _ = (0, r.jsx)(d.A4, p({
    ref: t
  }, s)), h = (0, r.jsx)(d.A4, m(p({}, s), {
    isInModalOverlay: true,
    disabled: true
  })), {
    isAnyLayerOpen: E,
    isLastLayerShopFullScreen: b
  } = (0, a.cj)([l.Z], () => {
    let e = l.Z.getLayers();
    return {
      isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === f.S9g.COLLECTIBLES_SHOP,
      isAnyLayerOpen: l.Z.hasLayers()
    }
  }), y = i.useMemo(() => !!c && (!E || b && "SHOP_FULLSCREEN" === n), [c, E, b, n]), O = null != t.current ? t.current.offsetHeight : 36;
  return (0, r.jsx)(o.yRy, {
    fixed: true,
    autoInvert: false,
    renderPopout: () => h,
    position: "bottom",
    align: "right",
    shouldShow: y,
    spacing: -O,
    animation: o.yRy.Animation.NONE,
    targetElementRef: t,
    positionKey: "".concat(s.balance, "-").concat(c),
    children: () => _
  })
}