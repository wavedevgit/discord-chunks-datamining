/** Chunk was on 58703 **/
/** chunk id: 347935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => c
});
var o, r, Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let a = {
    showRefreshedCallTaxonomy: false
  },
  s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-05_av_survey_taxonomy_refresh",
    label: "Call survey taxonomy refresh",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Show refreshed call taxonomy",
      config: (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), o.forEach(function(t) {
            var o;
            o = n[t], t in e ? Object.defineProperty(e, t, {
              value: o,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = o
          })
        }
        return e
      }({}, a), r = r = {
        showRefreshedCallTaxonomy: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n.push.apply(n, o)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
      }), o)
    }]
  });

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: o
  } = l.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.useExperiment({
    location: t
  }, {
    disable: o,
    autoTrackExposure: n
  })
}