/** Chunk was on 34740 **/
/** chunk id: 748902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
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

function h(e) {
  return s.Z.isMessageRequest(e) || c.Z.isSpam(e)
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!h(e) || null != t && e !== (null == t ? true : t.channel_id)) return;
  let i = null == t ? null : (0, a.e5)(t);
  d[e] = {
    loaded: true,
    error: n,
    message: i
  }
}
class m extends(i = Chunk442837.ZP.Store) {
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
    let i = e.message.channel_id;
    if (null == i) returnfalse;
    let r = d[i];
    if (null == r || null == r.message) returnfalse;
    d[i] = (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          u(e, t, n[t])
        })
      }
      return e
    }({}, r), n = n = {
      message: (0, a.wi)(r.message, e.message)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
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
    } = e, i = new Set([...t]);
    for (let e of (n.forEach(e => {
        f(e.channel_id, e.message_preview), i.delete(e.channel_id)
      }), Array.from(i))) f(e, null)
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