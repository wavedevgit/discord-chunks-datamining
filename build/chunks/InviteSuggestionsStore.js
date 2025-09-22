/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let l, i, r, a, s, o;
require.d(exports, {
  Z: () => C
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
let _ = new Set,
  E = [],
  S = new Map,
  b = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function O(e) {
  let t = new Set,
    n = null == r || o === j.Iq.EMBEDDED_APPLICATION ? true : r.id,
    l = (0, v.rh)(_, n);
  for (let e of (null == l || f.Z.isBlockedOrIgnored(l.id) || t.add(l.id), m.Z.getUserAffinities())) t.add(e.otherUserId);
  let i = new Set;
  return o === j.Iq.EMBEDDED_APPLICATION && h.Z.getChannelHistory().map(e => I.Z.getChannel(e)).filter(p.lm).filter(e => e.type === N.d4z.GUILD_TEXT).filter(e => x.Z.can(N.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, v.an)({
    query: e,
    omitUserIds: _,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: o
  })
}

function y(e) {
  E = e, S = new Map, e.forEach((e, t) => {
    S.set(e, {
      index: t
    })
  })
}
class T extends(u = Chunk442837.ZP.Store) {
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
    return b
  }
  getSelectedInviteMetadata(e) {
    let t = S.get(e),
      n = m.Z.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: E.length,
      numAffinityConnections: n.length,
      isFiltered: i
    }
  }
}(d = "displayName") in T ? Object.defineProperty(T, d, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : T[d] = "InviteSuggestionsStore";
let C = new T(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: d,
      inviteTargetType: c
    } = e;
    r = null != u ? n : null, a = u, s = d, o = c, _ = new Set([...t, ...f.Z.getBlockedOrIgnoredIDs(), ...(0, v.Sz)({
      channel: a,
      applicationId: s,
      inviteTargetType: c
    })]), i = false;
    let {
      rows: g,
      counts: h
    } = O("");
    y(g), b = h, l = E.length
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