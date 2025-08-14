/** Chunk was on 76708 **/
/** chunk id: 866035, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk788111 = require("./788111.js"),
  Chunk752342 = require("./752342.jsx"),
  Chunk886794 = require("./886794.jsx"),
  Chunk858970 = require("./858970.jsx"),
  Chunk595145 = require("./595145.jsx");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function d(e) {
  var {
    hideRestrictedProfile: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["hideRestrictedProfile"]);
  let {
    user: d
  } = n, [u, f] = (0, l.Z)(d.id);
  return u && !t ? (0, r.jsx)(a.Z, s({
    onHide: f
  }, n)) : d.isNonUserBot() ? (0, r.jsx)(o.Z, s({}, n)) : d.bot ? (0, r.jsx)(i.Z, s({}, n)) : (0, r.jsx)(c.Z, s({}, n))
}