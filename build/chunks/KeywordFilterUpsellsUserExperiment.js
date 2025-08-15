/** Chunk was on 25292 **/
/** chunk id: 517858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C3: () => o,
  GW: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-08_keyword_filter_upsells",
  label: "Language Filter Upsells",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Upsell for Keyword Language Filters",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n
}

function o(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n
}