/** Chunk was on 93979 **/
/** chunk id: 866035, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk788111 = require("./788111.js"),
  Chunk752342 = require("./752342.jsx"),
  Chunk886794 = require("./886794.jsx"),
  Chunk858970 = require("./858970.jsx"),
  Chunk595145 = require("./595145.jsx");

function c(e) {
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
    var t, l, i = function(e, n) {
      if (null == e) return {};
      var t, l, i = {},
        o = Object.keys(e);
      for (l = 0; l < o.length; l++) t = o[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (l = 0; l < o.length; l++) t = o[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
  }(e, ["hideRestrictedProfile"]);
  let {
    user: d
  } = t, [u, m] = (0, i.Z)(d.id);
  return u && !n ? (0, l.jsx)(s.Z, c({
    onHide: m
  }, t)) : d.isNonUserBot() ? (0, l.jsx)(r.Z, c({}, t)) : d.bot ? (0, l.jsx)(o.Z, c({}, t)) : (0, l.jsx)(a.Z, c({}, t))
}