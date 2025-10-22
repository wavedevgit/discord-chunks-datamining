/** Chunk was on web.js **/
/** chunk id: 41259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk489863 = require("./489863.js"),
  Chunk713938 = require("./713938.js"),
  Chunk314583 = require("./314583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk972731 = require("./972731.js");

function E(e) {
  let {
    user: t,
    application: n,
    bot: E,
    accountScopes: b,
    showLogout: y,
    location: O,
    scopes: v
  } = e, I = (0, _.X)(), T = c.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), S = c.ZP.getUserAvatarURL(t), A = i.useMemo(() => v.some(e => (0, f.sg)(e)) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.x, {
      variant: "text-lg/normal",
      color: "header-secondary",
      children: m.intl.string(m.t.uT1CPa)
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-xxl/bold",
      color: "header-primary",
      children: n.name
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.x, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: [n.name, null != E ? (0, r.jsx)(l.Z, {
        className: g.botTag,
        verified: null != E.public_flags && (0, u.yE)(E.public_flags, p.xW$.VERIFIED_BOT)
      }) : null]
    }), b.length > 0 ? (0, r.jsx)(s.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: m.intl.string(m.t.jFbDnJ)
    }) : (0, r.jsx)(s.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: m.intl.string(m.t["X+Fdpo"])
    })]
  }), [b.length, n, E, v]);
  return (0, r.jsxs)("header", {
    id: I,
    className: g.header,
    children: [(0, r.jsxs)("div", {
      className: g.headerIcons,
      children: [(0, r.jsx)(o.qE, {
        className: g.avatar,
        src: T,
        size: h.EF.SIZE_80,
        "aria-label": n.name
      }), (0, r.jsxs)("div", {
        className: g.ellipseGroup,
        children: [(0, r.jsx)("div", {
          className: g.ellipse
        }), (0, r.jsx)("div", {
          className: g.ellipse
        }), (0, r.jsx)("div", {
          className: g.ellipse
        })]
      }), (0, r.jsx)(o.qE, {
        className: g.avatar,
        src: S,
        size: h.EF.SIZE_80,
        "aria-label": t.username
      })]
    }), A, y ? (0, r.jsx)("div", {
      className: g.currentUser,
      children: (0, r.jsxs)(s.x, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [m.intl.format(m.t.qRvpYU, {
          userHook: () => (0, r.jsxs)(s.x, {
            className: g.currentUserTag,
            variant: "text-sm/normal",
            children: [t.username, !t.hasUniqueUsername() && (0, r.jsx)(s.x, {
              className: g.currentUserDiscriminator,
              variant: "text-sm/normal",
              children: "#".concat(t.discriminator)
            })]
          }, t.id)
        }), (0, r.jsx)(a.P3F, {
          tag: "a",
          className: g.logoutLink,
          onClick: () => (0, d.c$)(O, "oauth2_logout"),
          children: m.intl.string(m.t["yV/hjC"])
        })]
      })
    }) : null]
  })
}