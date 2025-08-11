/** Chunk was on 66317 **/
/** chunk id: 82856, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  o: () => h,
  y: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk819640 = require("./819640.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk981631 = require("./981631.js");

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

function h() {
  let e = (0, Chunk442837.e7)([Chunk479766.Z], () => Chunk479766.Z.balancePillOverlay);
  return (0, Chunk493773.ZP)(() => {
    setTimeout(() => {
      module || (0, Chunk751648.qD)(true)
    }, 300)
  }), (0, Chunk73800.useEffect)(() => () => {
    !(0, Chunk481060.$sL)() && module && (0, Chunk751648.qD)(false)
  }, [module]), null
}

function O(e) {
  var t, r, {
      pillRef: o,
      anchorPillType: c
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, a = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
      }
      return a
    }(e, ["pillRef", "anchorPillType"]);
  let {
    balancePillOverlay: O
  } = (0, l.cj)([s.Z], () => ({
    balancePillOverlay: s.Z.balancePillOverlay
  })), y = (0, n.jsx)(d.A4, f({
    ref: o
  }, h)), p = (0, n.jsx)(d.A4, (t = f({}, h), r = r = {
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
    isAnyLayerOpen: m,
    isLastLayerShopFullScreen: C
  } = (0, l.cj)([u.Z], () => {
    let e = u.Z.getLayers();
    return {
      isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === b.S9g.COLLECTIBLES_SHOP,
      isAnyLayerOpen: u.Z.hasLayers()
    }
  }), g = a.useMemo(() => !!O && (!m || C && "SHOP_FULLSCREEN" === c), [O, m, C, c]), _ = null != o.current ? o.current.offsetHeight : 36;
  return (0, n.jsx)(i.yRy, {
    fixed: true,
    autoInvert: false,
    renderPopout: () => p,
    position: "bottom",
    align: "right",
    shouldShow: g,
    spacing: -_,
    animation: i.yRy.Animation.NONE,
    targetElementRef: o,
    positionKey: "".concat(h.balance, "-").concat(O),
    children: () => y
  })
}