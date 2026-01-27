/** Chunk was on web.js **/
/** chunk id: 840120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bl: () => f,
  M5: () => l,
  Qb: () => o,
  gz: () => c,
  ip: () => d,
  j$: () => u
});
var Chunk600975 = require("./600975.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js");
let o = (0, Chunk600975.C)({
  kind: "guild",
  id: "2025-06_vanity_url_perk",
  label: "Vanity URL Standalone Perk",
  defaultConfig: {
    enabled: false,
    rollbackEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable ability to purchase Vanity URL Standalone Perk",
    config: {
      enabled: true,
      rollbackEnabled: false
    }
  }, {
    id: 2,
    label: "Rollback UI for Vanity URL Standalone Perk",
    config: {
      enabled: true,
      rollbackEnabled: true
    }
  }]
});

function s(e) {
  return null != e && e !== a.V && e !== i.YYv
}

function l(e, t) {
  let n = s(e);
  return o.useExperiment({
    guildId: e,
    location: t
  }, {
    disable: !n,
    autoTrackExposure: false
  }).enabled
}

function c(e, t) {
  let n = s(e),
    r = o.useExperiment({
      guildId: e,
      location: t
    }, {
      disable: !n,
      autoTrackExposure: false
    });
  return r.enabled && !r.rollbackEnabled
}

function u(e, t) {
  let n = s(e);
  return o.useExperiment({
    guildId: e,
    location: t
  }, {
    disable: !n,
    autoTrackExposure: false
  }).rollbackEnabled
}

function d(e, t) {
  return !!s(e) && o.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).rollbackEnabled
}

function f(e, t) {
  return !!s(e) && o.getCurrentConfig({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}