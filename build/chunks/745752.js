/** Chunk was on web.js **/
/** chunk id: 745752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I1: () => v,
  eM: () => y,
  rK: () => O,
  rj: () => b
}), require("./997841.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
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
  c.default.track(_.rMx.GUILD_ONBOARDING_LOADED, E(m({}, (0, a.hH)(e)), {
    has_new_prompts: false,
    number_of_prompts: 0
  }))
}

function y(e) {
  return i.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
    guildId: e
  }), r.tn.get({
    url: _.ANM.GUILD_ONBOARDING(e),
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, r = (0, f.cf)(n);
    return i.Z.dispatch(m({
      type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
      guildId: e
    }, r)).then(() => r.prompts)
  }, t => (i.Z.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
    guildId: e
  }), t))
}
async function O(e) {
  var t, n;
  let r = o.default.getId(),
    i = (0, u.yE)(null != (n = null == (t = s.ZP.getMember(e, r)) ? true : t.flags) ? n : 0, p.q.COMPLETED_ONBOARDING),
    a = l.Z.getGuild(e);
  if (null == a || !a.features.has(_.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
  let c = d.Z.shouldFetchPrompts(e),
    f = d.Z.getOnboardingPrompts(e);
  if (!c && f.length > 0) return f.every(e => !e.inOnboarding) ? S(e) : i || v(e), Promise.resolve();
  let h = await y(e);
  return Array.isArray(h) && h.every(e => !e.inOnboarding) ? (S(e), Promise.resolve()) : (i || v(e), h)
}

function v(e) {
  i.Z.dispatch({
    type: "GUILD_ONBOARDING_START",
    guildId: e
  })
}
let I = false;

function S(e) {
  c.default.track(_.rMx.GUILD_ONBOARDING_STEP_VIEWED, E(m({}, (0, a.hH)(e)), {
    step: I,
    required: true
  })), c.default.track(_.rMx.GUILD_ONBOARDING_STEP_COMPLETED, E(m({}, (0, a.hH)(e)), {
    step: I,
    skipped: false,
    is_final_step: true,
    in_onboarding: true
  }))
}