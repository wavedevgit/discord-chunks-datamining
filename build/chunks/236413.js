/** Chunk was on 18437 **/
n.d(t, {
  Ar: () => R,
  DO: () => E,
  Fn: () => d,
  Jq: () => j,
  QO: () => N,
  Vb: () => A,
  YN: () => _,
  ZF: () => y,
  ep: () => p,
  km: () => O,
  nC: () => S,
  vo: () => g
}), n(388685), n(415506);
var r = n(581364),
  l = n(314897),
  i = n(866830),
  a = n(539573),
  u = n(727072),
  o = n(85960),
  c = n(273504),
  s = n(388032);
let f = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
  E = e => (null == e ? void 0 : e.triggerType) === c.fX.KEYWORD,
  g = e => (null == e ? void 0 : e.triggerType) === c.fX.ML_SPAM,
  d = e => (null == e ? void 0 : e.triggerType) === c.fX.DEFAULT_KEYWORD_LIST,
  S = e => (null == e ? void 0 : e.triggerType) === c.fX.MENTION_SPAM,
  j = e => (null == e ? void 0 : e.triggerType) === c.fX.USER_PROFILE;

function p(e, t) {
  let n = o.I6[t],
    r = (0, o.jp)(t, e),
    a = {
      id: f(e, t),
      name: n.getDefaultRuleName(),
      guildId: e,
      eventType: n.eventType,
      triggerType: t,
      triggerMetadata: r,
      enabled: !0,
      creatorId: l.default.getId(),
      actions: (0, i.qR)(n),
      position: 0,
      exemptChannels: new Set,
      exemptRoles: new Set
    };
  if (A(a)) throw Error(s.NW.string(s.t["A/nX8P"]));
  let c = (0, u.mY)(e, t);
  return c > 0 && (a.name += " ".concat(c + 1)), a
}

function O(e, t) {
  if (e.length > t) throw Error(s.NW.formatToPlainString(s.t.mee4qa, {
    limit: t
  }));
  e.forEach(e => {
    if (e.length > c.hu || e.length < c.Vk) throw new a.V6(s.NW.formatToPlainString(s.t.rbRvGR, {
      keyword: e,
      max: c.hu,
      min: c.Vk
    }))
  })
}

function N(e) {
  if (E(e)) {
    var t, n;
    let r = null != (t = e.triggerMetadata.keywordFilter) ? t : [],
      l = null != (n = e.triggerMetadata.regexPatterns) ? n : [];
    if (0 === r.length && 0 === l.length) throw Error(s.NW.string(s.t.kz2Av7));
    if (O(r, c.RH), l.length > c.VW) throw Error(s.NW.formatToPlainString(s.t.tDjhFx, {
      limit: c.VW
    }));
    l.forEach(e => {
      if (e.length > c.aj || e.length < c.uE) throw new a.uS(s.NW.formatToPlainString(s.t["WR0m9/"], {
        regex: e,
        max: c.aj,
        min: c.uE
      }))
    })
  }
  if (0 === e.actions.length) throw Error(s.NW.string(s.t["t+gj5e"]))
}

function A(e) {
  var t;
  return (0, r.BH)(null != (t = null == e ? void 0 : e.id) ? t : "INVALID_SNOWFLAKE")
}

function _(e) {
  switch (e) {
    case c.q4.MESSAGE_SEND:
      return s.NW.string(s.t.NlQW4O);
    case c.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
      return s.NW.string(s.t["Q+68IS"]);
    default:
      return s.NW.string(s.t.SP9BBw)
  }
}

function y(e) {
  switch (e) {
    case c.jj.BLOCK_MESSAGE:
      return s.NW.string(s.t.d1ab8v);
    case c.jj.FLAG_TO_CHANNEL:
      return s.NW.string(s.t["Y+Vmvb"]);
    case c.jj.USER_COMMUNICATION_DISABLED:
      return s.NW.string(s.t["6WPxY2"]);
    case c.jj.QUARANTINE_USER:
      return s.NW.string(s.t.NPO8eX);
    default:
      return s.NW.string(s.t.SP9BBw)
  }
}

function R(e) {
  switch (e) {
    case c.fX.KEYWORD:
      return s.NW.string(s.t.ffR2cH);
    case c.fX.ML_SPAM:
      return s.NW.string(s.t["puF/Oj"]);
    case c.fX.DEFAULT_KEYWORD_LIST:
      return s.NW.string(s.t.LnGhZm);
    case c.fX.MENTION_SPAM:
      return s.NW.string(s.t.pX7i6u);
    case c.fX.USER_PROFILE:
      return s.NW.string(s.t.q1L2v7);
    default:
      return s.NW.string(s.t.SP9BBw)
  }
}