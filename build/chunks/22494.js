/** Chunk was on 18539 **/
/** chunk id: 22494, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk81825 = require("./81825.js"),
  Chunk523080 = require("./523080.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class c extends Chunk81825.Z {
  static fromServer(e) {
    var t, r, {
        user_id: n,
        wishlist_items: a
      } = e,
      l = function(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }(e, ["user_id", "wishlist_items"]);
    let d = a.map(e => e.sku_product_line === s.POd.COLLECTIBLES ? o.Z.fromServer(e) : i.Z.fromServer(e));
    return new c((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          u(e, t, r[t])
        })
      }
      return e
    }({}, l), r = r = {
      userId: n,
      items: d
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  }
  getSkuIds() {
    return this.items.map(e => e.skuId)
  }
  hasSkuId(e) {
    return this.items.some(t => t.skuId === e)
  }
  constructor(e) {
    super(), u(this, "id", true), u(this, "userId", true), u(this, "items", true), this.id = e.id, this.userId = e.userId, this.items = e.items
  }
}