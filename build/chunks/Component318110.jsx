/** Chunk was on 75708 **/
/** chunk id: 318110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");
let s = e => {
  let {
    analyticsLocations: t,
    guildId: s,
    initialSelectedNameplate: a
  } = e;
  (0, r.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("89001"), n.e("32104"), n.e("11912")]).then(n.bind(n, 612293));
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
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, n), l = l = {
        guildId: s,
        analyticsLocations: t,
        initialSelectedNameplate: a
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
  })
}