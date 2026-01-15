/** Chunk was on web.js **/
/** chunk id: 42373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk572995 = require("./572995.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk869783 = require("./869783.js"),
  Chunk538654 = require("./538654.js");
let E = 1140,
  b = e => {
    let {
      descriptionCta: t,
      onClick: n,
      debouncedOnClickAnalytics: i
    } = e, a = () => {
      i(), n()
    };
    return (0, r.jsx)("div", {
      className: g.bentoBoxButton,
      children: (0, r.jsx)(l.zxk, {
        variant: "secondary",
        onClick: a,
        text: t
      })
    })
  },
  y = e => {
    let {
      name: t,
      title: n,
      description: a,
      descriptionCta: y,
      previewImage: O,
      videoUrl: v,
      shouldLoadVideo: S,
      index: I,
      customVideoStyle: T,
      isReducedMotion: C,
      onClick: A,
      badgeText: N,
      badgeVariant: P = "gradient",
      size: w,
      backgroundVideoUrl: R,
      previewImageStyle: D = _.P6.CONTAINED
    } = e, x = (0, p.rO)(), L = i.useRef(null), j = i.useRef(0), M = (0, u.Z)("(min-width: ".concat(E, "px)")), k = D === _.P6.OVERLAY && (w !== _.y$.LARGE || !M), U = w === _.y$.LARGE && M && D === _.P6.OVERLAY, G = null != R && M && w === _.y$.LARGE, Z = i.useMemo(() => (0, s.debounce)(() => {
      f.default.track(h.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
        box_type: (0, s.snakeCase)(t)
      })
    }, 800), [t]), F = () => {
      null == L.current || C || (L.current.currentTime = j.current, L.current.play())
    }, B = () => {
      null == L.current || C || (j.current = L.current.currentTime, L.current.pause())
    }, V = w === _.y$.LARGE ? "heading-xxl/bold" : "heading-xl/bold", H = () => null == N ? null : "gradient" === P ? (0, r.jsx)("div", {
      className: g.badgeContainer,
      children: (0, r.jsx)("div", {
        className: g.badge,
        children: (0, r.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "always-white",
          children: N
        })
      })
    }) : (0, r.jsx)("div", {
      className: g.badgeContainer,
      children: (0, r.jsx)(l.Cts, {
        type: {
          text: N
        },
        variant: P
      })
    }), Y = () => (0, r.jsxs)("div", {
      className: o()(g.textBox, g["".concat(w)], U && g.overlayTextBox),
      children: [(0, r.jsxs)("div", {
        children: [H(), (0, r.jsx)(c.Heading, {
          variant: V,
          color: "text-strong",
          className: g.header,
          children: n
        })]
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: g.description,
        children: a
      }), null != y && null != A && (0, r.jsx)(b, {
        descriptionCta: y,
        onClick: A,
        debouncedOnClickAnalytics: Z
      })]
    }), W = () => (0, r.jsx)("div", {
      className: o()(g.boxArtContainer, g["".concat(w)]),
      children: (0, r.jsx)(d.Z, {
        playsInline: true,
        preload: S ? "auto" : "none",
        muted: true,
        poster: O,
        loop: true,
        className: o()(U ? g.overlayImage : g.boxVideo, {
          [T]: null != T
        }),
        ref: L,
        children: (0, r.jsx)("source", {
          src: v,
          type: x ? m.m.MP4 : m.m.WEBM
        })
      }, v)
    }), K = I % 2 != 0, z = () => K ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(Y, {}), (0, r.jsx)(W, {})]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {}), (0, r.jsx)(Y, {})]
    });
    return (0, r.jsxs)(c.$1m, {
      className: o()(g.backgroundColor, g.boxContainer, g["".concat(w)], g.gradientBackground, k && g.overlayImageMode, U && g.overlayMode),
      onMouseEnter: F,
      onFocus: F,
      onBlur: B,
      onMouseLeave: B,
      color: "purple",
      children: [G && (0, r.jsx)("div", {
        className: g.backgroundVideoContainer,
        children: (0, r.jsx)(d.Z, {
          muted: true,
          autoPlay: !C,
          playsInline: true,
          loop: true,
          preload: S ? "auto" : "none",
          className: g.backgroundVideo,
          src: R
        })
      }), (0, r.jsx)(z, {})]
    })
  }