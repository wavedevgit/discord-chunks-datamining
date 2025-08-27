/** Chunk was on web.js **/
/** chunk id: 307741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26732 = require("./26732.js"),
  Chunk406763 = require("./406763.js"),
  Chunk893642 = require("./893642.js"),
  Chunk768581 = require("./768581.js"),
  Chunk814225 = require("./814225.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk715318 = require("./715318.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk488463 = require("./488463.js");

function y(e) {
  let {
    detectedGame: t
  } = e, n = i.useMemo(() => {
    if (null == t) return "";
    let {
      artwork: e,
      screenshots: n
    } = t;
    if (e.length > 0) {
      let t = Math.floor(Math.random() * e.length);
      return e[t]
    }
    if (n.length > 0) {
      let e = Math.floor(Math.random() * n.length);
      return n[e]
    }
    return ""
  }, [t]);
  return (0, r.jsx)("div", {
    className: b.gameArtHero,
    style: null != n && n.length > 0 ? {
      backgroundImage: 'url("'.concat(n, '")')
    } : {
      backgroundColor: c.TVs.colors.BG_BRAND.css
    }
  })
}

function O(e) {
  let {
    application: t
  } = e, n = null == t ? true : t.getIconURL(160, _.$k ? "webp" : "png");
  return (0, r.jsx)("div", {
    className: b.iconContainer,
    children: null != n && n.length > 0 ? (0, r.jsx)("img", {
      className: b.gameIcon,
      src: n,
      height: 80,
      alt: E.intl.formatToPlainString(E.t["nh+jWl"], {
        game: t.name
      })
    }) : (0, r.jsx)(c.IMN, {
      size: "lg",
      className: b.gameIconFallback,
      color: c.TVs.colors.BACKGROUND_SURFACE_HIGH,
      style: {
        backgroundColor: c.TVs.colors.BG_BRAND.css
      }
    })
  })
}

function v(e) {
  var t;
  let {
    application: n,
    detectedGame: a
  } = e, o = i.useMemo(() => null == a ? true : a.genres.map(p.P3).join(", "), [a]), l = null != (t = a.name) ? t : null == n ? true : n.name;
  return (0, r.jsxs)("div", {
    className: b.headingContainer,
    children: [(0, r.jsx)(s.X6, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: l
    }), (0, r.jsx)(s.xv, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: o
    })]
  })
}

function I(e) {
  var t;
  let {
    detectedGame: n,
    openFullGameProfile: i
  } = e;
  return (0, r.jsxs)("div", {
    className: b.bodyContainer,
    children: [(0, r.jsxs)("div", {
      className: b.summaryContainer,
      children: [(0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        color: "text-primary",
        lineClamp: 3,
        children: null != (t = n.summaryLocalized) ? t : n.summary
      }), (0, r.jsx)(c.P3F, {
        className: b.clickable,
        onClick: i,
        children: (0, r.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: E.intl.string(E.t.lBeKY2)
        })
      })]
    }), (0, r.jsx)(c.zxk, {
      variant: "secondary",
      size: "sm",
      onClick: i,
      text: "View Game Profile",
      fullWidth: true
    })]
  })
}

function T(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => (0, h.fP)(), []), a = (0, l.e7)([f.Z], () => f.Z.getMute(t.id)), o = i.useMemo(() => a ? E.intl.string(E.t.tpvw4e) : E.intl.string(E.t["6EwEws"]), [a]);
  return (0, r.jsxs)("div", {
    className: b.actionButtonsContainer,
    children: [(0, r.jsx)(c.DY3, {
      element: "span",
      text: o,
      "aria-label": o,
      delay: 750,
      children: (0, r.jsx)(c.P3F, {
        className: b.actionButton,
        "aria-label": o,
        onClick: () => {
          (0, u.Eq)({
            gameName: t.name,
            applicationId: t.id,
            label: a ? u.$_.UNMUTED : u.$_.MUTED,
            source: u.UE.MINI_GAME_PROFILE_BELL_ICON
          }), (0, d.X)(t.id, !a)
        },
        children: a ? (0, r.jsx)(c.owu, {
          size: "xs",
          color: c.TVs.colors.WHITE
        }) : (0, r.jsx)(c.Dkj, {
          size: "xs",
          color: c.TVs.colors.WHITE
        })
      })
    }), (0, r.jsx)(g.Z, {
      applicationId: t.id,
      viewId: n,
      className: b.actionButton
    })]
  })
}

function S(e) {
  let {
    application: t,
    detectedGame: n,
    className: a,
    onClose: s
  } = e, l = (0, m.Z)({
    location: "MiniGameProfile",
    applicationId: t.id,
    source: h.m1.MiniGameProfile,
    trackEntryPointImpression: true,
    sourceUserId: true
  }, {}), c = i.useCallback(e => {
    null == s || s(), null == l || l(e)
  }, [s, l]);
  return (0, r.jsxs)("div", {
    className: o()(b.container, a),
    children: [(0, r.jsx)(y, {
      detectedGame: n
    }), (0, r.jsx)(T, {
      application: t
    }), (0, r.jsx)(O, {
      application: t
    }), (0, r.jsx)(v, {
      application: t,
      detectedGame: n
    }), (0, r.jsx)(I, {
      application: t,
      detectedGame: n,
      openFullGameProfile: c
    })]
  })
}