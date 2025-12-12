/** Chunk was on web.js **/
/** chunk id: 890410, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk930282 = require("./930282.jsx"),
  Chunk464891 = require("./464891.jsx"),
  Chunk935950 = require("./935950.js");

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

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  var {
    message: t,
    channel: n,
    content: i,
    className: d,
    compact: p,
    popoutProps: h,
    hideTimestamp: g = false,
    withFooter: E = false
  } = e, b = m(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]);
  let y = (0, o.ZP)(t);
  return (0, r.jsx)("div", {
    className: a()({
      [u.withFooter]: E
    }, u.embedCard, {
      [u.compact]: p
    }, d),
    children: (0, r.jsx)(s.Z, _(f({}, b), {
      className: a()(u.messageContainer, {
        [u.compact]: p
      }),
      childrenMessageContent: (0, r.jsx)(l.ZP, {
        className: a()(u.__invalid_messageContent, {
          [u.compact]: p
        }),
        message: t,
        content: i,
        compact: null != p && p
      }),
      childrenHeader: (0, r.jsx)(c.ZP, f({
        message: t,
        channel: n,
        author: y,
        guildId: null == n ? true : n.guild_id,
        compact: p,
        hideTimestamp: g,
        className: a()(u.header, {
          [u.compact]: p
        })
      }, null != h ? h : {})),
      compact: p,
      author: y
    }))
  })
}