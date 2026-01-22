/** Chunk was on 96811 **/
/** chunk id: 429432, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  s: () => f
});
var n, l, Chunk311907 = require("./311907.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js"),
  Chunk128319 = require("./128319.js");
let o = {
    smarterSourceOrdering: false
  },
  d = (0, Chunk250105.Ay)({
    name: "2025-08-go-live-source-ordering",
    kind: "user",
    defaultConfig: o,
    variations: {
      1: (n = function(e) {
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
      }({}, o), l = l = {
        smarterSourceOrdering: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n)
    }
  });

function f(e) {
  let {
    location: t
  } = e;
  return (0, s.bG)([a.A], () => (function(e) {
    let {
      location: t
    } = e, {
      isInHoldout: r
    } = c.p.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: true
    });
    return r ? d.definition.defaultConfig : d.getConfig({
      location: t
    })
  })({
    location: t
  }))
}