/** Chunk was on web.js **/
/** chunk id: 187667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ef
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk380335 = require("./380335.js"),
  Chunk742984 = require("./742984.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk383501 = require("./383501.js"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  return [e.isPrivateChannel ? "PRIVATE_CHANNELS" : "GUILD_CHANNELS"]
}

function C(e, t) {
  return String(Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER))).padStart(t, "0")
}

function N(e) {
  let t = e.isPrivateChannel ? "0" : "1",
    n = String(2 - (e.mentionCount > 0 ? 2 : +!!e.hasUnread)),
    r = C(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
    i = C(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
  return "".concat(t, "\0").concat(n, "\0").concat(r, "\0").concat(i, "\0").concat(e.channelId)
}
let w = new Chunk713402.J(T, N),
  R = null,
  P = null,
  D = false,
  L = null,
  x = 3,
  M = 2 * Chunk927813.A.Millis.HOUR;

function j(e) {
  let t = c.A.getChannel(e),
    n = null == t ? true : t.lastMessageId;
  return null != n ? g.default.extractTimestamp(n) : Date.now()
}

function k(e) {
  var t;
  let n = c.A.getChannel(e);
  return null != (t = null == n ? true : n.isPrivate()) && t
}

function U(e) {
  return f.Ay.getMentionCount(e)
}

function G(e) {
  return f.Ay.hasUnread(e)
}

function V(e) {
  let t = c.A.getChannel(e);
  return null != t && _.Ay.isChannelMuted(t.getGuildId(), e)
}

function F(e) {
  return _.Ay.isChannelMuted(null, e)
}

function B(e, t, n, r, i) {
  return {
    channelId: e,
    source: t,
    addedOnMs: n,
    lastActivityAtMs: r,
    lastMessageId: i,
    isPrivateChannel: k(e),
    mentionCount: U(e),
    hasUnread: G(e)
  }
}

function H(e) {
  let t = p.A.getChannelId();
  if (null == t || null == c.A.getChannel(t)) returnfalse;
  if (R = t, !w.has(t)) {
    var n, r;
    let i = j(t),
      a = null != (n = null == (r = c.A.getChannel(t)) ? true : r.lastMessageId) ? n : true,
      o = B(t, E.B9.MANUAL, e, i, a);
    w.set(t, o)
  }
  returntrue
}

function Y(e) {
  let t = h.A.getPrivateChannelIds(),
    n = 0;
  for (let r of t) {
    if (n >= x) return;
    if (w.has(r)) continue;
    let t = c.A.getChannel(r);
    if (null == t || !t.isPrivate() || F(r) || s.A.isMessageRequest(r)) continue;
    let i = t.lastMessageId;
    if (null == i) continue;
    let a = g.default.extractTimestamp(i);
    if (e - a > M) continue;
    let o = B(r, E.B9.MANUAL, e, a, i);
    w.set(r, o), n++
  }
}

function W() {
  var e;
  let t = Date.now();
  w.clear(), R = null, P = t, D = false, L = null != (e = d.A.getChannelId()) ? e : null, H(t), Y(t), q()
}

function K() {
  var e;
  return null != (e = d.A.getChannelId()) ? e : null
}

function z(e) {
  if (null == e) {
    var t, n;
    return null != (t = null == (n = w.values()[0]) ? true : n.channelId) ? t : null
  }
  for (let t of w.values())
    if (t.channelId !== e) return t.channelId;
  return null
}

function q() {
  let e = K();
  return null != e && !D && null == R && (R = e, true)
}

function Z() {
  let e = K();
  return null == e ? (L = null, !!D && (D = false, true)) : L !== e && (L = e, !!D && (D = false, true))
}

function Q(e) {
  if (null == e.timestamp) return Date.now();
  let t = new Date(e.timestamp).getTime();
  return Number.isFinite(t) ? t : Date.now()
}

function X(e) {
  var t, n;
  let {
    channelId: r,
    source: i,
    lastActivityAtMs: a,
    lastMessageId: o
  } = e, s = null != (t = w.get(r)) ? t : null, l = null == s ? a : Math.max(s.lastActivityAtMs, a), c = null != o ? o : null == s ? true : s.lastMessageId, u = B(r, i, null != (n = null == s ? true : s.addedOnMs) ? n : a, l, c);
  return w.set(r, u)
}

function J(e) {
  return null == P && (W(), true)
}

function $(e) {
  let t = X({
      channelId: e.channelId,
      source: e.source,
      lastActivityAtMs: e.lastActivityAtMs,
      lastMessageId: e.lastMessageId
    }),
    n = false;
  return null == R && (R = e.channelId, n = true), t || n
}

function ee(e) {
  let t = w.delete(e.channelId),
    n = false;
  if (R === e.channelId) {
    let e = K(),
      t = z(e);
    R = null != t ? t : D || null == e ? null : e, n = true
  }
  return t || n
}

function et(e) {
  let {
    minimized: t
  } = e;
  if (D === t) returnfalse;
  if (D = t, !t) return q(), true;
  let n = K();
  return null != n && R === n && (R = z(n)), true
}

function en(e, t) {
  if (null == e) returnfalse;
  null == P && (P = Date.now()), R !== e && (R = e);
  let n = K();
  if (null != n && e === n && D && (D = false), null != R && !w.has(R)) {
    var r, i;
    let e = Date.now(),
      n = j(R),
      a = null != (r = null == (i = c.A.getChannel(R)) ? true : i.lastMessageId) ? r : true,
      o = B(R, t, e, n, a);
    w.set(R, o)
  }
  returntrue
}

function er(e) {
  let {
    channelId: t,
    source: n
  } = e;
  return en(null != t ? t : null, n)
}

function ei(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (null == P) returnfalse;
  let r = c.A.getChannel(t);
  if (null == r) returnfalse;
  let i = R === t;
  if (r.isPrivate()) {
    if (F(t)) returnfalse
  } else if (!i && (V(t) || !(0, l.lx)(n, t, true, true))) returnfalse;
  return X({
    channelId: t,
    source: r.isPrivate() ? E.B9.INCOMING_DM_MESSAGE : E.B9.INCOMING_MENTION_MESSAGE,
    lastActivityAtMs: Q(n),
    lastMessageId: n.id
  }), null == R && (R = t), true
}

function ea() {
  let e = Z(),
    t = q();
  return e || t
}

function eo(e) {
  let t = w.get(e);
  if (null == t) returnfalse;
  let n = f.Ay.getMentionCount(e),
    r = f.Ay.hasUnread(e);
  return (t.mentionCount !== n || t.hasUnread !== r) && (w.set(e, S(A({}, t), {
    mentionCount: n,
    hasUnread: r
  })), true)
}

function es(e) {
  let {
    channelId: t
  } = e;
  return eo(t)
}

function el(e) {
  let {
    channelId: t
  } = e;
  return eo(t)
}

function ec(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      channelId: e
    }
    of t) eo(e) && (n = true);
  return n
}
class eu extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(b.A, c.A, u.A, s.A, d.A, h.A, f.Ay, p.A, _.Ay), W()
  }
  getSessionEntries(e) {
    return [null != e ? w.values(e) : w.values(), w.version]
  }
  getSelectedChannelId() {
    return R
  }
  getVoiceChatMinimized() {
    return D
  }
}
v(eu, "displayName", "Overlay-v3-Text-Chat-Store");
let ed = e => (0, y.U)(e, "OverlayTextChatStore"),
  ef = new eu(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX && !Chunk672396.ed ? {} : {
    OVERLAY_MOUNTED: ed(J),
    MESSAGE_CREATE: ed(ei),
    MESSAGE_ACK: ed(es),
    CHANNEL_ACK: ed(el),
    CHANNEL_LOCAL_ACK: ed(el),
    BULK_ACK: ed(ec),
    VOICE_STATE_UPDATES: ed(ea),
    VOICE_CHANNEL_SELECT: ed(ea),
    OVERLAY_TEXT_CHAT_SELECT_CHANNEL: ed(er),
    OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: ed($),
    OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: ed(ee),
    OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: ed(et)
  })