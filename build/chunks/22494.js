/** Chunk was on 69033 **/
/** chunk id: 22494, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk81825 = require("./81825.js"),
  Chunk523080 = require("./523080.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js");

function o(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
class c extends Chunk81825.Z {
  static fromServer(t) {
    var e, r, {
        user_id: n,
        wishlist_items: l
      } = t,
      a = function(t, e) {
        if (null == t) return {};
        var r, n, i = function(t, e) {
          if (null == t) return {};
          var r, n, i = {},
            s = Object.keys(t);
          for (n = 0; n < s.length; n++) r = s[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
          return i
        }(t, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (n = 0; n < s.length; n++) r = s[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
        }
        return i
      }(t, ["user_id", "wishlist_items"]);
    let d = l.map(t => t.sku_product_line === u.POd.COLLECTIBLES ? s.Z.fromServer(t) : i.Z.fromServer(t));
    return new c((e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable
        }))), n.forEach(function(e) {
          o(t, e, r[e])
        })
      }
      return t
    }({}, a), r = r = {
      userId: n,
      items: d
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    }), e))
  }
  getSkuIds() {
    return this.items.map(t => t.skuId)
  }
  hasSkuId(t) {
    return this.items.some(e => e.skuId === t)
  }
  constructor(t) {
    super(), o(this, "id", true), o(this, "userId", true), o(this, "items", true), this.id = t.id, this.userId = t.userId, this.items = t.items
  }
}