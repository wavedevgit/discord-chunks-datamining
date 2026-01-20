/** Chunk was on 11010 **/
/** chunk id: 967021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HM: () => i,
  J_: () => l
});
let r = (0, require("./818083.js").B)({
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

function i(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    isPrefetchEnabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__
  });
  return i
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n,
    disable: i
  } = e, {
    isDownloadIconEnabled: l
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__ || i
  });
  return l
}