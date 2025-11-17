/** Chunk was on 11909 **/
/** chunk id: 255111, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk41959 = require("./41959.jsx");

function o(e) {
  var {
    application: t,
    asset: r,
    className: o
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        c = Object.keys(e);
      for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["application", "asset", "className"]);
  return (0, n.jsx)(a.ZP, {
    mask: a.ZP.Masks.SQUIRCLE,
    width: 128,
    height: 128,
    style: {
      display: "block"
    },
    children: (0, n.jsx)(c.Z, function(e) {
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
    }({
      application: t,
      size: c.H.LARGE,
      asset: r,
      className: o
    }, i))
  })
}