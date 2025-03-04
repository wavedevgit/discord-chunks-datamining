/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => E
});
var r = n(200651),
  i = n(192379),
  o = n(243814),
  a = n(793030),
  s = n(974674),
  l = n(1561),
  c = n(993365),
  u = n(385499),
  d = n(768581),
  f = n(630388),
  _ = n(489863),
  p = n(981631),
  h = n(182294),
  g = n(388032),
  m = n(260070);

function E(e) {
  let {
    id: t,
    user: n,
    application: E,
    bot: v,
    accountScopes: b,
    showLogout: y,
    location: O,
    scopes: S
  } = e, I = d.ZP.getApplicationIconURL({
    id: E.id,
    icon: E.icon
  }), T = d.ZP.getUserAvatarURL(n), N = i.useMemo(() => S.some(e => e === o.x.SDK_SOCIAL_LAYER || e === o.x.SDK_SOCIAL_LAYER_PRESENCE) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.x, {
      variant: "text-lg/normal",
      color: "header-secondary",
      children: g.NW.string(g.t.uT1CPT)
    }), (0, r.jsx)(a.X6, {
      variant: "heading-xxl/bold",
      color: "header-primary",
      children: E.name
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.x, {
      variant: "text-lg/bold",
      color: "header-primary",
      children: [E.name, null != v ? (0, r.jsx)(u.Z, {
        className: m.botTag,
        verified: null != v.public_flags && (0, f.yE)(v.public_flags, p.xW$.VERIFIED_BOT)
      }) : null]
    }), b.length > 0 ? (0, r.jsx)(c.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: g.NW.string(g.t.jFbDnJ)
    }) : (0, r.jsx)(c.x, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: g.NW.string(g.t["X+Fdpq"])
    })]
  }), [b.length, E, v, S]);
  return (0, r.jsxs)("header", {
    id: t,
    className: m.header,
    children: [(0, r.jsxs)("div", {
      className: m.headerIcons,
      children: [(0, r.jsx)(s.qE, {
        className: m.avatar,
        src: I,
        size: h.EF.SIZE_80,
        "aria-label": E.name
      }), (0, r.jsxs)("div", {
        className: m.ellipseGroup,
        children: [(0, r.jsx)("div", {
          className: m.ellipse
        }), (0, r.jsx)("div", {
          className: m.ellipse
        }), (0, r.jsx)("div", {
          className: m.ellipse
        })]
      }), (0, r.jsx)(s.qE, {
        className: m.avatar,
        src: T,
        size: h.EF.SIZE_80,
        "aria-label": n.username
      })]
    }), N, y ? (0, r.jsx)("div", {
      className: m.currentUser,
      children: (0, r.jsxs)(c.x, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: [g.NW.format(g.t.qRvpYW, {
          userHook: () => (0, r.jsxs)(c.x, {
            className: m.currentUserTag,
            variant: "text-sm/normal",
            children: [n.username, !n.isPomelo() && (0, r.jsx)(c.x, {
              className: m.currentUserDiscriminator,
              variant: "text-sm/normal",
              children: "#".concat(n.discriminator)
            })]
          }, n.id)
        }), (0, r.jsx)(l.P, {
          tag: "a",
          className: m.logoutLink,
          onClick: () => (0, _.c$)(O),
          children: g.NW.string(g.t["yV/hjI"])
        })]
      })
    }) : null]
  })
}