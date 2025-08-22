/** Chunk was on 98360 **/
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

function d(e) {
  var {
    hideRestrictedProfile: n
  } = e, t = function(e, n) {
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
  }(e, ["hideRestrictedProfile"]);
  let {
    user: d
  } = t, [u, f] = (0, o.Z)(d.id);
  return u && !n ? (0, r.jsx)(c.Z, s({
    onHide: f
  }, t)) : d.isNonUserBot() ? (0, r.jsx)(i.Z, s({}, t)) : d.bot ? (0, r.jsx)(l.Z, s({}, t)) : (0, r.jsx)(a.Z, s({}, t))
}