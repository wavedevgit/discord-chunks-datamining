/** Chunk was on web.js **/
/** chunk id: 336219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MK: () => r,
  ZP: () => a,
  vA: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-03_fast_travel",
  label: "Fast Travel",
  defaultConfig: {
    backForwardButtons: false,
    titlebarFastTravel: false
  },
  treatments: [{
    id: 1,
    label: "Back/Forward Buttons only",
    config: {
      backForwardButtons: true,
      titlebarFastTravel: false
    }
  }, {
    id: 2,
    label: "Back/Forward buttons and titlebar fast travel",
    config: {
      backForwardButtons: true,
      titlebarFastTravel: true
    }
  }]
});

function i(e) {
  let {
    backForwardButtons: t
  } = r.getCurrentConfig(e);
  return t
}
let a = r