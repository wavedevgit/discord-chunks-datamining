/** Chunk was on 42340 **/
/** chunk id: 82856, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => m,
  y: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js"),
  Chunk970815 = require("./970815.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function m() {
  let e = (0, Chunk442837.e7)([Chunk479766.Z], () => Chunk479766.Z.balancePillOverlay);
  return (0, Chunk493773.ZP)(() => {
    setTimeout(() => {
      module || (0, Chunk751648.qD)(true)
    }, 300)
  }), (0, Chunk647438.useEffect)(() => () => {
    !(0, Chunk481060.$sL)() && module && (0, Chunk751648.qD)(false)
  }, [module]), null
}

function p(e) {
  var t, n, {
      pillRef: r
    } = e,
    o = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["pillRef"]);
  let {
    balancePillOverlay: s
  } = (0, l.cj)([c.Z], () => ({
    balancePillOverlay: c.Z.balancePillOverlay
  })), m = (0, a.jsx)(d.A4, u({
    ref: r
  }, o)), p = (0, a.jsx)(d.A4, (t = u({}, o), n = n = {
    isInModalOverlay: true,
    disabled: true
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t)), h = null != r.current ? r.current.offsetHeight : 36;
  return (0, a.jsx)(i.yRy, {
    fixed: true,
    autoInvert: false,
    renderPopout: () => p,
    position: "bottom",
    align: "right",
    shouldShow: s,
    spacing: -h,
    animation: i.yRy.Animation.NONE,
    targetElementRef: r,
    positionKey: "".concat(o.balance, "-").concat(s),
    children: () => m
  })
}