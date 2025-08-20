/** Chunk was on 5665 **/
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
let C = false,
  x = "",
  v = 0,
  O = [],
  j = false,
  E = new Set,
  S = null;

function I() {
  x = "", v = 0, O = [], E = new Set, C = false, S = null
}

function P(e) {
  x = e, v = 0, Z()
}

function Z() {
  if (!C) returnfalse;
  let e = Chunk592125.Z.getChannel(S);
  if (0 === x.trim().length) return null != r && r.clearQuery(), O = function(e) {
    let t = b.Z.getFriendIDs(),
      n = _.default.getCurrentUser();
    return (null == n ? true : n.isStaff()) && (t = Array.from(new Set([...t, ..._.default.filter(e => e.isStaff() && e.id !== n.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
      let n = _.default.getUser(t);
      return null == n || n.isProvisional || e.push({
        user: n,
        comparator: h.ZP.getName(n)
      }), e
    }, []).sort(N)
  }(module), true;
  let t = null != module ? module.recipients : [];
  if (null != r) {
    var n;
    let e = Chunk594174.default.getCurrentUser(),
      i = null != (n = null == module ? true : module.isStaff()) && require;
    r.setQuery({
      query: x,
      filters: {
        friends: true,
        staff: i,
        provisional: false
      },
      blacklist: exports,
      boosters: function() {
        let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof d.mn && e.isDM()),
          t = Math.max(...module.map(e => {
            let {
              id: t
            } = e;
            return g.Z.getScoreWithoutFetchingLatest(t)
          })),
          n = {};
        return module.forEach(e => {
          let r = g.Z.getScoreWithoutFetchingLatest(e.id),
            i = e.getRecipientId(),
            l = .2 * !!b.Z.isFriend(i),
            a = .1 * (null != f.Z.getDMFromUserId(i));
          n[i] = 1 + r / t + l + a
        }), require
      }()
    })
  }
  returnfalse
}

function T() {
  if (!C) returnfalse;
  let e = j;
  return (j = Chunk699516.Z.getFriendCount() > 0) !== module
}

function N(e, t) {
  if (m.Z.hasConsented(y.pjP.PERSONALIZATION)) {
    var n, r, i, l;
    let a = null != (i = null == (n = u.Z.getUserAffinity(e.user.id)) ? true : n.communicationProbability) ? i : 0,
      o = null != (l = null == (r = u.Z.getUserAffinity(t.user.id)) ? true : r.communicationProbability) ? l : 0;
    if (a !== o) return o - a
  }
  return (0, p._I)(h.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, p._I)(h.ZP.getName(t.user).toLocaleLowerCase()))
}

function A(e) {
  let {
    results: t
  } = e;
  if (!C || "" === x) return;
  let n = [];
  for (let {
      id: e,
      comparator: r
    }
    of t) {
    let t = _.default.getUser(e);
    null != t && n.push({
      user: t,
      comparator: r
    })
  }
  O = n, k.emitChange()
}

function w() {
  return null != r && (r.destroy(), r = null), Chunk279779.Z.getUserSearchContext(A, 1e3)
}

function R(e) {
  if (e.key !== y.vTt) returnfalse;
  C = true, T(), r = w(), S = null, P("")
}

function M(e) {
  if (e.key !== y.vTt) returnfalse;
  D()
}

function D() {
  null != r && (r.destroy(), r = null), I()
}
class L extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk592125.Z, Chunk699516.Z, Chunk353926.Z, Chunk480294.Z), this.syncWith([Chunk594174.default, Chunk592125.Z], Z), this.syncWith([Chunk699516.Z], T)
  }
  getResults() {
    return O
  }
  hasFriends() {
    return j
  }
  getSelectedUsers() {
    return E
  }
  getQuery() {
    return x
  }
  getState() {
    return {
      query: x,
      selectedRow: v,
      selectedUsers: E,
      results: O,
      hasFriends: j
    }
  }
}(l = "displayName") in L ? Object.defineProperty(L, l, {
  value: "PrivateChannelRecipientsInviteStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : L[l] = "PrivateChannelRecipientsInviteStore";
let k = new L(Chunk570140.Z, {
    CONNECTION_OPEN: function() {
      I()
    },
    CHANNEL_SELECT: function(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null != t) returnfalse;
      let r = C;
      return I(), C = r, S = n, Z()
    },
    MODAL_PUSH: R,
    SHOW_ACTION_SHEET: R,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
      C = true, T(), r = w(), S = e.channelId, P("")
    },
    MODAL_POP: M,
    HIDE_ACTION_SHEET: M,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: D,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
      S = e.channelId, P(e.query)
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
      v = e.row
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
  U = k