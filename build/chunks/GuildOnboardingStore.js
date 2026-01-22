/** Chunk was on web.js **/
/** chunk id: 713125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $o: () => l,
  Ay: () => O,
  eg: () => c
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = function(e) {
  return e.STARTED = "started", e.READY = "ready", e.COMPLETED = "completed", e.NOT_APPLICABLE = "not_applicable", e
}({});

function c(e) {
  return null != e && ["started", "ready"].includes(e)
}
let u = {},
  d = {};

function f() {
  u = {}, d = {}
}

function p(e) {
  let {
    guildId: t
  } = e;
  u[t] = "started"
}

function _(e) {
  let {
    guildId: t,
    enabled: n
  } = e;
  if ("started" !== u[t]) returnfalse;
  n ? u[t] = "ready" : u[t] = "not_applicable"
}

function h(e) {
  let {
    guildId: t
  } = e;
  u[t] = "not_applicable"
}

function m(e) {
  let {
    guildId: t
  } = e;
  u[t] = "completed"
}

function g(e) {
  let {
    guild: t
  } = e;
  delete u[t.id], delete d[t.id]
}

function E(e) {
  let {
    guildId: t,
    step: n
  } = e;
  d[t] = n
}

function b() {
  d = {}
}
class y extends(r = Chunk311907.Ay.Store) {
  shouldShowOnboarding(e) {
    return e !== s.ME && e !== s.YYv && !!c(u[e])
  }
  getOnboardingStatus(e) {
    return u[e]
  }
  resetOnboardingStatus(e) {
    u[e] = "started", d[e] = "cover"
  }
  getCurrentOnboardingStep(e) {
    var t;
    return null != (t = d[e]) ? t : "cover"
  }
}
o(y, "displayName", "GuildOnboardingStore");
let O = new y(Chunk73153.h, {
  LOGOUT: f,
  GUILD_DELETE: g,
  GUILD_ONBOARDING_START: p,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: _,
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: h,
  GUILD_ONBOARDING_COMPLETE: m,
  GUILD_ONBOARDING_SET_STEP: E,
  CONNECTION_OPEN: b
})