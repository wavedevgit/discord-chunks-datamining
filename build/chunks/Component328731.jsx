/** Chunk was on web.js **/
/** chunk id: 328731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk5192 = require("./5192.js"),
  Chunk192918 = require("./192918.js"),
  Chunk256139 = require("./256139.jsx"),
  Chunk91907 = require("./91907.jsx"),
  Chunk866040 = require("./866040.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk617987 = require("./617987.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    entry: t,
    channel: n,
    className: a
  } = e, m = i.useRef(null), E = i.useRef(null), {
    displayParticipants: y,
    participant1: O,
    participant2: v,
    numOtherParticipants: S,
    orderedParticipants: I
  } = (0, u.Z)(t), T = [O, v];
  return (0, r.jsxs)("div", {
    className: o()(h.container, a),
    children: [y.length > 0 ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.Z, {
        targetElementRef: m,
        participants: I,
        channel: n,
        children: e => (0, r.jsx)(l.P3F, b(g({
          innerRef: m,
          className: h.clickable
        }, e), {
          children: (0, r.jsx)(s.Z, {
            maxUsers: 3,
            users: y,
            size: l.EFr.SIZE_20,
            hideOverflowCount: true,
            disableUsernameTooltip: true
          })
        }))
      }), (0, r.jsx)(l.LZC, {
        size: 6,
        horizontal: true
      })]
    }) : null, (0, r.jsx)(l.Heading, {
      variant: "text-sm/semibold",
      color: "text-subtle",
      className: o()(h.truncatedText, h.usersHeader),
      scaleFontToUserSetting: true,
      children: _.intl.format(_.t.rH95Gu, {
        user0: c.ZP.getName(n.guild_id, n.id, T[0]),
        user1: c.ZP.getName(n.guild_id, n.id, T[1]),
        countOthers: S,
        name0Hook: (e, t) => (0, r.jsx)(f.Z, {
          text: e,
          user: T[0],
          channel: n
        }, t),
        name1Hook: (e, t) => (0, r.jsx)(f.Z, {
          text: e,
          user: T[1],
          channel: n
        }, t),
        countOthersHook: (e, t) => (0, r.jsx)(p.Z, {
          targetElementRef: E,
          participants: I,
          channel: n,
          children: t => (0, r.jsx)(d.Z, b(g({}, t), {
            tag: "span",
            children: (0, r.jsx)(l.Text, {
              ref: E,
              variant: "text-sm/semibold",
              color: "text-strong",
              lineClamp: 1,
              scaleFontToUserSetting: true,
              children: e
            })
          }))
        }, t)
      })
    })]
  })
}