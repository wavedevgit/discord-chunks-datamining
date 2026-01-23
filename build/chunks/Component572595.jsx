/** Chunk was on 58197 **/
/** chunk id: 572595, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  M: () => c,
  t: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk4227 = require("./4227.js"),
  Chunk466459 = require("./466459.js");
let o = "collectibles shop product details modal",
  a = e => {
    let {
      product: t,
      category: a,
      shouldCheckoutWithOrbs: c,
      analyticsSource: u,
      analyticsLocations: d,
      returnRef: p,
      tab: m,
      rentalDuration: g
    } = e;
    if (t.isCategoryReward) {
      let {
        isPurchased: e
      } = (0, s.o)(l.A, t);
      if (!e) return
    }(0, r.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([i.e("21724"), i.e("1784")]).then(i.bind(i, 929400));
      return i => {
        var r, l;
        return (0, n.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
              return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = i[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, i), l = l = {
          product: t,
          category: a,
          shouldCheckoutWithOrbs: c,
          analyticsSource: u,
          analyticsLocations: d,
          returnRef: p,
          tab: m,
          rentalDuration: g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            i.push.apply(i, n)
          }
          return i
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    }, {
      modalKey: o
    })
  },
  c = () => {
    (0, r.OoC)(o)
  }