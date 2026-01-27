/** Chunk was on 20941 **/
/** chunk id: 769840, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk562153 = require("./562153.js"),
  Chunk576757 = require("./576757.js"),
  Chunk291594 = require("./291594.jsx"),
  Chunk22869 = require("./22869.jsx"),
  Chunk959 = require("./959.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk199830 = require("./199830.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    entry: t,
    channel: n,
    className: a
  } = e, x = l.useRef(null), y = l.useRef(null), {
    displayParticipants: v,
    participant1: j,
    participant2: C,
    numOtherParticipants: _,
    orderedParticipants: A
  } = (0, u.A)(t), O = [j, C];
  return (0, r.jsxs)("div", {
    className: i()(h.kL, a),
    children: [v.length > 0 ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.A, {
        targetElementRef: x,
        participants: A,
        channel: n,
        children: e => (0, r.jsx)(o.DUT, g(b({
          innerRef: x,
          className: h.vk
        }, e), {
          children: (0, r.jsx)(s.A, {
            maxUsers: 3,
            users: v,
            size: o._3J.SIZE_20,
            hideOverflowCount: true,
            disableUsernameTooltip: true
          })
        }))
      }), (0, r.jsx)(o.hKd, {
        size: 6,
        horizontal: true
      })]
    }) : null, (0, r.jsx)(o.Heading, {
      variant: "text-sm/semibold",
      color: "text-subtle",
      className: i()(h.IY, h.Io),
      scaleFontToUserSetting: true,
      children: p.intl.format(p.t.rH95Gu, {
        user0: c.Ay.getName(n.guild_id, n.id, O[0]),
        user1: c.Ay.getName(n.guild_id, n.id, O[1]),
        countOthers: _,
        name0Hook: (e, t) => (0, r.jsx)(m.A, {
          text: e,
          user: O[0],
          channel: n
        }, t),
        name1Hook: (e, t) => (0, r.jsx)(m.A, {
          text: e,
          user: O[1],
          channel: n
        }, t),
        countOthersHook: (e, t) => (0, r.jsx)(f.A, {
          targetElementRef: y,
          participants: A,
          channel: n,
          children: t => (0, r.jsx)(d.A, g(b({}, t), {
            tag: "span",
            children: (0, r.jsx)(o.Text, {
              ref: y,
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