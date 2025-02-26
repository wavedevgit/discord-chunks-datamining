/** Chunk was on 53937 **/
l.d(t, {
  J: () => a
}), l(47120), l(192379);
var r = l(374470),
  n = l(730606),
  i = l(312097),
  s = l(52824),
  o = l(478664);

function a(e, t, l) {
  let a = {},
    d = {};
  for (let [u, c] of e.entries()) {
    let h = (0, s.q)({
      proxyURL: c.proxyUrl,
      url: c.url
    });
    a[h] = n => (function(e, t, l) {
      var n, s;
      let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        d = arguments.length > 4 ? arguments[4] : void 0;
      e.preventDefault(), (0, r.k)(e.currentTarget) && e.currentTarget.blur(), (0, i.K)((n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = l[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, a), s = s = {
        className: o.forcedTransparency,
        items: t,
        startingIndex: l,
        location: null != d ? d : "zoomedMediaModalHelper"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          l.push.apply(l, r)
        }
        return l
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
      }), n))
    })(n, e, u, t, l), d[h] = () => (0, n.WG)(c, e.length > 1)
  }
  return {
    srcToOnClickOverride: a,
    srcToHandlePreloadImage: d
  }
}