/** Chunk was on 1113 **/
/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => j,
  h: () => Y
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
  j = ((i = {})[i.FRIENDS = 0] = "FRIENDS", i[i.GUILD_MEMBERS = 1] = "GUILD_MEMBERS", i);
let v = false,
  E = "",
  C = 0,
  S = 0,
  I = [],
  N = false,
  T = new Set,
  P = null,
  w = new Chunk713402.J(function(e) {
    let t = [],
      n = _.default.getCurrentUser();
    return O.A.isFriend(e.user.id) ? t.push("FRIENDS") : e.user.id !== (null == n ? true : n.id) && t.push("GUILD_MEMBERS"), t
  }, function(e) {
    if (A.A.hasConsented(x.YAq.PERSONALIZATION)) {
      var t, n;
      return -(null != (t = null == (n = p.A.getUserAffinity(e.user.id)) ? true : n.communicationProbability) ? t : 0)
    }
    return (0, f.sS)(m.Ay.getName(e.user).toLocaleLowerCase())
  });

function R() {
  E = "", C = 0, S = 0, I = [], T = new Set, v = false, P = null, w.clear()
}

function D(e) {
  E = e, S = 0, L()
}

function L() {
  if (!v) returnfalse;
  let e = b.A.getChannel(P);
  if (0 === E.trim().length) return null != r && r.clearQuery(), I = function(e) {
    let t = O.A.getFriendIDs(),
      n = h.A.getConfig({
        location: "PrivateChannelRecipientsInviteStore"
      }).enabled,
      r = _.default.getCurrentUser();
    if ((null == r ? true : r.isStaff()) && (t = Array.from(new Set([...t, ..._.default.filter(e => e.isStaff() && e.id !== r.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), n)
      for (let n of ((null == e ? true : e.isPrivate()) && e.recipients.forEach(e => {
          w.delete(e)
        }), t)) ! function(e) {
        if (O.A.getRelationshipType(e) === x.eA$.BLOCKED) return w.delete(e);
        let t = _.default.getUser(e);
        if (null == t) return w.delete(e);
        w.set(e, {
          user: t,
          comparator: m.Ay.getName(t)
        })
      }(n);
    return t.reduce((e, t) => {
      let n = _.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: m.Ay.getName(n)
      }), e
    }, []).sort(k)
  }(e), true;
  let t = null != e ? e.recipients : [];
  if (null != r) {
    var n;
    let e, l, i, s = _.default.getCurrentUser(),
      a = null != (n = null == s ? true : s.isStaff()) && n,
      o = h.A.getConfig({
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
      boosters: (l = Math.max(...(e = y.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof g.cq && e.isDM())).map(e => {
        let {
          id: t
        } = e;
        return y.A.getScoreWithoutFetchingLatest(t)
      })), i = {}, e.forEach(e => {
        let t = y.A.getScoreWithoutFetchingLatest(e.id),
          n = e.getRecipientId(),
          r = .2 * !!O.A.isFriend(n),
          s = .1 * (null != b.A.getDMFromUserId(n));
        i[n] = 1 + t / l + r + s
      }), i)
    })
  }
  returnfalse
}

function M() {
  if (!v) returnfalse;
  let e = N;
  return (N = O.A.getFriendCount() > 0) !== e
}

function k(e, t) {
  if (A.A.hasConsented(x.YAq.PERSONALIZATION)) {
    var n, r, l, i;
    let s = null != (n = null == (l = p.A.getUserAffinity(e.user.id)) ? true : l.communicationProbability) ? n : 0,
      a = null != (r = null == (i = p.A.getUserAffinity(t.user.id)) ? true : i.communicationProbability) ? r : 0;
    if (s !== a) return a - s
  }
  return (0, f.sS)(m.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, f.sS)(m.Ay.getName(t.user).toLocaleLowerCase()))
}

function G(e) {
  let {
    results: t
  } = e;
  if (!v || "" === E) return;
  let n = [];
  for (let {
      id: e,
      comparator: r
    }
    of(w.clear(), t)) {
    let t = _.default.getUser(e);
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

function V(e) {
  if (e.key !== x.TLS) returnfalse;
  v = true, M(), r = U(), P = null, D("")
}

function B(e) {
  if (e.key !== x.TLS) returnfalse;
  H()
}

function H() {
  null != r && (r.destroy(), r = null), R()
}
class F extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(b.A, A.A, d.A, y.A, O.A, p.A, _.default), this.syncWith([_.default, b.A], L), this.syncWith([O.A], M)
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
}(s = "displayName") in F ? Object.defineProperty(F, s, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : F[s] = "PrivateChannelRecipientsInviteStore";
let K = new F(Chunk73153.h, {
    CONNECTION_OPEN: function() {
      R()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let r = v;
      return R(), v = r, P = n, L()
    },
    MODAL_PUSH: V,
    SHOW_ACTION_SHEET: V,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      v = true, M(), r = U(), P = e.channelId, D("")
    },
    MODAL_POP: B,
    HIDE_ACTION_SHEET: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
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
  Y = K