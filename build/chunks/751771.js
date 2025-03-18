/** Chunk was on 7654 **/
let l, i, s, r, a, o, d;
n.d(t, {
  Z: () => P
}), n(47120);
var u, c, h, g = n(442837),
  v = n(570140),
  m = n(823385),
  x = n(814443),
  p = n(823379),
  I = n(971130),
  N = n(592125),
  S = n(496675),
  E = n(699516),
  f = n(981631),
  j = n(245335);
let T = new Set,
  C = [],
  _ = new Map;

function y(e) {
  let t = new Set,
    n = null == r || d === j.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
    l = (0, I.rh)(T, n);
  for (let e of (null == l || E.Z.isBlocked(l.id) || t.add(l.id), x.Z.getUserAffinitiesUserIds())) t.add(e);
  let i = new Set;
  return d === j.Iq.EMBEDDED_APPLICATION && m.Z.getChannelHistory().map(e => N.Z.getChannel(e)).filter(p.lm).filter(e => e.type === f.d4z.GUILD_TEXT).filter(e => S.Z.can(f.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, I.an)({
    query: e,
    omitUserIds: T,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: d
  })
}

function Z(e) {
  C = e, _ = new Map, e.forEach((e, t) => {
    _.set(e, {
      index: t
    })
  })
}
class b extends(u = g.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, x.Z)
  }
  getInviteSuggestionRows() {
    return C
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return l
  }
  getSelectedInviteMetadata(e) {
    let t = _.get(e),
      n = x.Z.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: C.length,
      numAffinityConnections: n.size,
      isFiltered: s
    } : null
  }
}
h = "InviteSuggestionsStore", (c = "displayName") in b ? Object.defineProperty(b, c, {
  value: h,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : b[c] = h;
let P = new b(v.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: c,
      inviteTargetType: h
    } = e;
    r = null != u ? n : null, a = u, o = c, d = h, T = new Set([...t, ...E.Z.getBlockedOrIgnoredIDs(), ...(0, I.Sz)({
      channel: a,
      applicationId: o,
      inviteTargetType: h
    })]), s = !1;
    let {
      rows: g,
      counts: v
    } = y("");
    Z(g), l = v, i = C.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    s = "" !== t;
    let {
      rows: n
    } = y(t);
    Z(n)
  }
})