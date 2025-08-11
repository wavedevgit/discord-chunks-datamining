/** Chunk was on web.js **/
/** chunk id: 340541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => l,
  _k: () => s,
  jW: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-03_invites_refresh",
  label: "Invites Refresh",
  defaultConfig: {
    enabled: false,
    entrypoints: false,
    modal: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enabled - Treatment 1 (Full Invites Refresh)",
    config: {
      enabled: true,
      entrypoints: true,
      modal: true
    }
  }, {
    id: 2,
    label: "Enabled - Treatment 2 (New Entrypoints, Old Modal)",
    config: {
      enabled: true,
      entrypoints: true,
      modal: false
    }
  }, {
    id: 3,
    label: "Enabled - Treatment 3 (Old Entrypoints, New Modal)",
    config: {
      enabled: true,
      entrypoints: false,
      modal: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e, {
    enabled: n,
    entrypoints: r,
    modal: i
  } = o.getCurrentConfig({
    location: t
  });
  return {
    enabled: n,
    entrypoints: r,
    modal: i
  }
}

function s(e) {
  let {
    location: t
  } = e, {
    enabled: n,
    entrypoints: r,
    modal: i
  } = o.useExperiment({
    location: t
  });
  return {
    enabled: n,
    entrypoints: r,
    modal: i
  }
}
let l = o