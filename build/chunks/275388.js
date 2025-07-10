/** Chunk was on 98595 **/
n.d(t, {
  q: () => c,
  r: () => u
});
var i = n(255367),
  r = n(772848),
  l = n(481060),
  o = n(396639),
  s = n(981631);
let a = "orb-checkout-payment-modal-key",
  u = () => (0, l.VXO)(a),
  c = e => {
    var {
      skuId: t,
      analyticsLocations: u = [],
      analyticsSourceLocation: c,
      onCloseCallback: d,
      onCheckoutSuccess: h
    } = e, g = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.keys(e);
        for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess"]);
    let p = !1,
      f = (0, r.Z)();
    return (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 396639));
      return n => {
        var r, l;
        return (0, i.jsx)(e, (r = function(e) {
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
            p = !0, h(e)
          }
        }, g, n), l = l = {
          loadId: f
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    }, {
      onCloseCallback: d,
      onCloseRequest() {
        p || (0, o._Y)(s.rMx.PAYMENT_FLOW_CANCELED, {
          loadId: f,
          skuId: t,
          analyticsLocations: u,
          analyticsSourceLocation: c
        }), (0, l.Mr3)(a)
      },
      modalKey: a
    })
  }