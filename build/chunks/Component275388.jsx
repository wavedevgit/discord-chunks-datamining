/** Chunk was on 48502 **/
/** chunk id: 275388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  qA: () => u,
  r9: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk772848 = require("./772848.js");
require("./952265.js");
var Chunk481060 = require("./481060.js"),
  Chunk922987 = require("./922987.jsx"),
  Chunk981631 = require("./981631.js");
require("./602091.js");
let s = "orb-checkout-payment-modal-key",
  c = () => (0, Chunk481060.VXO)(s),
  u = e => {
    var {
      skuId: t,
      analyticsLocations: c = [],
      analyticsSourceLocation: u,
      onCloseCallback: d,
      onCheckoutSuccess: p
    } = e, f = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess"]);
    let b = false,
      y = (0, l.Z)();
    return (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 922987));
      return n => {
        var l, i;
        return (0, r.jsx)(e, (l = function(e) {
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
          skuId: t,
          analyticsLocations: c,
          analyticsSourceLocation: u,
          onCheckoutSuccess: e => {
            b || p(e), b = true
          }
        }, f, n), i = i = {
          loadId: y
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      onCloseCallback: d,
      onCloseRequest() {
        b || (0, a._Y)(o.rMx.PAYMENT_FLOW_CANCELED, {
          loadId: y,
          skuId: t,
          analyticsLocations: c,
          analyticsSourceLocation: u
        }), (0, i.Mr3)(s)
      },
      modalKey: s
    })
  }