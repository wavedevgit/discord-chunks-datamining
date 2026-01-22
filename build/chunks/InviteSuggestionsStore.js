/** Chunk was on 43600 **/
/** chunk id: 535820, original params: e,t,n (module,exports,require) **/
let l, i, s, r, a, o;
require.d(exports, {
  A: () => M
}), require("./896048.js"), require("./638769.js");
var u, d, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk174768 = require("./174768.js"),
  Chunk21119 = require("./21119.js"),
  Chunk403362 = require("./403362.js"),
  Chunk735547 = require("./735547.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk652215 = require("./652215.js"),
  Chunk172799 = require("./172799.js");
let f = new Set,
  E = [],
  _ = new Map,
  b = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numChannels: 0
  };

function C(e) {
  let t = new Set,
    n = (null == r ? true : r.type) === x.rbe.GUILD_VOICE,
    l = null;
  null == s || o === y.yV.EMBEDDED_APPLICATION || n || (l = s.id);
  let i = (0, A.oW)(f, l);
  for (let e of (null == i || S.A.isBlockedOrIgnored(i.id) || t.add(i.id), p.A.getUserAffinities())) t.add(e.otherUserId);
  let a = new Set;
  return o === y.yV.EMBEDDED_APPLICATION && h.A.getChannelHistory().map(e => I.A.getChannel(e)).filter(v.Vq).filter(e => e.type === x.rbe.GUILD_TEXT).filter(e => m.A.can(x.xBc.SEND_MESSAGES, e)).slice(0, 3).forEach(e => a.add(e.id)), (0, A.Us)({
    query: e,
    omitUserIds: f,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: l,
    suggestedChannelIds: a,
    inviteTargetType: o
  })
}

function T(e) {
  E = e, _ = new Map, e.forEach((e, t) => {
    _.set(e, {
      index: t
    })
  })
}
class N extends(u = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(I.A, m.A, h.A, S.A, p.A)
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
    let t = _.get(e),
      n = p.A.getUserAffinities().map(e => e.otherUserId);
    if (null != t) return {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: E.length,
      numAffinityConnections: n.length,
      isFiltered: i
    }
  }
}(d = "displayName") in N ? Object.defineProperty(N, d, {
  value: "InviteSuggestionsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : N[d] = "InviteSuggestionsStore";
let M = new N(Chunk73153.h, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: u,
      applicationId: d,
      inviteTargetType: c
    } = e;
    s = null != u ? n : null, r = u, a = d, o = c, f = new Set([...t, ...S.A.getBlockedOrIgnoredIDs(), ...(0, A.Uo)({
      channel: r,
      applicationId: a,
      inviteTargetType: c
    })]), i = false;
    let {
      rows: g,
      counts: h
    } = C("");
    T(g), b = h, l = E.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    i = "" !== t;
    let {
      rows: n
    } = C(t);
    n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), T(n)
  }
})