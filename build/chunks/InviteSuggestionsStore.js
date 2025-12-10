/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let i, l, s, r, a, o;
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./642613.js");
var u, d, Chunk442837 = require("./442837.js"),
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
let E = new Set,
  _ = [],
  C = new Map,
  T = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function b(e) {
  let t = new Set,
    n = (null == r ? true : r.type) === f.d4z.GUILD_VOICE,
    i = null;
  null == s || o === y.Iq.EMBEDDED_APPLICATION || n || (i = s.id);
  let l = (0, I.rh)(E, i);
  for (let e of (null == l || S.Z.isBlockedOrIgnored(l.id) || t.add(l.id), p.Z.getUserAffinities())) t.add(e.otherUserId);
  let a = new Set;
  return o === y.Iq.EMBEDDED_APPLICATION && h.Z.getChannelHistory().map(e => m.Z.getChannel(e)).filter(v.lm).filter(e => e.type === f.d4z.GUILD_TEXT).filter(e => x.Z.can(f.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => a.add(e.id)), (0, I.an)({
    query: e,
    omitUserIds: E,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: i,
    suggestedChannelIds: a,
    inviteTargetType: o
  })
}

function N(e) {
  _ = e, C = new Map, e.forEach((e, t) => {
    C.set(e, {
      index: t
    })
  })
}
class A extends(u = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk496675.Z, Chunk823385.Z, Chunk699516.Z, Chunk752048.Z)
  }
  getInviteSuggestionRows() {
    return _
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return T
  }
  getSelectedInviteMetadata(e) {
    let t = C.get(e),
      n = p.Z.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: _.length,
      numAffinityConnections: n.length,
      isFiltered: l
    }
  }
}(d = "displayName") in A ? Object.defineProperty(A, d, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[d] = "InviteSuggestionsStore";
let P = new A(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: d,
      inviteTargetType: c
    } = e;
    s = null != u ? n : null, r = u, a = d, o = c, E = new Set([...t, ...S.Z.getBlockedOrIgnoredIDs(), ...(0, I.Sz)({
      channel: r,
      applicationId: a,
      inviteTargetType: c
    })]), l = false;
    let {
      rows: g,
      counts: h
    } = b("");
    N(g), T = h, i = _.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    l = "" !== t;
    let {
      rows: n
    } = b(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), N(n)
  }
})