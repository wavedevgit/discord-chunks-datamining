/** Chunk was on web.js **/
/** chunk id: 591552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./321073.js"), require("./864466.js"), require("./443073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk164956 = require("./164956.js"),
  Chunk734057 = require("./734057.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk112389 = require("./112389.js"),
  Chunk713125 = require("./713125.js"),
  Chunk539916 = require("./539916.js");

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
let b = {},
  y = {},
  O = {},
  A = false;

function v() {
  A = true
}

function S() {
  A = false, b = {}
}

function I(e, t, n) {
  let r = false,
    i = [];
  for (let t = 0; t < e.options.length; t++) {
    let a = e.options[t],
      s = null == n[a.id];
    s && (r = true), i.push(E(m({}, a), {
      isUnseen: s
    }))
  }
  return E(m({}, e), {
    options: i,
    hasNewAnswers: r,
    isNew: null == t[e.id]
  })
}

function T(e, t, n) {
  return e.map(e => I(e, t, n))
}

function C(e) {
  let {
    guildId: t,
    prompts: n,
    defaultChannelIds: r,
    enabled: i,
    responses: a,
    onboardingPromptsSeen: s,
    onboardingResponsesSeen: o,
    mode: l,
    belowRequirements: c,
    connections: u
  } = e;
  A = false;
  let d = p.Ay.getOnboardingStatus(t) === p.$o.READY,
    _ = T(n, s, o);
  b[t] = {
    enabled: i,
    mode: l,
    belowRequirements: c,
    prompts: _,
    onboardingPrompts: _.filter(e => e.inOnboarding),
    defaultChannelIds: r.filter(e => (0, f.S)(t, e)),
    responses: d ? [] : a,
    onboardingPromptsSeen: s,
    onboardingResponsesSeen: o,
    connections: null != u ? u : []
  }, d || P(t, a), O[t] = Date.now()
}

function N() {
  A = false
}

function R(e) {
  var t, n, r, i, a, s, o, l, c;
  let {
    guildId: u,
    updates: d
  } = e, f = null != (t = null != (n = d.onboardingPromptsSeen) ? n : null == (o = b[u]) ? true : o.onboardingPromptsSeen) ? t : {}, p = null != (r = null != (i = d.onboardingResponsesSeen) ? i : null == (l = b[u]) ? true : l.onboardingResponsesSeen) ? r : {}, _ = T(null != (a = null != (s = d.prompts) ? s : null == (c = b[u]) ? true : c.prompts) ? a : [], f, p);
  b[u] = E(m({}, b[u], d), {
    prompts: _
  })
}

function w(e) {
  let {
    guildId: t,
    optionId: n,
    selected: r,
    removedOptionIds: i
  } = e;
  return !!l.A.isFullServerPreview(t) || null != b[t] && (null != i && i.length > 0 && a().pullAll(b[t].responses, i), r ? b[t].responses.push(n) : a().pull(b[t].responses, n), null == y[t] && (y[t] = {}), y[t][n] = r, null != i && i.forEach(e => y[t][e] = false), y[t] = m({}, y[t]), true)
}

function P(e, t) {
  if (null == y[e]) return;
  let n = {};
  Object.keys(y[e]).forEach(r => {
    !t.includes(r) && y[e][r] ? n[r] = true : t.includes(r) && false === y[e][r] && (n[r] = false)
  }), y[e] = n;
  let r = t.filter(e => null == n[e] || true === n[e]);
  Object.keys(n).forEach(e => {
    true !== n[e] || t.includes(e) || r.push(e)
  }), b[e] = E(m({}, b[e]), {
    responses: r
  })
}

function D(e) {
  let {
    guildId: t,
    options: n,
    prompts_seen: r,
    options_seen: i
  } = e;
  P(t, n);
  let a = b[t];
  if (null == a) returnfalse;
  let s = T(a.prompts, r, i);
  b[t] = E(m({}, a), {
    prompts: s,
    onboardingPrompts: s.filter(e => e.inOnboarding),
    onboardingPromptsSeen: r,
    onboardingResponsesSeen: i
  })
}

function x(e) {
  let {
    guildId: t,
    channelIds: n
  } = e;
  b[t] = E(m({}, b[t]), {
    defaultChannelIds: n
  })
}

function L(e) {
  let {
    guildId: t,
    connections: n
  } = e;
  if (null == b[t]) returnfalse;
  b[t] = E(m({}, b[t]), {
    connections: n
  })
}

function j(e) {
  let {
    guildId: t,
    mode: n
  } = e, r = b[t];
  null != r && (r.mode = n)
}

function M(e) {
  let {
    guild: t
  } = e;
  delete b[t.id], delete y[t.id], delete O[t.id]
}
let k = [],
  U = [],
  G = [],
  V = [];
class F extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, p.Ay, l.A)
  }
  getOnboardingPromptsForOnboarding(e) {
    var t, n;
    return null != (t = null == (n = b[e]) ? true : n.onboardingPrompts) ? t : k
  }
  getOnboardingPrompts(e) {
    var t, n;
    return null != (t = null == (n = b[e]) ? true : n.prompts) ? t : k
  }
  getOnboardingResponses(e) {
    var t, n, r;
    return l.A.isFullServerPreview(e) ? Array.from(null != (r = l.A.getOnboardingResponses(e)) ? r : U) : null != (t = null == (n = b[e]) ? true : n.responses) ? t : U
  }
  getSelectedOptions(e) {
    let t = this.getOnboardingResponses(e);
    return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
  }
  getOnboardingResponsesForPrompt(e, t) {
    let n = b[e];
    if (null == n) return U;
    let r = n.prompts.find(e => e.id === t);
    return null == r ? U : a().intersection(r.options.map(e => e.id), this.getOnboardingResponses(e))
  }
  getEnabledOnboardingPrompts(e) {
    var t, n;
    let r = b[e];
    return l.A.isFullServerPreview(e) ? null != (n = null == r ? true : r.prompts) ? n : k : null != r && r.enabled && null != (t = r.prompts) ? t : k
  }
  getDefaultChannelIds(e) {
    var t, n;
    return null != (t = null == (n = b[e]) ? true : n.defaultChannelIds) ? t : G
  }
  getEnabled(e) {
    var t, n;
    return l.A.isFullServerPreview(e) ? null != b[e] : null != (t = null == (n = b[e]) ? true : n.enabled) && t
  }
  getOnboardingPrompt(e) {
    return Object.values(b).map(e => e.prompts).flat().find(t => t.id === e)
  }
  isLoading() {
    return A
  }
  shouldFetchPrompts(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.A.Millis.HOUR;
    if (A) returnfalse;
    let n = O[e];
    return null == n || Date.now() - n > t
  }
  getPendingResponseOptions(e) {
    return y[e]
  }
  ackIdForGuild(e) {
    let t = this.getEnabledOnboardingPrompts(e),
      n = "0";
    return t.forEach(e => {
      e.options.forEach(e => {
        d.default.compare(e.id, n) > 0 && (n = e.id)
      }), d.default.compare(e.id, n) > 0 && (n = e.id)
    }), n
  }
  lastFetchedAt(e) {
    return O[e]
  }
  isAdvancedMode(e) {
    var t;
    return null != e && (null == (t = b[e]) ? true : t.mode) === _.SD.ONBOARDING_ADVANCED
  }
  getConnections(e) {
    var t, n;
    return null != (t = null == (n = b[e]) ? true : n.connections) ? t : V
  }
}
h(F, "displayName", "GuildOnboardingPromptsStore");
let B = new F(Chunk73153.h, {
  CONNECTION_OPEN: S,
  GUILD_DELETE: M,
  GUILD_ONBOARDING_PROMPTS_FETCH_START: v,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: C,
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: N,
  GUILD_ONBOARDING_SELECT_OPTION: w,
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: D,
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: R,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: R,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: x,
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: L,
  GUILD_SETTINGS_ONBOARDING_SET_MODE: j
})