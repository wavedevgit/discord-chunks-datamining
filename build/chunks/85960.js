/** Chunk was on 93375 **/
/** chunk id: 85960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I6: () => f,
  V9: () => O,
  Z6: () => j,
  jp: () => p,
  r5: () => S,
  vT: () => c,
  vh: () => E,
  yU: () => d
}), require("./388685.js"), require("./997841.js"), require("./415506.js");
var r, l, Chunk473749 = require("./473749.js"),
  Chunk467319 = require("./467319.js"),
  Chunk676317 = require("./676317.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  c = ((r = {}).NEW = "new", r.RECOMMENDED = "recommended", r.BETA = "beta", r.ALPHA = "alpha", r);
let f = {
  [Chunk273504.fX.SPAM_LINK]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.ffR2cM),
    type: Chunk273504.fX.SPAM_LINK,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [Chunk273504.fX.KEYWORD]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.ffR2cM),
    type: Chunk273504.fX.KEYWORD,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL, Chunk273504.jj.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.ML_SPAM]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t["puF/Os"]),
    type: Chunk273504.fX.ML_SPAM,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.LnGhZv),
    type: Chunk273504.fX.DEFAULT_KEYWORD_LIST,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.MENTION_SPAM]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.pX7i6n),
    type: Chunk273504.fX.MENTION_SPAM,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE, Chunk273504.jj.FLAG_TO_CHANNEL, Chunk273504.jj.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.BLOCK_MESSAGE])
  },
  [Chunk273504.fX.USER_PROFILE]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.q1L2v8),
    type: Chunk273504.fX.USER_PROFILE,
    eventType: Chunk273504.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.QUARANTINE_USER, Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk273504.jj.QUARANTINE_USER])
  },
  [Chunk273504.fX.SERVER_POLICY]: {
    getDefaultRuleName: () => Chunk388032.intl.string(Chunk388032.t.ZQr92M),
    type: Chunk273504.fX.SERVER_POLICY,
    eventType: Chunk273504.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk273504.jj.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
var E = ((l = {}).MEMBERS = "members", l.CONTENT = "content", l);
let g = {
    members: [f[Chunk273504.fX.USER_PROFILE]],
    content: [f[Chunk273504.fX.SERVER_POLICY], f[Chunk273504.fX.MENTION_SPAM], f[Chunk273504.fX.ML_SPAM], f[Chunk273504.fX.DEFAULT_KEYWORD_LIST], f[Chunk273504.fX.KEYWORD]]
  },
  S = (e, t) => f[e].flags.has(t);

function O(e) {
  return Array.from(f[e].availableActionTypes)
}

function d(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: l,
    actions: i
  } = e, a = f[l];
  if (t.filter(e => n !== e.id && e.triggerType === l).length > a.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(l));
  if (i.some(e => !a.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function j(e) {
  let t = (0, u.oA)(e);
  return i.useMemo(() => Object.keys(g).reduce((e, n) => {
    let r = g[n].filter(e => e.type !== o.fX.SERVER_POLICY && (e.type !== o.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
    return e[n] = r, e
  }, {
    members: [],
    content: []
  }), [t])
}

function p(e, t) {
  let n = (0, a.H)(t);
  switch (e) {
    case o.fX.DEFAULT_KEYWORD_LIST:
      return {
        allowList: [], presets: []
      };
    case o.fX.USER_PROFILE:
    case o.fX.KEYWORD:
      return {
        keywordFilter: [], regexPatterns: [], allowList: []
      };
    case o.fX.MENTION_SPAM:
      return {
        mentionTotalLimit: o.Ic, mentionRaidProtectionEnabled: n
      };
    case o.fX.ML_SPAM:
    case o.fX.SERVER_POLICY:
    default:
      return
  }
}