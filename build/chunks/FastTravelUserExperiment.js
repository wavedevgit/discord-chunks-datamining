/** Chunk was on 1272 **/
/** chunk id: 336219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk358085 = require("./358085.js");
let l = (0, Chunk818083.B)({
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

function a(e) {
  return l.useExperiment(e, {
    autoTrackExposure: true,
    disable: !(0, i.isDesktop)()
  })
}