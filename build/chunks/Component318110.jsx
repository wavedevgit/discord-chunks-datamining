/** Chunk was on 30141 **/
/** chunk id: 318110, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  f: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");
let l = t => {
  let {
    analyticsLocations: e,
    guildId: l,
    initialSelectedNameplate: a
  } = t;
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("89001"), n.e("32104"), n.e("86031")]).then(n.bind(n, 612293));
    return n => {
      var i, s;
      return (0, r.jsx)(t, (i = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = r
          })
        }
        return t
      }({}, n), s = s = {
        guildId: l,
        analyticsLocations: e,
        initialSelectedNameplate: a
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(s, t))
      }), i))
    }
  })
}