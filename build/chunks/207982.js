/** Chunk was on 87048 **/
"use strict";
n.d(t, {
  G: () => l
}), n(388685), n(73800);
var r = n(374470),
  o = n(730606),
  i = n(312097),
  a = n(52824);

function l(e, t, n) {
  let l = {},
    s = {};
  for (let [c, d] of e.entries()) {
    let u = (0, a.q)({
      proxyURL: d.proxyUrl,
      url: d.url
    });
    l[u] = o => (function(e, t, n) {
      var o, a;
      let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        s = arguments.length > 4 ? arguments[4] : void 0;
      e.preventDefault(), (0, r.k)(e.currentTarget) && e.currentTarget.blur(), (0, i.K)((o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, l), a = a = {
        items: t,
        startingIndex: n,
        location: null != s ? s : "zoomedMediaModalHelper"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
      }), o))
    })(o, e, c, t, n), s[u] = () => (0, o.WG)(d, e.length > 1)
  }
  return {
    srcToOnClickOverride: l,
    srcToHandlePreloadImage: s
  }
}