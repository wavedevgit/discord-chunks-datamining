/** Chunk was on 21738 **/
/** chunk id: 629199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk692617 = require("./692617.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk29160 = require("./29160.jsx"),
  Chunk854378 = require("./854378.jsx"),
  Chunk954921 = require("./954921.jsx"),
  Chunk278539 = require("./278539.js"),
  Chunk571694 = require("./571694.js"),
  Chunk994500 = require("./994500.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk800583 = require("./800583.js"),
  Chunk999068 = require("./999068.js"),
  Chunk122943 = require("./122943.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk518962 = require("./518962.js");
let y = e => {
    let {
      userId: t
    } = e, n = (0, _.y)(t);
    return null == n || 0 === n.length ? (0, r.jsx)(a.Text, {
      className: O.tE,
      variant: "text-sm/normal",
      color: "text-muted",
      children: E.intl.string(E.t.jpY0X5)
    }) : (0, r.jsxs)("div", {
      className: O.I9,
      children: [(0, r.jsx)(l.A, {
        guilds: n,
        maxGuilds: 3,
        size: u.$v.Sizes.SMOL,
        hideOverflowCount: true
      }), (0, r.jsx)(a.Text, {
        className: O.tE,
        variant: "text-sm/normal",
        color: "text-muted",
        children: E.intl.format(E.t.eE3oep, {
          count: n.length
        })
      })]
    })
  },
  I = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function v(e) {
  var t;
  let {
    channel: n,
    otherUser: l,
    active: u
  } = e, m = (0, i.bG)([o.A], () => o.A.useReducedMotion), _ = (0, i.bG)([g.A], () => null == l ? null : g.A.getNickname(l.id)), v = !m && u, S = (0, A.j)(n), {
    avatarDecorationSrc: C
  } = (0, p.A)({
    user: l,
    size: (0, d.Te)(a._3J.SIZE_40),
    onlyAnimateOnHoverOrFocus: true
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      className: O.my,
      src: (0, h.Y)(n, 40, v),
      avatarDecoration: C,
      size: a._3J.SIZE_40,
      "aria-label": null != (t = null == l ? true : l.username) ? t : E.intl.string(E.t["30mdIx"])
    }), (0, r.jsxs)("div", {
      className: O.yt,
      children: [(0, r.jsxs)("div", {
        className: O.rU,
        children: [(0, r.jsx)(s.A, {
          nick: _,
          user: l,
          showAccountIdentifier: true,
          className: O.I8,
          usernameClass: O.Xh,
          discriminatorClass: null != f.Ay.getGlobalName(l) ? O.vl : O.D2
        }), (0, r.jsx)(a.Text, {
          className: O.L7,
          color: "text-muted",
          variant: "text-xs/normal",
          children: S
        })]
      }), (0, r.jsx)(c.A, {
        hoverText: (0, r.jsx)(b.A, {
          channel: n
        }),
        forceHover: u,
        children: (0, r.jsx)(y, {
          userId: l.id
        })
      })]
    })]
  })
}