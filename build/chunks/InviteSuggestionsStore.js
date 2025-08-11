/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let l, i, r, s, a, o;
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./642613.js");
var u, d, c, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823385 = require("./823385.js"),
  Chunk752048 = require("./752048.js"),
  Chunk823379 = require("./823379.js"),
  Chunk971130 = require("./971130.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk981631 = require("./981631.js"),
  Chunk245335 = require("./245335.js");
let S = new Set,
  E = [],
  b = new Map,
  T = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function O(e) {
  let t = new Set,
    n = null == r || o === _.Iq.EMBEDDED_APPLICATION ? true : r.id,
    l = (0, x.rh)(S, n);
  for (let e of (null == l || j.Z.isBlockedOrIgnored(l.id) || t.add(l.id), p.Z.getUserAffinities())) t.add(e.otherUserId);
  let i = new Set;
  return o === _.Iq.EMBEDDED_APPLICATION && m.Z.getChannelHistory().map(e => I.Z.getChannel(e)).filter(v.lm).filter(e => e.type === N.d4z.GUILD_TEXT).filter(e => f.Z.can(N.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, x.an)({
    query: e,
    omitUserIds: S,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: o
  })
}

function y(e) {
  E = e, b = new Map, e.forEach((e, t) => {
    b.set(e, {
      index: t
    })
  })
}
class C extends(u = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk752048.Z)
  }
  getInviteSuggestionRows() {
    return E
  }
  getTotalSuggestionsCount() {
    return l
  }
  getInitialCounts() {
    return T
  }
  getSelectedInviteMetadata(e) {
    let t = b.get(e),
      n = p.Z.getUserAffinities().map(e => e.otherUserId);
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: E.length,
      numAffinityConnections: n.length,
      isFiltered: i
    } : null
  }
}
c = "InviteSuggestionsStore", (d = "displayName") in C ? Object.defineProperty(C, d, {
  value: c,
  enumerable: true,
  configurable: true,
  writable: true
}) : C[d] = c;
let P = new C(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: d,
      inviteTargetType: c
    } = e;
    r = null != u ? n : null, s = u, a = d, o = c, S = new Set([...t, ...j.Z.getBlockedOrIgnoredIDs(), ...(0, x.Sz)({
      channel: s,
      applicationId: a,
      inviteTargetType: c
    })]), i = false;
    let {
      rows: g,
      counts: h
    } = O("");
    y(g), T = h, l = E.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    i = "" !== t;
    let {
      rows: n
    } = O(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), y(n)
  }
})