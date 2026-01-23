/** Chunk was on 31748 **/
/** chunk id: 253541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B2: () => i,
  dz: () => l
});
let r = (0, require("./600975.js").C)({
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

function l(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    isPrefetchEnabled: l
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__
  });
  return l
}

function i(e) {
  let {
    location: t,
    autoTrackExposure: n,
    disable: l
  } = e, {
    isDownloadIconEnabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__ || l
  });
  return i
}