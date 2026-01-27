/** Chunk was on web.js **/
/** chunk id: 817818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tg: () => y,
  h9: () => O,
  jx: () => b,
  l8: () => I,
  sy: () => v
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk591552 = require("./591552.js"),
  Chunk539916 = require("./539916.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js");

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

function y(e) {
  u.default.track(p.HAw.GUILD_ONBOARDING_LOADED, E(m({}, (0, o.H$)(e)), {
    has_new_prompts: false,
    number_of_prompts: 0
  }))
}

function b(e) {
  return a.h.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
    guildId: e
  }), i.Bo.get({
    url: p.Rsh.GUILD_ONBOARDING(e),
    rejectWithError: false
  }).then(t => {
    let {
      body: n
    } = t, r = (0, f.Uh)(n);
    return a.h.dispatch(m({
      type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
      guildId: e
    }, r)).then(() => r.prompts)
  }, t => (a.h.dispatch({
    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
    guildId: e
  }), t))
}
async function O(e) {
  var t, n;
  let i = s.default.getId(),
    a = (0, r.Lt)(null != (t = null == (n = l.Ay.getMember(e, i)) ? true : n.flags) ? t : 0, _.D.COMPLETED_ONBOARDING),
    o = c.A.getGuild(e);
  if (null == o || !o.features.has(p.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
  let u = d.A.shouldFetchPrompts(e),
    f = d.A.getOnboardingPrompts(e);
  if (!u && f.length > 0) return f.every(e => !e.inOnboarding) ? S(e) : a || v(e), Promise.resolve();
  let h = await b(e);
  return Array.isArray(h) && h.every(e => !e.inOnboarding) ? (S(e), Promise.resolve()) : (a || v(e), h)
}

function v(e) {
  a.h.dispatch({
    type: "GUILD_ONBOARDING_START",
    guildId: e
  })
}
let A = false,
  I = false;

function S(e) {
  u.default.track(p.HAw.GUILD_ONBOARDING_STEP_VIEWED, E(m({}, (0, o.H$)(e)), {
    step: A,
    required: true
  })), u.default.track(p.HAw.GUILD_ONBOARDING_STEP_COMPLETED, E(m({}, (0, o.H$)(e)), {
    step: A,
    skipped: false,
    is_final_step: true,
    in_onboarding: true
  }))
}