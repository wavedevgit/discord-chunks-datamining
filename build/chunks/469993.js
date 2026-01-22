/** Chunk was on web.js **/
/** chunk id: 469993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KD: () => h,
  Kw: () => _,
  Li: () => p,
  ME: () => d,
  Sm: () => f,
  Z1: () => s,
  Zy: () => m,
  oS: () => a
});
var Chunk967245 = require("./967245.js"),
  Chunk652215 = require("./652215.js");

function a() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = r.i$.useExperiment({
    location: "e3bb71_1"
  }, {
    autoTrackExposure: false
  });
  return e
}

function s() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = r.i$.getCurrentConfig({
    location: "e3bb71_2"
  }, {
    autoTrackExposure: false
  });
  return e
}

function o(e) {
  return null != e
}

function l(e) {
  return null != e
}

function c(e) {
  return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE)
}

function u(e) {
  return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE)
}

function d(e) {
  let t = o(null == e ? true : e.id),
    n = c(e);
  return t || n
}

function f(e) {
  return l(null == e ? true : e.id) || u(e)
}

function p(e) {
  let {
    enableWaitlist: t
  } = r.xQ.useExperiment({
    guildId: null != e ? e : i.dJq,
    location: "e3bb71_9"
  }, {
    autoTrackExposure: false
  });
  return t
}

function _(e) {
  let {
    enableWaitlist: t
  } = r.xQ.getCurrentConfig({
    guildId: null != e ? e : i.dJq,
    location: "e3bb71_10"
  });
  return t
}

function h() {
  let {
    enableCreatorMonetizationNagActivateForUser: e
  } = r.wm.getCurrentConfig({
    location: "e3bb71_11"
  }, {
    autoTrackExposure: true
  });
  return e
}

function m(e) {
  let {
    hideMonetizatonOnboardingInServerSettings: t
  } = r.yz.getCurrentConfig({
    guildId: null != e ? e : i.dJq,
    location: "e3bb71_12"
  }, {
    autoTrackExposure: false
  });
  return t
}