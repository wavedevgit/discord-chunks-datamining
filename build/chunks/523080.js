/** Chunk was on 23254 **/
/** chunk id: 523080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk81825 = require("./81825.js");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk81825.Z {
  static fromServer(e) {
    var t, n, {
      sku_id: o,
      sku_product_line: i
    } = e;
    return new c((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), o.forEach(function(t) {
          r(e, t, n[t])
        })
      }
      return e
    }({}, function(e, t) {
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
    }(e, ["sku_id", "sku_product_line"])), n = n = {
      sku_id: o,
      sku_product_line: i
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
  constructor(e) {
    super(), r(this, "skuId", true), r(this, "skuProductLine", true), this.skuId = e.sku_id, this.skuProductLine = e.sku_product_line
  }
}