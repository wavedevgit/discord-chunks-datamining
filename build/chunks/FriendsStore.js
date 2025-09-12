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
  Chunk365113 = require("./365113.js"),
  Chunk441623 = require("./441623.js"),
  Chunk199902 = require("./199902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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

function N(e) {
  let t = y.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function P(e) {
  return {
    status: O.Z.getStatus(e),
    isMobile: O.Z.isMobileOnline(e),
    activities: O.Z.getActivities(e),
    applicationStream: m.Z.getAnyStreamForUser(e)
  }
}

function j(e) {
  let t = [];
  return l()(b.ZP.memberOf(e)).map(_.Z.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class x extends Chunk81825.Z {
  get comparator() {
    var e, t, n, r, i;
    return [this.type, +(null == this.giftIntentType), null != (i = null != (r = null == (e = this.nickname) ? true : module.toLowerCase()) ? r : null == (n = this.user) || null == (t = require.globalName) ? true : exports.toLowerCase()) ? Chunk392711 : this.usernameLower]
  }
  constructor(e) {
    var t;
    super(), C(this, "key", true), C(this, "userId", true), C(this, "type", true), C(this, "status", true), C(this, "isMobile", true), C(this, "activities", true), C(this, "applicationStream", true), C(this, "user", true), C(this, "usernameLower", true), C(this, "mutualGuildsLength", true), C(this, "mutualGuilds", true), C(this, "nickname", true), C(this, "spam", true), C(this, "giftIntentType", true), C(this, "ignoredUser", true), C(this, "applicationId", true), C(this, "isGameRelationship", true), this.key = e.key, this.userId = e.userId, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.spam = e.spam, this.giftIntentType = e.giftIntentType, this.ignoredUser = e.ignoredUser, this.applicationId = e.applicationId, this.isGameRelationship = null != (t = e.isGameRelationship) && t
  }
}
class A {
  reset() {
    let e = new Set,
      t = Array.from(Chunk699516.Z.getMutableRelationships().entries()).map(t => {
        let [n, r] = t;
        return r === v.OGo.FRIEND && e.add(n), new x(T(S({
          key: n,
          type: r,
          userId: n,
          nickname: E.Z.getNickname(n)
        }, N(n), P(n), j(n)), {
          spam: E.Z.isSpam(n),
          ignoredUser: E.Z.isIgnored(n),
          giftIntentType: r === v.OGo.FRIEND && g.Z.isTopAffinityFriendAnniversary({
            userId: n
          }) ? I.hX.FRIEND_ANNIVERSARY : true,
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
      !(a === v.OGo.FRIEND && e.has(r)) && (a === v.OGo.FRIEND && i.has(r) || (a === v.OGo.FRIEND && i.add(r), n.push(new x(T(S({
        key: "".concat(r, "-").concat(l),
        type: a,
        userId: r,
        applicationId: l,
        nickname: E.Z.getNickname(r)
      }, N(r), P(r), j(r)), {
        spam: E.Z.isSpam(r),
        ignoredUser: E.Z.isIgnored(r),
        isGameRelationship: true
      })))))
    });
    let a = l().map(Chunk5254.Z.getSuggestions(), e => new x(S({
      key: e.key,
      userId: e.key,
      type: 99,
      nickname: e.name
    }, N(e.key), P(e.key), j(e.key))));
    return new A(l().concat(exports, require, Chunk442837))
  }
  clone() {
    return new A(this._rows)
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
        case v.pJs.ONLINE:
          return t.type === v.OGo.FRIEND && t.status !== v.Skl.OFFLINE;
        case v.pJs.PENDING:
          return t.type === v.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser || t.type === v.OGo.PENDING_OUTGOING;
        case v.pJs.SPAM:
          return t.type === v.OGo.PENDING_INCOMING && t.spam;
        case v.pJs.PENDING_IGNORED:
          return t.type === v.OGo.PENDING_INCOMING && t.ignoredUser;
        case v.pJs.SUGGESTIONS:
          return 99 === t.type;
        case v.pJs.ALL:
        default:
          return t.type === v.OGo.FRIEND
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
    C(this, "_rows", true), this._rows = e
  }
}
let Z = true,
  w = false,
  L = Chunk981631.pJs.ONLINE,
  R = new A,
  D = true,
  k = false;

function M() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  Z && (module || L !== Chunk981631.pJs.ONLINE && L !== Chunk981631.pJs.ADD_FRIEND) && !w && (Z = false, w = true, Chunk194359.Z.fetchRelationships())
}

function U() {
  if (Z = true, D ? w = false : M(), R = R.reset(), k) return;
  let e = R.getRelationshipCounts();
  0 === module[Chunk981631.OGo.FRIEND] ? L = 0 !== module[Chunk981631.OGo.PENDING_INCOMING] ? Chunk981631.pJs.PENDING : Chunk981631.pJs.ADD_FRIEND : (L = Chunk981631.pJs.ONLINE, Chunk365113.o.getConfig({
    location: "friendstore"
  }).removeFriends && (L = Chunk981631.pJs.YOU))
}

function G() {
  R = D ? new A : R.reset()
}

function B(e) {
  return function() {
    return !D && !!R.update(e) && (R = R.clone(), true)
  }
}
class V extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk158776.Z, Chunk594174.default, Chunk430824.Z, Chunk271383.ZP, Chunk199902.Z, Chunk5254.Z, Chunk353926.Z, Chunk633289.Z), this.syncWith([Chunk699516.Z], G), this.syncWith([Chunk91896.Z], G), this.syncWith([Chunk5254.Z], G), this.syncWith([Chunk441623.Z], G), this.syncWith([Chunk594174.default], B(N)), this.syncWith([Chunk158776.Z, Chunk199902.Z], B(P)), U()
  }
  getState() {
    return {
      fetching: w,
      section: L,
      rows: R
    }
  }
}
C(V, "displayName", "FriendsStore");
let H = new V(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    U()
  },
  FRIENDS_SET_SECTION: function(e) {
    L = e.section, M()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return D = null != t, G(), !D
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    w = false
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    Z = true, w = true
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    L = e.section, k = true
  }
})