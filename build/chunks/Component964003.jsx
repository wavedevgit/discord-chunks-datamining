/** Chunk was on 78376 **/
/** chunk id: 964003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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
let b = e => {
    let {
      descriptionCta: t,
      onClick: n,
      debouncedOnClickAnalytics: i
    } = e;
    return (0, r.jsx)("div", {
      className: f.bentoBoxButton,
      children: (0, r.jsx)(o.$nd, {
        variant: "secondary",
        onClick: () => {
          i(), n()
        },
        text: t
      })
    })
  },
  h = e => {
    let {
      name: t,
      title: n,
      description: l,
      descriptionCta: h,
      previewImage: E,
      videoUrl: O,
      shouldLoadVideo: C,
      index: x,
      customVideoStyle: S,
      isReducedMotion: T,
      onClick: I,
      badgeText: y,
      badgeVariant: N = "gradient",
      size: j,
      backgroundVideoUrl: v,
      previewImageStyle: P = m.Tb.CONTAINED
    } = e, R = (0, p.TM)(), D = i.useRef(null), L = i.useRef(0), w = (0, d.A)("(min-width: ".concat(1140, "px)")), M = P === m.Tb.OVERLAY && (j !== m.A0.LARGE || !w), G = j === m.A0.LARGE && w && P === m.Tb.OVERLAY, U = null != v && w && j === m.A0.LARGE, k = i.useMemo(() => (0, a.debounce)(() => {
      _.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
        box_type: (0, a.snakeCase)(t)
      })
    }, 800), [t]), B = () => {
      null == D.current || T || (D.current.currentTime = L.current, D.current.play())
    }, H = () => {
      null == D.current || T || (L.current = D.current.currentTime, D.current.pause())
    }, V = j === m.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", F = () => (0, r.jsxs)("div", {
      className: s()(f.textBox, f["".concat(j)], G && f.overlayTextBox),
      children: [(0, r.jsxs)("div", {
        children: [null == y ? null : "gradient" === N ? (0, r.jsx)("div", {
          className: f.badgeContainer,
          children: (0, r.jsx)("div", {
            className: f.badge,
            children: (0, r.jsx)(c.Heading, {
              variant: "eyebrow",
              color: "always-white",
              children: y
            })
          })
        }) : (0, r.jsx)("div", {
          className: f.badgeContainer,
          children: (0, r.jsx)(o.Exy, {
            type: {
              text: y
            },
            variant: N
          })
        }), (0, r.jsx)(c.Heading, {
          variant: V,
          color: "text-strong",
          className: f.header,
          children: n
        })]
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: f.description,
        children: l
      }), null != h && null != I && (0, r.jsx)(b, {
        descriptionCta: h,
        onClick: I,
        debouncedOnClickAnalytics: k
      })]
    }), Y = () => (0, r.jsx)("div", {
      className: s()(f.boxArtContainer, f["".concat(j)]),
      children: (0, r.jsx)(u.A, {
        playsInline: true,
        preload: C ? "auto" : "none",
        muted: true,
        poster: E,
        loop: true,
        className: s()(G ? f.overlayImage : f.boxVideo, {
          [S]: null != S
        }),
        ref: D,
        children: (0, r.jsx)("source", {
          src: O,
          type: R ? A.a.MP4 : A.a.WEBM
        })
      }, O)
    }), W = x % 2 != 0;
    return (0, r.jsxs)(c.hLv, {
      id: t,
      className: s()(f.backgroundColor, f.boxContainer, f["".concat(j)], f.gradientBackground, M && f.overlayImageMode, G && f.overlayMode),
      onMouseEnter: B,
      onFocus: B,
      onBlur: H,
      onMouseLeave: H,
      color: "purple",
      children: [U && (0, r.jsx)("div", {
        className: f.backgroundVideoContainer,
        children: (0, r.jsx)(u.A, {
          muted: true,
          autoPlay: !T,
          playsInline: true,
          loop: true,
          preload: C ? "auto" : "none",
          className: f.backgroundVideo,
          src: v
        })
      }), (0, r.jsx)(() => W ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(F, {}), (0, r.jsx)(Y, {})]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y, {}), (0, r.jsx)(F, {})]
      }), {})]
    })
  }