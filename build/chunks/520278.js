/** Chunk was on 32249 **/
/** chunk id: 520278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => r
});

function r(e, t, n, r) {
  let {
    enabled: l
  } = e.useExperiment({
    location: r
  }, {
    autoTrackExposure: false
  });
  return !!n.config.features.includes(t) && (e.trackExposure({
    location: r
  }), l)
}