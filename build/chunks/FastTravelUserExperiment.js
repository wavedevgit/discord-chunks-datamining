/** Chunk was on 21738 **/
/** chunk id: 420936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk723702 = require("./723702.js");
let l = (0, Chunk600975.C)({
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