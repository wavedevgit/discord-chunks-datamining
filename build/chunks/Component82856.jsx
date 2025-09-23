/** Chunk was on 93964 **/
/** chunk id: 82856, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  o: () => p,
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

function O(e) {
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

function p() {
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
  var t, r, {
      pillRef: a,
      anchorPillType: i
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["pillRef", "anchorPillType"]);
  let {
    balancePillOverlay: y
  } = (0, l.cj)([s.Z], () => ({
    balancePillOverlay: s.Z.balancePillOverlay
  })), g = (0, n.jsx)(b.A4, O({
    ref: a
  }, p)), j = (0, n.jsx)(b.A4, (t = O({}, p), r = r = {
    isInModalOverlay: true,
    disabled: true
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t)), {
    isAnyLayerOpen: d,
    isLastLayerShopFullScreen: m
  } = (0, l.cj)([c.Z], () => {
    let e = c.Z.getLayers();
    return {
      isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === f.S9g.COLLECTIBLES_SHOP,
      isAnyLayerOpen: c.Z.hasLayers()
    }
  }), v = o.useMemo(() => !!y && (!d || m && "SHOP_FULLSCREEN" === i), [y, d, m, i]), P = null != a.current ? a.current.offsetHeight : 36;
  return (0, n.jsx)(u.yRy, {
    fixed: true,
    autoInvert: false,
    renderPopout: () => j,
    position: "bottom",
    align: "right",
    shouldShow: v,
    spacing: -P,
    animation: u.yRy.Animation.NONE,
    targetElementRef: a,
    positionKey: "".concat(p.balance, "-").concat(y),
    children: () => g
  })
}