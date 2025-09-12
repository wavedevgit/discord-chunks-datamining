/** Chunk was on 99285 **/
/** chunk id: 862065, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk625651 = require("./625651.jsx"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk775488 = require("./775488.js");

function u(e) {
  var {
    gameInstance: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, r, o = function(e, n) {
      if (null == e) return {};
      var t, r, o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["gameInstance"]);
  return (0, r.jsx)(a.f, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({
    size: o.CgR.SMALL,
    title: n.name,
    body: (0, r.jsx)("div", {
      className: b.imageContainer,
      children: (0, r.jsx)("img", {
        alt: "",
        src: "",
        className: b.image
      })
    }),
    warningText: c.intl.string(i.default.oHNuWl),
    isLoading: false,
    onDeactivate: () => {}
  }, t))
}