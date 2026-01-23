/** Chunk was on web.js **/
/** chunk id: 964003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk676279 = require("./676279.js"),
  Chunk57978 = require("./57978.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk693591 = require("./693591.js"),
  Chunk847652 = require("./847652.js");
let E = 1140,
  y = e => {
    let {
      descriptionCta: t,
      onClick: n,
      debouncedOnClickAnalytics: i
    } = e, a = () => {
      i(), n()
    };
    return (0, r.jsx)("div", {
      className: g.bentoBoxButton,
      children: (0, r.jsx)(l.$nd, {
        variant: "secondary",
        onClick: a,
        text: t
      })
    })
  },
  b = e => {
    let {
      name: t,
      title: n,
      description: a,
      descriptionCta: b,
      previewImage: O,
      videoUrl: v,
      shouldLoadVideo: A,
      index: I,
      customVideoStyle: S,
      isReducedMotion: T,
      onClick: C,
      badgeText: N,
      badgeVariant: R = "gradient",
      size: w,
      backgroundVideoUrl: P,
      previewImageStyle: D = _.Tb.CONTAINED
    } = e, x = (0, p.TM)(), L = i.useRef(null), j = i.useRef(0), M = (0, u.A)("(min-width: ".concat(E, "px)")), k = D === _.Tb.OVERLAY && (w !== _.A0.LARGE || !M), U = w === _.A0.LARGE && M && D === _.Tb.OVERLAY, G = null != P && M && w === _.A0.LARGE, V = i.useMemo(() => (0, o.debounce)(() => {
      f.default.track(h.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
        box_type: (0, o.snakeCase)(t)
      })
    }, 800), [t]), F = () => {
      null == L.current || T || (L.current.currentTime = j.current, L.current.play())
    }, B = () => {
      null == L.current || T || (j.current = L.current.currentTime, L.current.pause())
    }, H = w === _.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", Y = () => null == N ? null : "gradient" === R ? (0, r.jsx)("div", {
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
      children: (0, r.jsx)(l.Exy, {
        type: {
          text: N
        },
        variant: R
      })
    }), W = () => (0, r.jsxs)("div", {
      className: s()(g.textBox, g["".concat(w)], U && g.overlayTextBox),
      children: [(0, r.jsxs)("div", {
        children: [Y(), (0, r.jsx)(c.Heading, {
          variant: H,
          color: "text-strong",
          className: g.header,
          children: n
        })]
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: g.description,
        children: a
      }), null != b && null != C && (0, r.jsx)(y, {
        descriptionCta: b,
        onClick: C,
        debouncedOnClickAnalytics: V
      })]
    }), K = () => (0, r.jsx)("div", {
      className: s()(g.boxArtContainer, g["".concat(w)]),
      children: (0, r.jsx)(d.A, {
        playsInline: true,
        preload: A ? "auto" : "none",
        muted: true,
        poster: O,
        loop: true,
        className: s()(U ? g.overlayImage : g.boxVideo, {
          [S]: null != S
        }),
        ref: L,
        children: (0, r.jsx)("source", {
          src: v,
          type: x ? m.a.MP4 : m.a.WEBM
        })
      }, v)
    }), z = I % 2 != 0, q = () => z ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(W, {}), (0, r.jsx)(K, {})]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(K, {}), (0, r.jsx)(W, {})]
    });
    return (0, r.jsxs)(c.hLv, {
      className: s()(g.backgroundColor, g.boxContainer, g["".concat(w)], g.gradientBackground, k && g.overlayImageMode, U && g.overlayMode),
      onMouseEnter: F,
      onFocus: F,
      onBlur: B,
      onMouseLeave: B,
      color: "purple",
      children: [G && (0, r.jsx)("div", {
        className: g.backgroundVideoContainer,
        children: (0, r.jsx)(d.A, {
          muted: true,
          autoPlay: !T,
          playsInline: true,
          loop: true,
          preload: A ? "auto" : "none",
          className: g.backgroundVideo,
          src: P
        })
      }), (0, r.jsx)(q, {})]
    })
  }