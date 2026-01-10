/** Chunk was on web.js **/
/** chunk id: 923726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $F: () => p,
  Bt: () => a,
  Gp: () => _,
  hQ: () => u,
  kT: () => o,
  s1: () => s,
  ss: () => d,
  sy: () => c,
  yi: () => f
}), require("./223892.js");
var Chunk644542 = require("./644542.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  returntrue
}

function o(e) {
  returntrue
}

function s(e) {
  return r.ai.useExperiment({
    guildId: null != e ? e : i.lds,
    location: "504714_7"
  })
}
let l = [Chunk981631.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED, Chunk981631.GuildFeatures.CREATOR_MONETIZABLE, Chunk981631.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL],
  c = e => null != e && l.some(t => e.features.has(t));

function u(e) {
  let {
    enabled: t
  } = r.jJ.getCurrentConfig({
    guildId: null != e ? e : i.lds,
    location: "504714_9"
  }, {
    autoTrackExposure: false
  });
  return t
}

function d(e) {
  let {
    enabled: t
  } = r.jJ.useExperiment({
    guildId: null != e ? e : i.lds,
    location: "504714_10"
  }, {
    autoTrackExposure: false
  });
  return t
}

function f(e) {
  let {
    showCreatorPortalLink: t
  } = r.jJ.useExperiment({
    guildId: null != e ? e : i.lds,
    location: "504714_11"
  }, {
    autoTrackExposure: false
  });
  return t
}

function p() {
  let {
    enabled: e
  } = r.$i.getCurrentConfig({
    location: "504714_12"
  }, {
    autoTrackExposure: false
  });
  return e
}

function _() {
  let {
    enabled: e
  } = r.$i.useExperiment({
    location: "504714_13"
  }, {
    autoTrackExposure: false
  });
  return e
}