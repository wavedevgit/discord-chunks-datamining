/** Chunk was on web.js **/
/** chunk id: 450827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./938796.js"), require("./321073.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js"), require("./114821.js"), require("./339614.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk665260 = require("./665260.js"),
  Chunk439372 = require("./439372.js"),
  Chunk95701 = require("./95701.js"),
  Chunk427157 = require("./427157.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk728458 = require("./728458.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = 10;

function O(e) {
  var t, n;
  if (null == e || f.A.isBlockedOrIgnored(e.id)) return null;
  let r = {
    id: e.id,
    username: "0" !== e.discriminator ? "".concat(e.username, "#").concat(e.discriminator) : e.username,
    nicknames: {}
  };
  return null != g.Ay.getGlobalName(e) && (r.globalName = e.globalName), e.bot && (r.isBot = true), e instanceof c.A ? r.isProvisional = e.isProvisional : "flags" in e ? r.isProvisional = o.Lt(null != (t = e.flags) ? t : 0, E.nhx.PROVISIONAL_ACCOUNT) : r.isProvisional = false, f.A.isFriend(e.id) && (r.isFriend = true, r.friendNickname = f.A.getNickname(e.id)), e instanceof c.A ? r.isStaff = e.isStaff() : "flags" in e ? r.isStaff = o.Lt(null != (n = e.flags) ? n : 0, E.nhx.STAFF) : r.isStaff = false, r
}

function v(e, t, n) {
  null != e && (e.nicknames[t] = null != n && "" !== n ? n : null)
}

function A(e) {
  let t = [];
  if (null == e || !(0, l.Gw)(e.type)) return t;
  let {
    recipients: n = []
  } = e;
  return n.forEach(n => {
    let r = O(p.default.getUser(n));
    null != e && v(r, e.id), t.push(r)
  }), t
}

function I(e, t) {
  let n = [];
  return e.forEach(e => {
    let r = O(e.user);
    null != r && (v(r, t, e.nick), n.push(r))
  }), n
}

function S(e) {
  var t;
  let {
    message: n,
    nicknameContextId: r
  } = e, i = u.A.getChannel(n.channel_id), a = null != r ? r : (null == i ? true : i.isPrivate()) === true ? null == i ? true : i.id : null == i ? true : i.getGuildId(), o = [];
  if (null != n.author) {
    let e = O(n.author);
    null != e && (o.push(e), null != a && v(e, a))
  }
  return null == (t = n.mentions) || t.forEach(e => {
    let t = O(e);
    null != t && (o.push(t), null != a && v(t, a))
  }), o
}
class T {
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
      boosterFallback: a
    } = e;
    this._nextQuery = {
      query: t,
      filters: n,
      blacklist: r,
      boosters: null != i ? i : {},
      boosterFallback: null != a ? a : 1,
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
  constructor(e, t, n = b) {
    y(this, "_worker", true), y(this, "_uuid", true), y(this, "_callback", true), y(this, "_limit", true), y(this, "_currentQuery", true), y(this, "_nextQuery", true), y(this, "_subscribed", true), y(this, "handleMessages", e => {
      let t = e.data;
      null != t && "USER_RESULTS" === t.type && t.uuid === this._uuid && (false !== this._currentQuery && this._callback(t.payload), null != this._currentQuery && (this._currentQuery = null), this._setNextQuery())
    }), this._worker = e, this._uuid = (0, a.A)(), this._callback = t, this._limit = n, this._currentQuery = null, this._nextQuery = null, this._subscribed = false, this.subscribe()
  }
}
class C extends Chunk439372.A {
  _initialize() {
    this.rebootWebworker()
  }
  _terminate() {
    null != this._worker && (this._worker.terminate(), this._worker = null)
  }
  rebootWebworker() {
    null != this._worker && (this._worker.terminate(), this._worker = null), this._worker = new Worker(new URL("/assets/" + n.u("79094"), n.b))
  }
  updateUsers(e, t) {
    let {
      _worker: n
    } = this;
    if (null != n) {
      for (let n of e = e.filter(_.Vq))(null == n ? true : n.id) == null && h.A.addBreadcrumb({
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
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : b;
    this.initialize();
    let {
      _worker: n
    } = this;
    if (null == n) throw Error("SearchContextManager: No webworker initialized");
    return new T(n, e, t)
  }
  requestDebugState() {
    this.initialize();
    let {
      _worker: e
    } = this;
    return null == e ? Promise.resolve(null) : new Promise(t => {
      let n = (0, a.A)(),
        r = i => {
          let a = i.data;
          if (null != a && "DEBUG_STATE" === a.type && a.uuid === n) try {
            t(a.payload)
          } finally {
            e.removeEventListener("message", r, false)
          }
        };
      e.addEventListener("message", r, false), e.postMessage({
        type: "REQUEST_DEBUG_STATE",
        uuid: n
      })
    })
  }
  constructor(...e) {
    super(...e), y(this, "_worker", true), y(this, "actions", {
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
      PASSIVE_UPDATE_V2: e => this._handlePassiveUpdateV2(e),
      THREAD_LIST_SYNC: e => this._handleThreadListSync(e),
      LOAD_FORUM_POSTS: e => this._handleLoadForumPosts(e),
      LOAD_MESSAGES_SUCCESS: e => this._handleLoadMessagesSuccess(e),
      SEARCH_MESSAGES_SUCCESS: e => this._handleSearchMessagesSuccess(e),
      LOAD_THREADS_SUCCESS: e => this._handleLoadThreadsSuccess(e),
      LOAD_ARCHIVED_THREADS_SUCCESS: e => this._handleLoadThreadsSuccess(e),
      LOAD_PINNED_MESSAGES_SUCCESS: e => this._handleLoadPinnedMessagesSuccess(e),
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: e => this._handleGuildScheduledEventUsersFetchSuccess(e),
      MESSAGE_CREATE: e => this._handleMessageCreateOrUpdate(e),
      MESSAGE_UPDATE: e => this._handleMessageCreateOrUpdate(e)
    }), y(this, "_handleLogout", () => {
      this.rebootWebworker()
    }), y(this, "_handleConnectionOpen", () => {
      setTimeout(() => {
        let e = p.default.getCurrentUser();
        if (null == e) return;
        let t = O(e),
          n = {
            [t.id]: t
          };
        Object.values(p.default.getUsers()).forEach(e => {
          n[e.id] = O(e)
        });
        let r = d.Ay.getMutableAllGuildsAndMembers();
        for (let e in r)
          for (let t in r[e]) {
            var i, a;
            let o = n[t],
              s = null != (i = null == (a = r[e][t]) ? true : a.nick) ? i : g.Ay.getGlobalName(o);
            null != o && v(o, e, s)
          }
        this.updateUsers(Object.values(n), "connection_open")
      }, 3e3)
    }), y(this, "_handleConnectionOpenSupplemental", e => {
      let {
        guilds: t
      } = e;
      setTimeout(() => {
        let e = i().flatMap(t, e => I(e.members, e.id)),
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
    }), y(this, "_handleOverlayInitialize", e => {
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
              a = t[n];
            null != i && null != a && null != a.nick && (v(i, e, a.nick), r.set(n, i))
          }
      }
      this.updateUsers(Array.from(r.values()), "overlay_initialize"), r.clear()
    }), y(this, "_handleCurrentUserUpdate", e => {
      let {
        user: t
      } = e, n = O(t);
      null != n && this.updateUsers([n], "current_user_update")
    }), y(this, "_handleGuildCreate", e => {
      let {
        guild: t
      } = e, {
        members: n
      } = t;
      this.updateUsers(I(n, t.id), "guild_create")
    }), y(this, "_handleGuildMembersChunkBatch", e => {
      let {
        chunks: t
      } = e, n = [];
      for (let e of t) n.push(...I(e.members, e.guildId));
      this.updateUsers(n, "guild_members_chunk_batch")
    }), y(this, "_handleGuildMemberUpdate", e => {
      let {
        guildId: t,
        user: n,
        nick: r
      } = e, i = O(n);
      null != i && (v(i, t, r), this.updateUsers([i], "guild_member_update"))
    }), y(this, "_handlePassiveUpdateV2", e => {
      this.updateUsers(I(e.members, e.guildId), "passive_update_v2")
    }), y(this, "_handleRelationshipAdd", e => {
      let t = O(e.relationship.user);
      this.updateUsers([t], "relationship_add")
    }), y(this, "_handleRelationshipUpdate", e => {
      let t = O(p.default.getUser(e.relationship.id));
      this.updateUsers([t], "relationship_update")
    }), y(this, "_handleRelationshipRemove", e => {
      let t = O(p.default.getUser(e.relationship.id));
      this.updateUsers([t], "relationship_remove")
    }), y(this, "_handleDMCreate", e => {
      let {
        channel: {
          id: t
        }
      } = e, n = A(u.A.getChannel(t));
      if (0 === n.length) return;
      let r = O(p.default.getCurrentUser());
      v(r, t), n.push(r), this.updateUsers(n, "dm_create")
    }), y(this, "_handleDMUpdates", e => {
      let {
        channels: t
      } = e;
      for (let e of t) {
        let t = A(u.A.getChannel(e.id));
        if (0 === t.length) continue;
        let n = O(p.default.getCurrentUser());
        v(n, e.id), t.push(n), this.updateUsers(t, "dm_updates")
      }
    }), y(this, "_handleRecipientChanges", e => {
      let {
        channelId: t,
        user: n,
        isMember: r
      } = e;
      if (!r) return;
      let i = O(n);
      v(i, t), this.updateUsers([i], "recipient_changes")
    }), y(this, "_handleThreadListSync", e => {
      let {
        guildId: t,
        mostRecentMessages: n
      } = e;
      if (null == n) return;
      let r = [];
      n.forEach(e => {
        S({
          message: e,
          nicknameContextId: t
        }).forEach(e => r.push(e))
      }), this.updateUsers(r, "thread_list_sync")
    }), y(this, "_handleLoadForumPosts", e => {
      let {
        guildId: t,
        threads: n
      } = e, r = [];
      Object.values(n).forEach(e => {
        let {
          first_message: n,
          most_recent_message: i,
          owner: a
        } = e;
        null != n && S({
          message: n,
          nicknameContextId: t
        }).forEach(e => r.push(e)), null != i && S({
          message: i,
          nicknameContextId: t
        }).forEach(e => r.push(e)), null != a && I([a], t).forEach(e => r.push(e))
      }), this.updateUsers(r, "load_forum_posts")
    }), y(this, "_handleLoadMessagesSuccess", e => {
      let {
        messages: t
      } = e, n = t.flatMap(e => S({
        message: e
      }));
      this.updateUsers(n, "load_messages_success")
    }), y(this, "_handleLoadPinnedMessagesSuccess", e => {
      let {
        pins: t
      } = e, n = [];
      t.forEach(e => {
        let {
          message: t
        } = e;
        S({
          message: t
        }).forEach(e => n.push(e))
      }), this.updateUsers(n, "load_pinned_messages_success")
    }), y(this, "_handleSearchMessagesSuccess", e => {
      let {
        data: t
      } = e, n = [];
      t.forEach(e => {
        let {
          messages: t
        } = e;
        t.forEach(e => {
          e.forEach(e => {
            S({
              message: e
            }).forEach(e => n.push(e))
          })
        })
      }), this.updateUsers(n, "search_messages_success")
    }), y(this, "_handleLoadThreadsSuccess", e => {
      let {
        guildId: t,
        firstMessages: n,
        mostRecentMessages: r,
        owners: i
      } = e, a = [];
      null == n || n.forEach(e => {
        S({
          message: e,
          nicknameContextId: t
        }).forEach(e => a.push(e))
      }), null == r || r.forEach(e => {
        S({
          message: e,
          nicknameContextId: t
        }).forEach(e => a.push(e))
      }), null != i && I(i, t).forEach(e => a.push(e)), this.updateUsers(a, "load_threads_success")
    }), y(this, "_handleMessageCreateOrUpdate", e => {
      let t = S({
        message: e.message
      });
      this.updateUsers(t, "message_create_or_update")
    }), y(this, "_handleGuildScheduledEventUsersFetchSuccess", e => {
      let {
        guildId: t,
        guildScheduledEventUsers: n
      } = e, r = [];
      n.forEach(e => {
        let {
          user: n,
          member: i
        } = e, a = O(n);
        null != a && (v(a, t, null == i ? true : i.nick), r.push(a))
      }), this.updateUsers(r, "guild_scheduled_event_users_fetch_success")
    })
  }
}
let N = new C