/** Chunk was on 41469 **/
/** chunk id: 920241, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => s,
  u: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk871109 = require("./871109.js");
let a = Chunk64700.createContext(true);

function s() {
  let e = o.useContext(a);
  return c()(null != e, "GuildProductPurchaseContext not found"), e
}

function p(e) {
  let {
    children: t,
    guildProductListingId: r
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["children", "guildProductListingId"]), l = (0, i.bG)([u.A], () => u.A.getGuildProduct(r));
  return c()(null != l, "guildProductListing cannot be null"), (0, n.jsx)(a.Provider, {
    value: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      guildProductListing: l
    }, o),
    children: t
  })
}