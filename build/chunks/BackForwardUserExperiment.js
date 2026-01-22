/** Chunk was on web.js **/
/** chunk id: 545167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l,
  p: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk723702 = require("./723702.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-08_back_forward",
  label: "Back Forward",
  defaultConfig: {
    backForwardButtons: false,
    titlebarHoverHighlight: false,
    titlebarIconSize: "refresh_sm",
    guildTitleIconSize: "xs",
    guildIconSize: "Mini"
  },
  treatments: [{
    id: 1,
    label: "Back/forward buttons - 18px titlebar icons",
    config: {
      backForwardButtons: true,
      titlebarHoverHighlight: true,
      titlebarIconSize: "sm",
      guildTitleIconSize: "sm",
      guildIconSize: "Smol"
    }
  }, {
    id: 2,
    label: "Back/forward buttons - 20px titlebar icons",
    config: {
      backForwardButtons: true,
      titlebarHoverHighlight: true,
      titlebarIconSize: "refresh_sm",
      guildTitleIconSize: "refresh_sm",
      guildIconSize: "Mini"
    }
  }]
});

function s() {
  return {
    autoTrackExposure: true,
    disable: !(0, i.isDesktop)()
  }
}

function o(e) {
  return a.useExperiment(e, s())
}

function l(e) {
  let {
    backForwardButtons: t
  } = a.getCurrentConfig(e, s());
  return t
}