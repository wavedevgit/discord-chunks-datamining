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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function s(t) {
  var {
    location: e
  } = t, n = function(t, e) {
    if (null == t) return {};
    var n, r, a = function(t, e) {
      if (null == t) return {};
      var n, r, a = {},
        i = Object.keys(t);
      for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
      return a
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
    }
    return a
  }(t, ["location"]);
  return (0, a.D)({
    location: e
  }) ? (0, r.jsx)(l.Z, o({}, n)) : (0, r.jsx)(i.Z, o({}, n))
}