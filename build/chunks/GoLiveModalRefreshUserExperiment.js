/** Chunk was on 85362 **/
/** chunk id: 668519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => o,
  s: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-01_go_live_modal_refresh",
  label: "Go Live Modal Refresh",
  defaultConfig: {
    showRefreshedGoLiveModal: false,
    twoClickVariant: false,
    skipModalForGame: false,
    twoStepModal: false,
    showSDHDUpsell: false,
    footerSlideIn: false
  },
  treatments: [{
    id: 1,
    label: "Show refreshed go live modal",
    config: {
      showRefreshedGoLiveModal: true,
      twoClickVariant: false,
      skipModalForGame: false,
      twoStepModal: false,
      showSDHDUpsell: true,
      footerSlideIn: false
    }
  }, {
    id: 2,
    label: "Show refreshed go live modal, 2 click variant",
    config: {
      showRefreshedGoLiveModal: true,
      twoClickVariant: true,
      skipModalForGame: false,
      twoStepModal: false,
      showSDHDUpsell: true,
      footerSlideIn: true
    }
  }, {
    id: 3,
    label: "Show refreshed go live modal, 2 click variant, dont skip modal for game",
    config: {
      showRefreshedGoLiveModal: true,
      twoClickVariant: true,
      skipModalForGame: false,
      twoStepModal: false,
      showSDHDUpsell: true,
      footerSlideIn: true
    }
  }, {
    id: 4,
    label: "Show refreshed go live modal, 2 click variant, dont skip modal for game, use two step modal",
    config: {
      showRefreshedGoLiveModal: true,
      twoClickVariant: false,
      skipModalForGame: false,
      twoStepModal: true,
      showSDHDUpsell: false,
      footerSlideIn: false
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}

function a(e) {
  i.Y.getCurrentConfig({
    location: e
  }).isInHoldout || l.trackExposure({
    location: e
  })
}