/** Chunk was on web.js **/
/** chunk id: 707539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D3: () => I,
  JO: () => N,
  TE: () => T,
  aK: () => h.A,
  hs: () => C,
  ju: () => S
}), require("./938796.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk58149 = require("./58149.js"),
  Chunk332456 = require("./332456.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk954571 = require("./954571.js"),
  Chunk477427 = require("./477427.js"),
  Chunk661191 = require("./661191.js"),
  Chunk152007 = require("./152007.js"),
  Chunk469881 = require("./469881.js"),
  Chunk37411 = require("./37411.js"),
  Chunk652215 = require("./652215.js");

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

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
require("./985018.jsx");

function S() {
  (0, o.zV)(g.HAw.THREAD_BROWSER_TAB_CHANGED)
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "Modal";
  (0, o.zV)(g.HAw.OPEN_MODAL, {
    type: "Thread Browser",
    location_section: e
  })
}

function T() {
  d.default.track(g.HAw.OPEN_POPOUT, {
    type: "Active Threads Popout"
  })
}

function C(e, t) {
  var n, r;
  let i = (0, l.C)(e);
  if (null == i) return;
  let s = e.getGuildId(),
    o = e.parent_id,
    c = (0, f.ME)(s, o),
    p = e => (0, a.Lt)(e, m.CP.ALL_MESSAGES) ? f.Qe[g.orn.ALL_MESSAGES] : (0, a.Lt)(e, m.CP.ONLY_MENTIONS) ? f.Qe[g.orn.ONLY_MENTIONS] : (0, a.Lt)(e, m.CP.NO_MESSAGES) ? f.Qe[g.orn.NO_MESSAGES] : f.Qe[g.orn.NULL],
    h = null != (n = _.A.flags(e.id)) ? n : 0,
    E = p(h),
    y = _.A.isMuted(e.id),
    v = (0, f.DZ)(_.A.getMuteConfig(e.id)),
    {
      can_send_message: S,
      parent_channel_type: I
    } = i,
    T = O(b({}, A(i, ["can_send_message", "parent_channel_type"])), {
      channel_id: e.id,
      guild_id: s,
      parent_id: o,
      channel_type: e.type,
      has_interacted_with_thread: (h & m.CP.HAS_INTERACTED) != 0,
      parent_is_muted: u.Ay.isGuildOrCategoryOrChannelMuted(s, o),
      old_thread_notification_setting: E,
      new_thread_notification_setting: null != t.flags ? p(t.flags) : E,
      parent_notification_setting: c.channel_message_notification_settings,
      old_thread_is_muted: y,
      new_thread_is_muted: null != (r = t.muted) ? r : y,
      old_thread_muted_until: v,
      new_thread_muted_until: null != t.mute_config ? (0, f.DZ)(t.mute_config) : v
    });
  d.default.track(g.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, T)
}
let N = e => {
  var t, n;
  let r = (0, s.bG)([c.Ay], () => c.Ay.lastMessageId(e.id)),
    a = null != r ? p.default.extractTimestamp(r) : null,
    o = null == (n = e.threadMetadata) ? true : n.createTimestamp,
    l = null != o ? i()(o).valueOf() : null;
  return null != (t = null != a ? a : l) ? t : p.default.extractTimestamp(e.id)
}