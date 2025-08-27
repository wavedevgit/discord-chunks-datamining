/** Chunk was on web.js **/
/** chunk id: 601964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cx: () => c,
  EB: () => u,
  VI: () => l,
  Y2: () => g,
  eM: () => f,
  gM: () => d,
  kH: () => m,
  lV: () => h,
  yn: () => _,
  zN: () => p
}), require("./388685.js");
var Chunk311929 = require("./311929.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js");
let l = "Guild",
  c = Object.freeze({
    mfaLevel: Chunk981631.BpS.NONE,
    preferredLocale: "en-US",
    afkTimeout: 0,
    defaultMessageNotifications: Chunk981631.bL.ALL_MESSAGES,
    verificationLevel: Chunk981631.sFg.NONE,
    explicitContentFilter: Chunk981631.lxg.DISABLED,
    premiumProgressBarEnabled: false,
    systemChannelFlags: 0,
    maxStageVideoChannelUsers: false,
    maxVideoChannelUsers: false,
    maxMembers: false,
    premiumTier: Chunk981631.Eu4.NONE,
    nsfwLevel: Chunk981631.V_K.DEFAULT,
    premiumSubscriberCount: 0,
    features: new Set,
    description: null,
    icon: null,
    ownerId: null,
    systemChannelId: null,
    joinedAt: null,
    discoverySplash: null,
    splash: null,
    banner: null,
    homeHeader: null,
    afkChannelId: null,
    application_id: null,
    vanityURLCode: null,
    rulesChannelId: null,
    safetyAlertsChannelId: null,
    publicUpdatesChannelId: null,
    ownerConfiguredContentLevel: null,
    hubType: null,
    latestOnboardingQuestionId: null,
    profile: null,
    premiumFeatures: null,
    moderatorReporting: null
  });

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return i.ZP.getGuildIconURL({
    id: e.id,
    size: t,
    icon: e.icon,
    canAnimate: n,
    lossless: r
  })
}

function d(e) {
  return (0, o.Zg)(e.name)
}

function f(e, t) {
  let n = "string" == typeof t ? t : null != t ? t.id : null;
  return e.ownerId === n
}

function _(e, t) {
  return (!!t.mfaEnabled || e.mfaLevel !== s.BpS.ELEVATED) && f(e, t)
}

function p(e) {
  return null == e.joinedAt
}

function h(e) {
  return a.default.castGuildIdAsEveryoneGuildRoleId(e.id)
}

function m(e, t) {
  return (0, r.t8)(e, "joinedAt", "string" == typeof t ? new Date(t) : t)
}

function g(e) {
  return null != e && (e.ownerConfiguredContentLevel === s.V_K.EXPLICIT || e.ownerConfiguredContentLevel === s.V_K.AGE_RESTRICTED)
}