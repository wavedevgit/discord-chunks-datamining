/** Chunk was on 16811 **/
/** chunk id: 744802, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk81570 = require("./81570.js"),
  Chunk527790 = require("./527790.jsx"),
  Chunk248930 = require("./248930.jsx");

function c(e) {
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
}

function a(e) {
  var {
    location: n,
    user: t,
    currentUser: a
  } = e, s = function(e, n) {
    if (null == e) return {};
    var t, r, o = function(e, n) {
      if (null == e) return {};
      var t, r, o = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) t = l[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["location", "user", "currentUser"]);
  return (0, o.T)({
    location: n
  }) && t.id !== a.id && !t.bot ? (0, r.jsx)(i.Z, c({
    user: t
  }, s)) : (0, r.jsx)(l.Z, c({
    user: t
  }, s))
}