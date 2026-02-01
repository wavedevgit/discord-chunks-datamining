/** Chunk was on 61344 **/
/** chunk id: 253541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B2: () => i,
  dz: () => r
});
let l = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-05_flamingo_prefetch",
  label: "Flamingo Prefetch (Download Experiments)",
  defaultConfig: {
    isPrefetchEnabled: false,
    isDownloadIconEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Prefetch (Download on Popout)",
    config: {
      isPrefetchEnabled: true,
      isDownloadIconEnabled: false
    }
  }, {
    id: 2,
    label: "Download Icon",
    config: {
      isPrefetchEnabled: false,
      isDownloadIconEnabled: true
    }
  }]
});

function r(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    isPrefetchEnabled: r
  } = l.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__
  });
  return r
}

function i(e) {
  let {
    location: t,
    autoTrackExposure: n,
    disable: r
  } = e, {
    isDownloadIconEnabled: i
  } = l.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__ || r
  });
  return i
}