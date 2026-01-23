/** Chunk was on web.js **/
/** chunk id: 9842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => U,
  a: () => _
}), require("./896048.js"), require("./321073.js");
var r, Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk390248 = require("./390248.js"),
  Chunk141468 = require("./141468.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var _ = function(e) {
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
    p(this, "_cachedMessages", new(a())({
      max: 100,
      dispose: (e, t) => this.handleCacheDisposed(e, t)
    })), p(this, "_cachedMessageIds", new Set)
  }
}
class E {
  has(e, t) {
    var n, r;
    return null != (n = null == (r = this._channelCaches.get(e)) ? true : r.has(t)) && n
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
      message: (0, c.rh)(e)
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
    p(this, "_channelCaches", new Map)
  }
}
let y = new E;

function b(e) {
  let t = false;
  if (y.updateExistingMessageIfCached(e) && (t = true), f.sl8.has(e.type)) {
    let n = e.message_reference;
    if (null == n) return t;
    let r = n.message_id;
    if (null == r) return t;
    if ("referenced_message" in e) {
      let t = e.referenced_message;
      null != t ? (y.set(t.channel_id, t.id, {
        state: 0,
        message: (0, c.rh)(t)
      }), e.type === f.lAJ.THREAD_STARTER_MESSAGE && b(t)) : y.set(e.channel_id, r, {
        state: 2
      })
    } else {
      let e = d.A.getMessage(n.channel_id, r);
      null != e ? y.set(n.channel_id, r, {
        state: 0,
        message: e
      }) : y.set(n.channel_id, r, h)
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
  return O(t, e => b(e))
}

function A(e) {
  let {
    messages: t
  } = e;
  return O(Object.values(t), e => O(Object.values(e), e => b(e)))
}

function I(e) {
  let {
    data: t
  } = e;
  return O(t, e => {
    let {
      messages: t
    } = e;
    return O(t, e => O(e, e => b(e)))
  })
}

function S(e) {
  let {
    message: t
  } = e;
  return !!d.A.getMessages(t.channel_id).ready && b(t)
}

function T(e) {
  let {
    messageId: t,
    channelId: n
  } = e;
  if (!y.has(n, t)) returnfalse;
  let r = y.get(n, t);
  if (null == r || 0 !== r.state) returnfalse;
  y.set(n, t, {
    state: 0,
    message: (0, l.Td)(r.message)
  })
}

function C(e) {
  let {
    message: t
  } = e, n = t.id, r = t.channel_id;
  if (!y.has(r, n)) returnfalse;
  let i = y.get(r, n);
  if (null == i || 0 !== i.state) returnfalse;
  y.set(r, n, {
    state: 0,
    message: (0, c.IU)(i.message, t)
  })
}

function N(e) {
  return y.deleteChannelCache(e.channel.id)
}

function w() {
  if (0 === y.retainWhere(e => null != u.A.getChannel(e))) returnfalse
}

function R(e, t) {
  if (!y.has(e, t)) returnfalse;
  y.set(e, t, {
    state: 2
  })
}

function P(e) {
  let {
    id: t,
    channelId: n
  } = e;
  return R(n, t)
}

function D(e) {
  let {
    ids: t,
    channelId: n
  } = e;
  return O(t, e => R(n, e))
}

function x(e) {
  let {
    message: t
  } = e;
  y.set(t.channel_id, t.id, {
    state: 0,
    message: t
  })
}

function L() {
  y.clear()
}

function j(e) {
  let {
    firstMessages: t
  } = e;
  return null != t && O(t, e => b(e))
}

function M(e) {
  let {
    threads: t
  } = e;
  return O(Object.values(t), e => {
    let {
      first_message: t
    } = e;
    return null != t && b(t)
  })
}
class k extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, u.A)
  }
  getMessageByReference(e) {
    let t;
    return null != e && (t = y.get(e.channel_id, e.message_id)), null != t ? t : h
  }
  getMessage(e, t) {
    var n;
    return null != (n = y.get(e, t)) ? n : h
  }
  getReplyIdsForChannel(e) {
    let t;
    return null != e && (t = y.getCachedMessageIdsForChannel(e)), null != t ? t : m
  }
}
p(k, "displayName", "ReferencedMessageStore");
let U = new k(Chunk73153.h, {
  CACHE_LOADED: A,
  LOCAL_MESSAGES_LOADED: v,
  LOAD_MESSAGES_SUCCESS: v,
  LOAD_MESSAGES_AROUND_SUCCESS: v,
  SEARCH_MESSAGES_SUCCESS: I,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: I,
  LOAD_THREADS_SUCCESS: j,
  LOAD_ARCHIVED_THREADS_SUCCESS: j,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: T,
  LOAD_FORUM_POSTS: M,
  MESSAGE_CREATE: S,
  MESSAGE_UPDATE: C,
  MESSAGE_DELETE: P,
  MESSAGE_DELETE_BULK: D,
  CREATE_PENDING_REPLY: x,
  CHANNEL_DELETE: N,
  THREAD_DELETE: N,
  GUILD_DELETE: w,
  CONNECTION_OPEN: L,
  LOGOUT: L
})