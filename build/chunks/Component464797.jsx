/** Chunk was on 38002 **/
/** chunk id: 464797, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => f,
  _: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk240864 = require("./240864.js");
let a = Chunk647438.createContext(true);

function s() {
  let e = Chunk647438.useContext(a);
  return l()(null != module, "GuildProductPurchaseContext not found"), module
}

function f(e) {
  var {
    children: t,
    guildProductListingId: n
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        c = Object.keys(e);
      for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["children", "guildProductListingId"]);
  let c = (0, i.e7)([u.Z], () => u.Z.getGuildProduct(n));
  return l()(null != c, "guildProductListing cannot be null"), (0, r.jsx)(a.Provider, {
    value: function(e) {
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
    }({
      guildProductListing: c
    }, o),
    children: t
  })
}