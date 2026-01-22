/** Chunk was on 97492 **/
/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => U
}), require("./896048.js"), require("./733351.js"), require("./321073.js"), require("./638769.js");
var l, i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk450827 = require("./450827.js"),
  Chunk49463 = require("./49463.js"),
  Chunk21119 = require("./21119.js"),
  Chunk95701 = require("./95701.js"),
  Chunk240248 = require("./240248.js"),
  Chunk427262 = require("./427262.js"),
  Chunk734057 = require("./734057.js"),
  Chunk153488 = require("./153488.js"),
  Chunk205761 = require("./205761.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");
let O = false,
  j = "",
  v = 0,
  x = [],
  E = false,
  _ = new Set,
  C = null;

function S() {
  j = "", v = 0, x = [], _ = new Set, O = false, C = null
}

function I(e) {
  j = e, v = 0, N()
}

function N() {
  var e, t;
  if (!O) returnfalse;
  let n = h.A.getChannel(C);
  if (0 === j.trim().length) {
    let t, l;
    return null != r && r.clearQuery(), e = n, t = m.A.getFriendIDs(), (null == (l = A.default.getCurrentUser()) ? true : l.isStaff()) && (t = Array.from(new Set([...t, ...A.default.filter(e => e.isStaff() && e.id !== l.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), x = t.reduce((e, t) => {
      let n = A.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: p.Ay.getName(n)
      }), e
    }, []).sort(P), true
  }
  let l = null != n ? n.recipients : [];
  if (null != r) {
    let e, n, i, a = A.default.getCurrentUser(),
      s = null != (t = null == a ? true : a.isStaff()) && t;
    r.setQuery({
      query: j,
      filters: {
        friends: true,
        staff: s,
        provisional: false
      },
      blacklist: l,
      boosters: (n = Math.max(...(e = g.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof d.cq && e.isDM())).map(e => {
        let {
          id: t
        } = e;
        return g.A.getScoreWithoutFetchingLatest(t)
      })), i = {}, e.forEach(e => {
        let t = g.A.getScoreWithoutFetchingLatest(e.id),
          r = e.getRecipientId(),
          l = .2 * !!m.A.isFriend(r),
          a = .1 * (null != h.A.getDMFromUserId(r));
        i[r] = 1 + t / n + l + a
      }), i)
    })
  }
  returnfalse
}

function T() {
  if (!O) returnfalse;
  let e = E;
  return (E = m.A.getFriendCount() > 0) !== e
}

function P(e, t) {
  if (b.A.hasConsented(y.YAq.PERSONALIZATION)) {
    var n, r, l, i;
    let a = null != (n = null == (l = u.A.getUserAffinity(e.user.id)) ? true : l.communicationProbability) ? n : 0,
      s = null != (r = null == (i = u.A.getUserAffinity(t.user.id)) ? true : i.communicationProbability) ? r : 0;
    if (a !== s) return s - a
  }
  return (0, f.sS)(p.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, f.sS)(p.Ay.getName(t.user).toLocaleLowerCase()))
}

function w(e) {
  let {
    results: t
  } = e;
  if (!O || "" === j) return;
  let n = [];
  for (let {
      id: e,
      comparator: r
    }
    of t) {
    let t = A.default.getUser(e);
    null != t && n.push({
      user: t,
      comparator: r
    })
  }
  x = n, k.emitChange()
}

function R() {
  return null != r && (r.destroy(), r = null), o.A.getUserSearchContext(w, 1e3)
}

function D(e) {
  if (e.key !== y.TLS) returnfalse;
  O = true, T(), r = R(), C = null, I("")
}

function M(e) {
  if (e.key !== y.TLS) returnfalse;
  L()
}

function L() {
  null != r && (r.destroy(), r = null), S()
}
class G extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.A, b.A, c.A, g.A, m.A, u.A, A.default), this.syncWith([A.default, h.A], N), this.syncWith([m.A], T)
  }
  getResults() {
    return x
  }
  hasFriends() {
    return E
  }
  getSelectedUsers() {
    return _
  }
  getQuery() {
    return j
  }
  getState() {
    return {
      query: j,
      selectedRow: v,
      selectedUsers: _,
      results: x,
      hasFriends: E
    }
  }
}(i = "displayName") in G ? Object.defineProperty(G, i, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : G[i] = "PrivateChannelRecipientsInviteStore";
let k = new G(Chunk73153.h, {
    CONNECTION_OPEN: function() {
      S()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let r = O;
      return S(), O = r, C = n, N()
    },
    MODAL_PUSH: D,
    SHOW_ACTION_SHEET: D,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      O = true, T(), r = R(), C = e.channelId, I("")
    },
    MODAL_POP: M,
    HIDE_ACTION_SHEET: M,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: L,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
      C = e.channelId, I(e.query)
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
      v = e.row
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
      let {
        userId: t
      } = e;
      _.add(t), _ = new Set(_)
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
      let {
        userId: t
      } = e;
      _.delete(t), _ = new Set(_)
    }
  }),
  U = k