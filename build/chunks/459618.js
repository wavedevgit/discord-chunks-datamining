/** Chunk was on web.js **/
/** chunk id: 459618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk186102 = require("./186102.js"),
  Chunk873741 = require("./873741.js"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk866960 = require("./866960.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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
let g = new Chunk710845.Z("MessageRoundtripTrackerStore");

function E(e) {
  return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
}

function b(e) {
  let t = l.Z.getBasicChannel(e.channelId);
  if (null == t) return void g.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
  if (Math.random() > .1) return;
  let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
    i = (0, s.d)();
  d.default.track(f.rMx.SEND_MESSAGE_ROUNDTRIP, p(m(p({}, (0, o.Z)()), {
    api_latency_ms: n,
    gateway_latency_ms: r,
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.guild_id,
    guild_size: c.Z.getMemberCount(t.guild_id),
    mobile_network_type: u.Z.getType(),
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
  t || null == r || v.recordGatewayResponse(r)
}
class O extends Chunk442837.ZP.Store {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk650774.Z, Chunk866960.Z)
  }
  recordMessageSendAttempt(e, t) {
    var n, r, i, a;
    let o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      s = (null != (i = null == (n = o.attachments) ? true : n.length) ? i : 0) + (null != (a = null == (r = o.attachmentsToUpload) ? true : r.length) ? a : 0),
      l = {
        initialSendTimestamp: Date.now(),
        apiResponseTimestamp: null,
        gatewaySeenTimestamp: null,
        channelId: e,
        attachmentCount: s
      };
    this.pendingMessages.set(t, l), setTimeout(() => {
      let e = this.pendingMessages.get(t);
      null != e && (b(e), this.pendingMessages.delete(t))
    }, 3e4)
  }
  recordMessageSendApiResponse(e) {
    let t = this.pendingMessages.get(e);
    if (null != t) {
      let n = m(p({}, t), {
        apiResponseTimestamp: Date.now()
      });
      E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
    }
  }
  recordGatewayResponse(e) {
    let t = this.pendingMessages.get(e);
    if (null != t) {
      let n = m(p({}, t), {
        gatewaySeenTimestamp: Date.now()
      });
      E(n) ? (b(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
    }
  }
  constructor(...e) {
    super(...e), _(this, "pendingMessages", new Map)
  }
}
let v = new O(Chunk570140.Z, {
    MESSAGE_CREATE: y
  }),
  I = v