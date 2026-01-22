/** Chunk was on web.js **/
/** chunk id: 260509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DG: () => m,
  Iv: () => f,
  Rb: () => p,
  af: () => g,
  bM: () => _,
  do: () => d,
  kn: () => E,
  ok: () => h,
  uA: () => u,
  vI: () => c,
  wh: () => b
}), require("./896048.js");
var Chunk867051 = require("./867051.js"),
  Chunk329972 = require("./329972.js"),
  Chunk486020 = require("./486020.js"),
  Chunk661191 = require("./661191.js"),
  Chunk240248 = require("./240248.js"),
  Chunk652215 = require("./652215.js");
let c = "Guild",
  u = new Set([Chunk652215.ftr.EXPLICIT, Chunk652215.ftr.AGE_RESTRICTED]),
  d = Object.freeze({
    mfaLevel: Chunk652215.EkJ.NONE,
    preferredLocale: "en-US",
    afkTimeout: 0,
    defaultMessageNotifications: Chunk652215.orn.ALL_MESSAGES,
    verificationLevel: Chunk652215.PvD.NONE,
    explicitContentFilter: Chunk652215.gh6.DISABLED,
    premiumProgressBarEnabled: false,
    systemChannelFlags: 0,
    maxStageVideoChannelUsers: false,
    maxVideoChannelUsers: false,
    maxMembers: false,
    premiumTier: Chunk652215.TVA.NONE,
    nsfwLevel: Chunk652215.ftr.DEFAULT,
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
  return a.Ay.getGuildIconURL({
    id: e.id,
    size: t,
    icon: e.icon,
    canAnimate: n,
    lossless: r
  })
}

function p(e) {
  return (0, o.oN)(e.name)
}

function _(e, t) {
  let n = "string" == typeof t ? t : null != t ? t.id : null;
  return e.ownerId === n
}

function h(e, t) {
  return (!!t.mfaEnabled || e.mfaLevel !== l.EkJ.ELEVATED) && _(e, t)
}

function m(e) {
  return null == e.joinedAt
}

function g(e) {
  return s.default.castGuildIdAsEveryoneGuildRoleId(e.id)
}

function E(e, t) {
  return (0, r.hZ)(e, "joinedAt", "string" == typeof t ? new Date(t) : t)
}

function b(e) {
  var t;
  return null != e && ((0, i.v)("guild_record") ? u.has(e.nsfwLevel) : u.has(null != (t = e.ownerConfiguredContentLevel) ? t : l.ftr.DEFAULT))
}