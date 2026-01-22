/** Chunk was on web.js **/
/** chunk id: 407580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk69114 = require("./69114.js"),
  Chunk322683 = require("./322683.js"),
  Chunk734057 = require("./734057.js"),
  Chunk498642 = require("./498642.js"),
  Chunk544180 = require("./544180.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = new Chunk626584.A("MessageRoundtripTrackerStore");

function E(e) {
  return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
}

function b(e) {
  let t = l.A.getBasicChannel(e.channelId);
  if (null == t) return void g.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
  if (Math.random() > .1) return;
  let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
    i = (0, o.O)();
  d.default.track(f.HAw.SEND_MESSAGE_ROUNDTRIP, _(m(_({}, (0, s.A)()), {
    api_latency_ms: n,
    gateway_latency_ms: r,
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.guild_id,
    guild_size: c.A.getMemberCount(t.guild_id),
    mobile_network_type: u.A.getType(),
    num_attachments: e.attachmentCount
  }), null != i && {
    mobile_signal_strength_level: i
  }))
}

function y(e) {
  let {
    optimistic: t,
    message: n
  } = e, r = n.nonce;
  t || null == r || A.recordGatewayResponse(r)
}
class O extends Chunk311907.Ay.Store {
  initialize() {
    this.waitFor(l.A, c.A, u.A)
  }
  recordMessageSendAttempt(e, t) {
    var n, r, i, a;
    let s = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      o = (null != (n = null == (i = s.attachments) ? true : i.length) ? n : 0) + (null != (r = null == (a = s.attachmentsToUpload) ? true : a.length) ? r : 0),
      l = {
        initialSendTimestamp: Date.now(),
        apiResponseTimestamp: null,
        gatewaySeenTimestamp: null,
        channelId: e,
        attachmentCount: o
      };
    this.pendingMessages.set(t, l), setTimeout(() => {
      let e = this.pendingMessages.get(t);
      null != e && (b(e), this.pendingMessages.delete(t))
    }, 3e4)
  }
  recordMessageSendApiResponse(e) {
    let t = this.pendingMessages.get(e);
    if (null != t) {
      let n = m(_({}, t), {
        apiResponseTimestamp: Date.now()
      });
      E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
    }
  }
  recordGatewayResponse(e) {
    let t = this.pendingMessages.get(e);
    if (null != t) {
      let n = m(_({}, t), {
        gatewaySeenTimestamp: Date.now()
      });
      E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
    }
  }
  constructor(...e) {
    super(...e), p(this, "pendingMessages", new Map)
  }
}
let A = new O(Chunk73153.h, {
    MESSAGE_CREATE: y
  }),
  v = A