/** Chunk was on 24206 **/
/** chunk id: 157283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => c
});
var r, l, Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let a = {
    showRefreshedStreamTaxonomy: false
  },
  s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_stream_survey_taxonomy_refresh",
    label: "Stream survey taxonomy refresh",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Show refreshed stream taxonomy",
      config: (r = function(e) {
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
      }({}, a), l = l = {
        showRefreshedStreamTaxonomy: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r)
    }]
  });

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = o.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}