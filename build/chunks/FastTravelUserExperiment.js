/** Chunk was on web.js **/
/** chunk id: 336219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s,
  v: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk358085 = require("./358085.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-03_fast_travel",
  label: "Fast Travel",
  defaultConfig: {
    backForwardButtons: false,
    titlebarFastTravel: false,
    quickSwitcherInsteadOfTitle: false
  },
  treatments: [{
    id: 1,
    label: "Back/Forward Buttons only",
    config: {
      backForwardButtons: true,
      titlebarFastTravel: false,
      quickSwitcherInsteadOfTitle: false
    }
  }, {
    id: 2,
    label: "back/forward buttons and quick switcher on title",
    config: {
      backForwardButtons: true,
      titlebarFastTravel: true,
      quickSwitcherInsteadOfTitle: false
    }
  }, {
    id: 3,
    label: "back/forward buttons and quick switcher INSTEAD of title",
    config: {
      backForwardButtons: true,
      titlebarFastTravel: true,
      quickSwitcherInsteadOfTitle: true
    }
  }]
});

function a() {
  return {
    autoTrackExposure: true,
    disable: !(0, Chunk358085.isDesktop)()
  }
}

function s(e) {
  return o.useExperiment(e, a())
}

function l(e) {
  let {
    backForwardButtons: t
  } = o.getCurrentConfig(e, a());
  return t
}