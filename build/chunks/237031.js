/** Chunk was on 71459 **/
"use strict";
r.d(t, {
  T: () => s,
  v: () => c
});
var n = r(200651);
r(192379);
var i = r(481060),
  o = r(82856);

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
let a = "collectibles shop product details modal",
  s = e => {
    let {
      product: t,
      category: s,
      shouldCheckoutWithOrbs: u,
      analyticsSource: d,
      analyticsLocations: p,
      returnRef: b,
      tab: v
    } = e;
    u && (0, o.S6)(), (0, i.ZDy)(async () => {
      let {
        default: e
      } = await r.e("2026").then(r.bind(r, 702370));
      return r => {
        var i, o;
        return (0, n.jsx)(e, (i = l({}, r), o = o = {
          product: t,
          category: s,
          shouldCheckoutWithOrbs: u,
          analyticsSource: d,
          analyticsLocations: p,
          returnRef: b,
          tab: v
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    }, l({
      modalKey: a
    }, u ? {
      onCloseRequest() {
        c(), (0, o.vp)()
      }
    } : {}))
  },
  c = () => {
    (0, i.Mr3)(a)
  }