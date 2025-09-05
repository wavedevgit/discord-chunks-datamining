/** Chunk was on 72164 **/
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

function s(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), o.forEach(function(n) {
      var o;
      o = t[n], n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = o
    })
  }
  return e
}

function d(e) {
  var {
    hideRestrictedProfile: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, o, l = function(e, n) {
      if (null == e) return {};
      var t, o, l = {},
        r = Object.keys(e);
      for (o = 0; o < r.length; o++) t = r[o], n.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (o = 0; o < r.length; o++) t = r[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["hideRestrictedProfile"]);
  let {
    user: d
  } = t, [u, f] = (0, l.Z)(d.id);
  return u && !n ? (0, o.jsx)(c.Z, s({
    onHide: f
  }, t)) : d.isNonUserBot() ? (0, o.jsx)(i.Z, s({}, t)) : d.bot ? (0, o.jsx)(r.Z, s({}, t)) : (0, o.jsx)(a.Z, s({}, t))
}