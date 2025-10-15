/** Chunk was on 7654 **/
/** chunk id: 751771, original params: e,t,n (module,exports,require) **/
let i, l, s, a, r, o;
require.d(exports, {
  Z: () => Z
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
let C = new Set,
  N = [],
  _ = new Map,
  T = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function b(e) {
  let {
    isFriendsInVCInvitesEnabled: t
  } = (0, h.s6)({
    guildId: null == s ? true : s.id,
    location: "InviteSuggestionsStore",
    autoTrackExposure: false
  }), n = new Set, i = (null == a ? true : a.type) === E.d4z.GUILD_VOICE, l = null;
  null == s || o === y.Iq.EMBEDDED_APPLICATION || t && i || (l = s.id);
  let r = (0, x.rh)(C, l);
  for (let e of (null == r || f.Z.isBlockedOrIgnored(r.id) || n.add(r.id), v.Z.getUserAffinities())) n.add(e.otherUserId);
  let d = new Set;
  return o === y.Iq.EMBEDDED_APPLICATION && m.Z.getChannelHistory().map(e => I.Z.getChannel(e)).filter(p.lm).filter(e => e.type === E.d4z.GUILD_TEXT).filter(e => S.Z.can(E.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => d.add(e.id)), (0, x.an)({
    query: e,
    omitUserIds: C,
    suggestedUserIds: n,
    maxRowsWithoutQuery: 100,
    omitGuildId: l,
    suggestedChannelIds: d,
    inviteTargetType: o
  })
}

function j(e) {
  N = e, _ = new Map, e.forEach((e, t) => {
    _.set(e, {
      index: t
    })
  })
}
class A extends(d = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk752048.Z)
  }
  getInviteSuggestionRows() {
    return N
  }
  getTotalSuggestionsCount() {
    return i
  }
  getInitialCounts() {
    return T
  }
  getSelectedInviteMetadata(e) {
    let t = _.get(e),
      n = v.Z.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: N.length,
      numAffinityConnections: n.length,
      isFiltered: l
    }
  }
}(u = "displayName") in A ? Object.defineProperty(A, u, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : A[u] = "InviteSuggestionsStore";
let Z = new A(Chunk570140.Z, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: d,
      applicationId: u,
      inviteTargetType: c
    } = e;
    s = null != d ? n : null, a = d, r = u, o = c, C = new Set([...t, ...f.Z.getBlockedOrIgnoredIDs(), ...(0, x.Sz)({
      channel: a,
      applicationId: r,
      inviteTargetType: c
    })]), l = false;
    let {
      rows: g,
      counts: h
    } = b("");
    j(g), T = h, i = N.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    l = "" !== t;
    let {
      rows: n
    } = b(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), j(n)
  }
})