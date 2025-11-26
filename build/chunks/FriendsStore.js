/** Chunk was on 1272 **/
/** chunk id: 974042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => H
}), require("./539854.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk194359 = require("./194359.js"),
  Chunk81825 = require("./81825.js"),
  Chunk353926 = require("./353926.js"),
  Chunk633289 = require("./633289.js"),
  Chunk5254 = require("./5254.js"),
  Chunk91896 = require("./91896.js"),
  Chunk441623 = require("./441623.js"),
  Chunk199902 = require("./199902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let t = O.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function N(e) {
  return {
    status: b.Z.getStatus(e),
    isMobile: b.Z.isMobileOnline(e),
    activities: b.Z.getActivities(e),
    applicationStream: g.Z.getAnyStreamForUser(e)
  }
}

function j(e) {
  let t = [];
  return l()(m.ZP.memberOf(e)).map(_.Z.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class P extends Chunk81825.Z {
  get comparator() {
    var e, t, n, r, i;
    return [this.type, +(this.giftIntentType !== Chunk474936.hX.FRIEND_ANNIVERSARY), null != (i = null != (r = null == (e = this.nickname) ? true : module.toLowerCase()) ? r : null == (n = this.user) || null == (t = require.globalName) ? true : exports.toLowerCase()) ? Chunk392711 : this.usernameLower]
  }
  constructor(e) {
    var t;
    super(), I(this, "key", true), I(this, "userId", true), I(this, "type", true), I(this, "status", true), I(this, "isMobile", true), I(this, "activities", true), I(this, "applicationStream", true), I(this, "user", true), I(this, "usernameLower", true), I(this, "mutualGuildsLength", true), I(this, "mutualGuilds", true), I(this, "nickname", true), I(this, "spam", true), I(this, "giftIntentType", true), I(this, "ignoredUser", true), I(this, "applicationId", true), I(this, "isGameRelationship", true), this.key = e.key, this.userId = e.userId, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.spam = e.spam, this.giftIntentType = e.giftIntentType, this.ignoredUser = e.ignoredUser, this.applicationId = e.applicationId, this.isGameRelationship = null != (t = e.isGameRelationship) && t
  }
}
class x {
  reset() {
    let e = new Set,
      t = Array.from(Chunk699516.Z.getMutableRelationships().entries()).map(t => {
        let [n, r] = t;
        return r === y.OGo.FRIEND && e.add(n), new P(S(C({
          key: n,
          type: r,
          userId: n,
          nickname: E.Z.getNickname(n)
        }, T(n), N(n), j(n)), {
          spam: E.Z.isSpam(n),
          ignoredUser: E.Z.isIgnored(n),
          giftIntentType: r === y.OGo.FRIEND && h.ZP.getFriendAnniversaries().includes(n) ? v.hX.FRIEND_ANNIVERSARY : true,
          applicationId: E.Z.getOriginApplicationId(n)
        }))
      }),
      n = [],
      r = Chunk91896.Z.getGameRelationships().values(),
      i = new Set;
    r.forEach(t => {
      let {
        id: r,
        applicationId: l,
        type: a
      } = t;
      !(a === y.OGo.FRIEND && e.has(r)) && (a === y.OGo.FRIEND && i.has(r) || (a === y.OGo.FRIEND && i.add(r), n.push(new P(S(C({
        key: "".concat(r, "-").concat(l),
        type: a,
        userId: r,
        applicationId: l,
        nickname: E.Z.getNickname(r)
      }, T(r), N(r), j(r)), {
        spam: E.Z.isSpam(r),
        ignoredUser: E.Z.isIgnored(r),
        isGameRelationship: true
      })))))
    });
    let a = l().map(Chunk5254.Z.getSuggestions(), e => new P(C({
      key: e.key,
      userId: e.key,
      type: 99,
      nickname: e.name
    }, T(e.key), N(e.key), j(e.key))));
    return new x(l().concat(exports, require, Chunk442837))
  }
  clone() {
    return new x(this._rows)
  }
  update(e) {
    let t = false;
    for (let n = 0; n < this._rows.length; n++) {
      let r = this._rows[n],
        i = r.merge(e(r.userId));
      t = t || i !== r, this._rows[n] = i
    }
    return t
  }
  filter(e, t) {
    return l()(this._rows).filter(e => {
      if (null == e.user) returnfalse;
      if (null != t && "" !== t) {
        let n = t.toLowerCase();
        return [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? true : e.toLowerCase()).some(e => null == e ? true : e.includes(n))
      }
      returntrue
    }).filter(t => {
      switch (e) {
        case y.pJs.ONLINE:
          return t.type === y.OGo.FRIEND && t.status !== y.Skl.OFFLINE;
        case y.pJs.PENDING:
          return t.type === y.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser || t.type === y.OGo.PENDING_OUTGOING;
        case y.pJs.SPAM:
          return t.type === y.OGo.PENDING_INCOMING && t.spam;
        case y.pJs.PENDING_IGNORED:
          return t.type === y.OGo.PENDING_INCOMING && t.ignoredUser;
        case y.pJs.SUGGESTIONS:
          return 99 === t.type;
        case y.pJs.ALL:
        default:
          return t.type === y.OGo.FRIEND
      }
    }).sortBy(e => e.comparator).value()
  }
  getRelationshipCounts() {
    let e = {
      [Chunk981631.OGo.FRIEND]: 0,
      [Chunk981631.OGo.PENDING_INCOMING]: 0,
      [Chunk981631.OGo.PENDING_OUTGOING]: 0,
      99: 0,
      [Chunk981631.OGo.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), module
  }
  constructor(e = []) {
    I(this, "_rows", true), this._rows = e
  }
}
let A = true,
  Z = false,
  w = Chunk981631.pJs.ONLINE,
  L = new x,
  R = true,
  D = false;

function M() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  A && (module || w !== Chunk981631.pJs.ONLINE && w !== Chunk981631.pJs.ADD_FRIEND) && !Z && (A = false, Z = true, Chunk194359.Z.fetchRelationships())
}

function k() {
  if (A = true, R ? Z = false : M(), L = L.reset(), D) return;
  let e = L.getRelationshipCounts();
  w = 0 === module[Chunk981631.OGo.FRIEND] ? 0 !== module[Chunk981631.OGo.PENDING_INCOMING] ? Chunk981631.pJs.PENDING : Chunk981631.pJs.ADD_FRIEND : Chunk981631.pJs.ONLINE
}

function U() {
  L = R ? new x : L.reset()
}

function G(e) {
  return function() {
    return !R && !!L.update(e) && (L = L.clone(), true)
  }
}
class B extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk633289.Z, Chunk199902.Z, Chunk353926.Z, Chunk5254.Z, Chunk91896.Z, Chunk271383.ZP, Chunk430824.Z, Chunk441623.ZP, Chunk158776.Z, Chunk699516.Z, Chunk594174.default), this.syncWith([Chunk699516.Z], U), this.syncWith([Chunk91896.Z], U), this.syncWith([Chunk5254.Z], U), this.syncWith([Chunk441623.ZP], U), this.syncWith([Chunk594174.default], G(T)), this.syncWith([Chunk158776.Z, Chunk199902.Z], G(N)), k()
  }
  getState() {
    return {
      fetching: Z,
      section: w,
      rows: L
    }
  }
}
I(B, "displayName", "FriendsStore");
let H = new B(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    k()
  },
  FRIENDS_SET_SECTION: function(e) {
    w = e.section, M()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return R = null != t, U(), !R
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    Z = false
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    A = true, Z = true
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    w = e.section, D = true
  }
})