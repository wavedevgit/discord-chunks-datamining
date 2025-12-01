/** Chunk was on web.js **/
/** chunk id: 41259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk793030 = require("./793030.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk489863 = require("./489863.js"),
  Chunk713938 = require("./713938.js"),
  Chunk314583 = require("./314583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk604483 = require("./604483.js");

function E(e) {
  let {
    user: t,
    application: n,
    bot: E,
    accountScopes: b,
    showLogout: y,
    location: O,
    scopes: v
  } = e, S = (0, p.X)(), I = u.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), T = u.ZP.getUserAvatarURL(t), A = i.useMemo(() => v.some(e => (0, f.sg)(e)) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.x, {
      variant: "text-lg/normal",
      color: "header-secondary",
      children: h.intl.string(h.t.uT1CPa)
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-xxl/bold",
      color: "header-primary",
      children: n.name
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.x, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: [n.name, null != E ? (0, r.jsx)(c.Z, {
        className: g.botTag,
        verified: null != E.public_flags && (0, a.yE)(E.public_flags, _.xW$.VERIFIED_BOT)
      }) : null]
    }), b.length > 0 ? (0, r.jsx)(l.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: h.intl.string(h.t.jFbDnJ)
    }) : (0, r.jsx)(l.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: h.intl.string(h.t["X+Fdpo"])
    })]
  }), [b.length, n, E, v]);
  return (0, r.jsxs)("header", {
    id: S,
    className: g.header,
    children: [(0, r.jsxs)("div", {
      className: g.headerIcons,
      children: [(0, r.jsx)(s.qE, {
        className: g.avatar,
        src: I,
        size: m.EF.SIZE_80,
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
      }), (0, r.jsx)(s.qE, {
        className: g.avatar,
        src: T,
        size: m.EF.SIZE_80,
        "aria-label": t.username
      })]
    }), A, y ? (0, r.jsx)("div", {
      className: g.currentUser,
      children: (0, r.jsxs)(l.x, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [h.intl.format(h.t.qRvpYU, {
          userHook: () => (0, r.jsxs)(l.x, {
            className: g.currentUserTag,
            variant: "text-sm/normal",
            children: [t.username, !t.hasUniqueUsername() && (0, r.jsx)(l.x, {
              className: g.currentUserDiscriminator,
              variant: "text-sm/normal",
              children: "#".concat(t.discriminator)
            })]
          }, t.id)
        }), (0, r.jsx)(o.P3F, {
          tag: "a",
          className: g.logoutLink,
          onClick: () => (0, d.c$)(O, "oauth2_logout"),
          children: h.intl.string(h.t["yV/hjC"])
        })]
      })
    }) : null]
  })
}