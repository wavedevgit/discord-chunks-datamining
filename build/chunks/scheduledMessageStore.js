/** Chunk was on 1113 **/
/** chunk id: 199160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
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
  h = {};

function p() {
  h = {}
}
class g extends(r = Chunk311907.Ay.Store) {
  getMessagesPendingDeletion() {
    return d
  }
  getScheduledMessagesForInbox() {
    return u
  }
  getPendingScheduledMessage(e) {
    return h[e]
  }
  get loading() {
    return c
  }
}
s(g, "displayName", "scheduledMessageStore");
let f = new g(Chunk73153.h, {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function(e) {
    let {
      channelId: t,
      scheduledMessageSend: n
    } = e;
    u = o(a({}, u), {
      [n.scheduledMessageId]: n
    }), h = a({}, h), delete h[t]
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function(e) {
    let {
      scheduledMessageSend: t
    } = e;
    u = o(a({}, u), {
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
    (d = new Set(d)).delete(t), u = a({}, u), delete u[t]
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
    h = o(a({}, h), {
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
    h = a({}, h), delete h[t]
  },
  LOGOUT: p,
  CONNECTION_OPEN: p
})