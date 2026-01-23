/** Chunk was on web.js **/
/** chunk id: 302291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => E,
  d: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk552691 = require("./552691.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
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
      p(e, t, n[t])
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

function g(e, t) {
  let n = i.useRef(null);
  return i.useCallback(i => (s, o) => {
    let l = u.Ay.getApplicationIconURL({
        id: i.id,
        icon: i.icon,
        bot: i.bot,
        botIconFirst: true
      }),
      {
        bot: d
      } = i;
    return null == d ? s : (0, r.jsx)(c.A, {
      targetElementRef: n,
      userId: d.id,
      avatarUrl: l,
      guildId: e.guild_id,
      channelId: e.id,
      messageId: t.id,
      clickTrap: true,
      children: e => (0, r.jsx)(a.MzZ, m(_({}, e), {
        ref: n,
        children: s
      }))
    }, o)
  }, [e, t.id])
}

function E(e) {
  let {
    message: t,
    channel: i,
    compact: a
  } = e, c = (0, s.Ay)(t), u = t.application, p = (0, o.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), _ = g(i, t);
  return (0, r.jsx)(l.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: a,
    children: (0, d.eu)({
      application: u,
      username: c.nick,
      usernameHook: p(c),
      applicationNameHook: null != u ? _(u) : f.tEg
    })
  })
}

function y(e) {
  let {
    message: t,
    channel: i,
    compact: a
  } = e, c = (0, s.Ay)(t), u = t.application, p = (0, o.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), _ = g(i, t);
  return (0, r.jsx)(l.A, {
    icon: n(884797),
    timestamp: t.timestamp,
    compact: a,
    children: (0, d.A0)({
      application: u,
      username: c.nick,
      usernameHook: p(c),
      applicationNameHook: null != u ? _(u) : f.tEg
    })
  })
}