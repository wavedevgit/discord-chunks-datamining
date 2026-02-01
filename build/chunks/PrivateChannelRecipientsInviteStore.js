/** Chunk was on 61344 **/
/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let l;
require.d(exports, {
  A: () => O,
  h: () => W
}), require("./896048.js"), require("./733351.js"), require("./321073.js"), require("./638769.js");
var r, i, a, Chunk311907 = require("./311907.js"),
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
  O = ((i = {})[i.FRIENDS = 0] = "FRIENDS", i[i.GUILD_MEMBERS = 1] = "GUILD_MEMBERS", i);
let C = false,
  x = "",
  S = 0,
  j = 0,
  I = [],
  T = false,
  N = new Set,
  P = null,
  w = new Chunk713402.J(function(e) {
    let t = [],
      n = v.default.getCurrentUser();
    return y.A.isFriend(e.user.id) ? t.push("FRIENDS") : e.user.id !== (null == n ? true : n.id) && t.push("GUILD_MEMBERS"), t
  }, function(e) {
    if (b.A.hasConsented(E.YAq.PERSONALIZATION)) {
      var t, n;
      return -(null != (t = null == (n = p.A.getUserAffinity(e.user.id)) ? true : n.communicationProbability) ? t : 0)
    }
    return (0, m.sS)(g.Ay.getName(e.user).toLocaleLowerCase())
  });

function R() {
  x = "", S = 0, j = 0, I = [], N = new Set, C = false, P = null, w.clear()
}

function D(e) {
  x = e, j = 0, M()
}

function M() {
  if (!C) returnfalse;
  let e = A.A.getChannel(P);
  if (0 === x.trim().length) return null != l && l.clearQuery(), I = function(e) {
    let t = y.A.getFriendIDs(),
      n = h.A.getConfig({
        location: "PrivateChannelRecipientsInviteStore"
      }).enabled,
      l = v.default.getCurrentUser();
    if ((null == l ? true : l.isStaff()) && (t = Array.from(new Set([...t, ...v.default.filter(e => e.isStaff() && e.id !== l.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), n)
      for (let n of ((null == e ? true : e.isPrivate()) && e.recipients.forEach(e => {
          w.delete(e)
        }), t)) ! function(e) {
        if (y.A.getRelationshipType(e) === E.eA$.BLOCKED) return w.delete(e);
        let t = v.default.getUser(e);
        if (null == t) return w.delete(e);
        w.set(e, {
          user: t,
          comparator: g.Ay.getName(t)
        })
      }(n);
    return t.reduce((e, t) => {
      let n = v.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: g.Ay.getName(n)
      }), e
    }, []).sort(k)
  }(e), true;
  let t = null != e ? e.recipients : [];
  if (null != l) {
    var n;
    let e, r, i, a = v.default.getCurrentUser(),
      s = null != (n = null == a ? true : a.isStaff()) && n,
      o = h.A.getConfig({
        location: "PrivateChannelRecipientsInviteStore"
      }).enabled;
    l.setQuery({
      query: x,
      filters: o ? true : {
        friends: true,
        staff: s,
        provisional: false
      },
      blacklist: t,
      boosters: (r = Math.max(...(e = _.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof f.cq && e.isDM())).map(e => {
        let {
          id: t
        } = e;
        return _.A.getScoreWithoutFetchingLatest(t)
      })), i = {}, e.forEach(e => {
        let t = _.A.getScoreWithoutFetchingLatest(e.id),
          n = e.getRecipientId(),
          l = .2 * !!y.A.isFriend(n),
          a = .1 * (null != A.A.getDMFromUserId(n));
        i[n] = 1 + t / r + l + a
      }), i)
    })
  }
  returnfalse
}

function L() {
  if (!C) returnfalse;
  let e = T;
  return (T = y.A.getFriendCount() > 0) !== e
}

function k(e, t) {
  if (b.A.hasConsented(E.YAq.PERSONALIZATION)) {
    var n, l, r, i;
    let a = null != (n = null == (r = p.A.getUserAffinity(e.user.id)) ? true : r.communicationProbability) ? n : 0,
      s = null != (l = null == (i = p.A.getUserAffinity(t.user.id)) ? true : i.communicationProbability) ? l : 0;
    if (a !== s) return s - a
  }
  return (0, m.sS)(g.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, m.sS)(g.Ay.getName(t.user).toLocaleLowerCase()))
}

function U(e) {
  let {
    results: t
  } = e;
  if (!C || "" === x) return;
  let n = [];
  for (let {
      id: e,
      comparator: l
    }
    of(w.clear(), t)) {
    let t = v.default.getUser(e);
    null == t || t.isProvisional || (n.push({
      user: t,
      comparator: l
    }), w.set(e, {
      user: t,
      comparator: l
    }))
  }
  I = n, K.emitChange()
}

function G() {
  return null != l && (l.destroy(), l = null), u.A.getUserSearchContext(U, 1e3)
}

function F(e) {
  if (e.key !== E.TLS) returnfalse;
  C = true, L(), l = G(), P = null, D("")
}

function H(e) {
  if (e.key !== E.TLS) returnfalse;
  B()
}

function B() {
  null != l && (l.destroy(), l = null), R()
}
class V extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(A.A, b.A, d.A, _.A, y.A, p.A, v.default), this.syncWith([v.default, A.A], M), this.syncWith([y.A], L)
  }
  getResults() {
    return I
  }
  hasFriends() {
    return T
  }
  getSelectedUsers() {
    return N
  }
  getQuery() {
    return x
  }
  getState() {
    return {
      query: x,
      selectedRow: j,
      selectedSection: S,
      selectedUsers: N,
      results: I,
      hasFriends: T
    }
  }
  getSections() {
    let e = w.indexes();
    return [e.FRIENDS, e.GUILD_MEMBERS]
  }
}(a = "displayName") in V ? Object.defineProperty(V, a, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : V[a] = "PrivateChannelRecipientsInviteStore";
let K = new V(Chunk73153.h, {
    CONNECTION_OPEN: function() {
      R()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let l = C;
      return R(), C = l, P = n, M()
    },
    MODAL_PUSH: F,
    SHOW_ACTION_SHEET: F,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      C = true, L(), l = G(), P = e.channelId, D("")
    },
    MODAL_POP: H,
    HIDE_ACTION_SHEET: H,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
      P = e.channelId, D(e.query)
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
      S = e.section, j = e.row
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
      let {
        userId: t
      } = e;
      N.add(t), N = new Set(N)
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
      let {
        userId: t
      } = e;
      N.delete(t), N = new Set(N)
    }
  }),
  W = K