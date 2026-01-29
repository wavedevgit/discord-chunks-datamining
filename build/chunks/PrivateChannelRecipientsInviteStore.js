/** Chunk was on 78528 **/
/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => v,
  h: () => W
}), require("./896048.js"), require("./733351.js"), require("./321073.js"), require("./638769.js");
var l, i, s, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk450827 = require("./450827.js"),
  Chunk49463 = require("./49463.js"),
  Chunk625788 = require("./625788.js"),
  Chunk21119 = require("./21119.js"),
  Chunk95701 = require("./95701.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk734057 = require("./734057.js"),
  Chunk153488 = require("./153488.js"),
  Chunk205761 = require("./205761.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  v = ((i = {})[i.FRIENDS = 0] = "FRIENDS", i[i.GUILD_MEMBERS = 1] = "GUILD_MEMBERS", i);
let x = false,
  E = "",
  C = 0,
  S = 0,
  I = [],
  N = false,
  T = new Set,
  P = null,
  w = new Chunk713402.J(function(e) {
    let t = [],
      n = O.default.getCurrentUser();
    return _.A.isFriend(e.user.id) ? t.push("FRIENDS") : e.user.id !== (null == n ? true : n.id) && t.push("GUILD_MEMBERS"), t
  }, function(e) {
    if (A.A.hasConsented(j.YAq.PERSONALIZATION)) {
      var t, n;
      return -(null != (t = null == (n = h.A.getUserAffinity(e.user.id)) ? true : n.communicationProbability) ? t : 0)
    }
    return (0, g.sS)(m.Ay.getName(e.user).toLocaleLowerCase())
  });

function R() {
  E = "", C = 0, S = 0, I = [], T = new Set, x = false, P = null, w.clear()
}

function D(e) {
  E = e, S = 0, M()
}

function M() {
  if (!x) returnfalse;
  let e = b.A.getChannel(P);
  if (0 === E.trim().length) return null != r && r.clearQuery(), I = function(e) {
    let t = _.A.getFriendIDs(),
      n = p.A.getConfig({
        location: "PrivateChannelRecipientsInviteStore"
      }).enabled,
      r = O.default.getCurrentUser();
    if ((null == r ? true : r.isStaff()) && (t = Array.from(new Set([...t, ...O.default.filter(e => e.isStaff() && e.id !== r.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), n)
      for (let n of ((null == e ? true : e.isPrivate()) && e.recipients.forEach(e => {
          w.delete(e)
        }), t)) ! function(e) {
        if (_.A.getRelationshipType(e) === j.eA$.BLOCKED) return w.delete(e);
        let t = O.default.getUser(e);
        if (null == t) return w.delete(e);
        w.set(e, {
          user: t,
          comparator: m.Ay.getName(t)
        })
      }(n);
    return t.reduce((e, t) => {
      let n = O.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: m.Ay.getName(n)
      }), e
    }, []).sort(k)
  }(e), true;
  let t = null != e ? e.recipients : [];
  if (null != r) {
    var n;
    let e, l, i, s = O.default.getCurrentUser(),
      a = null != (n = null == s ? true : s.isStaff()) && n,
      o = p.A.getConfig({
        location: "PrivateChannelRecipientsInviteStore"
      }).enabled;
    r.setQuery({
      query: E,
      filters: o ? true : {
        friends: true,
        staff: a,
        provisional: false
      },
      blacklist: t,
      boosters: (l = Math.max(...(e = y.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof f.cq && e.isDM())).map(e => {
        let {
          id: t
        } = e;
        return y.A.getScoreWithoutFetchingLatest(t)
      })), i = {}, e.forEach(e => {
        let t = y.A.getScoreWithoutFetchingLatest(e.id),
          n = e.getRecipientId(),
          r = .2 * !!_.A.isFriend(n),
          s = .1 * (null != b.A.getDMFromUserId(n));
        i[n] = 1 + t / l + r + s
      }), i)
    })
  }
  returnfalse
}

function L() {
  if (!x) returnfalse;
  let e = N;
  return (N = _.A.getFriendCount() > 0) !== e
}

function k(e, t) {
  if (A.A.hasConsented(j.YAq.PERSONALIZATION)) {
    var n, r, l, i;
    let s = null != (n = null == (l = h.A.getUserAffinity(e.user.id)) ? true : l.communicationProbability) ? n : 0,
      a = null != (r = null == (i = h.A.getUserAffinity(t.user.id)) ? true : i.communicationProbability) ? r : 0;
    if (s !== a) return a - s
  }
  return (0, g.sS)(m.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, g.sS)(m.Ay.getName(t.user).toLocaleLowerCase()))
}

function G(e) {
  let {
    results: t
  } = e;
  if (!x || "" === E) return;
  let n = [];
  for (let {
      id: e,
      comparator: r
    }
    of(w.clear(), t)) {
    let t = O.default.getUser(e);
    null == t || t.isProvisional || (n.push({
      user: t,
      comparator: r
    }), w.set(e, {
      user: t,
      comparator: r
    }))
  }
  I = n, K.emitChange()
}

function U() {
  return null != r && (r.destroy(), r = null), u.A.getUserSearchContext(G, 1e3)
}

function B(e) {
  if (e.key !== j.TLS) returnfalse;
  x = true, L(), r = U(), P = null, D("")
}

function V(e) {
  if (e.key !== j.TLS) returnfalse;
  F()
}

function F() {
  null != r && (r.destroy(), r = null), R()
}
class H extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(b.A, A.A, d.A, y.A, _.A, h.A, O.default), this.syncWith([O.default, b.A], M), this.syncWith([_.A], L)
  }
  getResults() {
    return I
  }
  hasFriends() {
    return N
  }
  getSelectedUsers() {
    return T
  }
  getQuery() {
    return E
  }
  getState() {
    return {
      query: E,
      selectedRow: S,
      selectedSection: C,
      selectedUsers: T,
      results: I,
      hasFriends: N
    }
  }
  getSections() {
    let e = w.indexes();
    return [e.FRIENDS, e.GUILD_MEMBERS]
  }
}(s = "displayName") in H ? Object.defineProperty(H, s, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : H[s] = "PrivateChannelRecipientsInviteStore";
let K = new H(Chunk73153.h, {
    CONNECTION_OPEN: function() {
      R()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let r = x;
      return R(), x = r, P = n, M()
    },
    MODAL_PUSH: B,
    SHOW_ACTION_SHEET: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      x = true, L(), r = U(), P = e.channelId, D("")
    },
    MODAL_POP: V,
    HIDE_ACTION_SHEET: V,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: F,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
      P = e.channelId, D(e.query)
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
      C = e.section, S = e.row
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
      let {
        userId: t
      } = e;
      T.add(t), T = new Set(T)
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
      let {
        userId: t
      } = e;
      T.delete(t), T = new Set(T)
    }
  }),
  W = K