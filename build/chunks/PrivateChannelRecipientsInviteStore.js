/** Chunk was on 77870 **/
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
let _ = false,
  O = "",
  j = 0,
  v = [],
  x = false,
  E = new Set,
  C = null;

function S() {
  O = "", j = 0, v = [], E = new Set, _ = false, C = null
}

function I(e) {
  O = e, j = 0, N()
}

function N() {
  var e, t;
  if (!_) returnfalse;
  let n = f.A.getChannel(C);
  if (0 === O.trim().length) {
    let t, l;
    return null != r && r.clearQuery(), e = n, t = b.A.getFriendIDs(), (null == (l = A.default.getCurrentUser()) ? true : l.isStaff()) && (t = Array.from(new Set([...t, ...A.default.filter(e => e.isStaff() && e.id !== l.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), v = t.reduce((e, t) => {
      let n = A.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: h.Ay.getName(n)
      }), e
    }, []).sort(P), true
  }
  let l = null != n ? n.recipients : [];
  if (null != r) {
    let e, n, i, s = A.default.getCurrentUser(),
      a = null != (t = null == s ? true : s.isStaff()) && t;
    r.setQuery({
      query: O,
      filters: {
        friends: true,
        staff: a,
        provisional: false
      },
      blacklist: l,
      boosters: (n = Math.max(...(e = m.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof d.cq && e.isDM())).map(e => {
        let {
          id: t
        } = e;
        return m.A.getScoreWithoutFetchingLatest(t)
      })), i = {}, e.forEach(e => {
        let t = m.A.getScoreWithoutFetchingLatest(e.id),
          r = e.getRecipientId(),
          l = .2 * !!b.A.isFriend(r),
          s = .1 * (null != f.A.getDMFromUserId(r));
        i[r] = 1 + t / n + l + s
      }), i)
    })
  }
  returnfalse
}

function T() {
  if (!_) returnfalse;
  let e = x;
  return (x = b.A.getFriendCount() > 0) !== e
}

function P(e, t) {
  if (g.A.hasConsented(y.YAq.PERSONALIZATION)) {
    var n, r, l, i;
    let s = null != (n = null == (l = u.A.getUserAffinity(e.user.id)) ? true : l.communicationProbability) ? n : 0,
      a = null != (r = null == (i = u.A.getUserAffinity(t.user.id)) ? true : i.communicationProbability) ? r : 0;
    if (s !== a) return a - s
  }
  return (0, p.sS)(h.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, p.sS)(h.Ay.getName(t.user).toLocaleLowerCase()))
}

function w(e) {
  let {
    results: t
  } = e;
  if (!_ || "" === O) return;
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
  v = n, G.emitChange()
}

function R() {
  return null != r && (r.destroy(), r = null), o.A.getUserSearchContext(w, 1e3)
}

function D(e) {
  if (e.key !== y.TLS) returnfalse;
  _ = true, T(), r = R(), C = null, I("")
}

function M(e) {
  if (e.key !== y.TLS) returnfalse;
  L()
}

function L() {
  null != r && (r.destroy(), r = null), S()
}
class k extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.A, g.A, c.A, m.A, b.A, u.A, A.default), this.syncWith([A.default, f.A], N), this.syncWith([b.A], T)
  }
  getResults() {
    return v
  }
  hasFriends() {
    return x
  }
  getSelectedUsers() {
    return E
  }
  getQuery() {
    return O
  }
  getState() {
    return {
      query: O,
      selectedRow: j,
      selectedUsers: E,
      results: v,
      hasFriends: x
    }
  }
}(i = "displayName") in k ? Object.defineProperty(k, i, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : k[i] = "PrivateChannelRecipientsInviteStore";
let G = new k(Chunk73153.h, {
    CONNECTION_OPEN: function() {
      S()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let r = _;
      return S(), _ = r, C = n, N()
    },
    MODAL_PUSH: D,
    SHOW_ACTION_SHEET: D,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      _ = true, T(), r = R(), C = e.channelId, I("")
    },
    MODAL_POP: M,
    HIDE_ACTION_SHEET: M,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: L,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
      C = e.channelId, I(e.query)
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
      j = e.row
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
      let {
        userId: t
      } = e;
      E.add(t), E = new Set(E)
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
      let {
        userId: t
      } = e;
      E.delete(t), E = new Set(E)
    }
  }),
  U = G