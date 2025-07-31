/** Chunk was on 30141 **/
n.d(e, {
  H: () => l
});
var r = n(255367);
n(73800);
var i = n(481060);
let l = t => {
  let {
    analyticsLocations: e,
    initialSelectedEffectId: l,
    guild: a
  } = t;
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("55183").then(n.bind(n, 191564));
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[e] = r
          })
        }
        return t
      }({}, n), s = s = {
        guild: a,
        initialSelectedEffectId: l,
        analyticsLocations: e
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
  }, {})
}