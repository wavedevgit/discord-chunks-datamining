/** Chunk was on 13140 **/
/** chunk id: 156012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
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
let c = false,
  u = {},
  d = new Set,
  p = {};

function f() {
  p = {}
}
class h extends(r = Chunk442837.ZP.Store) {
  getMessagesPendingDeletion() {
    return d
  }
  getScheduledMessagesForInbox() {
    return u
  }
  getPendingScheduledMessage(e) {
    return p[e]
  }
  get loading() {
    return c
  }
}
a(h, "displayName", "scheduledMessageStore");
let m = new h(Chunk570140.Z, {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function(e) {
    let {
      channelId: t,
      scheduledMessageSend: n
    } = e;
    u = s(o({}, u), {
      [n.scheduledMessageId]: n
    }), p = o({}, p), delete p[t]
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function(e) {
    let {
      scheduledMessageSend: t
    } = e;
    u = s(o({}, u), {
      [t.scheduledMessageId]: t
    })
  },
  SCHEDULED_MESSAGES_DELETE_START: function(e) {
    let {
      scheduledMessageId: t
    } = e;
    if (d.has(t)) returnfalse;
    (d = new Set(d)).add(t)
  },
  SCHEDULED_MESSAGES_DELETE_SUCCESS: function(e) {
    let {
      scheduledMessageId: t
    } = e;
    if (!d.has(t)) returnfalse;
    (d = new Set(d)).delete(t), u = o({}, u), delete u[t]
  },
  SCHEDULED_MESSAGES_DELETE_FAILURE: function(e) {
    let {
      scheduledMessageId: t
    } = e;
    if (!d.has(t)) returnfalse;
    (d = new Set(d)).delete(t)
  },
  FETCH_SCHEDULED_MESSAGES: function(e) {
    let {} = e;
    c = true
  },
  FETCH_SCHEDULED_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    for (let e of (u = {}, t)) u[e.scheduledMessageId] = e;
    c = false
  },
  FETCH_SCHEDULED_MESSAGES_FAILURE: function(e) {
    let {} = e;
    c = false
  },
  CREATE_PENDING_SCHEDULED_MESSAGE: function(e) {
    let {
      channelId: t,
      scheduledTimestamp: n
    } = e;
    p = s(o({}, p), {
      [t]: {
        channelId: t,
        scheduledTimestamp: n
      }
    })
  },
  DELETE_PENDING_SCHEDULED_MESSAGE: function(e) {
    let {
      channelId: t
    } = e;
    p = o({}, p), delete p[t]
  },
  LOGOUT: f,
  CONNECTION_OPEN: f
})