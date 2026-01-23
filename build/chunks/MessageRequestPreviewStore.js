/** Chunk was on 97492 **/
/** chunk id: 401565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk141468 = require("./141468.js"),
  Chunk287809 = require("./287809.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {},
  p = new Set;

function h(e) {
  return o.A.isMessageRequest(e) || c.A.isSpam(e)
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!h(e) || null != t && e !== (null == t ? true : t.channel_id)) return;
  let r = null == t ? null : (0, s.rh)(t);
  d[e] = {
    loaded: true,
    error: n,
    message: r
  }
}
class g extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, c.A, a.default)
  }
  shouldLoadMessageRequestPreview(e) {
    return !p.has(e)
  }
  getMessageRequestPreview(e) {
    return e in d || (d[e] = {
      loaded: false,
      error: false,
      message: null
    }), d[e]
  }
}
u(g, "displayName", "MessageRequestPreviewStore");
let m = new g(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    d = {}, p.clear()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    h(t.id) && p.add(t.id)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) h(e.id) || (p.delete(e.id), delete d[e.id])
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    p.delete(t.id), delete d[t.id]
  },
  MESSAGE_CREATE: function(e) {
    if (e.isPushNotification) returnfalse;
    f(e.message.channel_id, e.message)
  },
  MESSAGE_UPDATE: function(e) {
    var t, n;
    let r = e.message.channel_id;
    if (null == r) returnfalse;
    let l = d[r];
    if (null == l || null == l.message) returnfalse;
    d[r] = (t = function(e) {
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
    }({}, l), n = n = {
      message: (0, s.IU)(l.message, e.message)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)
  },
  MESSAGE_DELETE: function(e) {
    if (!h(e.channelId)) returnfalse;
    d[e.channelId] = {
      loaded: true,
      error: false,
      message: null
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
    let {
      requestedChannelIds: t,
      supplementalData: n
    } = e, r = new Set([...t]);
    for (let e of (n.forEach(e => {
        f(e.channel_id, e.message_preview), r.delete(e.channel_id)
      }), Array.from(r))) f(e, null)
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
    let {
      requestedChannelIds: t
    } = e;
    t.forEach(e => {
      f(e, null, true)
    })
  }
})