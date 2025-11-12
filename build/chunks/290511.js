/** Chunk was on web.js **/
/** chunk id: 290511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BN: () => M,
  FN: () => v,
  NE: () => d,
  NO: () => f,
  Ni: () => w,
  Oq: () => D,
  RF: () => S,
  Un: () => I,
  X: () => b,
  YW: () => _,
  a4: () => L,
  ae: () => A,
  b3: () => g,
  cf: () => P,
  dr: () => N,
  fY: () => y,
  iU: () => u,
  kk: () => m,
  l7: () => O,
  md: () => E,
  qm: () => p,
  rZ: () => k,
  t9: () => j,
  yZ: () => C,
  yx: () => h,
  zz: () => T
}), require("./953529.js"), require("./388685.js"), require("./35282.js"), require("./539854.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let u = 100,
  d = 50,
  f = 100,
  _ = 15,
  p = 50,
  h = 10,
  m = 100,
  g = 4,
  E = 7,
  b = 5,
  y = 13;
var O = function(e) {
    return e[e.CUSTOMIZE = 0] = "CUSTOMIZE", e[e.BROWSE = 1] = "BROWSE", e
  }({}),
  v = function(e) {
    return e[e.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", e[e.DROPDOWN = 1] = "DROPDOWN", e
  }({}),
  I = function(e) {
    return e[e.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", e[e.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED", e
  }({}),
  T = function(e) {
    return e[e.APPLICATION = 0] = "APPLICATION", e[e.PROVIDER_CONNECTED_ACCOUNT = 1] = "PROVIDER_CONNECTED_ACCOUNT", e
  }({});

function S(e) {
  if (e.options.length > 0) returnfalse;
  let t = A(),
    {
      id: n
    } = t,
    r = l(t, ["id"]),
    {
      id: a
    } = e,
    o = l(e, ["id"]);
  return i()(r, o)
}

function A() {
  return {
    id: String(Date.now()),
    title: Chunk388032.intl.string(Chunk388032.t.vY91C9),
    options: [],
    singleSelect: false,
    required: false,
    inOnboarding: true,
    type: 0
  }
}

function C(e) {
  return {
    id: String(Date.now()),
    title: "",
    options: [],
    singleSelect: false,
    required: false,
    inOnboarding: e,
    type: 0
  }
}

function N(e) {
  return {
    id: e.id,
    options: e.options.map(e => {
      var t, n, r;
      return {
        id: e.id,
        channel_ids: e.channelIds,
        role_ids: e.roleIds,
        emoji: e.emoji,
        emoji_id: null == (t = e.emoji) ? true : t.id,
        emoji_name: null == (n = e.emoji) ? true : n.name,
        emoji_animated: null == (r = e.emoji) ? true : r.animated,
        title: e.title,
        description: e.description
      }
    }),
    title: e.title,
    single_select: e.singleSelect,
    disabled: e.disabled,
    required: e.required,
    in_onboarding: e.inOnboarding,
    type: e.type
  }
}

function R(e) {
  return {
    id: e.id,
    options: e.options.map(e => {
      var t;
      return {
        id: e.id,
        channelIds: e.channel_ids,
        roleIds: e.role_ids,
        emoji: e.emoji,
        title: e.title,
        description: null != (t = e.description) ? t : ""
      }
    }),
    title: e.title,
    singleSelect: e.single_select,
    disabled: e.disabled,
    required: e.required,
    inOnboarding: e.in_onboarding,
    type: e.type
  }
}

function P(e) {
  var t, n, r, i;
  return {
    prompts: e.prompts.map(R),
    defaultChannelIds: e.default_channel_ids,
    responses: null != (t = e.responses) ? t : [],
    mode: e.mode,
    enabled: e.enabled,
    onboardingPromptsSeen: null != (n = e.onboarding_prompts_seen) ? n : {},
    onboardingResponsesSeen: null != (r = e.onboarding_responses_seen) ? r : {},
    belowRequirements: e.below_requirements,
    connections: null != (i = e.connections) ? i : []
  }
}

function D(e) {
  return null == e || null == e.id && null == e.name
}
let w = new Set([Chunk981631.ABu.PLAYSTATION_STAGING, Chunk981631.ABu.CONTACTS, Chunk981631.ABu.DOMAIN, Chunk981631.ABu.TWITTER_LEGACY, Chunk981631.ABu.MASTODON, Chunk981631.ABu.INSTAGRAM, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.SKYPE]),
  x = Object.values(Chunk981631.ABu).filter(e => !w.has(e));

function L(e) {
  return 0 === e.connection_type ? "app:".concat(e.application_id) : "provider:".concat(e.provider_id)
}

function M(e) {
  let [t, n] = e.split(":");
  return "app" === t && true !== n && "" !== n ? {
    type: 0,
    applicationId: n
  } : "provider" === t && true !== n && "" !== n ? {
    type: 1,
    providerId: n
  } : null
}

function j(e) {
  let t = [];
  return 0 !== e.connection_type && 1 !== e.connection_type ? t.push("Invalid connection type") : (0 === e.connection_type ? ((0, a.Ew)(e.application_id) && t.push("Application ID is required for application connections"), (0, a.Ew)(e.provider_id) || t.push("Platform ID not allowed for application connections")) : 1 === e.connection_type && ((0, a.Ew)(e.provider_id) ? t.push("Platform ID is required for platform connections") : x.includes(e.provider_id) || t.push("Invalid platform ID"), (0, a.Ew)(e.application_id) || t.push("Application ID not allowed for platform connections")), null != e.description && e.description.length > m && t.push("Description must be ".concat(m, " characters or less"))), t
}

function k(e) {
  let t = [],
    n = new Set;
  for (let [r, i] of e.entries()) {
    let e = j(i);
    t.push(...e.map(e => "Connection ".concat(r + 1, ": ").concat(e)));
    let a = L(i);
    n.has(a) && t.push("Duplicate connection configuration"), n.add(a)
  }
  return t
}