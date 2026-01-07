/** Chunk was on web.js **/
/** chunk id: 91159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A_: () => I,
  Ok: () => N,
  U4: () => T,
  Ye: () => m.Z,
  ZJ: () => A,
  q: () => C
}), require("./997841.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk731429 = require("./731429.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk626135 = require("./626135.js"),
  Chunk621600 = require("./621600.js"),
  Chunk709054 = require("./709054.js"),
  Chunk569471 = require("./569471.js"),
  Chunk814391 = require("./814391.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./388032.jsx");

function I() {
  (0, s.yw)(g.rMx.THREAD_BROWSER_TAB_CHANGED)
}

function T() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "Modal";
  (0, s.yw)(g.rMx.OPEN_MODAL, {
    type: "Thread Browser",
    location_section: e
  })
}

function C() {
  d.default.track(g.rMx.OPEN_POPOUT, {
    type: "Active Threads Popout"
  })
}

function A(e, t) {
  var n, r;
  let i = (0, l.K)(e);
  if (null == i) return;
  let o = e.getGuildId(),
    s = e.parent_id,
    c = (0, f.I)(o, s),
    p = e => (0, a.yE)(e, h.iN.ALL_MESSAGES) ? f.$R[g.bL.ALL_MESSAGES] : (0, a.yE)(e, h.iN.ONLY_MENTIONS) ? f.$R[g.bL.ONLY_MENTIONS] : (0, a.yE)(e, h.iN.NO_MESSAGES) ? f.$R[g.bL.NO_MESSAGES] : f.$R[g.bL.NULL],
    m = null != (n = _.Z.flags(e.id)) ? n : 0,
    E = p(m),
    y = _.Z.isMuted(e.id),
    S = (0, f.sK)(_.Z.getMuteConfig(e.id)),
    {
      can_send_message: I,
      parent_channel_type: T
    } = i,
    C = O(b({}, v(i, ["can_send_message", "parent_channel_type"])), {
      channel_id: e.id,
      guild_id: o,
      parent_id: s,
      channel_type: e.type,
      has_interacted_with_thread: (m & h.iN.HAS_INTERACTED) != 0,
      parent_is_muted: u.ZP.isGuildOrCategoryOrChannelMuted(o, s),
      old_thread_notification_setting: E,
      new_thread_notification_setting: null != t.flags ? p(t.flags) : E,
      parent_notification_setting: c.channel_message_notification_settings,
      old_thread_is_muted: y,
      new_thread_is_muted: null != (r = t.muted) ? r : y,
      old_thread_muted_until: S,
      new_thread_muted_until: null != t.mute_config ? (0, f.sK)(t.mute_config) : S
    });
  d.default.track(g.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, C)
}
let N = e => {
  var t, n;
  let r = (0, o.e7)([c.ZP], () => c.ZP.lastMessageId(e.id)),
    a = null != r ? p.default.extractTimestamp(r) : null,
    s = null == (t = e.threadMetadata) ? true : t.createTimestamp,
    l = null != s ? i()(s).valueOf() : null;
  return null != (n = null != a ? a : l) ? n : p.default.extractTimestamp(e.id)
}