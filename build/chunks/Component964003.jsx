/** Chunk was on 5606 **/
/** chunk id: 964003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
let h = e => {
    let {
      descriptionCta: t,
      onClick: n,
      debouncedOnClickAnalytics: i
    } = e;
    return (0, r.jsx)("div", {
      className: b.bentoBoxButton,
      children: (0, r.jsx)(o.$nd, {
        variant: "secondary",
        onClick: () => {
          i(), n()
        },
        text: t
      })
    })
  },
  A = e => {
    let {
      name: t,
      title: n,
      description: l,
      descriptionCta: A,
      previewImage: E,
      videoUrl: x,
      shouldLoadVideo: O,
      index: C,
      customVideoStyle: y,
      isReducedMotion: j,
      onClick: T,
      badgeText: v,
      badgeVariant: S = "gradient",
      size: I,
      backgroundVideoUrl: N,
      previewImageStyle: P = m.Tb.CONTAINED
    } = e, R = (0, _.TM)(), D = i.useRef(null), w = i.useRef(0), L = (0, d.A)("(min-width: ".concat(1140, "px)")), M = P === m.Tb.OVERLAY && (I !== m.A0.LARGE || !L), G = I === m.A0.LARGE && L && P === m.Tb.OVERLAY, U = null != N && L && I === m.A0.LARGE, k = i.useMemo(() => (0, a.debounce)(() => {
      p.default.track(g.HAw.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
        box_type: (0, a.snakeCase)(t)
      })
    }, 800), [t]), H = () => {
      null == D.current || j || (D.current.currentTime = w.current, D.current.play())
    }, B = () => {
      null == D.current || j || (w.current = D.current.currentTime, D.current.pause())
    }, V = I === m.A0.LARGE ? "heading-xxl/bold" : "heading-xl/bold", F = () => (0, r.jsxs)("div", {
      className: s()(b.textBox, b["".concat(I)], G && b.overlayTextBox),
      children: [(0, r.jsxs)("div", {
        children: [null == v ? null : "gradient" === S ? (0, r.jsx)("div", {
          className: b.badgeContainer,
          children: (0, r.jsx)("div", {
            className: b.badge,
            children: (0, r.jsx)(c.Heading, {
              variant: "eyebrow",
              color: "always-white",
              children: v
            })
          })
        }) : (0, r.jsx)("div", {
          className: b.badgeContainer,
          children: (0, r.jsx)(o.Exy, {
            type: {
              text: v
            },
            variant: S
          })
        }), (0, r.jsx)(c.Heading, {
          variant: V,
          color: "text-strong",
          className: b.header,
          children: n
        })]
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        className: b.description,
        children: l
      }), null != A && null != T && (0, r.jsx)(h, {
        descriptionCta: A,
        onClick: T,
        debouncedOnClickAnalytics: k
      })]
    }), Y = () => (0, r.jsx)("div", {
      className: s()(b.boxArtContainer, b["".concat(I)]),
      children: (0, r.jsx)(u.A, {
        playsInline: true,
        preload: O ? "auto" : "none",
        muted: true,
        poster: E,
        loop: true,
        className: s()(G ? b.overlayImage : b.boxVideo, {
          [y]: null != y
        }),
        ref: D,
        children: (0, r.jsx)("source", {
          src: x,
          type: R ? f.a.MP4 : f.a.WEBM
        })
      }, x)
    }), W = C % 2 != 0;
    return (0, r.jsxs)(c.hLv, {
      id: t,
      className: s()(b.backgroundColor, b.boxContainer, b["".concat(I)], b.gradientBackground, M && b.overlayImageMode, G && b.overlayMode),
      onMouseEnter: H,
      onFocus: H,
      onBlur: B,
      onMouseLeave: B,
      color: "purple",
      children: [U && (0, r.jsx)("div", {
        className: b.backgroundVideoContainer,
        children: (0, r.jsx)(u.A, {
          muted: true,
          autoPlay: !j,
          playsInline: true,
          loop: true,
          preload: O ? "auto" : "none",
          className: b.backgroundVideo,
          src: N
        })
      }), (0, r.jsx)(() => W ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(F, {}), (0, r.jsx)(Y, {})]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Y, {}), (0, r.jsx)(F, {})]
      }), {})]
    })
  }