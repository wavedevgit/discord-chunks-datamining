/** Chunk was on 24202 **/
/** chunk id: 627794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AR: () => S,
  JJ: () => f,
  KU: () => E,
  PZ: () => R,
  X3: () => _,
  ZG: () => g,
  _I: () => O,
  nl: () => y,
  r3: () => A,
  uV: () => p,
  wC: () => h,
  wk: () => d
}), require("./896048.js"), require("./65821.js");
var Chunk168186 = require("./168186.js"),
  Chunk961350 = require("./961350.js"),
  Chunk372598 = require("./372598.js"),
  Chunk753738 = require("./753738.js"),
  Chunk928348 = require("./928348.js"),
  Chunk53594 = require("./53594.js"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx");
let E = e => (null == e ? true : e.triggerType) === s.uh.KEYWORD,
  A = e => (null == e ? true : e.triggerType) === s.uh.ML_SPAM,
  g = e => (null == e ? true : e.triggerType) === s.uh.DEFAULT_KEYWORD_LIST,
  S = e => (null == e ? true : e.triggerType) === s.uh.MENTION_SPAM,
  f = e => (null == e ? true : e.triggerType) === s.uh.USER_PROFILE;

function O(e, t) {
  let n = o.i$[t],
    r = (0, o.kT)(t, e),
    a = {
      id: "".concat(e, "-").concat(t, "-new-rule"),
      name: n.getDefaultRuleName(),
      guildId: e,
      eventType: n.eventType,
      triggerType: t,
      triggerMetadata: r,
      enabled: true,
      creatorId: l.default.getId(),
      actions: (0, i.dL)(n),
      position: 0,
      exemptChannels: new Set,
      exemptRoles: new Set
    };
  if (h(a)) throw Error(c.intl.string(c.t["A/nX8D"]));
  let s = (0, u.p3)(e, t);
  return s > 0 && (a.name += " ".concat(s + 1)), a
}

function d(e, t) {
  if (e.length > t) throw Error(c.intl.formatToPlainString(c.t.mee4qd, {
    limit: t
  }));
  e.forEach(e => {
    if (e.length > s.kS || e.length < s.Ku) throw new a.lH(c.intl.formatToPlainString(c.t.rbRvGe, {
      keyword: e,
      max: s.kS,
      min: s.Ku
    }))
  })
}

function p(e) {
  if (E(e)) {
    var t, n;
    let r = null != (t = e.triggerMetadata.keywordFilter) ? t : [],
      l = null != (n = e.triggerMetadata.regexPatterns) ? n : [];
    if (0 === r.length && 0 === l.length) throw Error(c.intl.string(c.t.kz2Av3));
    if (d(r, s.bV), l.length > s.qm) throw Error(c.intl.formatToPlainString(c.t.tDjhF1, {
      limit: s.qm
    }));
    l.forEach(e => {
      if (e.length > s.$5 || e.length < s.zs) throw new a.Nr(c.intl.formatToPlainString(c.t.WR0m9w, {
        regex: e,
        max: s.$5,
        min: s.zs
      }))
    })
  }
  if (0 === e.actions.length) throw Error(c.intl.string(c.t["t+gj5V"]))
}

function h(e) {
  var t;
  return (0, r.hT)(null != (t = null == e ? true : e.id) ? t : "INVALID_SNOWFLAKE")
}

function _(e) {
  switch (e) {
    case s.Mc.MESSAGE_SEND:
      return c.intl.string(c.t.NlQW4P);
    case s.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
      return c.intl.string(c.t["Q+68IX"]);
    default:
      return c.intl.string(c.t.SP9BBx)
  }
}

function R(e) {
  switch (e) {
    case s.AH.BLOCK_MESSAGE:
      return c.intl.string(c.t.d1ab8n);
    case s.AH.FLAG_TO_CHANNEL:
      return c.intl.string(c.t["Y+VmvU"]);
    case s.AH.USER_COMMUNICATION_DISABLED:
      return c.intl.string(c.t["6WPxY2"]);
    case s.AH.QUARANTINE_USER:
      return c.intl.string(c.t.NPO8ee);
    default:
      return c.intl.string(c.t.SP9BBx)
  }
}

function y(e) {
  switch (e) {
    case s.uh.KEYWORD:
      return c.intl.string(c.t.ffR2cM);
    case s.uh.ML_SPAM:
      return c.intl.string(c.t["puF/Os"]);
    case s.uh.DEFAULT_KEYWORD_LIST:
      return c.intl.string(c.t.LnGhZv);
    case s.uh.MENTION_SPAM:
      return c.intl.string(c.t.pX7i6n);
    case s.uh.USER_PROFILE:
      return c.intl.string(c.t.q1L2v8);
    default:
      return c.intl.string(c.t.SP9BBx)
  }
}