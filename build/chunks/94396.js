/** Chunk was on 70420 **/
n.d(t, {
  J: () => c
}), n(47120), n(192379);
var i = n(374470),
  o = n(730606),
  r = n(312097),
  a = n(52824),
  l = n(442976);

function c(e, t, n) {
  let c = {},
    s = {};
  for (let [_, d] of e.entries()) {
    let u = (0, a.q)({
      proxyURL: d.proxyUrl,
      url: d.url
    });
    c[u] = o => (function(e, t, n) {
      var o, a;
      let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        s = arguments.length > 4 ? arguments[4] : void 0;
      e.preventDefault(), (0, i.k)(e.currentTarget) && e.currentTarget.blur(), (0, r.K)((o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, c), a = a = {
        className: l.forcedTransparency,
        items: t,
        startingIndex: n,
        location: null != s ? s : "zoomedMediaModalHelper"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
      }), o))
    })(o, e, _, t, n), s[u] = () => (0, o.WG)(d, e.length > 1)
  }
  return {
    srcToOnClickOverride: c,
    srcToHandlePreloadImage: s
  }
}