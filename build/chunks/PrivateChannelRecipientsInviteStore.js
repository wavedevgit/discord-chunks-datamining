/** Chunk was on 82124 **/
/** chunk id: 544610, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./781311.js"), require("./539854.js"), require("./642613.js");
var i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk279779 = require("./279779.js"),
  Chunk353926 = require("./353926.js"),
  Chunk752048 = require("./752048.js"),
  Chunk131704 = require("./131704.js"),
  Chunk624138 = require("./624138.js"),
  Chunk51144 = require("./51144.js"),
  Chunk592125 = require("./592125.js"),
  Chunk480294 = require("./480294.js"),
  Chunk580005 = require("./580005.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let O = false,
  j = "",
  x = 0,
  C = [],
  E = false,
  S = new Set,
  _ = null;

function I() {
  j = "", x = 0, C = [], S = new Set, O = false, _ = null
}

function P(e) {
  j = e, x = 0, Z()
}

function Z() {
  if (!O) returnfalse;
  let e = h.Z.getChannel(_);
  if (0 === j.trim().length) return null != r && r.clearQuery(), C = function(e) {
    let t = b.Z.getFriendIDs(),
      n = y.default.getCurrentUser();
    return (null == n ? true : n.isStaff()) && (t = Array.from(new Set([...t, ...y.default.filter(e => e.isStaff() && e.id !== n.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
      let n = y.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: f.ZP.getName(n)
      }), e
    }, []).sort(T)
  }(e), true;
  let t = null != e ? e.recipients : [];
  if (null != r) {
    var n;
    let e = y.default.getCurrentUser(),
      i = null != (n = null == e ? true : e.isStaff()) && n;
    r.setQuery({
      query: j,
      filters: {
        friends: true,
        staff: i,
        provisional: false
      },
      blacklist: t,
      boosters: function() {
        let e = m.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof d.mn && e.isDM()),
          t = Math.max(...e.map(e => {
            let {
              id: t
            } = e;
            return m.Z.getScoreWithoutFetchingLatest(t)
          })),
          n = {};
        return e.forEach(e => {
          let r = m.Z.getScoreWithoutFetchingLatest(e.id),
            i = e.getRecipientId(),
            l = .2 * !!b.Z.isFriend(i),
            a = .1 * (null != h.Z.getDMFromUserId(i));
          n[i] = 1 + r / t + l + a
        }), n
      }()
    })
  }
  returnfalse
}

function N() {
  if (!O) returnfalse;
  let e = E;
  return (E = b.Z.getFriendCount() > 0) !== e
}

function T(e, t) {
  if (g.Z.hasConsented(v.pjP.PERSONALIZATION)) {
    var n, r, i, l;
    let a = null != (i = null == (n = u.Z.getUserAffinity(e.user.id)) ? true : n.communicationProbability) ? i : 0,
      o = null != (l = null == (r = u.Z.getUserAffinity(t.user.id)) ? true : r.communicationProbability) ? l : 0;
    if (a !== o) return o - a
  }
  return (0, p._I)(f.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, p._I)(f.ZP.getName(t.user).toLocaleLowerCase()))
}

function A(e) {
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
    let t = y.default.getUser(e);
    null != t && n.push({
      user: t,
      comparator: r
    })
  }
  C = n, L.emitChange()
}

function w() {
  return null != r && (r.destroy(), r = null), s.Z.getUserSearchContext(A, 1e3)
}

function R(e) {
  if (e.key !== v.vTt) returnfalse;
  O = true, N(), r = w(), _ = null, P("")
}

function D(e) {
  if (e.key !== v.vTt) returnfalse;
  M()
}

function M() {
  null != r && (r.destroy(), r = null), I()
}
class k extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, g.Z, c.Z, m.Z, b.Z, u.Z, y.default), this.syncWith([y.default, h.Z], Z), this.syncWith([b.Z], N)
  }
  getResults() {
    return C
  }
  hasFriends() {
    return E
  }
  getSelectedUsers() {
    return S
  }
  getQuery() {
    return j
  }
  getState() {
    return {
      query: j,
      selectedRow: x,
      selectedUsers: S,
      results: C,
      hasFriends: E
    }
  }
}(l = "displayName") in k ? Object.defineProperty(k, l, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : k[l] = "PrivateChannelRecipientsInviteStore";
let L = new k(Chunk570140.Z, {
    CONNECTION_OPEN: function() {
      I()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let r = O;
      return I(), O = r, _ = n, Z()
    },
    MODAL_PUSH: R,
    SHOW_ACTION_SHEET: R,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      O = true, N(), r = w(), _ = e.channelId, P("")
    },
    MODAL_POP: D,
    HIDE_ACTION_SHEET: D,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: M,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
      _ = e.channelId, P(e.query)
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
      x = e.row
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
      let {
        userId: t
      } = e;
      S.add(t), S = new Set(S)
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
      let {
        userId: t
      } = e;
      S.delete(t), S = new Set(S)
    }
  }),
  U = L