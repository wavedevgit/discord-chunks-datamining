/** Chunk was on web.js **/
/** chunk id: 670188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => E,
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk184301 = require("./184301.js"),
  Chunk726033 = require("./726033.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk231338 = require("./231338.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = (0, Chunk481060.pxk)(Chunk481060.EFr.SIZE_80),
  b = {
    onMouseDown: Chunk231338.dG,
    onClick: Chunk231338.dG,
    onKeyDown: Chunk231338.dG,
    "aria-controls": true,
    "aria-expanded": false
  },
  y = {
    isShown: false,
    position: true
  };

function O(e) {
  var {
    children: t,
    user: n,
    currentUser: o,
    guildId: s,
    channelId: d,
    messageId: f,
    roleId: p,
    disableUserProfileLink: g,
    newAnalyticsLocations: b,
    appContext: y,
    avatarUrl: O,
    preload: v,
    renderPopout: I,
    onRequestOpen: T,
    onRequestClose: S,
    onClosePopout: A,
    shouldShow: N,
    shouldPreload: C = true
  } = e, R = m(e, ["children", "user", "currentUser", "guildId", "channelId", "messageId", "roleId", "disableUserProfileLink", "newAnalyticsLocations", "appContext", "avatarUrl", "preload", "renderPopout", "onRequestOpen", "onRequestClose", "onClosePopout", "shouldShow", "shouldPreload"]);
  let P = i.useRef(true),
    w = i.useCallback(() => null != v ? v() : (0, l.Z)(n.id, null != O ? O : n.getAvatarURL(s, E), {
      type: "popout",
      withMutualGuilds: n.id !== o.id,
      withMutualFriends: !n.bot && n.id !== o.id,
      guildId: s,
      channelId: d
    }), [v, o, n, O, s, d]),
    D = i.useCallback(e => (P.current = Date.now(), null != I) ? I(e, P.current) : (0, r.jsx)(c.Z, h(_({}, e), {
      user: n,
      currentUser: o,
      guildId: s,
      channelId: d,
      roleId: p,
      messageId: f,
      disableUserProfileLink: g,
      newAnalyticsLocations: b,
      appContext: y,
      openedAt: P.current,
      closePopout: () => {
        e.closePopout(), null == A || A()
      }
    })), [n, o, I, s, d, p, f, g, b, y, A]);
  return (0, r.jsx)(a.yRy, h(_({
    popoutKey: u.Tg,
    shouldShow: N,
    preload: C ? w : true,
    renderPopout: D,
    onRequestOpen: T,
    onRequestClose: S
  }, R), {
    children: t
  }))
}

function v(e) {
  var {
    children: t,
    userId: n,
    user: i
  } = e, a = m(e, ["children", "userId", "user"]);
  let l = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
    c = (0, o.e7)([s.default], () => null != i ? i : s.default.getUser(n));
  return null == c || null == l ? t(b, y) : (0, r.jsx)(O, h(_({}, a), {
    user: c,
    currentUser: l,
    children: t
  }))
}
let I = Chunk73800.memo(v)