/** Chunk was on web.js **/
/** chunk id: 796812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk610411 = require("./610411.js"),
  Chunk894010 = require("./894010.js"),
  Chunk495756 = require("./495756.js"),
  Chunk486020 = require("./486020.js"),
  Chunk541830 = require("./541830.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk503364 = require("./503364.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk643850 = require("./643850.js");

function O(e) {
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
    className: y.is,
    style: null != n && n.length > 0 ? {
      backgroundImage: 'url("'.concat(n, '")')
    } : {
      backgroundColor: u.LU0.colors.BACKGROUND_BRAND.css
    }
  })
}

function A(e) {
  let {
    application: t
  } = e, n = null == t ? true : t.getIconURL(160, _.QB ? "webp" : "png");
  return (0, r.jsx)("div", {
    className: y.zc,
    children: null != n && n.length > 0 ? (0, r.jsx)("img", {
      className: y.Gt,
      src: n,
      height: 80,
      alt: b.intl.formatToPlainString(b.t["nh+jWk"], {
        game: t.name
      })
    }) : (0, r.jsx)(u._7Z, {
      size: "lg",
      className: y.ct,
      color: u.LU0.colors.BACKGROUND_SURFACE_HIGH,
      style: {
        backgroundColor: u.LU0.colors.BACKGROUND_BRAND.css
      }
    })
  })
}

function v(e) {
  var t;
  let {
    application: n,
    detectedGame: a
  } = e, s = i.useMemo(() => null == a ? true : a.genres.map(h.du).join(", "), [a]), l = null != (t = a.name) ? t : null == n ? true : n.name;
  return (0, r.jsxs)("div", {
    className: y.wR,
    children: [(0, r.jsx)(o.DZT, {
      variant: "heading-lg/bold",
      color: "text-strong",
      children: l
    }), (0, r.jsx)(o.EYj, {
      variant: "text-xs/medium",
      color: "text-subtle",
      children: s
    })]
  })
}

function S(e) {
  var t;
  let {
    detectedGame: n,
    openFullGameProfile: i
  } = e;
  return (0, r.jsxs)("div", {
    className: y.IP,
    children: [(0, r.jsxs)("div", {
      className: y.I8,
      children: [(0, r.jsx)(o.EYj, {
        variant: "text-sm/medium",
        color: "text-strong",
        lineClamp: 3,
        children: null != (t = n.summaryLocalized) ? t : n.summary
      }), (0, r.jsx)(u.DUT, {
        className: y.vk,
        onClick: i,
        children: (0, r.jsx)(o.EYj, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: b.intl.string(b.t.lBeKY2)
        })
      })]
    }), (0, r.jsx)(u.Button, {
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
  } = e, n = (0, l.bG)([p.A], () => p.A.getMute(t.id)), a = i.useMemo(() => n ? b.intl.string(b.t.tpvw4T) : b.intl.string(b.t["6EwEwp"]), [n]);
  return (0, r.jsxs)("div", {
    className: y.fc,
    children: [(0, r.jsx)(c.m, {
      asContainer: true,
      tag: "span",
      text: a,
      "aria-label": a,
      delay: 750,
      children: (0, r.jsx)(u.DUT, {
        className: y.hP,
        "aria-label": a,
        onClick: () => {
          (0, d.i1)({
            gameName: t.name,
            applicationId: t.id,
            label: n ? d.VD.UNMUTED : d.VD.MUTED,
            source: d.eh.MINI_GAME_PROFILE_BELL_ICON
          }), (0, f.b)(t.id, !n)
        },
        children: n ? (0, r.jsx)(u.a_I, {
          size: "xs",
          color: u.LU0.colors.WHITE
        }) : (0, r.jsx)(u.XFE, {
          size: "xs",
          color: u.LU0.colors.WHITE
        })
      })
    }), (0, r.jsx)(E.A, {
      applicationId: t.id,
      className: y.hP
    })]
  })
}

function T(e) {
  let {
    application: t,
    detectedGame: n,
    className: a,
    onClose: o
  } = e, l = (0, g.A)({
    location: "MiniGameProfile",
    applicationId: t.id,
    source: m.Ob.MiniGameProfile,
    trackEntryPointImpression: true,
    sourceUserId: true
  }, {}), c = i.useCallback(e => {
    null == o || o(), null == l || l(e)
  }, [o, l]);
  return (0, r.jsxs)("div", {
    className: s()(y.kL, a),
    children: [(0, r.jsx)(O, {
      detectedGame: n
    }), (0, r.jsx)(I, {
      application: t
    }), (0, r.jsx)(A, {
      application: t
    }), (0, r.jsx)(v, {
      application: t,
      detectedGame: n
    }), (0, r.jsx)(S, {
      application: t,
      detectedGame: n,
      openFullGameProfile: c
    })]
  })
}