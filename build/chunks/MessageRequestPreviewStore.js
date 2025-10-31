/** Chunk was on 88647 **/
/** chunk id: 748902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk594174 = require("./594174.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js");

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

function f(e) {
  return s.Z.isMessageRequest(e) || c.Z.isSpam(e)
}

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!f(e) || null != t && e !== (null == t ? true : t.channel_id)) return;
  let r = null == t ? null : (0, a.e5)(t);
  d[e] = {
    loaded: true,
    error: n,
    message: r
  }
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk355298.Z, Chunk333984.Z, Chunk594174.default)
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
u(m, "displayName", "MessageRequestPreviewStore");
let g = new m(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    d = {}, p.clear()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    f(t.id) && p.add(t.id)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) f(e.id) || (p.delete(e.id), delete d[e.id])
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    p.delete(t.id), delete d[t.id]
  },
  MESSAGE_CREATE: function(e) {
    if (e.isPushNotification) returnfalse;
    h(e.message.channel_id, e.message)
  },
  MESSAGE_UPDATE: function(e) {
    var t, n;
    let r = e.message.channel_id;
    if (null == r) returnfalse;
    let i = d[r];
    if (null == i || null == i.message) returnfalse;
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
    }({}, i), n = n = {
      message: (0, a.wi)(i.message, e.message)
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
    if (!f(e.channelId)) returnfalse;
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
        h(e.channel_id, e.message_preview), r.delete(e.channel_id)
      }), Array.from(r))) h(e, null)
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
    let {
      requestedChannelIds: t
    } = e;
    t.forEach(e => {
      h(e, null, true)
    })
  }
})