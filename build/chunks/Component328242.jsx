/** Chunk was on 46746 **/
/** chunk id: 328242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk855403 = require("./855403.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602804 = require("./602804.js");

function h(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(s.vA.SCREEN) ? (0, r.jsx)(o.pzj, {
    size: "xs"
  }) : t.id.startsWith(s.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, r.jsx)("img", {
    src: t.icon,
    className: m.sourceIcon,
    alt: ""
  }) : (0, r.jsx)(o.GON, {
    size: "xs"
  }) : (0, r.jsx)(o.Odl, {
    size: "xs"
  })
}

function p(e) {
  let {
    source: t,
    selected: n,
    onClick: i
  } = e, {
    url: s,
    name: a
  } = t;
  return (0, r.jsxs)(o.P3F, {
    onClick: () => i(t),
    className: l()(m.source, {
      [m.selectedSource]: n
    }),
    children: [(0, r.jsx)("div", {
      className: m.sourcePreviewContainer,
      children: (0, r.jsxs)("div", {
        className: m.sourcePreview,
        children: [(0, r.jsx)("img", {
          src: s,
          className: m.sourcePreviewImage,
          alt: ""
        }), (0, r.jsx)("div", {
          className: m.sourceOverlay,
          children: (0, r.jsx)("div", {
            className: m.sourceOverlayCTA,
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "button-filled-white-text",
              children: f.intl.string(f.t.z7WGho)
            })
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: m.sourceNameContainer,
      children: [(0, r.jsx)(h, {
        source: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        className: m.sourceName,
        children: a
      })]
    })]
  })
}

function x(e) {
  var t;
  let {
    onClick: n
  } = e, [{
    windowSources: i,
    deviceSources: l,
    screenSources: a,
    sourceType: u,
    fetchingSources: f,
    selectedSource: h
  }] = (0, d.E_)();
  return f ? (0, r.jsx)("div", {
    className: m.loading,
    children: (0, r.jsx)(o.$jN, {})
  }) : (t = u === s.vA.WINDOW ? i : u === s.vA.SCREEN ? a : l, u === s.vA.CAMERA && 0 === t.length ? (0, r.jsx)(g, {}) : (0, r.jsx)("div", {
    className: m.root,
    children: t.map(e => (0, r.jsx)(p, {
      onClick: n,
      source: e,
      selected: null != h && "windowHandle" in h ? (0, c.Z)(e.id, h.windowHandle) : (null == h ? true : h.id) === e.id
    }, e.id))
  }))
}

function g() {
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