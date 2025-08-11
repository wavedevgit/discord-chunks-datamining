/** Chunk was on web.js **/
/** chunk id: 307741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk814225 = require("./814225.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk715318 = require("./715318.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk235405 = require("./235405.js");

function m(e) {
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
    className: h.gameArtHero,
    style: {
      backgroundImage: 'url("'.concat(n, '")')
    }
  })
}

function g(e) {
  let {
    application: t
  } = e, n = null == t ? true : t.getIconURL(160, c.$k ? "webp" : "png");
  return (0, r.jsx)("div", {
    className: h.iconContainer,
    children: null != n && (0, r.jsx)("img", {
      className: h.gameIcon,
      src: n,
      height: 80,
      alt: p.intl.formatToPlainString(p.t["nh+jWl"], {
        game: t.name
      })
    })
  })
}

function E(e) {
  var t;
  let {
    application: n,
    detectedGame: o
  } = e, a = i.useMemo(() => null == o ? true : o.genres.map(u.P3).join(", "), [o]), l = null != (t = o.name) ? t : null == n ? true : n.name;
  return (0, r.jsxs)("div", {
    className: h.headingContainer,
    children: [(0, r.jsx)(s.X6, {
      variant: "heading-lg/bold",
      color: "header-primary",
      children: l
    }), (0, r.jsx)(s.xv, {
      variant: "text-xs/medium",
      color: "text-secondary",
      children: a
    })]
  })
}

function b(e) {
  var t;
  let {
    detectedGame: n,
    openFullGameProfile: i
  } = e;
  return (0, r.jsxs)("div", {
    className: h.bodyContainer,
    children: [(0, r.jsxs)("div", {
      className: h.summaryContainer,
      children: [(0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        color: "text-primary",
        lineClamp: 3,
        children: null != (t = n.summaryLocalized) ? t : n.summary
      }), (0, r.jsx)(l.P3F, {
        className: h.clickable,
        onClick: i,
        children: (0, r.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: p.intl.string(p.t.lBeKY2)
        })
      })]
    }), (0, r.jsx)(l.zxk, {
      variant: "secondary",
      size: "sm",
      onClick: i,
      text: "View Game Profile",
      fullWidth: true
    })]
  })
}

function y(e) {
  let {
    application: t
  } = e, n = i.useMemo(() => (0, d.fP)(), []), [o, a] = i.useState(false), s = i.useMemo(() => o ? p.intl.string(p.t.tpvw4e) : p.intl.string(p.t["6EwEws"]), [o]);
  return (0, r.jsxs)("div", {
    className: h.actionButtonsContainer,
    children: [(0, r.jsx)(l.DY3, {
      element: "span",
      text: s,
      "aria-label": s,
      delay: 750,
      children: (0, r.jsx)(l.P3F, {
        className: h.actionButton,
        "aria-label": s,
        onClick: () => a(!o),
        children: o ? (0, r.jsx)(l.owu, {
          size: "xs",
          color: l.TVs.colors.WHITE
        }) : (0, r.jsx)(l.Dkj, {
          size: "xs",
          color: l.TVs.colors.WHITE
        })
      })
    }), (0, r.jsx)(_.Z, {
      applicationId: t.id,
      viewId: n,
      className: h.actionButton
    })]
  })
}

function O(e) {
  let {
    application: t,
    detectedGame: n,
    className: o,
    onClose: s
  } = e, l = (0, f.Z)({
    location: "MiniGameProfile",
    applicationId: t.id,
    source: d.m1.MiniGameProfile,
    trackEntryPointImpression: true,
    sourceUserId: true
  }, {}), c = i.useCallback(e => {
    null == s || s(), null == l || l(e)
  }, [s, l]);
  return (0, r.jsxs)("div", {
    className: a()(h.container, o),
    children: [(0, r.jsx)(m, {
      detectedGame: n
    }), (0, r.jsx)(y, {
      application: t
    }), (0, r.jsx)(g, {
      application: t
    }), (0, r.jsx)(E, {
      application: t,
      detectedGame: n
    }), (0, r.jsx)(b, {
      application: t,
      detectedGame: n,
      openFullGameProfile: c
    })]
  })
}