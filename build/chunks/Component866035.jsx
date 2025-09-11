/** Chunk was on 34712 **/
/** chunk id: 866035, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk788111 = require("./788111.js"),
  Chunk752342 = require("./752342.jsx"),
  Chunk886794 = require("./886794.jsx"),
  Chunk858970 = require("./858970.jsx"),
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
    var t, o, r = function(e, n) {
      if (null == e) return {};
      var t, o, r = {},
        l = Object.keys(e);
      for (o = 0; o < l.length; o++) t = l[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (o = 0; o < l.length; o++) t = l[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["hideRestrictedProfile"]);
  let {
    user: d
  } = t, [u, f] = (0, r.Z)(d.id);
  return u && !n ? (0, o.jsx)(c.Z, s({
    onHide: f
  }, t)) : d.isNonUserBot() ? (0, o.jsx)(i.Z, s({}, t)) : d.bot ? (0, o.jsx)(l.Z, s({}, t)) : (0, o.jsx)(a.Z, s({}, t))
}