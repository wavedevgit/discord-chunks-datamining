/** Chunk was on web.js **/
/** chunk id: 45966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./539854.js"), require("./472816.js"), require("./794429.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk160404 = require("./160404.js"),
  Chunk592125 = require("./592125.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk977258 = require("./977258.js"),
  Chunk819553 = require("./819553.js"),
  Chunk290511 = require("./290511.js");

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
  v = false;

function I() {
  v = true
}

function T() {
  v = false, b = {}
}

function S(e, t, n) {
  let r = false,
    i = [];
  for (let t = 0; t < e.options.length; t++) {
    let a = e.options[t],
      o = null == n[a.id];
    o && (r = true), i.push(E(m({}, a), {
      isUnseen: o
    }))
  }
  return E(m({}, e), {
    options: i,
    hasNewAnswers: r,
    isNew: null == t[e.id]
  })
}

function A(e, t, n) {
  return e.map(e => S(e, t, n))
}

function C(e) {
  let {
    guildId: t,
    prompts: n,
    defaultChannelIds: r,
    enabled: i,
    responses: a,
    onboardingPromptsSeen: o,
    onboardingResponsesSeen: s,
    mode: l,
    belowRequirements: c,
    connections: u
  } = e;
  v = false;
  let d = _.ZP.getOnboardingStatus(t) === _.uX.READY,
    p = A(n, o, s);
  b[t] = {
    enabled: i,
    mode: l,
    belowRequirements: c,
    prompts: p,
    onboardingPrompts: p.filter(e => e.inOnboarding),
    defaultChannelIds: r.filter(e => (0, f.s)(t, e)),
    responses: d ? [] : a,
    onboardingPromptsSeen: o,
    onboardingResponsesSeen: s,
    connections: null != u ? u : []
  }, d || D(t, a), O[t] = Date.now()
}

function N() {
  v = false
}

function R(e) {
  var t, n, r, i, a, o, s, l, c;
  let {
    guildId: u,
    updates: d
  } = e, f = null != (a = null != (i = d.onboardingPromptsSeen) ? i : null == (t = b[u]) ? true : t.onboardingPromptsSeen) ? a : {}, _ = null != (s = null != (o = d.onboardingResponsesSeen) ? o : null == (n = b[u]) ? true : n.onboardingResponsesSeen) ? s : {}, p = A(null != (c = null != (l = d.prompts) ? l : null == (r = b[u]) ? true : r.prompts) ? c : [], f, _);
  b[u] = E(m({}, b[u], d), {
    prompts: p
  })
}

function P(e) {
  let {
    guildId: t,
    optionId: n,
    selected: r,
    removedOptionIds: i
  } = e;
  return !!l.Z.isFullServerPreview(t) || null != b[t] && (null != i && i.length > 0 && a().pullAll(b[t].responses, i), r ? b[t].responses.push(n) : a().pull(b[t].responses, n), null == y[t] && (y[t] = {}), y[t][n] = r, null != i && i.forEach(e => y[t][e] = false), y[t] = m({}, y[t]), true)
}

function D(e, t) {
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

function w(e) {
  let {
    guildId: t,
    options: n,
    prompts_seen: r,
    options_seen: i
  } = e;
  D(t, n);
  let a = b[t];
  if (null == a) returnfalse;
  let o = A(a.prompts, r, i);
  b[t] = E(m({}, a), {
    prompts: o,
    onboardingPrompts: o.filter(e => e.inOnboarding),
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

function M(e) {
  let {
    guildId: t,
    mode: n
  } = e, r = b[t];
  null != r && (r.mode = n)
}
let k = [],
  j = [],
  U = [],
  G = [];
class B extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk819553.ZP, Chunk160404.Z)
  }
  getOnboardingPromptsForOnboarding(e) {
    var t, n;
    return null != (n = null == (t = b[e]) ? true : t.onboardingPrompts) ? n : k
  }
  getOnboardingPrompts(e) {
    var t, n;
    return null != (n = null == (t = b[e]) ? true : t.prompts) ? n : k
  }
  getOnboardingResponses(e) {
    var t, n, r;
    return l.Z.isFullServerPreview(e) ? Array.from(null != (n = l.Z.getOnboardingResponses(e)) ? n : j) : null != (r = null == (t = b[e]) ? true : t.responses) ? r : j
  }
  getSelectedOptions(e) {
    let t = this.getOnboardingResponses(e);
    return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id))
  }
  getOnboardingResponsesForPrompt(e, t) {
    let n = b[e];
    if (null == n) return j;
    let r = n.prompts.find(e => e.id === t);
    return null == r ? j : a().intersection(r.options.map(e => e.id), this.getOnboardingResponses(e))
  }
  getEnabledOnboardingPrompts(e) {
    var t, n;
    let r = b[e];
    return l.Z.isFullServerPreview(e) ? null != (t = null == r ? true : r.prompts) ? t : k : null != r && r.enabled && null != (n = r.prompts) ? n : k
  }
  getDefaultChannelIds(e) {
    var t, n;
    return null != (n = null == (t = b[e]) ? true : t.defaultChannelIds) ? n : U
  }
  getEnabled(e) {
    var t, n;
    return l.Z.isFullServerPreview(e) ? null != b[e] : null != (n = null == (t = b[e]) ? true : t.enabled) && n
  }
  getOnboardingPrompt(e) {
    return Object.values(b).map(e => e.prompts).flat().find(t => t.id === e)
  }
  isLoading() {
    return v
  }
  shouldFetchPrompts(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.Z.Millis.HOUR;
    if (v) returnfalse;
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
    return null != e && (null == (t = b[e]) ? true : t.mode) === p.Un.ONBOARDING_ADVANCED
  }
  getConnections(e) {
    var t, n;
    return null != (n = null == (t = b[e]) ? true : t.connections) ? n : G
  }
}
h(B, "displayName", "GuildOnboardingPromptsStore");
let Z = new B(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  GUILD_ONBOARDING_PROMPTS_FETCH_START: I,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: C,
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: N,
  GUILD_ONBOARDING_SELECT_OPTION: P,
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: w,
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: R,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: R,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: x,
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: L,
  GUILD_SETTINGS_ONBOARDING_SET_MODE: M
})