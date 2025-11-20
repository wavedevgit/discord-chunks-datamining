/** Chunk was on web.js **/
/** chunk id: 745752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I1: () => v,
  Xx: () => T,
  eM: () => y,
  rK: () => O,
  rj: () => b
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk45966 = require("./45966.js"),
  Chunk290511 = require("./290511.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  u.default.track(_.rMx.GUILD_ONBOARDING_LOADED, E(m({}, (0, o.hH)(e)), {
    has_new_prompts: false,
    number_of_prompts: 0
  }))
}

function y(e) {
  return a.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
    guildId: e
  }), i.tn.get({
    url: _.ANM.GUILD_ONBOARDING(e),
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, r = (0, f.cf)(n);
    return a.Z.dispatch(m({
      type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
      guildId: e
    }, r)).then(() => r.prompts)
  }, t => (a.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
    guildId: e
  }), t))
}
async function O(e) {
  var t, n;
  let i = s.default.getId(),
    a = (0, r.yE)(null != (n = null == (t = l.ZP.getMember(e, i)) ? true : t.flags) ? n : 0, p.q.COMPLETED_ONBOARDING),
    o = c.Z.getGuild(e);
  if (null == o || !o.features.has(_.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
  let u = d.Z.shouldFetchPrompts(e),
    f = d.Z.getOnboardingPrompts(e);
  if (!u && f.length > 0) return f.every(e => !e.inOnboarding) ? S(e) : a || v(e), Promise.resolve();
  let h = await y(e);
  return Array.isArray(h) && h.every(e => !e.inOnboarding) ? (S(e), Promise.resolve()) : (a || v(e), h)
}

function v(e) {
  a.Z.dispatch({
    type: "GUILD_ONBOARDING_START",
    guildId: e
  })
}
let I = false,
  T = false;

function S(e) {
  u.default.track(_.rMx.GUILD_ONBOARDING_STEP_VIEWED, E(m({}, (0, o.hH)(e)), {
    step: I,
    required: true
  })), u.default.track(_.rMx.GUILD_ONBOARDING_STEP_COMPLETED, E(m({}, (0, o.hH)(e)), {
    step: I,
    skipped: false,
    is_final_step: true,
    in_onboarding: true
  }))
}