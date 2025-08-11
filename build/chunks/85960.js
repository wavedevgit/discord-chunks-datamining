/** Chunk was on web.js **/
/** chunk id: 85960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I6: () => c,
  V9: () => _,
  Z6: () => h,
  jp: () => m,
  r5: () => f,
  vT: () => l,
  vh: () => u,
  yU: () => p
}), require("./388685.js"), require("./997841.js"), require("./415506.js");
var Chunk73800 = require("./73800.js"),
  Chunk467319 = require("./467319.js"),
  Chunk676317 = require("./676317.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  l = function(e) {
    return e.NEW = "new", e.RECOMMENDED = "recommended", e.BETA = "beta", e.ALPHA = "alpha", e
  }({});
let c = {
  [Chunk273504.fX.SPAM_LINK]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.ffR2cH),
    type: Chunk273504.fX.SPAM_LINK,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [Chunk273504.fX.KEYWORD]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.ffR2cH),
    type: Chunk273504.fX.KEYWORD,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL, Chunk273504.jj.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.ML_SPAM]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t["puF/Oj"]),
    type: Chunk273504.fX.ML_SPAM,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.LnGhZm),
    type: Chunk273504.fX.DEFAULT_KEYWORD_LIST,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.MENTION_SPAM]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.pX7i6u),
    type: Chunk273504.fX.MENTION_SPAM,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL, Chunk273504.jj.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.USER_PROFILE]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.q1L2v7),
    type: Chunk273504.fX.USER_PROFILE,
    eventType: Chunk273504.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.QUARANTINE_USER, Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.QUARANTINE_USER])
  },
  [Chunk273504.fX.SERVER_POLICY]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.ZQr92N),
    type: Chunk273504.fX.SERVER_POLICY,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
var u = function(e) {
  return e.MEMBERS = "members", e.CONTENT = "content", e
}({});
let d = {
    members: [c[Chunk273504.fX.USER_PROFILE]],
    content: [c[Chunk273504.fX.SERVER_POLICY], c[Chunk273504.fX.MENTION_SPAM], c[Chunk273504.fX.ML_SPAM], c[Chunk273504.fX.DEFAULT_KEYWORD_LIST], c[Chunk273504.fX.KEYWORD]]
  },
  f = (e, t) => c[e].flags.has(t);

function _(e) {
  return Array.from(c[e].availableActionTypes)
}

function p(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: i,
    actions: o
  } = e, a = c[i];
  if (t.filter(e => n !== e.id && e.triggerType === i).length > a.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(i));
  if (o.some(e => !a.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function h(e) {
  let t = (0, o.oA)(e);
  return r.useMemo(() => {
    let e = {
      members: [],
      content: []
    };
    return Object.keys(d).reduce((e, n) => {
      let r = d[n].filter(e => e.type !== a.fX.SERVER_POLICY && (e.type !== a.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
      return e[n] = r, e
    }, e)
  }, [t])
}

function m(e, t) {
  let n = (0, i.H)(t);
  switch (e) {
    case a.fX.DEFAULT_KEYWORD_LIST:
      return {
        allowList: [], presets: []
      };
    case a.fX.USER_PROFILE:
    case a.fX.KEYWORD:
      return {
        keywordFilter: [], regexPatterns: [], allowList: []
      };
    case a.fX.MENTION_SPAM:
      return {
        mentionTotalLimit: a.Ic, mentionRaidProtectionEnabled: n
      };
    case a.fX.ML_SPAM:
    case a.fX.SERVER_POLICY:
    default:
      return
  }
}