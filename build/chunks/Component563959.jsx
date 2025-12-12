/** Chunk was on web.js **/
/** chunk id: 563959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => E,
  e: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk693912 = require("./693912.js"),
  Chunk981631 = require("./981631.js");

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

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  let n = i.useRef(null);
  return i.useCallback(i => (a, s) => {
    let l = u.ZP.getApplicationIconURL({
        id: i.id,
        icon: i.icon,
        bot: i.bot,
        botIconFirst: true
      }),
      {
        bot: d
      } = i;
    return null == d ? a : (0, r.jsx)(c.Z, {
      targetElementRef: n,
      userId: d.id,
      avatarUrl: l,
      guildId: e.guild_id,
      channelId: e.id,
      messageId: t.id,
      clickTrap: true,
      children: e => (0, r.jsx)(o.Anchor, h(_({}, e), {
        ref: n,
        children: a
      }))
    }, s)
  }, [e, t.id])
}

function E(e) {
  let {
    message: t,
    channel: i,
    compact: o
  } = e, c = (0, a.ZP)(t), u = t.application, p = (0, s.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), _ = g(i, t);
  return (0, r.jsx)(l.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: o,
    children: (0, d.DS)({
      application: u,
      username: c.nick,
      usernameHook: p(c),
      applicationNameHook: null != u ? _(u) : f.dG4
    })
  })
}

function b(e) {
  let {
    message: t,
    channel: i,
    compact: o
  } = e, c = (0, a.ZP)(t), u = t.application, p = (0, s.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), _ = g(i, t);
  return (0, r.jsx)(l.Z, {
    icon: n(474019),
    timestamp: t.timestamp,
    compact: o,
    children: (0, d.nh)({
      application: u,
      username: c.nick,
      usernameHook: p(c),
      applicationNameHook: null != u ? _(u) : f.dG4
    })
  })
}