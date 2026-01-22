/** Chunk was on web.js **/
/** chunk id: 936044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk643204 = require("./643204.jsx"),
  Chunk759522 = require("./759522.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    message: t,
    channel: n,
    content: i,
    className: d,
    compact: p,
    popoutProps: m,
    hideTimestamp: g = false,
    withFooter: E = false
  } = e, b = h(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]), y = (0, s.Ay)(t);
  return (0, r.jsx)("div", {
    className: a()({
      [u.Ym]: E
    }, u.gD, {
      [u.oE]: p
    }, d),
    children: (0, r.jsx)(o.A, _(f({}, b), {
      className: a()(u.zC, {
        [u.oE]: p
      }),
      childrenMessageContent: (0, r.jsx)(l.Ay, {
        className: a()(u.__invalid_messageContent, {
          [u.oE]: p
        }),
        message: t,
        content: i,
        compact: null != p && p
      }),
      childrenHeader: (0, r.jsx)(c.Ay, f({
        message: t,
        channel: n,
        author: y,
        guildId: null == n ? true : n.guild_id,
        compact: p,
        hideTimestamp: g,
        className: a()(u.wx, {
          [u.oE]: p
        })
      }, null != m ? m : {})),
      compact: p,
      author: y
    }))
  })
}