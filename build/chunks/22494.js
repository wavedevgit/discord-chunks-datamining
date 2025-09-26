/** Chunk was on 84957 **/
/** chunk id: 22494, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js"),
  Chunk523080 = require("./523080.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class a extends Chunk81825.Z {
  static fromServer(e) {
    var t, r, {
        user_id: n,
        wishlist_items: u
      } = e,
      c = function(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            s = Object.keys(e);
          for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }(e, ["user_id", "wishlist_items"]);
    let d = u.map(e => e.sku_product_line === o.POd.COLLECTIBLES ? s.Z.fromServer(e) : i.Z.fromServer(e));
    return new a((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          l(e, t, r[t])
        })
      }
      return e
    }({}, c), r = r = {
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
    super(), l(this, "id", true), l(this, "userId", true), l(this, "items", true), this.id = e.id, this.userId = e.userId, this.items = e.items
  }
}