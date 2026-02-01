/** Chunk was on web.js **/
/** chunk id: 187667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => er
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk380335 = require("./380335.js"),
  Chunk742984 = require("./742984.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk645959 = require("./645959.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk41984 = require("./41984.js"),
  Chunk956753 = require("./956753.js"),
  Chunk680243 = require("./680243.js"),
  Chunk672396 = require("./672396.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"]
}

function T(e, t) {
  return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0")
}

function C(e) {
  let t = e.isPrivateChannel ? "0" : "1",
    n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
    r = T(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
    i = T(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
  return "".concat(t, "\0").concat(n, "\0").concat(r, "\0").concat(i, "\0").concat(e.channelId)
}
let N = new Chunk713402.J(S, C),
  w = null,
  R = null,
  P = 3,
  D = 2 * Chunk927813.A.Millis.HOUR;

function L(e) {
  let t = c.A.getChannel(e),
    n = null == t ? true : t.lastMessageId;
  return null != n ? m.default.extractTimestamp(n) : Date.now()
}

function x(e) {
  var t;
  let n = c.A.getChannel(e);
  return null != (t = null == n ? true : n.isPrivate()) && t
}

function M(e) {
  return d.Ay.getMentionCount(e)
}

function j(e) {
  return d.Ay.hasUnread(e)
}

function k(e) {
  let t = c.A.getChannel(e);
  return null != t && p.Ay.isChannelMuted(t.getGuildId(), e)
}

function U(e) {
  return p.Ay.isChannelMuted(null, e)
}

function G(e, t, n, r, i) {
  return {
    channelId: e,
    source: t,
    addedOnMs: n,
    lastActivityAtMs: r,
    lastMessageId: i,
    isPrivateChannel: x(e),
    mentionCount: M(e),
    hasUnread: j(e)
  }
}

function V(e) {
  let t = f.A.getChannelId();
  if (null == t || null == c.A.getChannel(t)) returnfalse;
  if (w = t, !N.has(t)) {
    var n, r;
    let i = L(t),
      a = null != (n = null == (r = c.A.getChannel(t)) ? true : r.lastMessageId) ? n : true,
      o = G(t, g.B9.MANUAL, e, i, a);
    N.set(t, o)
  }
  returntrue
}

function F(e) {
  let t = _.A.getPrivateChannelIds(),
    n = 0;
  for (let r of t) {
    if (n >= P) return;
    if (N.has(r)) continue;
    let t = c.A.getChannel(r);
    if (null == t || !t.isPrivate() || U(r) || s.A.isMessageRequest(r)) continue;
    let i = t.lastMessageId;
    if (null == i) continue;
    let a = m.default.extractTimestamp(i);
    if (e - a > D) continue;
    let o = G(r, g.B9.MANUAL, e, a, i);
    N.set(r, o), n++
  }
}

function B() {
  let e = Date.now();
  N.clear(), w = null, R = e, V(e), F(e)
}

function H(e) {
  if (null == e.timestamp) return Date.now();
  let t = new Date(e.timestamp).getTime();
  return Number.isFinite(t) ? t : Date.now()
}

function Y(e) {
  var t, n;
  let {
    channelId: r,
    source: i,
    lastActivityAtMs: a,
    lastMessageId: o
  } = e, s = null != (t = N.get(r)) ? t : null, l = null == s ? a : Math.max(s.lastActivityAtMs, a), c = null != o ? o : null == s ? true : s.lastMessageId, u = G(r, i, null != (n = null == s ? true : s.addedOnMs) ? n : a, l, c);
  return N.set(r, u)
}

function W(e) {
  return null == R && (B(), true)
}

function K(e) {
  let t = Y({
      channelId: e.channelId,
      source: e.source,
      lastActivityAtMs: e.lastActivityAtMs,
      lastMessageId: e.lastMessageId
    }),
    n = false;
  return null == w && (w = e.channelId, n = true), t || n
}

function z(e) {
  let t = N.delete(e.channelId),
    n = false;
  if (w === e.channelId) {
    var r;
    let e = null == (r = N.values()[0]) ? true : r.channelId;
    w = null != e ? e : null, n = true
  }
  return t || n
}

function q(e, t) {
  if (null == e) returnfalse;
  if (null == R && (R = Date.now()), w !== e && (w = e), null != w && !N.has(w)) {
    var n, r;
    let e = Date.now(),
      i = L(w),
      a = null != (n = null == (r = c.A.getChannel(w)) ? true : r.lastMessageId) ? n : true,
      o = G(w, t, e, i, a);
    N.set(w, o)
  }
  returntrue
}

function Z(e) {
  let {
    channelId: t,
    source: n
  } = e;
  return q(null != t ? t : null, n)
}

function Q(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (null == R) returnfalse;
  let r = c.A.getChannel(t);
  if (null == r) returnfalse;
  let i = w === t;
  if (r.isPrivate()) {
    if (U(t)) returnfalse
  } else if (!i && (k(t) || !(0, l.lx)(n, t, true, true))) returnfalse;
  return Y({
    channelId: t,
    source: r.isPrivate() ? g.B9.INCOMING_DM_MESSAGE : g.B9.INCOMING_MENTION_MESSAGE,
    lastActivityAtMs: H(n),
    lastMessageId: n.id
  }), null == w && (w = t), true
}

function X(e) {
  let t = N.get(e);
  if (null == t) returnfalse;
  let n = d.Ay.getMentionCount(e),
    r = d.Ay.hasUnread(e);
  return (t.mentionCount !== n || t.hasUnread !== r) && (N.set(e, I(v({}, t), {
    mentionCount: n,
    hasUnread: r
  })), true)
}

function J(e) {
  let {
    channelId: t
  } = e;
  return X(t)
}

function $(e) {
  let {
    channelId: t
  } = e;
  return X(t)
}

function ee(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      channelId: e
    }
    of t) X(e) && (n = true);
  return n
}
class et extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(y.A, c.A, u.A, s.A, _.A, d.Ay, f.A, p.Ay), B()
  }
  getSessionEntries(e) {
    return [null != e ? N.values(e) : N.values(), N.version]
  }
  getSelectedChannelId() {
    return w
  }
}
O(et, "displayName", "Overlay-v3-Text-Chat-Store");
let en = e => (0, E.U)(e, "OverlayTextChatStore"),
  er = new et(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX && !Chunk672396.ed ? {} : {
    OVERLAY_MOUNTED: en(W),
    MESSAGE_CREATE: en(Q),
    MESSAGE_ACK: en(J),
    CHANNEL_ACK: en($),
    CHANNEL_LOCAL_ACK: en($),
    BULK_ACK: en(ee),
    OVERLAY_TEXT_CHAT_SELECT_CHANNEL: en(Z),
    OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: en(K),
    OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: en(z)
  })