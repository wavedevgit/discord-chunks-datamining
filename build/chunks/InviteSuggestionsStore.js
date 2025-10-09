/** Chunk was on 74318 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let l, i, a, r, s, o;
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./642613.js");
var u, c, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk559310 = require("./559310.js"),
  Chunk823385 = require("./823385.js"),
  Chunk752048 = require("./752048.js"),
  Chunk823379 = require("./823379.js"),
  Chunk971130 = require("./971130.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk981631 = require("./981631.js"),
  Chunk245335 = require("./245335.js");
let N = new Set,
  E = [],
  j = new Map,
  T = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function S(e) {
  let {
    isFriendsInVCInvitesEnabled: t
  } = (0, m.s6)({
    guildId: null == a ? true : a.id,
    location: "InviteSuggestionsStore",
    autoTrackExposure: false
  }), n = new Set, l = (null == r ? true : r.type) === O.d4z.GUILD_VOICE, i = null;
  null == a || o === b.Iq.EMBEDDED_APPLICATION || t && l || (i = a.id);
  let s = (0, v.rh)(N, i);
  for (let e of (null == s || _.Z.isBlockedOrIgnored(s.id) || n.add(s.id), p.Z.getUserAffinities())) n.add(e.otherUserId);
  let u = new Set;
  return o === b.Iq.EMBEDDED_APPLICATION && I.Z.getChannelHistory().map(e => x.Z.getChannel(e)).filter(f.lm).filter(e => e.type === O.d4z.GUILD_TEXT).filter(e => h.Z.can(O.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => u.add(e.id)), (0, v.an)({
    query: e,
    omitUserIds: N,
    suggestedUserIds: n,
    maxRowsWithoutQuery: 100,
    omitGuildId: i,
    suggestedChannelIds: u,
    inviteTargetType: o
  })
}

function P(e) {
  E = e, j = new Map, e.forEach((e, t) => {
    j.set(e, {
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
    return T
  }
  getSelectedInviteMetadata(e) {
    let t = j.get(e),
      n = p.Z.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: E.length,
      numAffinityConnections: n.length,
      isFiltered: i
    }
  }
}(c = "displayName") in y ? Object.defineProperty(y, c, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[c] = "InviteSuggestionsStore";
let C = new y(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: c,
      inviteTargetType: d
    } = e;
    a = null != u ? n : null, r = u, s = c, o = d, N = new Set([...t, ..._.Z.getBlockedOrIgnoredIDs(), ...(0, v.Sz)({
      channel: r,
      applicationId: s,
      inviteTargetType: d
    })]), i = false;
    let {
      rows: g,
      counts: m
    } = S("");
    P(g), T = m, l = E.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    i = "" !== t;
    let {
      rows: n
    } = S(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), P(n)
  }
})