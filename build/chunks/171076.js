/** Chunk was on web.js **/
/** chunk id: 171076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk547 = require("./547.js"),
  Chunk742984 = require("./742984.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk543465 = require("./543465.js"),
  Chunk41984 = require("./41984.js"),
  Chunk956753 = require("./956753.js"),
  Chunk833551 = require("./833551.js"),
  Chunk395011 = require("./395011.js"),
  Chunk222506 = require("./222506.js"),
  Chunk145567 = require("./145567.js"),
  Chunk187667 = require("./187667.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = 1e3,
  y = e => (0, d.U)(e, "OverlayTextChatAutomaticLifecycleManager"),
  b = new Map,
  O = null;

function v(e) {
  if (null == e.timestamp) return Date.now();
  let t = new Date(e.timestamp).getTime();
  return Number.isFinite(t) ? t : Date.now()
}

function A(e) {
  let {
    channelId: t,
    guildId: n,
    messageId: r
  } = e;
  if (!f.default.isAnyOverlayRendering() || null == s.A.getChannel(t) || l.A.isReady(t)) return;
  let a = b.get(t);
  null != a && clearTimeout(a);
  let o = setTimeout(() => {
    b.delete(t), l.A.isReady(t) || i.A.fetchMessages({
      guildId: n,
      channelId: t,
      messageId: r
    })
  }, E);
  b.set(t, o)
}

function I() {
  var e, t, n;
  if (!f.default.isAnyOverlayRendering()) return;
  let r = m.A.getSelectedChannelId();
  if (null == r || r === O) return;
  let i = s.A.getChannel(r);
  null != i && (0, o.pQ)(i.type) && (O = r, A({
    channelId: r,
    guildId: null != (e = null != (t = null == i || null == (n = i.getGuildId) ? true : n.call(i)) ? t : null == i ? true : i.guild_id) ? e : null,
    messageId: null
  }))
}

function S() {
  I()
}

function T(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (!f.default.isAnyOverlayRendering()) return;
  let r = s.A.getChannel(t);
  if (null == r) return;
  let i = m.A.getSelectedChannelId() === t;
  if (r.isPrivate()) {
    if (c.Ay.isChannelMuted(null, t)) return
  } else if (!i && (c.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, true, true))) return;
  let o = r.isPrivate() ? u.B9.INCOMING_DM_MESSAGE : u.B9.INCOMING_MENTION_MESSAGE,
    l = v(n);
  (0, h.Ml)({
    channelId: t,
    source: o,
    lastActivityAtMs: l,
    lastMessageId: n.id
  })
}

function C(e) {
  var t, n, r;
  let {
    channelId: i,
    lastMessageId: a
  } = e, o = s.A.getChannel(i);
  A({
    channelId: i,
    guildId: null != (t = null != (n = null == o || null == (r = o.getGuildId) ? true : r.call(o)) ? n : null == o ? true : o.guild_id) ? t : null,
    messageId: null != a ? a : null
  })
}

function N(e) {
  let {
    channelId: t,
    guildId: n,
    messageId: r
  } = e;
  A({
    channelId: t,
    guildId: n,
    messageId: r
  })
}

function w(e) {
  let {
    channelId: t
  } = e, n = b.get(t);
  null != n && (clearTimeout(n), b.delete(t)), setTimeout(() => {
    var e, n, r;
    let i = m.A.getSelectedChannelId();
    if (null == i || i === t) return;
    let a = s.A.getChannel(i);
    A({
      channelId: i,
      guildId: null != (e = null != (n = null == a || null == (r = a.getGuildId) ? true : r.call(a)) ? n : null == a ? true : a.guild_id) ? e : null,
      messageId: null
    })
  }, 0)
}

function R(e) {
  var t, n, r;
  let {
    minimized: i
  } = e;
  if (!i) return;
  let a = m.A.getSelectedChannelId();
  if (null == a) return;
  let o = s.A.getChannel(a);
  A({
    channelId: a,
    guildId: null != (t = null != (n = null == o || null == (r = o.getGuildId) ? true : r.call(o)) ? n : null == o ? true : o.guild_id) ? t : null,
    messageId: null
  })
}

function P(e) {
  let {
    channelId: t
  } = e;
  if (!f.default.isAnyOverlayRendering() || null == t) return;
  let n = p.A.getTargetPID(),
    r = p.A.isFocused(n),
    i = _.A.isInputLocked(n);
  if (!r || i) return;
  let a = s.A.getChannel(t);
  null != a && (0, o.pQ)(a.type) && m.A.getSelectedChannelId() !== t && (0, h.D$)({
    target: {
      kind: h.bB.CHANNEL,
      channelId: t,
      guildId: a.getGuildId(),
      messageId: null
    },
    source: u.B9.AUTOMATIC_CHANNEL_SELECT,
    widgetType: null
  })
}
class D extends Chunk439372.A {
  constructor(...e) {
    super(...e), g(this, "actions", {
      CHANNEL_SELECT: y(P),
      SIDEBAR_VIEW_CHANNEL: y(P),
      MESSAGE_CREATE: y(T),
      VOICE_STATE_UPDATES: y(S),
      VOICE_CHANNEL_SELECT: y(S),
      OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: y(C),
      OVERLAY_TEXT_CHAT_SELECT_CHANNEL: y(N),
      OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: y(w),
      OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: y(R)
    })
  }
}
let L = new D