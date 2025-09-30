/** Chunk was on 18539 **/
/** chunk id: 523080, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk81825 = require("./81825.js");

function i(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class o extends Chunk81825.Z {
  static fromServer(e) {
    var t, r, {
      sku_id: n,
      sku_product_line: s,
      sku_name: u
    } = e;
    return new o((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          i(e, t, r[t])
        })
      }
      return e
    }({}, function(e, t) {
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
    }(e, ["sku_id", "sku_product_line", "sku_name"])), r = r = {
      sku_id: n,
      sku_product_line: s,
      sku_name: u
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
  constructor(e) {
    super(), i(this, "skuId", true), i(this, "skuProductLine", true), i(this, "skuName", true), this.skuId = e.sku_id, this.skuProductLine = e.sku_product_line, this.skuName = e.sku_name
  }
}