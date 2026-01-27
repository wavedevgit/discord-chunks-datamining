/** Chunk was on web.js **/
/** chunk id: 567305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D3: () => p,
  DN: () => s,
  HT: () => a,
  OV: () => o,
  TG: () => u,
  Xi: () => f,
  _Y: () => d,
  a0: () => _,
  hA: () => c
}), require("./469993.js");
var Chunk175650 = require("./175650.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  returntrue
}

function o(e) {
  returntrue
}

function s(e) {
  return r.rh.useExperiment({
    guildId: null != e ? e : i.dJq,
    location: "504714_7"
  })
}
let l = [Chunk652215.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED, Chunk652215.GuildFeatures.CREATOR_MONETIZABLE, Chunk652215.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL],
  c = e => null != e && l.some(t => e.features.has(t));

function u(e) {
  let {
    enabled: t
  } = r.ok.getCurrentConfig({
    guildId: null != e ? e : i.dJq,
    location: "504714_9"
  }, {
    autoTrackExposure: false
  });
  return t
}

function d(e) {
  let {
    enabled: t
  } = r.ok.useExperiment({
    guildId: null != e ? e : i.dJq,
    location: "504714_10"
  }, {
    autoTrackExposure: false
  });
  return t
}

function f(e) {
  let {
    showCreatorPortalLink: t
  } = r.ok.useExperiment({
    guildId: null != e ? e : i.dJq,
    location: "504714_11"
  }, {
    autoTrackExposure: false
  });
  return t
}

function p() {
  let {
    enabled: e
  } = r.LD.getCurrentConfig({
    location: "504714_12"
  }, {
    autoTrackExposure: false
  });
  return e
}

function _() {
  let {
    enabled: e
  } = r.LD.useExperiment({
    location: "504714_13"
  }, {
    autoTrackExposure: false
  });
  return e
}