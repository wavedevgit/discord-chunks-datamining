/** Chunk was on 24202 **/
/** chunk id: 53594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H2: () => c,
  J6: () => f,
  i$: () => E,
  kT: () => p,
  ub: () => S,
  ws: () => d,
  xG: () => O,
  yT: () => A
}), require("./896048.js"), require("./938796.js"), require("./65821.js");
var r, l, Chunk64700 = require("./64700.js"),
  Chunk928108 = require("./928108.js"),
  Chunk979816 = require("./979816.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx"),
  c = ((r = {}).NEW = "new", r.RECOMMENDED = "recommended", r.BETA = "beta", r.ALPHA = "alpha", r);
let E = {
  [Chunk411335.uh.SPAM_LINK]: {
    getDefaultRuleName: () => s.intl.string(s.t.ffR2cM),
    type: Chunk411335.uh.SPAM_LINK,
    eventType: Chunk411335.Mc.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [Chunk411335.uh.KEYWORD]: {
    getDefaultRuleName: () => s.intl.string(s.t.ffR2cM),
    type: Chunk411335.uh.KEYWORD,
    eventType: Chunk411335.Mc.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE, Chunk411335.AH.FLAG_TO_CHANNEL, Chunk411335.AH.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE])
  },
  [Chunk411335.uh.ML_SPAM]: {
    getDefaultRuleName: () => s.intl.string(s.t["puF/Os"]),
    type: Chunk411335.uh.ML_SPAM,
    eventType: Chunk411335.Mc.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE, Chunk411335.AH.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE])
  },
  [Chunk411335.uh.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => s.intl.string(s.t.LnGhZv),
    type: Chunk411335.uh.DEFAULT_KEYWORD_LIST,
    eventType: Chunk411335.Mc.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE, Chunk411335.AH.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE])
  },
  [Chunk411335.uh.MENTION_SPAM]: {
    getDefaultRuleName: () => s.intl.string(s.t.pX7i6n),
    type: Chunk411335.uh.MENTION_SPAM,
    eventType: Chunk411335.Mc.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE, Chunk411335.AH.FLAG_TO_CHANNEL, Chunk411335.AH.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk411335.AH.BLOCK_MESSAGE])
  },
  [Chunk411335.uh.USER_PROFILE]: {
    getDefaultRuleName: () => s.intl.string(s.t.q1L2v8),
    type: Chunk411335.uh.USER_PROFILE,
    eventType: Chunk411335.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk411335.AH.QUARANTINE_USER, Chunk411335.AH.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([Chunk411335.AH.QUARANTINE_USER])
  },
  [Chunk411335.uh.SERVER_POLICY]: {
    getDefaultRuleName: () => s.intl.string(s.t.ZQr92M),
    type: Chunk411335.uh.SERVER_POLICY,
    eventType: Chunk411335.Mc.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([Chunk411335.AH.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
var A = ((l = {}).MEMBERS = "members", l.CONTENT = "content", l);
let g = {
    members: [E[Chunk411335.uh.USER_PROFILE]],
    content: [E[Chunk411335.uh.SERVER_POLICY], E[Chunk411335.uh.MENTION_SPAM], E[Chunk411335.uh.ML_SPAM], E[Chunk411335.uh.DEFAULT_KEYWORD_LIST], E[Chunk411335.uh.KEYWORD]]
  },
  S = (e, t) => E[e].flags.has(t);

function f(e) {
  return Array.from(E[e].availableActionTypes)
}

function O(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: l,
    actions: i
  } = e, a = E[l];
  if (t.filter(e => n !== e.id && e.triggerType === l).length > a.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(l));
  if (i.some(e => !a.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function d(e) {
  let t = (0, u.XO)(e);
  return i.useMemo(() => Object.keys(g).reduce((e, n) => {
    let r = g[n].filter(e => e.type !== o.uh.SERVER_POLICY && (e.type !== o.uh.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
    return e[n] = r, e
  }, {
    members: [],
    content: []
  }), [t])
}

function p(e, t) {
  let n = (0, a.p)(t);
  switch (e) {
    case o.uh.DEFAULT_KEYWORD_LIST:
      return {
        allowList: [], presets: []
      };
    case o.uh.USER_PROFILE:
    case o.uh.KEYWORD:
      return {
        keywordFilter: [], regexPatterns: [], allowList: []
      };
    case o.uh.MENTION_SPAM:
      return {
        mentionTotalLimit: o.Nu, mentionRaidProtectionEnabled: n
      };
    case o.uh.ML_SPAM:
    case o.uh.SERVER_POLICY:
    default:
      return
  }
}