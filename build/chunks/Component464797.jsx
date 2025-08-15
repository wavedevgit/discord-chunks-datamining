/** Chunk was on 88806 **/
/** chunk id: 464797, original params: e,t,r (module,exports,require) **/
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
    guildProductListingId: r
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        c = Object.keys(e);
      for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["children", "guildProductListingId"]);
  let c = (0, i.e7)([u.Z], () => u.Z.getGuildProduct(r));
  return l()(null != c, "guildProductListing cannot be null"), (0, n.jsx)(a.Provider, {
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
      guildProductListing: c
    }, o),
    children: t
  })
}