/** Chunk was on 31649 **/
/** chunk id: 475613, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk503817 = require("./503817.js"),
  Chunk211065 = require("./211065.jsx"),
  Chunk66630 = require("./66630.jsx");

function o(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), a.forEach(function(e) {
      var a;
      a = n[e], e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = a
    })
  }
  return t
}

function s(t) {
  var {
    location: e
  } = t, n = function(t, e) {
    if (null == t) return {};
    var n, a, l = function(t, e) {
      if (null == t) return {};
      var n, a, l = {},
        r = Object.keys(t);
      for (a = 0; a < r.length; a++) n = r[a], e.indexOf(n) >= 0 || (l[n] = t[n]);
      return l
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      for (a = 0; a < r.length; a++) n = r[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (l[n] = t[n])
    }
    return l
  }(t, ["location"]);
  return (0, l.D)({
    location: e
  }) ? (0, a.jsx)(i.Z, o({}, n)) : (0, a.jsx)(r.Z, o({}, n))
}