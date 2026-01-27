/** Chunk was on web.js **/
/** chunk id: 534409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k5: () => a,
  lV: () => o,
  qK: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-04_desktop_refresh_fast_follows",
  label: "Desktop Refresh Fast Follows",
  defaultConfig: {
    largerGuildIcons: false,
    darkerGuildListBackground: false,
    distinctBorders: false
  },
  treatments: [{
    id: 1,
    label: "Larger Guild Icons",
    config: {
      largerGuildIcons: true,
      darkerGuildListBackground: false,
      distinctBorders: false
    }
  }, {
    id: 2,
    label: "Darker Guild List Background",
    config: {
      largerGuildIcons: false,
      darkerGuildListBackground: true,
      distinctBorders: false
    }
  }, {
    id: 3,
    label: "Larger Guild Icons and Darker Guild List Background",
    config: {
      largerGuildIcons: true,
      darkerGuildListBackground: true,
      distinctBorders: false
    }
  }, {
    id: 4,
    label: "More Distinct Chassis Borders",
    config: {
      largerGuildIcons: false,
      darkerGuildListBackground: false,
      distinctBorders: true
    }
  }, {
    id: 5,
    label: "Larger Guild Icons and More Distinct Chassis Borders",
    config: {
      largerGuildIcons: true,
      darkerGuildListBackground: false,
      distinctBorders: true
    }
  }]
});

function i(e) {
  returnfalse
}

function a(e) {
  return r.useExperiment({
    location: e
  }).darkerGuildListBackground
}

function o(e) {
  return r.useExperiment({
    location: e
  }).distinctBorders
}