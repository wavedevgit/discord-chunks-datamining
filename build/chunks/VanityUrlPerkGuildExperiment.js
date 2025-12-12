/** Chunk was on web.js **/
/** chunk id: 158638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AR: () => f,
  Mp: () => d,
  g1: () => l,
  q8: () => u,
  qI: () => c,
  sT: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js");
let o = (0, Chunk818083.B)({
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
  return null != e && e !== a._ && e !== i.I_8
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