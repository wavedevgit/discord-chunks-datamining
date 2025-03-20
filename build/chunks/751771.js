/** Chunk was on 7654 **/
let l, i, s, r, a, o, d;
n.d(t, {
  Z: () => w
}), n(47120);
var u, c, h, g = n(442837),
  v = n(570140),
  x = n(823385),
  m = n(814443),
  p = n(823379),
  N = n(971130),
  I = n(592125),
  S = n(496675),
  j = n(699516),
  f = n(981631),
  E = n(245335);
let C = new Set,
  _ = [],
  T = new Map;

function y(e) {
  let t = new Set,
    n = null == r || d === E.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
    l = (0, N.rh)(C, n);
  for (let e of (null == l || j.Z.isBlocked(l.id) || t.add(l.id), m.Z.getUserAffinitiesUserIds())) t.add(e);
  let i = new Set;
  return d === E.Iq.EMBEDDED_APPLICATION && x.Z.getChannelHistory().map(e => I.Z.getChannel(e)).filter(p.lm).filter(e => e.type === f.d4z.GUILD_TEXT).filter(e => S.Z.can(f.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, N.an)({
    query: e,
    omitUserIds: C,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: d
  })
}

function b(e) {
  _ = e, T = new Map, e.forEach((e, t) => {
    T.set(e, {
      index: t
    })
  })
}
class Z extends(u = g.ZP.Store) {
  initialize() {
    this.waitFor(j.Z, m.Z)
  }
  getInviteSuggestionRows() {
    return _
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return l
  }
  getSelectedInviteMetadata(e) {
    let t = T.get(e),
      n = m.Z.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: _.length,
      numAffinityConnections: n.size,
      isFiltered: s
    } : null
  }
}
h = "InviteSuggestionsStore", (c = "displayName") in Z ? Object.defineProperty(Z, c, {
  value: h,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : Z[c] = h;
let w = new Z(v.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: c,
      inviteTargetType: h
    } = e;
    r = null != u ? n : null, a = u, o = c, d = h, C = new Set([...t, ...j.Z.getBlockedOrIgnoredIDs(), ...(0, N.Sz)({
      channel: a,
      applicationId: o,
      inviteTargetType: h
    })]), s = !1;
    let {
      rows: g,
      counts: v
    } = y("");
    b(g), l = v, i = _.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    s = "" !== t;
    let {
      rows: n
    } = y(t);
    b(n)
  }
})