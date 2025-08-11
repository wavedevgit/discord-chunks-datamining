/** Chunk was on web.js **/
/** chunk id: 279779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./997841.js"), require("./539854.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js"), require("./361932.js"), require("./187205.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk147913 = require("./147913.js"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk960048 = require("./960048.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 10;

function O(e) {
  var t, n;
  if (null == e || d.Z.isBlockedOrIgnored(e.id)) return null;
  let r = {
    id: e.id,
    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username,
    nicknames: {}
  };
  return null != g.ZP.getGlobalName(e) && (r.globalName = e.globalName), e.bot && (r.isBot = true), e instanceof l.Z ? r.isProvisional = e.isProvisional : "flags" in e ? r.isProvisional = _.yE(null != (t = e.flags) ? t : 0, E.xW$.PROVISIONAL_ACCOUNT) : r.isProvisional = false, d.Z.isFriend(e.id) && (r.isFriend = true, r.friendNickname = d.Z.getNickname(e.id)), e instanceof l.Z ? r.isStaff = e.isStaff() : "flags" in e ? r.isStaff = _.yE(null != (n = e.flags) ? n : 0, E.xW$.STAFF) : r.isStaff = false, r
}

function v(e, t, n) {
  null != e && (e.nicknames[t] = null != n && "" !== n ? n : null)
}

function I(e) {
  let t = [];
  if (null == e || !(0, s.hv)(e.type)) return t;
  let {
    recipients: n = []
  } = e;
  return n.forEach(n => {
    let r = O(f.default.getUser(n));
    null != e && v(r, e.id), t.push(r)
  }), t
}

function T(e, t) {
  let n = [];
  return e.forEach(e => {
    let r = O(e.user);
    null != r && (v(r, t, e.nick), n.push(r))
  }), n
}
class S {
  setLimit(e) {
    this._limit = e, null != this._nextQuery && (this._nextQuery.limit = e)
  }
  subscribe() {
    null == this._worker || this._subscribed || (this._worker.addEventListener("message", this.handleMessages, false), this._subscribed = true, this._setNextQuery())
  }
  unsubscribe() {
    null != this._worker && this._subscribed && (this._worker.removeEventListener("message", this.handleMessages, false), this._subscribed = false)
  }
  destroy() {
    this.clearQuery(), this.unsubscribe()
  }
  clearQuery() {
    this._currentQuery = false, this._nextQuery = null, null != this._worker && this._subscribed && this._worker.postMessage({
      uuid: this._uuid,
      type: "QUERY_CLEAR"
    })
  }
  setQuery(e) {
    let {
      query: t,
      filters: n,
      blacklist: r,
      boosters: i,
      boosterFallback: o
    } = e;
    this._nextQuery = {
      query: t,
      filters: n,
      blacklist: r,
      boosters: null != i ? i : {},
      boosterFallback: null != o ? o : 1,
      limit: this._limit
    }, this._setNextQuery()
  }
  _setNextQuery() {
    (null == this._currentQuery || false === this._currentQuery) && null != this._nextQuery && (null != this._worker && this._subscribed ? (this._currentQuery = this._nextQuery, this._nextQuery = null, this._worker.postMessage({
      uuid: this._uuid,
      type: "QUERY_SET",
      payload: this._currentQuery
    })) : this._subscribed || this.subscribe())
  }
  constructor(e, t, n = y) {
    b(this, "_worker", true), b(this, "_uuid", true), b(this, "_callback", true), b(this, "_limit", true), b(this, "_currentQuery", true), b(this, "_nextQuery", true), b(this, "_subscribed", true), b(this, "handleMessages", e => {
      let t = e.data;
      null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (false !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
    }), this._worker = e, this._uuid = (0, o.Z)(), this._callback = t, this._limit = n, this._currentQuery = null, this._nextQuery = null, this._subscribed = false, this.subscribe()
  }
}
class A extends Chunk147913.Z {
  _initialize() {
    this.rebootWebworker()
  }
  _terminate() {
    null != this._worker && (this._worker.terminate(), this._worker = null)
  }
  rebootWebworker() {
    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL("/assets/" + require.u("69731"), require.b))
  }
  updateUsers(e, t) {
    let {
      _worker: n
    } = this;
    if (null != n) {
      for (let n of e = e.filter(p.lm))(null == n ? true : n.id) == null && h.Z.addBreadcrumb({
        category: "debug",
        message: "User missing id",
        data: {
          action: t,
          userFields: {
            userIsNull: null == n,
            idIsNull: (null == n ? true : n.id) == null,
            usernameIsNull: (null == n ? true : n.username) == null,
            isBot: null == n ? true : n.isBot,
            isFriend: null == n ? true : n.isFriend,
            isProvisional: null == n ? true : n.isProvisional,
            globalNameIsNull: (null == n ? true : n.globalName) == null,
            usersArrayLength: e.length
          }
        }
      });
      n.postMessage({
        type: "UPDATE_USERS",
        payload: e
      })
    }
  }
  getUserSearchContext(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : y;
    this.initialize();
    let {
      _worker: n
    } = this;
    if (null == n) throw Error("SearchContextManager: No webworker initialized");
    return new S(n, e, t)
  }
  constructor(...e) {
    super(...e), b(this, "_worker", true), b(this, "actions", {
      LOGOUT: () => this._handleLogout(),
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen(),
      CONNECTION_OPEN_SUPPLEMENTAL: e => this._handleConnectionOpenSupplemental(e),
      OVERLAY_INITIALIZE: e => this._handleOverlayInitialize(e),
      CURRENT_USER_UPDATE: e => this._handleCurrentUserUpdate(e),
      GUILD_CREATE: e => this._handleGuildCreate(e),
      GUILD_MEMBERS_CHUNK_BATCH: e => this._handleGuildMembersChunkBatch(e),
      GUILD_MEMBER_ADD: e => this._handleGuildMemberUpdate(e),
      GUILD_MEMBER_UPDATE: e => this._handleGuildMemberUpdate(e),
      RELATIONSHIP_ADD: e => this._handleRelationshipAdd(e),
      RELATIONSHIP_UPDATE: e => this._handleRelationshipUpdate(e),
      RELATIONSHIP_REMOVE: e => this._handleRelationshipRemove(e),
      CHANNEL_CREATE: e => this._handleDMCreate(e),
      CHANNEL_UPDATES: e => this._handleDMUpdates(e),
      CHANNEL_RECIPIENT_ADD: e => this._handleRecipientChanges(e),
      PASSIVE_UPDATE_V2: e => this._handlePassiveUpdateV2(e)
    }), b(this, "_handleLogout", () => {
      this.rebootWebworker()
    }), b(this, "_handleConnectionOpen", () => {
      setTimeout(() => {
        let e = f.default.getCurrentUser();
        if (null == e) return;
        let t = O(e),
          n = {
            [t.id]: t
          };
        Object.values(f.default.getUsers()).forEach(e => {
          n[e.id] = O(e)
        });
        let r = u.ZP.getMutableAllGuildsAndMembers();
        for (let e in r)
          for (let t in r[e]) {
            var i, o;
            let a = n[t],
              s = null != (o = null == (i = r[e][t]) ? true : i.nick) ? o : g.ZP.getGlobalName(a);
            null != a && v(a, e, s)
          }
        this.updateUsers(Object.values(n), "connection_open")
      }, 3e3)
    }), b(this, "_handleConnectionOpenSupplemental", e => {
      let {
        guilds: t
      } = e;
      setTimeout(() => {
        let e = i().flatMap(t, e => T(e.members, e.id)),
          n = i().flatMap(t, e => {
            var t;
            let n = [];
            return null == (t = e.activity_instances) || t.forEach(t => {
              t.participants.forEach(t => {
                let r = t.member;
                if (null != r) {
                  let t = O(r.user);
                  null != t && (v(t, e.id, r.nick), n.push(t))
                }
              })
            }), n
          });
        this.updateUsers([...e, ...n], "connection_open_supplemental")
      }, 3e3)
    }), b(this, "_handleOverlayInitialize", e => {
      let {
        users: t,
        guildMembers: n
      } = e, r = new Map;
      for (let e of t) r.set(e.id, O(e));
      for (let e of m.default.keys(n)) {
        let t = n[e];
        if (null != t)
          for (let n of m.default.keys(t)) {
            let i = r.get(n),
              o = t[n];
            null != i && null != o && null != o.nick && (v(i, e, o.nick), r.set(n, i))
          }
      }
      this.updateUsers(Array.from(r.values()), "overlay_initialize"), r.clear()
    }), b(this, "_handleCurrentUserUpdate", e => {
      let {
        user: t
      } = e, n = O(t);
      null != n && this.updateUsers([n], "current_user_update")
    }), b(this, "_handleGuildCreate", e => {
      let {
        guild: t
      } = e, {
        members: n
      } = t;
      this.updateUsers(T(n, t.id), "guild_create")
    }), b(this, "_handleGuildMembersChunkBatch", e => {
      let {
        chunks: t
      } = e, n = [];
      for (let e of t) n.push(...T(e.members, e.guildId));
      this.updateUsers(n, "guild_members_chunk_batch")
    }), b(this, "_handleGuildMemberUpdate", e => {
      let {
        guildId: t,
        user: n,
        nick: r
      } = e, i = O(n);
      null != i && (v(i, t, r), this.updateUsers([i], "guild_member_update"))
    }), b(this, "_handlePassiveUpdateV2", e => {
      this.updateUsers(T(e.members, e.guildId), "passive_update_v2")
    }), b(this, "_handleRelationshipAdd", e => {
      let t = O(e.relationship.user);
      this.updateUsers([t], "relationship_add")
    }), b(this, "_handleRelationshipUpdate", e => {
      let t = O(f.default.getUser(e.relationship.id));
      this.updateUsers([t], "relationship_update")
    }), b(this, "_handleRelationshipRemove", e => {
      let t = O(f.default.getUser(e.relationship.id));
      this.updateUsers([t], "relationship_remove")
    }), b(this, "_handleDMCreate", e => {
      let {
        channel: {
          id: t
        }
      } = e, n = I(c.Z.getChannel(t));
      if (0 === n.length) return;
      let r = O(f.default.getCurrentUser());
      v(r, t), n.push(r), this.updateUsers(n, "dm_create")
    }), b(this, "_handleDMUpdates", e => {
      let {
        channels: t
      } = e;
      for (let e of t) {
        let t = I(c.Z.getChannel(e.id));
        if (0 === t.length) continue;
        let n = O(f.default.getCurrentUser());
        v(n, e.id), t.push(n), this.updateUsers(t, "dm_updates")
      }
    }), b(this, "_handleRecipientChanges", e => {
      let {
        channelId: t,
        user: n,
        isMember: r
      } = e;
      if (!r) return;
      let i = O(n);
      v(i, t), this.updateUsers([i], "recipient_changes")
    })
  }
}
let N = new A