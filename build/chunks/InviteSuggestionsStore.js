/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let i, l, s, r, a, o;
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./642613.js");
var u, d, Chunk442837 = require("./442837.js"),
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
let C = new Set,
  _ = [],
  b = new Map,
  T = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function N(e) {
  let {
    isFriendsInVCInvitesEnabled: t
  } = (0, h.s6)({
    guildId: null == s ? true : s.id,
    location: "InviteSuggestionsStore",
    autoTrackExposure: false
  }), n = new Set, i = (null == r ? true : r.type) === E.d4z.GUILD_VOICE, l = null;
  null == s || o === y.Iq.EMBEDDED_APPLICATION || t && i || (l = s.id);
  let a = (0, m.rh)(C, l);
  for (let e of (null == a || f.Z.isBlockedOrIgnored(a.id) || n.add(a.id), p.Z.getUserAffinities())) n.add(e.otherUserId);
  let u = new Set;
  return o === y.Iq.EMBEDDED_APPLICATION && v.Z.getChannelHistory().map(e => x.Z.getChannel(e)).filter(I.lm).filter(e => e.type === E.d4z.GUILD_TEXT).filter(e => S.Z.can(E.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => u.add(e.id)), (0, m.an)({
    query: e,
    omitUserIds: C,
    suggestedUserIds: n,
    maxRowsWithoutQuery: 100,
    omitGuildId: l,
    suggestedChannelIds: u,
    inviteTargetType: o
  })
}

function A(e) {
  _ = e, b = new Map, e.forEach((e, t) => {
    b.set(e, {
      index: t
    })
  })
}
class Z extends(u = Chunk442837.ZP.Store) {
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
    let t = b.get(e),
      n = p.Z.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: _.length,
      numAffinityConnections: n.length,
      isFiltered: l
    }
  }
}(d = "displayName") in Z ? Object.defineProperty(Z, d, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Z[d] = "InviteSuggestionsStore";
let P = new Z(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: d,
      inviteTargetType: c
    } = e;
    s = null != u ? n : null, r = u, a = d, o = c, C = new Set([...t, ...f.Z.getBlockedOrIgnoredIDs(), ...(0, m.Sz)({
      channel: r,
      applicationId: a,
      inviteTargetType: c
    })]), l = false;
    let {
      rows: g,
      counts: h
    } = N("");
    A(g), T = h, i = _.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    l = "" !== t;
    let {
      rows: n
    } = N(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), A(n)
  }
})