/** Chunk was on 69033 **/
/** chunk id: 523080, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk81825 = require("./81825.js");

function i(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
class s extends Chunk81825.Z {
  static fromServer(t) {
    var e, r, {
      sku_id: n,
      sku_product_line: u,
      sku_name: o
    } = t;
    return new s((e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable
        }))), n.forEach(function(e) {
          i(t, e, r[e])
        })
      }
      return t
    }({}, function(t, e) {
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
    }(t, ["sku_id", "sku_product_line", "sku_name"])), r = r = {
      sku_id: n,
      sku_product_line: u,
      sku_name: o
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
  constructor(t) {
    super(), i(this, "skuId", true), i(this, "skuProductLine", true), i(this, "skuName", true), this.skuId = t.sku_id, this.skuProductLine = t.sku_product_line, this.skuName = t.sku_name
  }
}