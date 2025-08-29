/** Chunk was on web.js **/
/** chunk id: 477734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X$: () => o,
  _f: () => s
}), require("./906732.jsx");
var Chunk818083 = require("./818083.js"),
  Chunk387332 = require("./387332.js");
let a = (0, Chunk818083.B)({
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

function o() {
  let e = (0, Chunk387332.Y0)({
    location: "canSeeRemixBadge"
  });
  return a.useExperiment({
    location: "canSeeRemixBadge"
  }, {
    autoTrackExposure: true
  }).canSeeRemixBadge && module
}

function s() {
  let e = (0, Chunk387332.Y0)({
    location: "isRemixANitroPerkHook"
  });
  return a.useExperiment({
    location: "isRemixANitroPerkHook"
  }, {
    autoTrackExposure: true
  }).isNitroPerk && module
}