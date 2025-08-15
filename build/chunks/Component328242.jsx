/** Chunk was on 46746 **/
/** chunk id: 328242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk668519 = require("./668519.js"),
  Chunk855403 = require("./855403.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602804 = require("./602804.js");

function p(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(s.vA.SCREEN) ? (0, r.jsx)(o.pzj, {
    size: "xs"
  }) : t.id.startsWith(s.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, r.jsx)("img", {
    src: t.icon,
    className: h.sourceIcon,
    alt: ""
  }) : (0, r.jsx)(o.GON, {
    size: "xs"
  }) : (0, r.jsx)(o.Odl, {
    size: "xs"
  })
}

function x(e) {
  let {
    source: t,
    selected: n,
    twoClickVariant: i,
    onClick: s
  } = e, {
    url: a,
    name: c
  } = t;
  return (0, r.jsxs)(o.P3F, {
    onClick: () => s(t),
    className: l()(h.source, {
      [h.selectedSource]: n
    }),
    children: [(0, r.jsx)("div", {
      className: h.sourcePreviewContainer,
      children: (0, r.jsxs)("div", {
        className: h.sourcePreview,
        children: [(0, r.jsx)("img", {
          src: a,
          className: h.sourcePreviewImage,
          alt: ""
        }), !i && (0, r.jsx)("div", {
          className: h.sourceOverlay,
          children: (0, r.jsx)("div", {
            className: h.sourceOverlayCTA,
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "button-filled-white-text",
              children: m.intl.string(m.t.z7WGho)
            })
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: h.sourceNameContainer,
      children: [(0, r.jsx)(p, {
        source: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        className: h.sourceName,
        children: c
      })]
    })]
  })
}

function g(e) {
  var t;
  let {
    onClick: n
  } = e, {
    twoClickVariant: i
  } = (0, c.a)({
    autoTrackExposure: false,
    location: "sourcegrid"
  }), [{
    windowSources: l,
    deviceSources: a,
    screenSources: f,
    sourceType: m,
    fetchingSources: p,
    selectedSource: g
  }] = (0, u.E_)();
  return p ? (0, r.jsx)("div", {
    className: h.loading,
    children: (0, r.jsx)(o.$jN, {})
  }) : (t = m === s.vA.WINDOW ? l : m === s.vA.SCREEN ? f : a, m === s.vA.CAMERA && 0 === t.length ? (0, r.jsx)(_, {}) : (0, r.jsx)("div", {
    className: h.root,
    children: t.map(e => (0, r.jsx)(x, {
      onClick: n,
      source: e,
      selected: null != g && "windowHandle" in g ? (0, d.Z)(e.id, g.windowHandle) : (null == g ? true : g.id) === e.id,
      twoClickVariant: i
    }, e.id))
  }))
}

function _() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk602804.emptyState,
    children: [(0, Chunk951288.jsx)(Chunk481060.Odl, {
      size: "md",
      color: Chunk481060.TVs.colors.ICON_MUTED,
      className: Chunk602804.emptyIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      className: Chunk602804.emptyHeader,
      children: Chunk388032.intl.string(Chunk637824.default["/z3YaW"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: Chunk602804.emptyBody,
      children: Chunk388032.intl.string(Chunk637824.default.agwSGB)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      children: Chunk388032.intl.format(Chunk637824.default.xpVzr6, {
        helpdeskURL: Chunk63063.Z.getArticleURL(0x53d41ade17)
      })
    })]
  })
}