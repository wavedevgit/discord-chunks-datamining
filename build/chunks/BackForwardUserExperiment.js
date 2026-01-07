/** Chunk was on web.js **/
/** chunk id: 719961, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => s,
  v: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk358085 = require("./358085.js");
let a = (0, Chunk818083.B)({
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

function o() {
  return {
    autoTrackExposure: true,
    disable: !(0, i.isDesktop)()
  }
}

function s(e) {
  return a.useExperiment(e, o())
}

function l(e) {
  let {
    backForwardButtons: t
  } = a.getCurrentConfig(e, o());
  return t
}