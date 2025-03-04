/** Chunk was on web.js **/
"use strict";
n.d(t, {
  ZP: () => y,
  kp: () => c,
  uX: () => l
});
var r, i = n(442837),
  o = n(570140),
  a = n(981631);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function _(e) {
  let {
    guildId: t
  } = e;
  u[t] = "started"
}

function p(e) {
  let {
    guildId: t,
    enabled: n
  } = e;
  if ("started" !== u[t]) return !1;
  n ? u[t] = "ready" : u[t] = "not_applicable"
}

function h(e) {
  let {
    guildId: t
  } = e;
  u[t] = "not_applicable"
}

function g(e) {
  let {
    guildId: t
  } = e;
  u[t] = "completed"
}

function m(e) {
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

function v() {
  d = {}
}
class b extends(r = i.ZP.Store) {
  shouldShowOnboarding(e) {
    return !!(e !== a.ME && e !== a.I_8 && c(u[e]))
  }
  getOnboardingStatus(e) {
    return u[e]
  }
  resetOnboardingStatus(e) {
    u[e] = "started", d[e] = "cover"
  }
  getCurrentOnboardingStep(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : "cover"
  }
}
s(b, "displayName", "GuildOnboardingStore");
let y = new b(o.Z, {
  LOGOUT: f,
  GUILD_DELETE: m,
  GUILD_ONBOARDING_START: _,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: h,
  GUILD_ONBOARDING_COMPLETE: g,
  GUILD_ONBOARDING_SET_STEP: E,
  CONNECTION_OPEN: v
})