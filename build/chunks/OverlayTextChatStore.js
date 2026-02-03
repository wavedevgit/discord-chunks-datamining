/** Chunk was on web.js **/
/** chunk id: 187667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => el
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk380335 = require("./380335.js"),
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
  P = false,
  D = null,
  L = 3,
  x = 2 * Chunk927813.A.Millis.HOUR;

function M(e) {
  let t = l.A.getChannel(e),
    n = null == t ? true : t.lastMessageId;
  return null != n ? m.default.extractTimestamp(n) : Date.now()
}

function j(e) {
  var t;
  let n = l.A.getChannel(e);
  return null != (t = null == n ? true : n.isPrivate()) && t
}

function k(e) {
  return d.Ay.getMentionCount(e)
}

function U(e) {
  return d.Ay.hasUnread(e)
}

function G(e) {
  return p.Ay.isChannelMuted(null, e)
}

function V(e, t, n, r, i) {
  return {
    channelId: e,
    source: t,
    addedOnMs: n,
    lastActivityAtMs: r,
    lastMessageId: i,
    isPrivateChannel: j(e),
    mentionCount: k(e),
    hasUnread: U(e)
  }
}

function F(e) {
  let t = f.A.getChannelId();
  if (null == t || null == l.A.getChannel(t)) returnfalse;
  if (w = t, !N.has(t)) {
    var n, r;
    let i = M(t),
      a = null != (n = null == (r = l.A.getChannel(t)) ? true : r.lastMessageId) ? n : true,
      o = V(t, g.B9.MANUAL, e, i, a);
    N.set(t, o)
  }
  returntrue
}

function B(e) {
  let t = _.A.getPrivateChannelIds(),
    n = 0;
  for (let r of t) {
    if (n >= L) return;
    if (N.has(r)) continue;
    let t = l.A.getChannel(r);
    if (null == t || !t.isPrivate() || G(r) || s.A.isMessageRequest(r)) continue;
    let i = t.lastMessageId;
    if (null == i) continue;
    let a = m.default.extractTimestamp(i);
    if (e - a > x) continue;
    let o = V(r, g.B9.MANUAL, e, a, i);
    N.set(r, o), n++
  }
}

function H() {
  var e;
  let t = Date.now();
  N.clear(), w = null, R = t, P = false, D = null != (e = u.A.getChannelId()) ? e : null, F(t), B(t), K()
}

function Y() {
  var e;
  return null != (e = u.A.getChannelId()) ? e : null
}

function W(e) {
  if (null == e) {
    var t, n;
    return null != (t = null == (n = N.values()[0]) ? true : n.channelId) ? t : null
  }
  for (let t of N.values())
    if (t.channelId !== e) return t.channelId;
  return null
}

function K() {
  let e = Y();
  return null != e && !P && null == w && (w = e, true)
}

function z() {
  let e = Y();
  return null == e ? (D = null, !!P && (P = false, true)) : D !== e && (D = e, !!P && (P = false, true))
}

function q(e) {
  var t, n;
  let {
    channelId: r,
    source: i,
    lastActivityAtMs: a,
    lastMessageId: o
  } = e, s = null != (t = N.get(r)) ? t : null, l = null == s ? a : Math.max(s.lastActivityAtMs, a), c = null != o ? o : null == s ? true : s.lastMessageId, u = V(r, i, null != (n = null == s ? true : s.addedOnMs) ? n : a, l, c);
  return N.set(r, u)
}

function Z(e) {
  return null == R && (H(), true)
}

function Q(e) {
  let t = q({
      channelId: e.channelId,
      source: e.source,
      lastActivityAtMs: e.lastActivityAtMs,
      lastMessageId: e.lastMessageId
    }),
    n = false;
  return null == w && (w = e.channelId, n = true), t || n
}

function X(e) {
  let t = N.delete(e.channelId),
    n = false;
  if (w === e.channelId) {
    let e = Y(),
      t = W(e);
    w = null != t ? t : P || null == e ? null : e, n = true
  }
  return t || n
}

function J(e) {
  let {
    minimized: t
  } = e;
  if (P === t) returnfalse;
  if (P = t, !t) return K(), true;
  let n = Y();
  return null != n && w === n && (w = W(n)), true
}

function $(e, t) {
  if (null == e) returnfalse;
  null == R && (R = Date.now()), w !== e && (w = e);
  let n = Y();
  if (null != n && e === n && P && (P = false), null != w && !N.has(w)) {
    var r, i;
    let e = Date.now(),
      n = M(w),
      a = null != (r = null == (i = l.A.getChannel(w)) ? true : i.lastMessageId) ? r : true,
      o = V(w, t, e, n, a);
    N.set(w, o)
  }
  returntrue
}

function ee(e) {
  let {
    channelId: t,
    source: n
  } = e;
  return $(null != t ? t : null, n)
}

function et() {
  let e = z(),
    t = K();
  return e || t
}

function en(e) {
  let t = N.get(e);
  if (null == t) returnfalse;
  let n = d.Ay.getMentionCount(e),
    r = d.Ay.hasUnread(e);
  return (t.mentionCount !== n || t.hasUnread !== r) && (N.set(e, I(v({}, t), {
    mentionCount: n,
    hasUnread: r
  })), true)
}

function er(e) {
  let {
    channelId: t
  } = e;
  return en(t)
}

function ei(e) {
  let {
    channelId: t
  } = e;
  return en(t)
}

function ea(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      channelId: e
    }
    of t) en(e) && (n = true);
  return n
}
class eo extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(y.A, l.A, c.A, s.A, u.A, _.A, d.Ay, f.A, p.Ay), H()
  }
  getSessionEntries(e) {
    return [null != e ? N.values(e) : N.values(), N.version]
  }
  getSelectedChannelId() {
    return w
  }
  getVoiceChatMinimized() {
    return P
  }
}
O(eo, "displayName", "Overlay-v3-Text-Chat-Store");
let es = e => (0, E.U)(e, "OverlayTextChatStore"),
  el = new eo(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX && !Chunk672396.ed ? {} : {
    OVERLAY_MOUNTED: es(Z),
    MESSAGE_ACK: es(er),
    CHANNEL_ACK: es(ei),
    CHANNEL_LOCAL_ACK: es(ei),
    BULK_ACK: es(ea),
    VOICE_STATE_UPDATES: es(et),
    VOICE_CHANNEL_SELECT: es(et),
    OVERLAY_TEXT_CHAT_SELECT_CHANNEL: es(ee),
    OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: es(Q),
    OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: es(X),
    OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: es(J)
  })