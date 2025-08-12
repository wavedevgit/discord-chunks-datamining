/** Chunk was on 20501 **/
/** chunk id: 42373, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk304789 = require("./304789.jsx"),
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
  Chunk437269 = require("./437269.js"),
  Chunk532092 = require("./532092.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = e => {
    let {
      descriptionCta: t,
      onClick: n,
      debouncedOnClickAnalytics: r,
      enablePremiumBrandRefreshDesign: s
    } = e, l = (0, p.ZP)(), c = (0, d.wj)(l), m = c ? u.Tt.WHITE : u.Tt.BRAND, g = () => {
      r(), n()
    };
    return s ? (0, i.jsx)("div", {
      className: E.bentoBoxButton,
      children: (0, i.jsx)(o.z, {
        variant: "secondary",
        onClick: g,
        text: t
      })
    }) : (0, i.jsx)(u.zx, {
      "data-migration-pending": true,
      look: u.iL.OUTLINED,
      color: m,
      className: a()(j.bentoBoxButton, c ? j.bentoBoxButtonWhite : j.bentoBoxButtonBrand),
      onClick: g,
      children: t
    })
  },
  S = e => {
    let t, {
        name: n,
        title: s,
        description: o,
        descriptionCta: d,
        previewImage: u,
        videoUrl: p,
        shouldLoadVideo: S,
        index: T,
        customVideoStyle: I,
        isReducedMotion: N,
        onClick: y,
        badgeText: A,
        size: P,
        enablePremiumBrandRefreshDesign: R
      } = e,
      D = (0, f.rO)(),
      Z = r.useRef(null),
      w = r.useRef(0),
      k = function(e) {
        let t;
        switch (e) {
          case b.NA.EMOJIS:
            t = j.emojisBackground;
            break;
          case b.NA.REFERRAL_PROGRAM:
            t = j.referralProgramBackground;
            break;
          case b.NA.NO_LIMITS:
            t = j.noLimitsBackground;
            break;
          case b.NA.YOUR_SPACE:
            t = j.yourSpaceBackground;
            break;
          case b.NA.SERVER_PROFILES:
            t = j.serverProfilesBackground;
            break;
          case b.NA.SHOW_YOUR_STYLE:
            t = j.yourStyleBackground;
            break;
          case b.NA.PERMADECOS:
            t = j.permadecosBackground;
            break;
          case b.NA.VOICE_FILTERS:
            t = j.voiceFiltersBackground
        }
        return t
      }(n),
      L = (0, l.debounce)(() => {
        h.default.track(x.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, {
          box_type: (0, l.snakeCase)(n)
        })
      }, 800),
      M = () => {
        null == Z.current || N || (Z.current.currentTime = w.current, Z.current.play())
      },
      B = () => {
        null == Z.current || N || (w.current = Z.current.currentTime, Z.current.pause())
      },
      U = R ? E : j;
    t = R ? P === b.y$.LARGE ? "heading-xxl/bold" : "heading-xl/bold" : P === b.y$.SMALL ? "heading-xl/extrabold" : "heading-xxl/extrabold";
    let V = () => (0, i.jsxs)("div", {
        className: a()(U.textBox, U["".concat(P)]),
        children: [(0, i.jsxs)("div", {
          children: [null != A && (0, i.jsx)("div", {
            className: U.badge,
            children: (0, i.jsx)(m.X6q, {
              variant: "eyebrow",
              color: "always-white",
              children: A
            })
          }), (0, i.jsx)(m.X6q, {
            variant: t,
            color: "header-primary",
            className: a()(U.header, !R && U["".concat(P)]),
            children: s
          })]
        }), (0, i.jsx)(m.Text, {
          variant: "text-md/medium",
          color: R ? "text-primary" : "text-muted",
          className: U.description,
          children: o
        }), null != d && null != y && (0, i.jsx)(v, {
          descriptionCta: d,
          onClick: y,
          debouncedOnClickAnalytics: L,
          enablePremiumBrandRefreshDesign: R
        })]
      }),
      G = () => (0, i.jsx)("div", {
        className: a()(U.boxArtContainer, U["".concat(P)]),
        children: (0, i.jsx)(g.Z, {
          playsInline: true,
          preload: S ? "auto" : "none",
          muted: true,
          poster: u,
          loop: true,
          className: a()(U.boxVideo, {
            [I]: null != I
          }),
          ref: Z,
          children: (0, i.jsx)("source", {
            src: p,
            type: D ? _.m.MP4 : _.m.WEBM
          })
        }, p)
      }),
      F = T % 2 != 0,
      H = () => F ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(V, {}), (0, i.jsx)(G, {})]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(G, {}), (0, i.jsx)(V, {})]
      }),
      z = {
        className: a()(R ? E.backgroundColor : k, U.boxContainer, U["".concat(P)], R && E.gradientBackground),
        onMouseEnter: M,
        onFocus: M,
        onBlur: B,
        onMouseLeave: B
      };
    return R ? (0, i.jsx)(c.$, O(C({}, z), {
      color: "purple",
      children: (0, i.jsx)(H, {})
    })) : (0, i.jsx)("div", O(C({}, z), {
      children: (0, i.jsx)(H, {})
    }))
  }