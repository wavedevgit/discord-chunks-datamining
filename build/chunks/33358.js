/** Chunk was on 92414 **/
/** chunk id: 33358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => m
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk617617 = require("./617617.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk811602 = require("./811602.js"),
  Chunk282108 = require("./282108.js"),
  Chunk975214 = require("./975214.js");

function m(e) {
  let t, n, m, h, p, {
    channelId: y,
    authorId: f
  } = null == e ? {} : (0, c.nx)(e);
  return t = (0, c.ku)(), n = (0, i.bG)([a.default], () => a.default.getCurrentUser()), m = (0, i.bG)([s.A, o.A], () => (0, c.c2)(y, f, [s.A, o.A])), h = (0, i.bG)([l.A], () => t.reduce((e, t) => {
    var n, r;
    return n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e), r = r = {
      [t.harmType]: t.getProtoUserSettings(l.A.settings)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n
  }, {}), [t], d.M), 0 === (p = r.useMemo(() => null == m || f === (null == n ? true : n.id) || null == n ? [] : t.map(e => {
    let t = h[e.harmType],
      n = null == m ? null : e.getUserSettingsWithDefaults(t)[m];
    return (0, c.f)(n) ? e.harmType : null
  }).filter(e => null != e), [m, t, h, f, n])).length ? u.LO.NONE : (0, c.LE)(p)
}