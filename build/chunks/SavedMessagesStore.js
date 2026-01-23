/** Chunk was on web.js **/
/** chunk id: 85109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./65821.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk141468 = require("./141468.js"),
  Chunk287809 = require("./287809.js"),
  Chunk756377 = require("./756377.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = 1e13;

function p(e) {
  if (null == e) return f;
  try {
    return new Date(e).getTime()
  } catch (t) {
    throw Error("Invalid date given (".concat(e, ")"))
  }
}

function _(e) {
  return null != e.dueAt ? p(e.dueAt) : f - p(e.savedAt)
}
let h = new Chunk713402.J(e => {
    let {
      saveData: t
    } = e;
    return [c.Yf.ALL, null != t.dueAt ? c.Yf.REMINDER : c.Yf.BOOKMARK]
  }, e => {
    let {
      saveData: t
    } = e;
    return _(t)
  }),
  m = true,
  g = 0,
  E = new Set,
  y = new Set,
  b = new Map;

function O(e) {
  let t = b.get(e);
  return null != t && t.size > 0
}

function v(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  return "".concat(t, "-").concat(n)
}

function A(e) {
  var t;
  let n = v(e.saveData);
  null == h.get(n) && (g = Date.now()), h.set(n, e);
  let r = e.saveData.messageId,
    i = e.saveData.channelId,
    a = null != (t = b.get(i)) ? t : new Set;
  a.add(r), b.set(i, a), null == e.message && y.add(r), null != e.saveData.dueAt && new Date > e.saveData.dueAt ? E.add(r) : E.delete(r)
}

function I(e) {
  var t;
  let n = v(e),
    r = h.get(n);
  if (null == r) returnfalse;
  h.delete(n);
  let i = e.messageId;
  null == (t = b.get(r.saveData.channelId)) || t.delete(i), y.delete(i), E.delete(i), g = Date.now()
}

function S() {
  m = true
}

function T() {
  m = true, h.clear(), b.clear(), y.clear()
}

function C(e) {
  let {
    savedMessages: t
  } = e;
  for (let e of (m = false, h.clear(), b.clear(), y.clear(), t)) A(e)
}

function N(e) {
  let {
    savedMessage: t
  } = e;
  A(t)
}

function w(e) {
  let {
    savedMessageData: t
  } = e;
  return I(t)
}

function R(e) {
  let {
    messageId: t,
    channelId: n
  } = e, r = v({
    messageId: t,
    channelId: n
  }), i = h.get(r);
  if ((null == i ? true : i.message) == null) returnfalse;
  let a = d({}, i);
  return a.message = null, h.set(r, a), true
}

function P(e) {
  let {
    id: t,
    channelId: n
  } = e;
  return R({
    messageId: t,
    channelId: n
  })
}

function D(e) {
  let {
    ids: t,
    channelId: n
  } = e;
  for (let e of t) R({
    messageId: e,
    channelId: n
  })
}

function x(e) {
  let {
    message: t
  } = e;
  if (null == t.id || null == t.channel_id) returnfalse;
  let n = v({
      messageId: t.id,
      channelId: t.channel_id
    }),
    r = h.get(n);
  if ((null == r ? true : r.message) == null) returnfalse;
  let i = d({}, r);
  i.message = (0, o.IU)(r.message, t), h.set(n, i)
}

function L() {
  if (0 === y.size || m) returnfalse;
  m = true
}

function j(e) {
  let {
    channel: t
  } = e;
  if (0 === y.size || m || !O(t.id)) returnfalse;
  m = true
}

function M(e) {
  let {
    channels: t
  } = e;
  if (0 === y.size || m) returnfalse;
  let n = false;
  for (let e of t) O(e.id) && (m = true, n = true);
  return n
}

function k(e) {
  let {
    channel: t
  } = e;
  if (0 === y.size || m || !O(t.id)) returnfalse;
  m = true
}

function U(e) {
  var t;
  let {
    user: n
  } = e;
  if (0 === y.size || m || n.id !== (null == (t = l.default.getCurrentUser()) ? true : t.id)) returnfalse;
  m = true
}

function G(e) {
  let {
    savedMessage: t
  } = e;
  E.add(t.saveData.messageId)
}
class V extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default)
  }
  getSavedMessages() {
    return h.values(c.Yf.ALL)
  }
  getSavedMessage(e, t) {
    return h.get(v({
      channelId: e,
      messageId: t
    }))
  }
  getMessageBookmarks() {
    return h.values(c.Yf.BOOKMARK)
  }
  getMessageReminders() {
    return h.values(c.Yf.REMINDER)
  }
  getOverdueMessageReminderCount() {
    return E.size
  }
  hasOverdueReminder() {
    return E.size > 0
  }
  getSavedMessageCount() {
    return h.size()
  }
  getIsStale() {
    return m
  }
  getLastChanged() {
    return g
  }
  isMessageBookmarked(e, t) {
    let n = h.get(v({
      channelId: e,
      messageId: t
    }));
    return null != n && null == n.saveData.dueAt
  }
  isMessageReminder(e, t) {
    let n = h.get(v({
      channelId: e,
      messageId: t
    }));
    return null != n && null != n.saveData.dueAt
  }
}
u(V, "displayName", "SavedMessagesStore");
let F = new V(Chunk73153.h, {
  POST_CONNECTION_OPEN: S,
  LOGOUT: T,
  SAVED_MESSAGES_UPDATE: C,
  SAVED_MESSAGE_CREATE: N,
  SAVED_MESSAGE_DELETE: w,
  MESSAGE_DELETE: P,
  MESSAGE_DELETE_BULK: D,
  MESSAGE_UPDATE: x,
  GUILD_CREATE: L,
  GUILD_UPDATE: L,
  GUILD_DELETE: L,
  CHANNEL_CREATE: j,
  CHANNEL_UPDATES: M,
  CHANNEL_DELETE: k,
  GUILD_MEMBER_UPDATE: U,
  GUILD_ROLE_CREATE: L,
  GUILD_ROLE_UPDATE: L,
  GUILD_ROLE_DELETE: L,
  MESSAGE_REMINDER_DUE: G
})