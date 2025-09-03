/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let l, i, r, s, a, o;
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
    n = null == r || o === N.Iq.EMBEDDED_APPLICATION ? true : r.id,
    l = (0, v.rh)(_, n);
  for (let e of (null == l || f.Z.isBlockedOrIgnored(l.id) || t.add(l.id), m.Z.getUserAffinities())) t.add(e.otherUserId);
  let i = new Set;
  return o === N.Iq.EMBEDDED_APPLICATION && h.Z.getChannelHistory().map(e => x.Z.getChannel(e)).filter(p.lm).filter(e => e.type === j.d4z.GUILD_TEXT).filter(e => I.Z.can(j.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, v.an)({
    query: e,
    omitUserIds: _,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: i,
    inviteTargetType: o
  })
}

function T(e) {
  E = e, S = new Map, e.forEach((e, t) => {
    S.set(e, {
      index: t
    })
  })
}
class y extends(u = Chunk442837.ZP.Store) {
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
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: E.length,
      numAffinityConnections: n.length,
      isFiltered: i
    } : null
  }
}(d = "displayName") in y ? Object.defineProperty(y, d, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[d] = "InviteSuggestionsStore";
let C = new y(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: d,
      inviteTargetType: c
    } = e;
    r = null != u ? n : null, s = u, a = d, o = c, _ = new Set([...t, ...f.Z.getBlockedOrIgnoredIDs(), ...(0, v.Sz)({
      channel: s,
      applicationId: a,
      inviteTargetType: c
    })]), i = false;
    let {
      rows: g,
      counts: h
    } = O("");
    T(g), b = h, l = E.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    i = "" !== t;
    let {
      rows: n
    } = O(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), T(n)
  }
})