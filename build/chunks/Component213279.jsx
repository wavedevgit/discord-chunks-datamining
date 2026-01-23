/** Chunk was on 96811 **/
/** chunk id: 213279, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  p: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");
let l = e => {
  let {
    analyticsLocation: t,
    onClose: l
  } = e;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await r.e("18630").then(r.bind(r, 826789));
    return r => {
      var i, s;
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
      }({}, r), s = s = {
        analyticsSource: t,
        onClose: () => {
          var e;
          return null == l || l(), null == (e = r.onClose) ? true : e.call(r)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  })
}