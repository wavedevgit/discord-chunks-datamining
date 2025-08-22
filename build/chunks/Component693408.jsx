/** Chunk was on 82008 **/
/** chunk id: 693408, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk678738 = require("./678738.jsx"),
  Chunk207911 = require("./207911.js");

function s(e) {
  var {
    className: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, r, l = function(e, n) {
      if (null == e) return {};
      var t, r, l = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) t = o[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["className"]);
  return (0, r.jsx)(i.Z, function(e) {
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
    className: o()(c.section, n),
    headingVariant: "text-xs/medium",
    headingColor: "currentColor"
  }, t))
}