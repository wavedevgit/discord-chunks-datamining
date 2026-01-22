/** Chunk was on web.js **/
/** chunk id: 342296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v,
  S: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk454719 = require("./454719.js"),
  Chunk589022 = require("./589022.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk818348 = require("./818348.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = (0, Chunk397927.FT9)(Chunk397927._3J.SIZE_80),
  b = {
    onMouseDown: Chunk818348.tE,
    onClick: Chunk818348.tE,
    onKeyDown: Chunk818348.tE,
    "aria-controls": true,
    "aria-expanded": false
  },
  y = {
    isShown: false,
    position: true
  };

function O(e) {
  let {
    children: t,
    user: n,
    currentUser: a,
    guildId: o,
    channelId: d,
    messageId: f,
    roleId: _,
    disableUserProfileLink: g,
    newAnalyticsLocations: b,
    appContext: y,
    avatarUrl: O,
    preload: A,
    renderPopout: v,
    onRequestOpen: S,
    onRequestClose: I,
    onClosePopout: T,
    shouldShow: C,
    shouldPreload: N = true
  } = e, R = m(e, ["children", "user", "currentUser", "guildId", "channelId", "messageId", "roleId", "disableUserProfileLink", "newAnalyticsLocations", "appContext", "avatarUrl", "preload", "renderPopout", "onRequestOpen", "onRequestClose", "onClosePopout", "shouldShow", "shouldPreload"]), w = i.useRef(true), P = i.useCallback(() => null != A ? A() : (0, l.A)(n.id, null != O ? O : n.getAvatarURL(o, E), {
    type: "popout",
    withMutualGuilds: n.id !== a.id,
    withMutualFriends: !n.bot && n.id !== a.id,
    guildId: o,
    channelId: d
  }), [A, a, n, O, o, d]), D = i.useCallback(e => (w.current = Date.now(), null != v) ? v(e, w.current) : (0, r.jsx)(c.A, h(p({}, e), {
    user: n,
    currentUser: a,
    guildId: o,
    channelId: d,
    roleId: _,
    messageId: f,
    disableUserProfileLink: g,
    newAnalyticsLocations: b,
    appContext: y,
    openedAt: w.current,
    closePopout: () => {
      e.closePopout(), null == T || T()
    }
  })), [n, a, v, o, d, _, f, g, b, y, T]);
  return (0, r.jsx)(s.YNO, h(p({
    popoutKey: u.KM,
    shouldShow: C,
    preload: N ? P : true,
    renderPopout: D,
    onRequestOpen: S,
    onRequestClose: I
  }, R), {
    children: t
  }))
}

function A(e) {
  let {
    children: t,
    userId: n,
    user: i
  } = e, s = m(e, ["children", "userId", "user"]), l = (0, a.bG)([o.default], () => o.default.getCurrentUser()), c = (0, a.bG)([o.default], () => null != i ? i : o.default.getUser(n));
  return null == c || null == l ? t(b, y) : (0, r.jsx)(O, h(p({}, s), {
    user: c,
    currentUser: l,
    children: t
  }))
}
let v = Chunk64700.memo(A)