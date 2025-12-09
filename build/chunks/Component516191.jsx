/** Chunk was on 34740 **/
/** chunk id: 516191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk157925 = require("./157925.js");

function o(e) {
  let t = (0, l.Gwq)();
  (0, r.closeAllModalsInContext)(t), (0, l.ZDy)(async () => {
    let {
      AgeVerificationRequiredSpeedbumpModal: r
    } = await n.e("26513").then(n.bind(n, 31362));
    return n => {
      var o, s;
      return (0, i.jsx)(r, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, n), s = s = {
        onStart: () => {
          (0, l.Mr3)(a.sV, t), e()
        },
        onClose: async () => {
          await (0, l.Mr3)(a.sV, t)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
      }), o))
    }
  }, {
    modalKey: a.sV,
    stackingBehavior: "replaceAll",
    stackNextByDefault: false
  })
}