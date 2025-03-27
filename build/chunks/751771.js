/** Chunk was on 7654 **/
let l, i, r, s, a, o, d;
n.d(t, {
  Z: () => P
}), n(47120);
var u, c, h, g = n(442837),
  m = n(570140),
  v = n(823385),
  x = n(814443),
  p = n(823379),
  N = n(971130),
  I = n(592125),
  f = n(496675),
  j = n(699516),
  S = n(981631),
  C = n(245335);
let b = new Set,
  E = [],
  y = new Map;

function T(e) {
  let t = new Set,
    n = null == s || d === C.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
    l = (0, N.rh)(b, n);
  for (let e of (null == l || j.Z.isBlocked(l.id) || t.add(l.id), x.Z.getUserAffinitiesUserIds())) t.add(e);
  let i = new Set;
  return d === C.Iq.EMBEDDED_APPLICATION && v.Z.getChannelHistory().map(e => I.Z.getChannel(e)).filter(p.lm).filter(e => e.type === S.d4z.GUILD_TEXT).filter(e => f.Z.can(S.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, N.an)({
    query: e,
    omitUserIds: b,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: d
  })
}

function _(e) {
  E = e, y = new Map, e.forEach((e, t) => {
    y.set(e, {
      index: t
    })
  })
}
class Z extends(u = g.ZP.Store) {
  initialize() {
    this.waitFor(j.Z, x.Z)
  }
  getInviteSuggestionRows() {
    return E
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return l
  }
  getSelectedInviteMetadata(e) {
    let t = y.get(e),
      n = x.Z.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: E.length,
      numAffinityConnections: n.size,
      isFiltered: r
    } : null
  }
}
h = "InviteSuggestionsStore", (c = "displayName") in Z ? Object.defineProperty(Z, c, {
  value: h,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : Z[c] = h;
let P = new Z(m.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: c,
      inviteTargetType: h
    } = e;
    s = null != u ? n : null, a = u, o = c, d = h, b = new Set([...t, ...j.Z.getBlockedOrIgnoredIDs(), ...(0, N.Sz)({
      channel: a,
      applicationId: o,
      inviteTargetType: h
    })]), r = !1;
    let {
      rows: g,
      counts: m
    } = T("");
    _(g), l = m, i = E.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    r = "" !== t;
    let {
      rows: n
    } = T(t);
    _(n)
  }
})