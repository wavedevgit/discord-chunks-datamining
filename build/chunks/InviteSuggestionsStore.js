/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let l, i, s, r, a, o;
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./642613.js");
var d, u, Chunk442837 = require("./442837.js"),
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
let b = new Set,
  j = [],
  E = new Map,
  y = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function T(e) {
  let {
    isFriendsInVCInvitesEnabled: t
  } = (0, h.s6)({
    guildId: null == s ? true : s.id,
    location: "InviteSuggestionsStore",
    autoTrackExposure: false
  }), n = new Set, l = (null == r ? true : r.type) === S.d4z.GUILD_VOICE, i = null;
  null == s || o === _.Iq.EMBEDDED_APPLICATION || t && l || (i = s.id);
  let a = (0, I.rh)(b, i);
  for (let e of (null == a || N.Z.isBlockedOrIgnored(a.id) || n.add(a.id), p.Z.getUserAffinities())) n.add(e.otherUserId);
  let d = new Set;
  return o === _.Iq.EMBEDDED_APPLICATION && m.Z.getChannelHistory().map(e => x.Z.getChannel(e)).filter(v.lm).filter(e => e.type === S.d4z.GUILD_TEXT).filter(e => f.Z.can(S.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => d.add(e.id)), (0, I.an)({
    query: e,
    omitUserIds: b,
    suggestedUserIds: n,
    maxRowsWithoutQuery: 100,
    omitGuildId: i,
    suggestedChannelIds: d,
    inviteTargetType: o
  })
}

function O(e) {
  j = e, E = new Map, e.forEach((e, t) => {
    E.set(e, {
      index: t
    })
  })
}
class C extends(d = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk752048.Z)
  }
  getInviteSuggestionRows() {
    return j
  }
  getTotalSuggestionsCount() {
    return l
  }
  getInitialCounts() {
    return y
  }
  getSelectedInviteMetadata(e) {
    let t = E.get(e),
      n = p.Z.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: j.length,
      numAffinityConnections: n.length,
      isFiltered: i
    }
  }
}(u = "displayName") in C ? Object.defineProperty(C, u, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : C[u] = "InviteSuggestionsStore";
let P = new C(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: d,
      applicationId: u,
      inviteTargetType: c
    } = e;
    s = null != d ? n : null, r = d, a = u, o = c, b = new Set([...t, ...N.Z.getBlockedOrIgnoredIDs(), ...(0, I.Sz)({
      channel: r,
      applicationId: a,
      inviteTargetType: c
    })]), i = false;
    let {
      rows: g,
      counts: h
    } = T("");
    O(g), y = h, l = j.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    i = "" !== t;
    let {
      rows: n
    } = T(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), O(n)
  }
})