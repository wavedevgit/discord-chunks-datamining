/** Chunk was on 18437 **/
n.d(t, {
  I6: () => f,
  V9: () => S,
  Z6: () => p,
  jp: () => O,
  r5: () => d,
  vT: () => s,
  vh: () => E,
  yU: () => j
}), n(388685), n(997841), n(415506);
var r, l, i = n(192379),
  a = n(467319),
  u = n(676317),
  o = n(273504),
  c = n(388032),
  s = ((r = {}).NEW = "new", r.RECOMMENDED = "recommended", r.BETA = "beta", r.ALPHA = "alpha", r);
let f = {
  [o.fX.SPAM_LINK]: {
    getDefaultRuleName: () => c.NW.string(c.t.ffR2cH),
    type: o.fX.SPAM_LINK,
    eventType: o.q4.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [o.fX.KEYWORD]: {
    getDefaultRuleName: () => c.NW.string(c.t.ffR2cH),
    type: o.fX.KEYWORD,
    eventType: o.q4.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL, o.jj.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
  },
  [o.fX.ML_SPAM]: {
    getDefaultRuleName: () => c.NW.string(c.t["puF/Oj"]),
    type: o.fX.ML_SPAM,
    eventType: o.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
  },
  [o.fX.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => c.NW.string(c.t.LnGhZm),
    type: o.fX.DEFAULT_KEYWORD_LIST,
    eventType: o.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
  },
  [o.fX.MENTION_SPAM]: {
    getDefaultRuleName: () => c.NW.string(c.t.pX7i6u),
    type: o.fX.MENTION_SPAM,
    eventType: o.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL, o.jj.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
  },
  [o.fX.USER_PROFILE]: {
    getDefaultRuleName: () => c.NW.string(c.t.q1L2v7),
    type: o.fX.USER_PROFILE,
    eventType: o.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([o.jj.QUARANTINE_USER, o.jj.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([o.jj.QUARANTINE_USER])
  },
  [o.fX.SERVER_POLICY]: {
    getDefaultRuleName: () => c.NW.string(c.t.ZQr92N),
    type: o.fX.SERVER_POLICY,
    eventType: o.q4.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([o.jj.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
var E = ((l = {}).MEMBERS = "members", l.CONTENT = "content", l);
let g = {
    members: [f[o.fX.USER_PROFILE]],
    content: [f[o.fX.SERVER_POLICY], f[o.fX.MENTION_SPAM], f[o.fX.ML_SPAM], f[o.fX.DEFAULT_KEYWORD_LIST], f[o.fX.KEYWORD]]
  },
  d = (e, t) => f[e].flags.has(t);

function S(e) {
  return Array.from(f[e].availableActionTypes)
}

function j(e, t) {
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

function p(e) {
  let t = (0, u.oA)(e);
  return i.useMemo(() => Object.keys(g).reduce((e, n) => {
    let r = g[n].filter(e => e.type !== o.fX.SERVER_POLICY && (e.type !== o.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
    return e[n] = r, e
  }, {
    members: [],
    content: []
  }), [t])
}

function O(e, t) {
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