/** Chunk was on 46746 **/
/** chunk id: 504710, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");
let s = e => {
  let {
    analyticsLocation: t,
    onClose: s
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await r.e("28479").then(r.bind(r, 78865));
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
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, r), l = l = {
        analyticsSource: t,
        onClose: () => {
          var e;
          return null == s || s(), null == (e = r.onClose) ? true : e.call(r)
        }
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
  })
}