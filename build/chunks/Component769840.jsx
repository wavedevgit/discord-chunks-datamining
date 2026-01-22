/** Chunk was on web.js **/
/** chunk id: 769840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk562153 = require("./562153.js"),
  Chunk576757 = require("./576757.js"),
  Chunk291594 = require("./291594.jsx"),
  Chunk22869 = require("./22869.jsx"),
  Chunk959 = require("./959.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk199830 = require("./199830.js");

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
    participant2: A,
    numOtherParticipants: v,
    orderedParticipants: S
  } = (0, u.A)(t), I = [O, A];
  return (0, r.jsxs)("div", {
    className: s()(h.kL, a),
    children: [y.length > 0 ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.A, {
        targetElementRef: m,
        participants: S,
        channel: n,
        children: e => (0, r.jsx)(l.DUT, b(g({
          innerRef: m,
          className: h.vk
        }, e), {
          children: (0, r.jsx)(o.A, {
            maxUsers: 3,
            users: y,
            size: l._3J.SIZE_20,
            hideOverflowCount: true,
            disableUsernameTooltip: true
          })
        }))
      }), (0, r.jsx)(l.hKd, {
        size: 6,
        horizontal: true
      })]
    }) : null, (0, r.jsx)(l.Heading, {
      variant: "text-sm/semibold",
      color: "text-subtle",
      className: s()(h.IY, h.Io),
      scaleFontToUserSetting: true,
      children: _.intl.format(_.t.rH95Gu, {
        user0: c.Ay.getName(n.guild_id, n.id, I[0]),
        user1: c.Ay.getName(n.guild_id, n.id, I[1]),
        countOthers: v,
        name0Hook: (e, t) => (0, r.jsx)(f.A, {
          text: e,
          user: I[0],
          channel: n
        }, t),
        name1Hook: (e, t) => (0, r.jsx)(f.A, {
          text: e,
          user: I[1],
          channel: n
        }, t),
        countOthersHook: (e, t) => (0, r.jsx)(p.A, {
          targetElementRef: E,
          participants: S,
          channel: n,
          children: t => (0, r.jsx)(d.A, b(g({}, t), {
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