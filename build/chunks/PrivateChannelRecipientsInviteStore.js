/** Chunk was on web.js **/
/** chunk id: 544610, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => q
}), require("./388685.js"), require("./781311.js"), require("./539854.js"), require("./642613.js");
var i, Chunk442837 = require("./442837.js"),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 1e3,
  O = false,
  v = "",
  I = 0,
  T = [],
  S = false,
  A = new Set,
  N = null;

function C() {
  v = "", I = 0, T = [], A = new Set, O = false, N = null
}

function R(e) {
  v = e, I = 0, P()
}

function P() {
  if (!O) returnfalse;
  let e = Chunk592125.Z.getChannel(N);
  if (0 === v.trim().length) return null != r && r.clearQuery(), T = k(module), true;
  let t = null != module ? module.recipients : [];
  if (null != r) {
    var n;
    let e = Chunk594174.default.getCurrentUser(),
      i = null != (n = null == module ? true : module.isStaff()) && require;
    r.setQuery({
      query: v,
      filters: {
        friends: true,
        staff: i,
        provisional: false
      },
      blacklist: exports,
      boosters: U()
    })
  }
  returnfalse
}

function w() {
  if (!O) returnfalse;
  let e = S;
  return (S = Chunk699516.Z.getFriendCount() > 0) !== module
}

function D(e, t) {
  if (p.Z.hasConsented(E.pjP.PERSONALIZATION)) {
    var n, r, i, o;
    let a = null != (i = null == (n = c.Z.getUserAffinity(e.user.id)) ? true : n.communicationProbability) ? i : 0,
      s = null != (o = null == (r = c.Z.getUserAffinity(t.user.id)) ? true : r.communicationProbability) ? o : 0;
    if (a !== s) return s - a
  }
  return (0, d._I)(f.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, d._I)(f.ZP.getName(t.user).toLocaleLowerCase()))
}

function L() {
  C()
}

function x(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  if (null != t) returnfalse;
  let r = O;
  return C(), O = r, N = n, P()
}

function M(e) {
  N = e.channelId, R(e.query)
}

function k(e) {
  let t = m.Z.getFriendIDs(),
    n = g.default.getCurrentUser();
  return (null == n ? true : n.isStaff()) && (t = Array.from(new Set([...t, ...g.default.filter(e => e.isStaff() && e.id !== n.id, false).map(e => e.id)]))), (null == e ? true : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), t.reduce((e, t) => {
    let n = g.default.getUser(t);
    return null == n || n.isProvisional || e.push({
      user: n,
      comparator: f.ZP.getName(n)
    }), e
  }, []).sort(D)
}

function j(e) {
  let {
    results: t
  } = e;
  if (!O || "" === v) return;
  let n = [];
  for (let {
      id: e,
      comparator: r
    }
    of t) {
    let t = g.default.getUser(e);
    null != t && n.push({
      user: t,
      comparator: r
    })
  }
  T = n, z.emitChange()
}

function U() {
  let e = Chunk580005.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof u.mn && e.isDM()),
    t = Math.max(...module.map(e => {
      let {
        id: t
      } = e;
      return h.Z.getScoreWithoutFetchingLatest(t)
    })),
    n = {};
  return module.forEach(e => {
    let r = h.Z.getScoreWithoutFetchingLatest(e.id),
      i = e.getRecipientId(),
      o = .2 * !!m.Z.isFriend(i),
      a = .1 * (null != _.Z.getDMFromUserId(i));
    n[i] = 1 + r / t + o + a
  }), require
}

function G(e) {
  I = e.row
}

function B() {
  return null != r && (r.destroy(), r = null), Chunk279779.Z.getUserSearchContext(j, y)
}

function Z(e) {
  if (e.key !== E.vTt) returnfalse;
  O = true, w(), r = B(), N = null, R("")
}

function F(e) {
  O = true, w(), r = B(), N = e.channelId, R("")
}

function V(e) {
  if (e.key !== E.vTt) returnfalse;
  H()
}

function H() {
  null != r && (r.destroy(), r = null), C()
}

function Y(e) {
  let {
    userId: t
  } = e;
  A.add(t), A = new Set(A)
}

function W(e) {
  let {
    userId: t
  } = e;
  A.delete(t), A = new Set(A)
}
class K extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default, Chunk592125.Z, Chunk699516.Z, Chunk353926.Z, Chunk480294.Z), this.syncWith([Chunk594174.default, Chunk592125.Z], P), this.syncWith([Chunk699516.Z], w)
  }
  getResults() {
    return T
  }
  hasFriends() {
    return S
  }
  getSelectedUsers() {
    return A
  }
  getQuery() {
    return v
  }
  getState() {
    return {
      query: v,
      selectedRow: I,
      selectedUsers: A,
      results: T,
      hasFriends: S
    }
  }
}
b(K, "displayName", "PrivateChannelRecipientsInviteStore");
let z = new K(Chunk570140.Z, {
    CONNECTION_OPEN: L,
    CHANNEL_SELECT: x,
    MODAL_PUSH: Z,
    SHOW_ACTION_SHEET: Z,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: F,
    MODAL_POP: V,
    HIDE_ACTION_SHEET: V,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: M,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: G,
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: Y,
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: W
  }),
  q = z