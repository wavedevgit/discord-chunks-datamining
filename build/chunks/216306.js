/** Chunk was on 17573 **/
r.d(t, {
  Fo: () => y,
  KY: () => j,
  Uo: () => I,
  fU: () => V,
  qw: () => S,
  tn: () => m
}), r(733860);
var n = r(192379),
  l = r(658722),
  i = r.n(l),
  a = r(913527),
  o = r.n(a),
  s = r(442837),
  h = r(704215),
  c = r(45114),
  v = r(740504),
  u = r(605236),
  d = r(931261),
  E = r(540126),
  f = r(671098),
  p = r(703656),
  M = r(592125),
  _ = r(324067),
  O = r(306680),
  g = r(709054),
  b = r(981631),
  A = r(176505),
  T = r(443063),
  Z = r(490897),
  N = r(388032);

function H(e, t) {
  e.index = t
}

function y(e, t, r, l) {
  l = l.toLowerCase();
  let a = (0, d.g)(e),
    o = n.useCallback((e, t) => !(a && e.channel.hasFlag(A.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== b.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
  return n.useMemo(() => {
    let e = {
      null: [],
      _categories: []
    };
    return r[b.d4z.GUILD_CATEGORY].forEach(r => {
      let {
        channel: n
      } = r;
      "null" === n.id && (e.null = t.null.filter(e => o(e, l))), e[n.id] = t[n.id].filter(e => o(e, l))
    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === l.length || e[t.channel.id].length > 0), (0, v.Z)(e._categories, e).forEach(H), e
  }, [t, r, o, l])
}

function j(e) {
  let t = e.getSections(!1);
  if (t[E.wZ] > 0) switch (e.getGuildActionSection().getRow(0)) {
    case T.z.GUILD_HOME:
      return A.oC.GUILD_HOME;
    case T.z.GUILD_ROLE_SUBSCRIPTIONS:
      return A.oC.ROLE_SUBSCRIPTIONS;
    case T.z.GUILD_MEMBER_APPLICATIONS:
      return A.oC.MEMBER_APPLICATIONS
  }
  for (let n = E.wd; n < e.voiceChannelsSectionNumber; n++)
    if (t[n] > 0) {
      var r;
      let t = null === (r = e.getChannelFromSectionRow(n, 0)) || void 0 === r ? void 0 : r.channel;
      if (null != t) return t.id
    } return null
}

function I(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  (0, f.n)(e, t), (0, c.y5)(t.map(e => ({
    channelId: e,
    readStateType: Z.W.CHANNEL,
    messageId: O.ZP.lastMessageId(e)
  }))), null != r && (0, p.uL)(b.Z5c.CHANNEL(e, r))
}

function m(e, t, r, n) {
  let l = (0, u.wE)(h.z.CHANNEL_BROWSER_NUX),
    i = (0, s.cj)([M.Z], () => {
      let t = {},
        r = M.Z.getMutableGuildChannelsForGuild(e);
      for (let e in r) {
        let {
          parent_id: l
        } = r[e];
        if (null != l) {
          var n;
          t[l] = (null !== (n = t[l]) && void 0 !== n ? n : 0) + 1
        }
      }
      return t
    }, [e]),
    a = t._categories.map(e => {
      let n = t[e.channel.id];
      return {
        rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : n.length,
        rowHeight: 0 === n.length ? 0 : r
      }
    });
  return l || null == n || a.unshift({
    rowCount: 1,
    rowHeight: n
  }), a
}

function V(e) {
  var t, r;
  let n = (0, s.e7)([_.Z], () => _.Z.getCategories(e)),
    l = n._categories.length,
    i = n._categories[n._categories.length - 1];
  if (null == i) return 0;
  let a = n[null !== (r = null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : "null"];
  return null == a ? 0 : 0 === a.length ? i.index + 2 - l : a[a.length - 1].index + 2 - l
}

function S(e) {
  var t;
  return N.NW.formatToPlainString(N.t["8N0BHR"], {
    timeAgo: o()(g.default.extractTimestamp(null !== (t = O.ZP.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
  })
}