/** Chunk was on web.js **/
/** chunk id: 158508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527908 = require("./527908.js");

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

function m(e) {
  let {
    user: t,
    guildId: f,
    channelId: p,
    onBlock: m,
    onIgnore: g,
    onUnignore: E,
    location: b = "ContextMenu",
    appContext: y = c.IlC.APP
  } = e, {
    id: O
  } = t, v = (0, i.e7)([l.default], () => {
    var e;
    return (null == (e = l.default.getCurrentUser()) ? true : e.id) === O
  }, [O]), {
    isIgnored: I,
    isBlocked: T
  } = (0, i.cj)([s.Z], () => ({
    isIgnored: s.Z.isIgnored(O),
    isBlocked: s.Z.isBlocked(O)
  }), [O]);
  return v || T ? null : (0, r.jsx)(a.sNh, {
    id: "ignore",
    color: "default",
    label: I ? u.intl.string(u.t["8wXU9B"]) : (0, r.jsx)("div", {
      className: d.label,
      children: u.intl.string(u.t.ytCpKs)
    }),
    action: I ? () => {
      null == E || E(), o.Z.unignoreUser(O, null != b ? b : "use-ignore-user-item-web", null != p ? p : true)
    } : () => {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("97652"), n.e("1783")]).then(n.bind(n, 240515));
        return n => (0, r.jsx)(e, h(_({}, n), {
          guildId: f,
          channelId: p,
          user: t,
          onIgnore: g,
          onBlock: m,
          location: b
        }))
      }, {
        contextKey: (0, a.VnL)(y)
      })
    }
  })
}