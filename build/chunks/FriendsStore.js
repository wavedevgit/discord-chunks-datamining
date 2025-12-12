/** Chunk was on 74969 **/
/** chunk id: 974042, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  ZP: () => J
}), require("./539854.js"), require("./388685.js");
var n, Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
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

function b(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      b(e, t, i[t])
    })
  }
  return e
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}

function G(e) {
  let t = I.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function P(e) {
  return {
    status: f.Z.getStatus(e),
    isMobile: f.Z.isMobileOnline(e),
    activities: f.Z.getActivities(e),
    applicationStream: O.Z.getAnyStreamForUser(e)
  }
}

function S(e) {
  let t = [];
  return r()(N.ZP.memberOf(e)).map(y.Z.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class D extends Chunk81825.Z {
  get comparator() {
    var e, t, i, n, s;
    return [this.type, null != (s = null != (n = null == (e = this.nickname) ? true : module.toLowerCase()) ? n : null == (i = this.user) || null == (t = require.globalName) ? true : exports.toLowerCase()) ? Chunk392711 : this.usernameLower]
  }
  constructor(e) {
    var t;
    super(), b(this, "key", true), b(this, "userId", true), b(this, "type", true), b(this, "status", true), b(this, "isMobile", true), b(this, "activities", true), b(this, "applicationStream", true), b(this, "user", true), b(this, "usernameLower", true), b(this, "mutualGuildsLength", true), b(this, "mutualGuilds", true), b(this, "nickname", true), b(this, "spam", true), b(this, "giftIntentType", true), b(this, "ignoredUser", true), b(this, "applicationId", true), b(this, "isGameRelationship", true), this.key = e.key, this.userId = e.userId, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.spam = e.spam, this.giftIntentType = e.giftIntentType, this.ignoredUser = e.ignoredUser, this.applicationId = e.applicationId, this.isGameRelationship = null != (t = e.isGameRelationship) && t
  }
}
class C {
  reset() {
    let e = new Set,
      t = Array.from(Chunk699516.Z.getMutableRelationships().entries()).map(t => {
        let [i, n] = t;
        return n === v.OGo.FRIEND && e.add(i), new D(Z(w({
          key: i,
          type: n,
          userId: i,
          nickname: g.Z.getNickname(i)
        }, G(i), P(i), S(i)), {
          spam: g.Z.isSpam(i),
          ignoredUser: g.Z.isIgnored(i),
          giftIntentType: n === v.OGo.FRIEND && m.ZP.getFriendAnniversaries().includes(i) ? E.hX.FRIEND_ANNIVERSARY : true,
          applicationId: g.Z.getOriginApplicationId(i)
        }))
      }),
      i = [],
      n = Chunk91896.Z.getGameRelationships().values(),
      s = new Set;
    n.forEach(t => {
      let {
        id: n,
        applicationId: r,
        type: o
      } = t;
      !(o === v.OGo.FRIEND && e.has(n)) && (o === v.OGo.FRIEND && s.has(n) || (o === v.OGo.FRIEND && s.add(n), i.push(new D(Z(w({
        key: "".concat(n, "-").concat(r),
        type: o,
        userId: n,
        applicationId: r,
        nickname: g.Z.getNickname(n)
      }, G(n), P(n), S(n)), {
        spam: g.Z.isSpam(n),
        ignoredUser: g.Z.isIgnored(n),
        isGameRelationship: true
      })))))
    });
    let o = r().map(Chunk5254.Z.getSuggestions(), e => new D(w({
      key: e.key,
      userId: e.key,
      type: 99,
      nickname: e.name
    }, G(e.key), P(e.key), S(e.key))));
    return new C(r().concat(exports, require, Chunk442837))
  }
  clone() {
    return new C(this._rows)
  }
  update(e) {
    let t = false;
    for (let i = 0; i < this._rows.length; i++) {
      let n = this._rows[i],
        s = n.merge(e(n.userId));
      t = t || s !== n, this._rows[i] = s
    }
    return t
  }
  filter(e, t) {
    return r()(this._rows).filter(e => {
      if (null == e.user) returnfalse;
      if (null != t && "" !== t) {
        let i = t.toLowerCase();
        return [e.usernameLower, e.nickname, e.user.globalName].map(e => null == e ? true : e.toLowerCase()).some(e => null == e ? true : e.includes(i))
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
    b(this, "_rows", true), this._rows = e
  }
}
let j = true,
  L = false,
  k = Chunk981631.pJs.ONLINE,
  _ = new C,
  R = true,
  A = false;

function M() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  j && (module || k !== Chunk981631.pJs.ONLINE && k !== Chunk981631.pJs.ADD_FRIEND) && !L && (j = false, L = true, Chunk194359.Z.fetchRelationships())
}

function x() {
  if (j = true, R ? L = false : M(), _ = _.reset(), A) return;
  let e = _.getRelationshipCounts();
  k = 0 === module[Chunk981631.OGo.FRIEND] ? 0 !== module[Chunk981631.OGo.PENDING_INCOMING] ? Chunk981631.pJs.PENDING : Chunk981631.pJs.ADD_FRIEND : Chunk981631.pJs.ONLINE
}

function F() {
  _ = R ? new C : _.reset()
}

function T(e) {
  return function() {
    return !R && !!_.update(e) && (_ = _.clone(), true)
  }
}
class U extends(n = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk633289.Z, Chunk199902.Z, Chunk353926.Z, Chunk5254.Z, Chunk91896.Z, Chunk271383.ZP, Chunk430824.Z, Chunk441623.ZP, Chunk158776.Z, Chunk699516.Z, Chunk594174.default), this.syncWith([Chunk699516.Z], F), this.syncWith([Chunk91896.Z], F), this.syncWith([Chunk5254.Z], F), this.syncWith([Chunk441623.ZP], F), this.syncWith([Chunk594174.default], T(G)), this.syncWith([Chunk158776.Z, Chunk199902.Z], T(P)), x()
  }
  getState() {
    return {
      fetching: L,
      section: k,
      rows: _
    }
  }
}
b(U, "displayName", "FriendsStore");
let J = new U(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    x()
  },
  FRIENDS_SET_SECTION: function(e) {
    k = e.section, M()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return R = null != t, F(), !R
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    L = false
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    j = true, L = true
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    k = e.section, A = true
  }
})