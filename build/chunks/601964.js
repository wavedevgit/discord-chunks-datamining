/** Chunk was on web.js **/
/** chunk id: 601964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cx: () => d,
  EB: () => f,
  Ov: () => u,
  VI: () => c,
  Y2: () => b,
  eM: () => _,
  gM: () => p,
  kH: () => E,
  lV: () => g,
  yn: () => h,
  zN: () => m
}), require("./388685.js");
var Chunk311929 = require("./311929.js"),
  Chunk165540 = require("./165540.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js");
let c = "Guild",
  u = new Set([Chunk981631.V_K.EXPLICIT, Chunk981631.V_K.AGE_RESTRICTED]),
  d = Object.freeze({
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

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return a.ZP.getGuildIconURL({
    id: e.id,
    size: t,
    icon: e.icon,
    canAnimate: n,
    lossless: r
  })
}

function p(e) {
  return (0, s.Zg)(e.name)
}

function _(e, t) {
  let n = "string" == typeof t ? t : null != t ? t.id : null;
  return e.ownerId === n
}

function h(e, t) {
  return (!!t.mfaEnabled || e.mfaLevel !== l.BpS.ELEVATED) && _(e, t)
}

function m(e) {
  return null == e.joinedAt
}

function g(e) {
  return o.default.castGuildIdAsEveryoneGuildRoleId(e.id)
}

function E(e, t) {
  return (0, r.t8)(e, "joinedAt", "string" == typeof t ? new Date(t) : t)
}

function b(e) {
  var t;
  return null != e && ((0, i.X)("guild_record") ? u.has(e.nsfwLevel) : u.has(null != (t = e.ownerConfiguredContentLevel) ? t : l.V_K.DEFAULT))
}