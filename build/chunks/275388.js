/** Chunk was on 77978 **/
n.d(t, {
  q: () => c,
  r: () => u
});
var i = n(255367),
  l = n(772848),
  r = n(481060),
  o = n(396639),
  s = n(981631);
let a = "orb-checkout-payment-modal-key",
  u = () => (0, r.VXO)(a),
  c = e => {
    var {
      skuId: t,
      analyticsLocations: u = [],
      analyticsSourceLocation: c,
      onCloseCallback: d,
      onCheckoutSuccess: h
    } = e, g = function(e, t) {
      if (null == e) return {};
      var n, i, l = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          r = Object.keys(e);
        for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess"]);
    let f = !1,
      p = (0, l.Z)();
    return (0, r.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 396639));
      return n => {
        var l, r;
        return (0, i.jsx)(e, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = i
            })
          }
          return e
        }({
          skuId: t,
          analyticsLocations: u,
          analyticsSourceLocation: c,
          onCheckoutSuccess: e => {
            f = !0, h(e)
          }
        }, g, n), r = r = {
          loadId: p
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
        }), l))
      }
    }, {
      onCloseCallback: d,
      onCloseRequest() {
        f || (0, o._Y)(s.rMx.PAYMENT_FLOW_CANCELED, {
          loadId: p,
          skuId: t,
          analyticsLocations: u,
          analyticsSourceLocation: c
        }), (0, r.Mr3)(a)
      },
      modalKey: a
    })
  }