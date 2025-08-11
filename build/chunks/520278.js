/** Chunk was on 27458 **/
/** chunk id: 520278, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => n
});

function n(e, t, r, n) {
  let {
    enabled: s
  } = e.useExperiment({
    location: n
  }, {
    autoTrackExposure: false
  });
  return !!r.config.features.includes(t) && (e.trackExposure({
    location: n
  }), s)
}