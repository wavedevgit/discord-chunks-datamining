/** Chunk was on web.js **/
/** chunk id: 670188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => E,
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p(e) {
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

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = (0, Chunk481060.dcp)(Chunk481060.EFr.SIZE_80),
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
    currentUser: a,
    guildId: s,
    channelId: d,
    messageId: f,
    roleId: _,
    disableUserProfileLink: g,
    newAnalyticsLocations: b,
    appContext: y,
    avatarUrl: O,
    preload: v,
    renderPopout: S,
    onRequestOpen: I,
    onRequestClose: T,
    onClosePopout: A,
    shouldShow: C,
    shouldPreload: N = true
  } = e, P = h(e, ["children", "user", "currentUser", "guildId", "channelId", "messageId", "roleId", "disableUserProfileLink", "newAnalyticsLocations", "appContext", "avatarUrl", "preload", "renderPopout", "onRequestOpen", "onRequestClose", "onClosePopout", "shouldShow", "shouldPreload"]);
  let R = i.useRef(true),
    D = i.useCallback(() => null != v ? v() : (0, l.Z)(n.id, null != O ? O : n.getAvatarURL(s, E), {
      type: "popout",
      withMutualGuilds: n.id !== a.id,
      withMutualFriends: !n.bot && n.id !== a.id,
      guildId: s,
      channelId: d
    }), [v, a, n, O, s, d]),
    w = i.useCallback(e => (R.current = Date.now(), null != S) ? S(e, R.current) : (0, r.jsx)(c.Z, m(p({}, e), {
      user: n,
      currentUser: a,
      guildId: s,
      channelId: d,
      roleId: _,
      messageId: f,
      disableUserProfileLink: g,
      newAnalyticsLocations: b,
      appContext: y,
      openedAt: R.current,
      closePopout: () => {
        e.closePopout(), null == A || A()
      }
    })), [n, a, S, s, d, _, f, g, b, y, A]);
  return (0, r.jsx)(o.yRy, m(p({
    popoutKey: u.Tg,
    shouldShow: C,
    preload: N ? D : true,
    renderPopout: w,
    onRequestOpen: I,
    onRequestClose: T
  }, P), {
    children: t
  }))
}

function v(e) {
  var {
    children: t,
    userId: n,
    user: i
  } = e, o = h(e, ["children", "userId", "user"]);
  let l = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
    c = (0, a.e7)([s.default], () => null != i ? i : s.default.getUser(n));
  return null == c || null == l ? t(b, y) : (0, r.jsx)(O, m(p({}, o), {
    user: c,
    currentUser: l,
    children: t
  }))
}
let S = Chunk473749.memo(v)