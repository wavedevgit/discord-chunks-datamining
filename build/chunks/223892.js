/** Chunk was on web.js **/
/** chunk id: 223892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DB: () => a,
  Lm: () => m,
  Ob: () => d,
  Rw: () => f,
  Sd: () => o,
  Vm: () => h,
  gS: () => p,
  mG: () => _
});
var Chunk586072 = require("./586072.js"),
  Chunk981631 = require("./981631.js");

function o() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = Chunk586072.bT.useExperiment({
    location: "e3bb71_1"
  }, {
    autoTrackExposure: false
  });
  return module
}

function a() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = Chunk586072.bT.getCurrentConfig({
    location: "e3bb71_2"
  }, {
    autoTrackExposure: false
  });
  return module
}

function s(e) {
  let {
    enableFastMonetizationOnboardingForGuild: t
  } = r.z.useExperiment({
    guildId: null != e ? e : i.lds,
    location: "e3bb71_3"
  }, {
    autoTrackExposure: true
  }), {
    enableFastMonetizationOnboardingForUser: n
  } = r.AC.useExperiment({
    location: "e3bb71_4"
  }, {
    autoTrackExposure: false
  });
  return null != e && t && n
}

function l(e) {
  let {
    enableFastMonetizationOnboardingForGuild: t
  } = r.z.getCurrentConfig({
    guildId: null != e ? e : i.lds,
    location: "e3bb71_5"
  }), {
    enableFastMonetizationOnboardingForUser: n
  } = r.AC.getCurrentConfig({
    location: "e3bb71_6"
  });
  return null != e && t && n
}

function c(e) {
  let {
    enableFastMonetizationOnboardingForUser: t
  } = r.AC.useExperiment({
    location: "e3bb71_7"
  }, {
    autoTrackExposure: false
  });
  return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE) && t
}

function u(e) {
  let {
    enableFastMonetizationOnboardingForUser: t
  } = r.AC.getCurrentConfig({
    location: "e3bb71_8"
  });
  return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE) && t
}

function d(e) {
  let t = s(null == e ? true : e.id),
    n = c(e);
  return t || n
}

function f(e) {
  return l(null == e ? true : e.id) || u(e)
}

function p(e) {
  let {
    enableWaitlist: t
  } = r.IW.useExperiment({
    guildId: null != e ? e : i.lds,
    location: "e3bb71_9"
  }, {
    autoTrackExposure: false
  });
  return t
}

function _(e) {
  let {
    enableWaitlist: t
  } = r.IW.getCurrentConfig({
    guildId: null != e ? e : i.lds,
    location: "e3bb71_10"
  });
  return t
}

function m() {
  let {
    enableCreatorMonetizationNagActivateForUser: e
  } = Chunk586072.aC.getCurrentConfig({
    location: "e3bb71_11"
  }, {
    autoTrackExposure: true
  });
  return module
}

function h(e) {
  let {
    hideMonetizatonOnboardingInServerSettings: t
  } = r.kR.getCurrentConfig({
    guildId: null != e ? e : i.lds,
    location: "e3bb71_12"
  }, {
    autoTrackExposure: false
  });
  return t
}