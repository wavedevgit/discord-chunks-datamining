/** Chunk was on 93979 **/
/** chunk id: 866035, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk788111 = require("./788111.js"),
  Chunk752342 = require("./752342.jsx"),
  Chunk886794 = require("./886794.jsx"),
  Chunk583816 = require("./583816.jsx"),
  Chunk595145 = require("./595145.jsx");

function a(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function d(e) {
  var {
    hideRestrictedProfile: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, l, o = function(e, n) {
      if (null == e) return {};
      var t, l, o = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) t = r[l], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) t = r[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["hideRestrictedProfile"]);
  let {
    user: d
  } = t, [u, m] = (0, o.Z)(d.id);
  return u && !n ? (0, l.jsx)(c.Z, a({
    onHide: m
  }, t)) : d.isNonUserBot() ? (0, l.jsx)(i.Z, a({}, t)) : d.bot ? (0, l.jsx)(r.Z, a({}, t)) : (0, l.jsx)(s.Z, a({}, t))
}