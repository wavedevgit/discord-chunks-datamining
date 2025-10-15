/** Chunk was on web.js **/
/** chunk id: 290511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FN: () => E,
  NE: () => c,
  NO: () => u,
  Oq: () => A,
  RF: () => y,
  Un: () => b,
  X: () => h,
  YW: () => d,
  ae: () => O,
  b3: () => _,
  cf: () => S,
  dr: () => I,
  fY: () => m,
  iU: () => l,
  l7: () => g,
  md: () => p,
  qm: () => f,
  yZ: () => v
}), require("./953529.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327),
  Chunk388032 = require("./388032.jsx");

function o(e, t) {
  if (null == e) return {};
  var n, r, i = s(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let l = 100,
  c = 50,
  u = 100,
  d = 15,
  f = 50,
  _ = 4,
  p = 7,
  h = 5,
  m = 13;
var g = function(e) {
    return e[e.CUSTOMIZE = 0] = "CUSTOMIZE", e[e.BROWSE = 1] = "BROWSE", e
  }({}),
  E = function(e) {
    return e[e.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", e[e.DROPDOWN = 1] = "DROPDOWN", e
  }({}),
  b = function(e) {
    return e[e.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", e[e.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED", e
  }({});

function y(e) {
  if (e.options.length > 0) returnfalse;
  let t = O(),
    {
      id: n
    } = t,
    r = o(t, ["id"]),
    {
      id: a
    } = e,
    s = o(e, ["id"]);
  return i()(r, s)
}

function O() {
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

function v(e) {
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

function I(e) {
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

function T(e) {
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

function S(e) {
  var t, n, r;
  return {
    prompts: e.prompts.map(T),
    defaultChannelIds: e.default_channel_ids,
    responses: null != (t = e.responses) ? t : [],
    mode: e.mode,
    enabled: e.enabled,
    onboardingPromptsSeen: null != (n = e.onboarding_prompts_seen) ? n : {},
    onboardingResponsesSeen: null != (r = e.onboarding_responses_seen) ? r : {},
    belowRequirements: e.below_requirements
  }
}

function A(e) {
  return null == e || null == e.id && null == e.name
}