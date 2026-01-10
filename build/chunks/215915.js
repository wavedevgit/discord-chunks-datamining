/** Chunk was on 46746 **/
/** chunk id: 215915, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => u
});
var n, i, Chunk442837 = require("./442837.js"),
  Chunk722733 = require("./722733.js"),
  Chunk633289 = require("./633289.js"),
  Chunk751823 = require("./751823.js");
let a = {
    smarterSourceOrdering: false
  },
  d = (0, Chunk722733.ZP)({
    name: "2025-08-go-live-source-ordering",
    kind: "user",
    defaultConfig: a,
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
      }({}, a), i = i = {
        smarterSourceOrdering: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n)
    }
  });

function u(e) {
  let {
    location: t
  } = e;
  return (0, s.e7)([o.Z], () => (function(e) {
    let {
      location: t
    } = e, {
      isInHoldout: r
    } = c.L.getCurrentConfig({
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