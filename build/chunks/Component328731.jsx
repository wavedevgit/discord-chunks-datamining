/** Chunk was on 30243 **/
/** chunk id: 328731, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk318374 = require("./318374.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk192918 = require("./192918.js"),
  Chunk256139 = require("./256139.jsx"),
  Chunk91907 = require("./91907.jsx"),
  Chunk866040 = require("./866040.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817120 = require("./817120.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function j(e) {
  let {
    entry: t,
    channel: r,
    className: i
  } = e, j = l.useRef(null), g = l.useRef(null), {
    displayParticipants: h,
    participant1: v,
    participant2: P,
    numOtherParticipants: x,
    orderedParticipants: S
  } = (0, u.Z)(t), w = [v, P];
  return (0, n.jsxs)("div", {
    className: o()(m.container, i),
    children: [h.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(f.Z, {
        targetElementRef: j,
        participants: S,
        channel: r,
        children: e => (0, n.jsx)(a.P3F, y(O({
          innerRef: j,
          className: m.clickable
        }, e), {
          children: (0, n.jsx)(c.Z, {
            maxUsers: 3,
            users: h,
            size: a.EFr.SIZE_20,
            hideOverflowCount: true,
            disableUsernameTooltip: true
          })
        }))
      }), (0, n.jsx)(a.LZC, {
        size: 6,
        horizontal: true
      })]
    }) : null, (0, n.jsx)(a.X6q, {
      variant: "text-sm/semibold",
      color: "text-secondary",
      className: o()(m.truncatedText, m.usersHeader),
      scaleFontToUserSetting: true,
      children: b.intl.format(b.t.rH95Gh, {
        user0: s.ZP.getName(r.guild_id, r.id, w[0]),
        user1: s.ZP.getName(r.guild_id, r.id, w[1]),
        countOthers: x,
        name0Hook: (e, t) => (0, n.jsx)(p.Z, {
          text: e,
          user: w[0],
          channel: r
        }, t),
        name1Hook: (e, t) => (0, n.jsx)(p.Z, {
          text: e,
          user: w[1],
          channel: r
        }, t),
        countOthersHook: (e, t) => (0, n.jsx)(f.Z, {
          targetElementRef: g,
          participants: S,
          channel: r,
          children: t => (0, n.jsx)(d.Z, y(O({}, t), {
            tag: "span",
            children: (0, n.jsx)(a.Text, {
              ref: g,
              variant: "text-sm/semibold",
              color: "text-primary",
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