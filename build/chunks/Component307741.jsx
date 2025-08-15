/** Chunk was on web.js **/
/** chunk id: 307741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk406763 = require("./406763.js"),
  Chunk893642 = require("./893642.js"),
  Chunk768581 = require("./768581.js"),
  Chunk814225 = require("./814225.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk715318 = require("./715318.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk488463 = require("./488463.js");

function b(e) {
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
    className: E.gameArtHero,
    style: {
      backgroundImage: 'url("'.concat(n, '")')
    }
  })
}

function y(e) {
  let {
    application: t
  } = e, n = null == t ? true : t.getIconURL(160, f.$k ? "webp" : "png");
  return (0, r.jsx)("div", {
    className: E.iconContainer,
    children: null != n && (0, r.jsx)("img", {
      className: E.gameIcon,
      src: n,
      height: 80,
      alt: g.intl.formatToPlainString(g.t["nh+jWl"], {
        game: t.name
      })
    })
  })
}

function O(e) {
  var t;
  let {
    application: n,
    detectedGame: a
  } = e, o = i.useMemo(() => null == a ? true : a.genres.map(_.P3).join(", "), [a]), l = null != (t = a.name) ? t : null == n ? true : n.name;
  return (0, r.jsxs)("div", {
    className: E.headingContainer,
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

function v(e) {
  var t;
  let {
    detectedGame: n,
    openFullGameProfile: i
  } = e;
  return (0, r.jsxs)("div", {
    className: E.bodyContainer,
    children: [(0, r.jsxs)("div", {
      className: E.summaryContainer,
      children: [(0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        color: "text-primary",
        lineClamp: 3,
        children: null != (t = n.summaryLocalized) ? t : n.summary
      }), (0, r.jsx)(c.P3F, {
        className: E.clickable,
        onClick: i,
        children: (0, r.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: g.intl.string(g.t.lBeKY2)
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

function I(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => (0, p.fP)(), []), a = (0, l.e7)([d.Z], () => d.Z.getMute(t.id)), o = i.useMemo(() => a ? g.intl.string(g.t.tpvw4e) : g.intl.string(g.t["6EwEws"]), [a]);
  return (0, r.jsxs)("div", {
    className: E.actionButtonsContainer,
    children: [(0, r.jsx)(c.DY3, {
      element: "span",
      text: o,
      "aria-label": o,
      delay: 750,
      children: (0, r.jsx)(c.P3F, {
        className: E.actionButton,
        "aria-label": o,
        onClick: () => (0, u.X)(t.id, !a),
        children: a ? (0, r.jsx)(c.owu, {
          size: "xs",
          color: c.TVs.colors.WHITE
        }) : (0, r.jsx)(c.Dkj, {
          size: "xs",
          color: c.TVs.colors.WHITE
        })
      })
    }), (0, r.jsx)(m.Z, {
      applicationId: t.id,
      viewId: n,
      className: E.actionButton
    })]
  })
}

function T(e) {
  let {
    application: t,
    detectedGame: n,
    className: a,
    onClose: s
  } = e, l = (0, h.Z)({
    location: "MiniGameProfile",
    applicationId: t.id,
    source: p.m1.MiniGameProfile,
    trackEntryPointImpression: true,
    sourceUserId: true
  }, {}), c = i.useCallback(e => {
    null == s || s(), null == l || l(e)
  }, [s, l]);
  return (0, r.jsxs)("div", {
    className: o()(E.container, a),
    children: [(0, r.jsx)(b, {
      detectedGame: n
    }), (0, r.jsx)(I, {
      application: t
    }), (0, r.jsx)(y, {
      application: t
    }), (0, r.jsx)(O, {
      application: t,
      detectedGame: n
    }), (0, r.jsx)(v, {
      application: t,
      detectedGame: n,
      openFullGameProfile: c
    })]
  })
}