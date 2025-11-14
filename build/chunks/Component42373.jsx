/** Chunk was on web.js **/
/** chunk id: 42373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk159691 = require("./159691.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk572995 = require("./572995.js"),
  Chunk981631 = require("./981631.js"),
  Chunk869783 = require("./869783.js"),
  Chunk642650 = require("./642650.js"),
  Chunk595475 = require("./595475.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let t;
  switch (e) {
    case m.NA.EMOJIS:
      t = b.emojisBackground;
      break;
    case m.NA.REFERRAL_PROGRAM:
      t = b.referralProgramBackground;
      break;
    case m.NA.NO_LIMITS:
      t = b.noLimitsBackground;
      break;
    case m.NA.YOUR_SPACE:
      t = b.yourSpaceBackground;
      break;
    case m.NA.SERVER_PROFILES:
      t = b.serverProfilesBackground;
      break;
    case m.NA.SHOW_YOUR_STYLE:
      t = b.yourStyleBackground;
      break;
    case m.NA.CUSTOM_THEMES:
      t = b.customThemesBackground;
      break;
    case m.NA.DISPLAY_NAME_STYLES:
      t = b.displayNameStylesBackground;
      break;
    default:
      t = ""
  }
  return t
}
let A = e => {
    let {
      descriptionCta: t,
      onClick: n,
      debouncedOnClickAnalytics: i,
      enablePremiumBrandRefreshDesign: a
    } = e, s = (0, f.ZP)(), d = (0, c.wj)(s), _ = d ? u.Tt.WHITE : u.Tt.BRAND, p = () => {
      i(), n()
    };
    return a ? (0, r.jsx)("div", {
      className: y.bentoBoxButton,
      children: (0, r.jsx)(l.zxk, {
        variant: "secondary",
        onClick: p,
        text: t
      })
    }) : (0, r.jsx)(u.zx, {
      "data-migration-pending": true,
      look: u.iL.OUTLINED,
      color: _,
      className: o()(b.bentoBoxButton, d ? b.bentoBoxButtonWhite : b.bentoBoxButtonBrand),
      onClick: p,
      children: t
    })
  },
  C = e => {
    let t, {
        name: n,
        title: a,
        description: l,
        descriptionCta: c,
        previewImage: u,
        videoUrl: f,
        shouldLoadVideo: O,
        index: I,
        customVideoStyle: C,
        isReducedMotion: N,
        onClick: R,
        badgeText: P,
        size: D,
        enablePremiumBrandRefreshDesign: w
      } = e,
      x = (0, h.rO)(),
      L = i.useRef(null),
      M = i.useRef(0),
      k = S(n),
      j = i.useMemo(() => (0, s.debounce)(() => {
        p.default.track(g.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
          box_type: (0, s.snakeCase)(n)
        })
      }, 800), [n]),
      U = () => {
        null == L.current || N || (L.current.currentTime = M.current, L.current.play())
      },
      G = () => {
        null == L.current || N || (M.current = L.current.currentTime, L.current.pause())
      },
      B = w ? y : b;
    t = w ? D === m.y$.LARGE ? "heading-xxl/bold" : "heading-xl/bold" : D === m.y$.SMALL ? "heading-xl/extrabold" : "heading-xxl/extrabold";
    let Z = () => (0, r.jsxs)("div", {
        className: o()(B.textBox, B["".concat(D)]),
        children: [(0, r.jsxs)("div", {
          children: [null != P && (0, r.jsx)("div", {
            className: B.badge,
            children: (0, r.jsx)(d.Heading, {
              variant: "eyebrow",
              color: "always-white",
              children: P
            })
          }), (0, r.jsx)(d.Heading, {
            variant: t,
            color: "header-primary",
            className: o()(B.header, !w && B["".concat(D)]),
            children: a
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          color: w ? "text-primary" : "text-muted",
          className: B.description,
          children: l
        }), null != c && null != R && (0, r.jsx)(A, {
          descriptionCta: c,
          onClick: R,
          debouncedOnClickAnalytics: j,
          enablePremiumBrandRefreshDesign: w
        })]
      }),
      F = () => (0, r.jsx)("div", {
        className: o()(B.boxArtContainer, B["".concat(D)]),
        children: (0, r.jsx)(_.Z, {
          playsInline: true,
          preload: O ? "auto" : "none",
          muted: true,
          poster: u,
          loop: true,
          className: o()(B.boxVideo, {
            [C]: null != C
          }),
          ref: L,
          children: (0, r.jsx)("source", {
            src: f,
            type: x ? E.m.MP4 : E.m.WEBM
          })
        }, f)
      }),
      V = I % 2 != 0,
      H = () => V ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Z, {}), (0, r.jsx)(F, {})]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(F, {}), (0, r.jsx)(Z, {})]
      }),
      Y = {
        className: o()(w ? y.backgroundColor : k, B.boxContainer, B["".concat(D)], w && y.gradientBackground),
        onMouseEnter: U,
        onFocus: U,
        onBlur: G,
        onMouseLeave: G
      };
    return w ? (0, r.jsx)(d.$1m, T(v({}, Y), {
      color: "purple",
      children: (0, r.jsx)(H, {})
    })) : (0, r.jsx)("div", T(v({}, Y), {
      children: (0, r.jsx)(H, {})
    }))
  }