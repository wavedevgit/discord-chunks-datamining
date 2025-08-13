/** Chunk was on 1272 **/
/** chunk id: 974042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => B
}), require("./539854.js"), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk194359 = require("./194359.js"),
  Chunk81825 = require("./81825.js"),
  Chunk353926 = require("./353926.js"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
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

function S(e) {
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
    applicationStream: h.Z.getAnyStreamForUser(e)
  }
}

function T(e) {
  let t = [];
  return l()(g.ZP.memberOf(e)).map(m.Z.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class P extends Chunk81825.Z {
  get comparator() {
    var e, t, n, r, i;
    return [this.type, +(null == this.giftIntentType), null != (i = null != (r = null == (e = this.nickname) ? true : module.toLowerCase()) ? r : null == (n = this.user) || null == (t = require.globalName) ? true : exports.toLowerCase()) ? Chunk392711 : this.usernameLower]
  }
  constructor(e) {
    var t;
    super(), v(this, "key", true), v(this, "userId", true), v(this, "type", true), v(this, "status", true), v(this, "isMobile", true), v(this, "activities", true), v(this, "applicationStream", true), v(this, "user", true), v(this, "usernameLower", true), v(this, "mutualGuildsLength", true), v(this, "mutualGuilds", true), v(this, "nickname", true), v(this, "spam", true), v(this, "giftIntentType", true), v(this, "ignoredUser", true), v(this, "applicationId", true), v(this, "isGameRelationship", true), this.key = e.key, this.userId = e.userId, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.spam = e.spam, this.giftIntentType = e.giftIntentType, this.ignoredUser = e.ignoredUser, this.applicationId = e.applicationId, this.isGameRelationship = null != (t = e.isGameRelationship) && t
  }
}
class j {
  reset() {
    let e = new Set,
      t = Array.from(Chunk699516.Z.getMutableRelationships().entries()).map(t => {
        let [n, r] = t;
        return r === E.OGo.FRIEND && e.add(n), new P(C(I({
          key: n,
          type: r,
          userId: n,
          nickname: _.Z.getNickname(n)
        }, S(n), N(n), T(n)), {
          spam: _.Z.isSpam(n),
          ignoredUser: _.Z.isIgnored(n),
          giftIntentType: r === E.OGo.FRIEND && f.Z.isTopAffinityFriendAnniversary({
            userId: n
          }) ? y.hX.FRIEND_ANNIVERSARY : true,
          applicationId: _.Z.getOriginApplicationId(n)
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
      !(a === E.OGo.FRIEND && e.has(r)) && (a === E.OGo.FRIEND && i.has(r) || (a === E.OGo.FRIEND && i.add(r), n.push(new P(C(I({
        key: "".concat(r, "-").concat(l),
        type: a,
        userId: r,
        applicationId: l,
        nickname: _.Z.getNickname(r)
      }, S(r), N(r), T(r)), {
        spam: _.Z.isSpam(r),
        ignoredUser: _.Z.isIgnored(r),
        isGameRelationship: true
      })))))
    });
    let a = l().map(Chunk5254.Z.getSuggestions(), e => new P(I({
      key: e.key,
      userId: e.key,
      type: 99,
      nickname: e.name
    }, S(e.key), N(e.key), T(e.key))));
    return new j(l().concat(exports, require, Chunk442837))
  }
  clone() {
    return new j(this._rows)
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
        case E.pJs.ONLINE:
          return t.type === E.OGo.FRIEND && t.status !== E.Skl.OFFLINE;
        case E.pJs.PENDING:
          return t.type === E.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser || t.type === E.OGo.PENDING_OUTGOING;
        case E.pJs.SPAM:
          return t.type === E.OGo.PENDING_INCOMING && t.spam;
        case E.pJs.PENDING_IGNORED:
          return t.type === E.OGo.PENDING_INCOMING && t.ignoredUser;
        case E.pJs.SUGGESTIONS:
          return 99 === t.type;
        case E.pJs.ALL:
        default:
          return t.type === E.OGo.FRIEND
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
    v(this, "_rows", true), this._rows = e
  }
}
let x = true,
  A = false,
  Z = Chunk981631.pJs.ONLINE,
  w = new j,
  L = true,
  R = false;

function D() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  x && (module || Z !== Chunk981631.pJs.ONLINE && Z !== Chunk981631.pJs.ADD_FRIEND) && !A && (x = false, A = true, Chunk194359.Z.fetchRelationships())
}

function k() {
  if (x = true, L ? A = false : D(), w = w.reset(), R) return;
  let e = w.getRelationshipCounts();
  Z = 0 === module[Chunk981631.OGo.FRIEND] ? 0 !== module[Chunk981631.OGo.PENDING_INCOMING] ? Chunk981631.pJs.PENDING : Chunk981631.pJs.ADD_FRIEND : Chunk981631.pJs.ONLINE
}

function M() {
  w = L ? new j : w.reset()
}

function U(e) {
  return function() {
    return !L && !!w.update(e) && (w = w.clone(), true)
  }
}
class G extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z, Chunk158776.Z, Chunk594174.default, Chunk430824.Z, Chunk271383.ZP, Chunk199902.Z, Chunk5254.Z, Chunk353926.Z), this.syncWith([Chunk699516.Z], M), this.syncWith([Chunk91896.Z], M), this.syncWith([Chunk5254.Z], M), this.syncWith([Chunk441623.Z], M), this.syncWith([Chunk594174.default], U(S)), this.syncWith([Chunk158776.Z, Chunk199902.Z], U(N)), k()
  }
  getState() {
    return {
      fetching: A,
      section: Z,
      rows: w
    }
  }
}
v(G, "displayName", "FriendsStore");
let B = new G(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    k()
  },
  FRIENDS_SET_SECTION: function(e) {
    Z = e.section, D()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return L = null != t, M(), !L
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    A = false
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    x = true, A = true
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    Z = e.section, R = true
  }
})