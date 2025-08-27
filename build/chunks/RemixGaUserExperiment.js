/** Chunk was on web.js **/
/** chunk id: 477734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X$: () => i,
  _f: () => a
}), require("./906732.jsx");
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-08_remix_ga",
  label: "Remix General Available",
  defaultConfig: {
    canSeeRemixBadge: false,
    canRemix: false,
    isNitroPerk: false
  },
  treatments: [{
    id: 1,
    label: "Remix for Nitro Subscribers",
    config: {
      canSeeRemixBadge: true,
      canRemix: true,
      isNitroPerk: true
    }
  }, {
    id: 3,
    label: "Upsell Remix for Non-Nitro Users",
    config: {
      canSeeRemixBadge: true,
      canRemix: false,
      isNitroPerk: true
    }
  }, {
    id: 5,
    label: "Remix GA for everyone",
    config: {
      canSeeRemixBadge: true,
      canRemix: true,
      isNitroPerk: false
    }
  }]
});

function i() {
  return r.useExperiment({
    location: "canSeeRemixBadge"
  }, {
    autoTrackExposure: true
  }).canSeeRemixBadge
}

function a() {
  return !!r.useExperiment({
    location: "isRemixANitroPerkHook"
  }, {
    autoTrackExposure: true
  }).isNitroPerk
}