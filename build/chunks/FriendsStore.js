/** Chunk was on 71853 **/
/** chunk id: 595623, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Ay: () => V
}), require("./321073.js"), require("./896048.js");
var n, Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49229 = require("./49229.js"),
  Chunk315069 = require("./315069.js"),
  Chunk49463 = require("./49463.js"),
  Chunk217222 = require("./217222.js"),
  Chunk346084 = require("./346084.js"),
  Chunk800828 = require("./800828.js"),
  Chunk275759 = require("./275759.js"),
  Chunk616356 = require("./616356.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function E(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      E(e, t, i[t])
    })
  }
  return e
}

function w(e, t) {
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

function P(e) {
  let t = O.default.getUser(e);
  return {
    user: t,
    usernameLower: null != t ? t.username.toLowerCase() : null
  }
}

function D(e) {
  return {
    status: f.A.getStatus(e),
    isMobile: f.A.isMobileOnline(e),
    activities: f.A.getActivities(e),
    applicationStream: A.A.getAnyStreamForUser(e)
  }
}

function S(e) {
  let t = [];
  return r()(y.Ay.memberOf(e)).map(N.A.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
    null != e && t.push(e)
  }), {
    mutualGuildsLength: t.length,
    mutualGuilds: t.slice(0, 5)
  }
}
class C extends Chunk315069.A {
  get comparator() {
    var e, t, i, n, s;
    return [this.type, null != (e = null != (t = null == (i = this.nickname) ? true : i.toLowerCase()) ? t : null == (s = this.user) || null == (n = s.globalName) ? true : n.toLowerCase()) ? e : this.usernameLower]
  }
  constructor(e) {
    var t;
    super(), E(this, "key", true), E(this, "userId", true), E(this, "type", true), E(this, "status", true), E(this, "isMobile", true), E(this, "activities", true), E(this, "applicationStream", true), E(this, "user", true), E(this, "usernameLower", true), E(this, "mutualGuildsLength", true), E(this, "mutualGuilds", true), E(this, "nickname", true), E(this, "spam", true), E(this, "giftIntentType", true), E(this, "ignoredUser", true), E(this, "applicationId", true), E(this, "isGameRelationship", true), this.key = e.key, this.userId = e.userId, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.spam = e.spam, this.giftIntentType = e.giftIntentType, this.ignoredUser = e.ignoredUser, this.applicationId = e.applicationId, this.isGameRelationship = null != (t = e.isGameRelationship) && t
  }
}
class j {
  reset() {
    let e = new Set,
      t = Array.from(g.A.getMutableRelationships().entries()).map(t => {
        let [i, n] = t;
        return n === I.eA$.FRIEND && e.add(i), new C(w(b({
          key: i,
          type: n,
          userId: i,
          nickname: g.A.getNickname(i)
        }, P(i), D(i), S(i)), {
          spam: g.A.isSpam(i),
          ignoredUser: g.A.isIgnored(i),
          giftIntentType: n === I.eA$.FRIEND && m.Ay.getFriendAnniversaries().includes(i) ? v.np.FRIEND_ANNIVERSARY : true,
          applicationId: g.A.getOriginApplicationId(i)
        }))
      }),
      i = [],
      n = d.A.getGameRelationships().values(),
      s = new Set;
    n.forEach(t => {
      let {
        id: n,
        applicationId: r,
        type: a
      } = t;
      a === I.eA$.FRIEND && e.has(n) || a === I.eA$.FRIEND && s.has(n) || (a === I.eA$.FRIEND && s.add(n), i.push(new C(w(b({
        key: "".concat(n, "-").concat(r),
        type: a,
        userId: n,
        applicationId: r,
        nickname: g.A.getNickname(n)
      }, P(n), D(n), S(n)), {
        spam: g.A.isSpam(n),
        ignoredUser: g.A.isIgnored(n),
        isGameRelationship: true
      }))))
    });
    let a = r().map(p.A.getSuggestions(), e => new C(b({
      key: e.key,
      userId: e.key,
      type: 99,
      nickname: e.name
    }, P(e.key), D(e.key), S(e.key))));
    return new j(r().concat(t, i, a))
  }
  clone() {
    return new j(this._rows)
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
        case I.m3P.ONLINE:
          return t.type === I.eA$.FRIEND && t.status !== I.clD.OFFLINE;
        case I.m3P.PENDING:
          return t.type === I.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser || t.type === I.eA$.PENDING_OUTGOING;
        case I.m3P.SPAM:
          return t.type === I.eA$.PENDING_INCOMING && t.spam;
        case I.m3P.PENDING_IGNORED:
          return t.type === I.eA$.PENDING_INCOMING && t.ignoredUser;
        case I.m3P.SUGGESTIONS:
          return 99 === t.type;
        case I.m3P.ALL:
        default:
          return t.type === I.eA$.FRIEND
      }
    }).sortBy(e => e.comparator).value()
  }
  getRelationshipCounts() {
    let e = {
      [I.eA$.FRIEND]: 0,
      [I.eA$.PENDING_INCOMING]: 0,
      [I.eA$.PENDING_OUTGOING]: 0,
      99: 0,
      [I.eA$.BLOCKED]: 0
    };
    return this._rows.forEach(t => {
      null != t.user && null != e[t.type] && e[t.type]++
    }), e
  }
  constructor(e = []) {
    E(this, "_rows", true), this._rows = e
  }
}
let L = true,
  G = false,
  k = Chunk652215.m3P.ONLINE,
  _ = new j,
  R = true,
  M = false;

function F() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  L && (e || k !== I.m3P.ONLINE && k !== I.m3P.ADD_FRIEND) && !G && (L = false, G = true, l.A.fetchRelationships())
}

function x() {
  if (L = true, R ? G = false : F(), _ = _.reset(), M) return;
  let e = _.getRelationshipCounts();
  k = 0 === e[I.eA$.FRIEND] ? 0 !== e[I.eA$.PENDING_INCOMING] ? I.m3P.PENDING : I.m3P.ADD_FRIEND : I.m3P.ONLINE
}

function T() {
  _ = R ? new j : _.reset()
}

function U(e) {
  return function() {
    return !R && !!_.update(e) && (_ = _.clone(), true)
  }
}
class $ extends(n = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.A, A.A, c.A, p.A, d.A, y.Ay, N.A, m.Ay, f.A, g.A, O.default), this.syncWith([g.A], T), this.syncWith([d.A], T), this.syncWith([p.A], T), this.syncWith([m.Ay], T), this.syncWith([O.default], U(P)), this.syncWith([f.A, A.A], U(D)), x()
  }
  getState() {
    return {
      fetching: G,
      section: k,
      rows: _
    }
  }
}
E($, "displayName", "FriendsStore");
let V = new $(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    x()
  },
  FRIENDS_SET_SECTION: function(e) {
    k = e.section, F()
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return R = null != t, T(), !R
  },
  LOAD_RELATIONSHIPS_SUCCESS: function() {
    G = false
  },
  LOAD_RELATIONSHIPS_FAILURE: function() {
    L = true, G = true
  },
  FRIENDS_SET_INITIAL_SECTION: function(e) {
    k = e.section, M = true
  }
})