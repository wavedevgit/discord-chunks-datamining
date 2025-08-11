/** Chunk was on web.js **/
/** chunk id: 41259, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk1561 = require("./1561.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk489863 = require("./489863.js"),
  Chunk713938 = require("./713938.js"),
  Chunk314583 = require("./314583.js"),
  Chunk981631 = require("./981631.js"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk441533 = require("./441533.js");

function b(e) {
  let {
    user: t,
    application: n,
    bot: b,
    accountScopes: y,
    showLogout: O,
    location: v,
    scopes: I
  } = e, T = (0, p.X)(), S = u.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), A = u.ZP.getUserAvatarURL(t), N = i.useMemo(() => I.some(e => (0, _.sg)(e)) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.x, {
      variant: "text-lg/normal",
      color: "header-secondary",
      children: g.intl.string(g.t.uT1CPT)
    }), (0, r.jsx)(o.X6, {
      variant: "heading-xxl/bold",
      color: "header-primary",
      children: n.name
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.x, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: [n.name, null != b ? (0, r.jsx)(c.Z, {
        className: E.botTag,
        verified: null != b.public_flags && (0, d.yE)(b.public_flags, h.xW$.VERIFIED_BOT)
      }) : null]
    }), y.length > 0 ? (0, r.jsx)(l.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: g.intl.string(g.t.jFbDnJ)
    }) : (0, r.jsx)(l.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: g.intl.string(g.t["X+Fdpq"])
    })]
  }), [y.length, n, b, I]);
  return (0, r.jsxs)("header", {
    id: T,
    className: E.header,
    children: [(0, r.jsxs)("div", {
      className: E.headerIcons,
      children: [(0, r.jsx)(a.qE, {
        className: E.avatar,
        src: S,
        size: m.EF.SIZE_80,
        "aria-label": n.name
      }), (0, r.jsxs)("div", {
        className: E.ellipseGroup,
        children: [(0, r.jsx)("div", {
          className: E.ellipse
        }), (0, r.jsx)("div", {
          className: E.ellipse
        }), (0, r.jsx)("div", {
          className: E.ellipse
        })]
      }), (0, r.jsx)(a.qE, {
        className: E.avatar,
        src: A,
        size: m.EF.SIZE_80,
        "aria-label": t.username
      })]
    }), N, O ? (0, r.jsx)("div", {
      className: E.currentUser,
      children: (0, r.jsxs)(l.x, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [g.intl.format(g.t.qRvpYW, {
          userHook: () => (0, r.jsxs)(l.x, {
            className: E.currentUserTag,
            variant: "text-sm/normal",
            children: [t.username, !t.hasUniqueUsername() && (0, r.jsx)(l.x, {
              className: E.currentUserDiscriminator,
              variant: "text-sm/normal",
              children: "#".concat(t.discriminator)
            })]
          }, t.id)
        }), (0, r.jsx)(s.P, {
          tag: "a",
          className: E.logoutLink,
          onClick: () => (0, f.c$)(v, "oauth2_logout"),
          children: g.intl.string(g.t["yV/hjI"])
        })]
      })
    }) : null]
  })
}