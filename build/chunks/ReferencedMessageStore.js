/** Chunk was on web.js **/
/** chunk id: 869765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => p,
  Z: () => U
}), require("./388685.js"), require("./539854.js");
var r, Chunk31775 = require("./31775.js"),
  a = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk247206 = require("./247206.js"),
  Chunk786761 = require("./786761.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var p = function(e) {
  return e[e.LOADED = 0] = "LOADED", e[e.NOT_LOADED = 1] = "NOT_LOADED", e[e.DELETED = 2] = "DELETED", e
}({});
let h = Object.freeze({
    state: 1
  }),
  m = new Set;
class g {
  handleCacheDisposed(e, t) {
    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
  }
  set(e, t) {
    this._cachedMessages.set(e, t), this._cachedMessageIds.has(e) || (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
  }
  has(e) {
    return this._cachedMessageIds.has(e)
  }
  get(e) {
    return this._cachedMessages.get(e)
  }
  getCachedMessageIds() {
    return this._cachedMessageIds
  }
  constructor() {
    _(this, "_cachedMessages", new(a())({
      max: 100,
      dispose: (e, t) => this.handleCacheDisposed(e, t)
    })), _(this, "_cachedMessageIds", new Set)
  }
}
class E {
  has(e, t) {
    var n, r;
    return null != (r = null == (n = this._channelCaches.get(e)) ? true : n.has(t)) && r
  }
  get(e, t) {
    var n;
    return null == (n = this._channelCaches.get(e)) ? true : n.get(t)
  }
  set(e, t, n) {
    let r = this._channelCaches.get(e);
    null == r && (r = new g, this._channelCaches.set(e, r)), r.set(t, n)
  }
  updateExistingMessageIfCached(e) {
    let t = this._channelCaches.get(e.channel_id);
    return null != t && !!t.has(e.id) && (t.set(e.id, {
      state: 0,
      message: (0, c.e5)(e)
    }), true)
  }
  deleteChannelCache(e) {
    return this._channelCaches.delete(e)
  }
  retainWhere(e) {
    let t = [];
    for (let [n] of this._channelCaches) e(n) || t.push(n);
    for (let e of t) this.deleteChannelCache(e);
    return t.length
  }
  getCachedMessageIdsForChannel(e) {
    let t = this._channelCaches.get(e);
    return null == t ? null : t.getCachedMessageIds()
  }
  clear() {
    this._channelCaches.clear()
  }
  constructor() {
    _(this, "_channelCaches", new Map)
  }
}
let b = new E;

function y(e) {
  let t = false;
  if (b.updateExistingMessageIfCached(e) && (t = true), f.OBS.has(e.type)) {
    let n = e.message_reference;
    if (null == n) return t;
    let r = n.message_id;
    if (null == r) return t;
    if ("referenced_message" in e) {
      let t = e.referenced_message;
      null != t ? (b.set(t.channel_id, t.id, {
        state: 0,
        message: (0, c.e5)(t)
      }), e.type === f.uaV.THREAD_STARTER_MESSAGE && y(t)) : b.set(e.channel_id, r, {
        state: 2
      })
    } else {
      let e = d.Z.getMessage(n.channel_id, r);
      null != e ? b.set(n.channel_id, r, {
        state: 0,
        message: e
      }) : b.set(n.channel_id, r, h)
    }
    t = true
  }
  return t
}

function O(e, t) {
  let n = false;
  for (let r of e) n = false !== t(r) || n;
  return n
}

function v(e) {
  let {
    messages: t
  } = e;
  return O(t, e => y(e))
}

function I(e) {
  let {
    messages: t
  } = e;
  return O(Object.values(t), e => O(Object.values(e), e => y(e)))
}

function T(e) {
  let {
    data: t
  } = e;
  return O(t, e => {
    let {
      messages: t
    } = e;
    return O(t, e => O(e, e => y(e)))
  })
}

function S(e) {
  let {
    message: t
  } = e;
  return !!d.Z.getMessages(t.channel_id).ready && y(t)
}

function A(e) {
  let {
    messageId: t,
    channelId: n
  } = e;
  if (!b.has(n, t)) returnfalse;
  let r = b.get(n, t);
  if (null == r || 0 !== r.state) returnfalse;
  b.set(n, t, {
    state: 0,
    message: (0, l.Cm)(r.message)
  })
}

function C(e) {
  let {
    message: t
  } = e, n = t.id, r = t.channel_id;
  if (!b.has(r, n)) returnfalse;
  let i = b.get(r, n);
  if (null == i || 0 !== i.state) returnfalse;
  b.set(r, n, {
    state: 0,
    message: (0, c.wi)(i.message, t)
  })
}

function N(e) {
  return b.deleteChannelCache(e.channel.id)
}

function R() {
  if (0 === b.retainWhere(e => null != u.Z.getChannel(e))) returnfalse
}

function P(e, t) {
  if (!b.has(e, t)) returnfalse;
  b.set(e, t, {
    state: 2
  })
}

function D(e) {
  let {
    id: t,
    channelId: n
  } = e;
  return P(n, t)
}

function w(e) {
  let {
    ids: t,
    channelId: n
  } = e;
  return O(t, e => P(n, e))
}

function x(e) {
  let {
    message: t
  } = e;
  b.set(t.channel_id, t.id, {
    state: 0,
    message: t
  })
}

function L() {
  b.clear()
}

function M(e) {
  let {
    firstMessages: t
  } = e;
  return null != t && O(t, e => y(e))
}

function j(e) {
  let {
    threads: t
  } = e;
  return O(Object.values(t), e => {
    let {
      first_message: t
    } = e;
    return null != t && y(t)
  })
}
class k extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk375954.Z, Chunk592125.Z)
  }
  getMessageByReference(e) {
    let t;
    return null != e && (t = b.get(e.channel_id, e.message_id)), null != t ? t : h
  }
  getMessage(e, t) {
    var n;
    return null != (n = b.get(e, t)) ? n : h
  }
  getReplyIdsForChannel(e) {
    let t;
    return null != e && (t = b.getCachedMessageIdsForChannel(e)), null != t ? t : m
  }
}
_(k, "displayName", "ReferencedMessageStore");
let U = new k(Chunk570140.Z, {
  CACHE_LOADED: I,
  LOCAL_MESSAGES_LOADED: v,
  LOAD_MESSAGES_SUCCESS: v,
  LOAD_MESSAGES_AROUND_SUCCESS: v,
  SEARCH_MESSAGES_SUCCESS: T,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: T,
  LOAD_THREADS_SUCCESS: M,
  LOAD_ARCHIVED_THREADS_SUCCESS: M,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: A,
  LOAD_FORUM_POSTS: j,
  MESSAGE_CREATE: S,
  MESSAGE_UPDATE: C,
  MESSAGE_DELETE: D,
  MESSAGE_DELETE_BULK: w,
  CREATE_PENDING_REPLY: x,
  CHANNEL_DELETE: N,
  THREAD_DELETE: N,
  GUILD_DELETE: R,
  CONNECTION_OPEN: L,
  LOGOUT: L
})