/** Chunk was on 23254 **/
/** chunk id: 22494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk81825 = require("./81825.js"),
  Chunk523080 = require("./523080.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk81825.Z {
  static fromServer(e) {
    var t, n, {
        user_id: o,
        wishlist_items: s
      } = e,
      d = function(e, t) {
        if (null == e) return {};
        var n, o, r = function(e, t) {
          if (null == e) return {};
          var n, o, r = {},
            c = Object.keys(e);
          for (o = 0; o < c.length; o++) n = c[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (o = 0; o < c.length; o++) n = c[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(e, ["user_id", "wishlist_items"]);
    let u = s.map(e => e.sku_product_line === i.POd.COLLECTIBLES ? c.Z.fromServer(e) : r.Z.fromServer(e));
    return new l((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), o.forEach(function(t) {
          a(e, t, n[t])
        })
      }
      return e
    }({}, d), n = n = {
      userId: o,
      items: u
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n.push.apply(n, o)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }
  getSkuIds() {
    return this.items.map(e => e.skuId)
  }
  hasSkuId(e) {
    return this.items.some(t => t.skuId === e)
  }
  constructor(e) {
    super(), a(this, "id", true), a(this, "userId", true), a(this, "items", true), this.id = e.id, this.userId = e.userId, this.items = e.items
  }
}