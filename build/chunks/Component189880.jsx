/** Chunk was on web.js **/
/** chunk id: 189880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk158954 = require("./158954.js"),
  Chunk97808 = require("./97808.jsx"),
  Chunk571356 = require("./571356.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk716965 = require("./716965.js"),
  Chunk647053 = require("./647053.js"),
  Chunk566615 = require("./566615.js"),
  Chunk652215 = require("./652215.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk21998 = require("./21998.js");

function E(e) {
  let {
    user: t,
    application: n,
    bot: E,
    accountScopes: y,
    showLogout: b,
    location: O,
    scopes: v
  } = e, A = (0, p.i)(), I = u.Ay.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), S = u.Ay.getUserAvatarURL(t), T = i.useMemo(() => v.some(e => (0, f.RM)(e)) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.E, {
      variant: "text-lg/normal",
      color: "text-default",
      children: m.intl.string(m.t.uT1CPa)
    }), (0, r.jsx)(o.DZT, {
      variant: "heading-xxl/bold",
      color: "text-strong",
      children: n.name
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.E, {
      variant: "text-lg/bold",
      color: "text-strong",
      children: [n.name, null != E ? (0, r.jsx)(c.A, {
        className: g.AO,
        verified: null != E.public_flags && (0, a.Lt)(E.public_flags, _.nhx.VERIFIED_BOT)
      }) : null]
    }), y.length > 0 ? (0, r.jsx)(l.E, {
      variant: "text-md/normal",
      color: "text-default",
      children: m.intl.string(m.t.jFbDnJ)
    }) : (0, r.jsx)(l.E, {
      variant: "text-md/normal",
      color: "text-default",
      children: m.intl.string(m.t["X+Fdpo"])
    })]
  }), [y.length, n, E, v]);
  return (0, r.jsxs)("header", {
    id: A,
    className: g.wx,
    children: [(0, r.jsxs)("div", {
      className: g.Y,
      children: [(0, r.jsx)(s.eu, {
        className: g.my,
        src: I,
        size: h._3.SIZE_80,
        "aria-label": n.name
      }), (0, r.jsxs)("div", {
        className: g.I5,
        children: [(0, r.jsx)("div", {
          className: g.pw
        }), (0, r.jsx)("div", {
          className: g.pw
        }), (0, r.jsx)("div", {
          className: g.pw
        })]
      }), (0, r.jsx)(s.eu, {
        className: g.my,
        src: S,
        size: h._3.SIZE_80,
        "aria-label": t.username
      })]
    }), T, b ? (0, r.jsx)("div", {
      className: g.Ny,
      children: (0, r.jsxs)(l.E, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [m.intl.format(m.t.qRvpYU, {
          userHook: () => (0, r.jsxs)(l.E, {
            className: g.ZD,
            variant: "text-sm/normal",
            children: [t.username, !t.hasUniqueUsername() && (0, r.jsx)(l.E, {
              className: g.Jb,
              variant: "text-sm/normal",
              children: "#".concat(t.discriminator)
            })]
          }, t.id)
        }), (0, r.jsx)(o.DUT, {
          tag: "a",
          className: g.Pg,
          onClick: () => (0, d.Vh)(O, "oauth2_logout"),
          children: m.intl.string(m.t["yV/hjC"])
        })]
      })
    }) : null]
  })
}