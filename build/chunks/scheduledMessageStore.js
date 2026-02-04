/** Chunk was on 17869 **/
/** chunk id: 199160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
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
class f extends(l = Chunk311907.Ay.Store) {
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
a(f, "displayName", "scheduledMessageStore");
let m = new f(Chunk73153.h, {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function(e) {
    let {
      channelId: t,
      scheduledMessageSend: n
    } = e;
    u = o(s({}, u), {
      [n.scheduledMessageId]: n
    }), h = s({}, h), delete h[t]
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function(e) {
    let {
      scheduledMessageSend: t
    } = e;
    u = o(s({}, u), {
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
    (d = new Set(d)).delete(t), u = s({}, u), delete u[t]
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
    h = o(s({}, h), {
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
    h = s({}, h), delete h[t]
  },
  LOGOUT: p,
  CONNECTION_OPEN: p
})