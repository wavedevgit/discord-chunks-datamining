/** Chunk was on 64228 **/
/** chunk id: 293071, original params: e,l,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk215530 = require("./215530.js"),
  Chunk976270 = require("./976270.jsx"),
  Chunk916217 = require("./916217.jsx"),
  Chunk417021 = require("./417021.jsx"),
  Chunk239606 = require("./239606.jsx");

function d(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(l) {
      var n;
      n = t[l], l in e ? Object.defineProperty(e, l, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = n
    })
  }
  return e
}

function c(e) {
  let {
    hideRestrictedProfile: l
  } = e, t = function(e, l) {
    if (null == e) return {};
    var t, n, i, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, t = Reflect.ownKeys(e); i < t.length; i++) n = t[i], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }
    if (r = function(e, l) {
        if (null == e) return {};
        var t, n, i = {},
          r = Object.getOwnPropertyNames(e);
        for (n = 0; n < r.length; n++) t = r[n], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
        return i
      }(e, l), Object.getOwnPropertySymbols)
      for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) n = t[i], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r
  }(e, ["hideRestrictedProfile"]), {
    user: c
  } = t, [u, f] = (0, i.A)(c.id);
  return u && !l ? (0, n.jsx)(a.A, d({
    onHide: f
  }, t)) : c.isNonUserBot() ? (0, n.jsx)(s.A, d({}, t)) : c.bot ? (0, n.jsx)(r.A, d({}, t)) : (0, n.jsx)(o.A, d({}, t))
}