/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  T: () => o,
  v: () => a
});
var n = r(200651);
r(192379);
var i = r(481060);
let l = "collectibles shop product details modal",
  o = e => {
    let {
      product: t,
      category: o,
      analyticsSource: a,
      analyticsLocations: s,
      returnRef: c,
      tab: d
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await r.e("2026").then(r.bind(r, 702370));
      return r => {
        var i, l;
        return (0, n.jsx)(e, (i = function(e) {
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
        }({}, r), l = l = {
          product: t,
          category: o,
          analyticsSource: a,
          analyticsLocations: s,
          returnRef: c,
          tab: d
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    }, {
      modalKey: l
    })
  },
  a = () => {
    (0, i.Mr3)(l)
  }