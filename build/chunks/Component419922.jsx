/** Chunk was on web.js **/
/** chunk id: 419922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => R,
  Z: () => M
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk358458 = require("./358458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk134432 = require("./134432.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk506071 = require("./506071.js"),
  Chunk453070 = require("./453070.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353681 = require("./353681.js");
let v = e => e.preventDefault(),
  I = .7,
  T = 33,
  S = 1.55,
  A = {
    tension: 1100,
    friction: 40
  },
  C = {
    tension: 1600,
    friction: 60
  };

function N(e, t) {
  return i.cloneElement(e, {
    "data-type": "sticker",
    "data-id": t
  })
}

function R(e) {
  let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
  return y.intl.formatToPlainString(y.t.rk6pOw, {
    stickerName: t
  })
}
let P = e => {
    let {
      children: t,
      hasError: n,
      isLoading: i,
      maskAsset: a,
      size: s,
      withLoadingIndicator: l = true
    } = e, c = s >= T;
    return (0, r.jsxs)("div", {
      className: o()(O.assetWrapper, {
        [O.assetWrapperMasked]: n || a
      }),
      style: {
        height: s,
        width: s
      },
      children: [n ? (0, r.jsxs)("div", {
        className: O.error,
        children: [(0, r.jsx)(f.r8p, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: O.errorIcon
        }), c && (0, r.jsx)(f.Text, {
          className: O.errorText,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: y.intl.string(y.t["tWYWJ+"])
        })]
      }) : t, l && i && (0, r.jsx)("div", {
        className: O.loadingIndicator
      })]
    })
  },
  w = e => {
    let {
      shouldAnimate: t,
      size: a,
      sticker: o,
      fileUri: s,
      assetData: c,
      isFocused: u,
      className: d,
      maskAsset: f,
      positionRef: _,
      withLoadingIndicator: h,
      onError: m
    } = e, g = i.useRef(null), E = i.useRef(null), [v, I] = i.useState(true), [T, S] = i.useState(false), A = i.useRef(false);
    A.current = t && u;
    let C = null == s ? (0, b.Q6)(o) : s;
    return (l()(null != C, "Unable to determine sticker asset URL. Sticker ID: ".concat(o.id)), i.useEffect(() => {
      if (null == g.current || null == C) return;
      let e = Math.min(2, (0, p.x_)());
      g.current.width = a * e, g.current.height = a * e;
      let t = false;
      return (async () => {
        let {
          default: e
        } = await n.e("21617").then(n.bind(n, 186952));
        null != g.current && (E.current = new e({
          canvas: g.current,
          animationId: o.id,
          assetUrl: C,
          assetData: c,
          onInitialDraw: () => {
            t || I(false)
          },
          onError: () => {
            t || (I(false), S(true), null == m || m())
          }
        }), A.current && E.current.setState(true))
      })(), () => {
        var e;
        null == (e = E.current) || e.drop(), E.current = null, t = true
      }
    }, [C, a, o.id, c, m]), i.useEffect(() => {
      var e;
      let n;
      t || (n = 0), null == (e = E.current) || e.setState(t && u, n)
    }, [o, t, u]), null == C) ? null : (0, r.jsx)("div", {
      role: "img",
      className: d,
      "aria-label": T ? y.intl.string(y.t.yEvsK9) : R(o),
      ref: _,
      children: (0, r.jsx)(P, {
        hasError: T,
        isLoading: v,
        maskAsset: f,
        size: a,
        withLoadingIndicator: h,
        children: N((0, r.jsx)("canvas", {
          className: O.lottieCanvas,
          ref: g
        }), o.id)
      })
    })
  },
  D = e => {
    let {
      shouldAnimate: t,
      sticker: n,
      isFocused: a,
      size: s,
      className: l,
      maskAsset: c,
      positionRef: u,
      withLoadingIndicator: f,
      fileUri: _
    } = e, [p, h] = i.useState(false), [m, g] = i.useState(true), [E, y] = i.useState(false), T = i.useRef(null), S = i.useRef(null), A = null != _ ? _ : (0, b.Q6)(n, {
      isPreview: !t || !p || !a,
      size: s
    }), C = i.useCallback(() => {
      g(false)
    }, []), w = i.useCallback(() => {
      y(true)
    }, []);
    return (i.useEffect(() => {
      if (null != T.current) {
        let {
          isVisible: e
        } = T.current;
        h(e)
      }
    }, []), i.useLayoutEffect(() => {
      var e;
      (null == (e = S.current) ? true : e.complete) === true && g(false)
    }, []), null == A) ? null : (0, r.jsx)(d.$, {
      innerRef: u,
      ref: T,
      onChange: h,
      threshold: I,
      children: (0, r.jsx)("div", {
        className: o()(l, O.__invalid_pngImageWrapper),
        ref: u,
        children: (0, r.jsx)(P, {
          hasError: E,
          isLoading: m,
          maskAsset: c,
          size: s,
          withLoadingIndicator: f,
          children: N((0, r.jsx)("img", {
            className: O.pngImage,
            alt: R(n),
            src: A,
            draggable: false,
            onError: w,
            onLoad: C,
            onContextMenu: v,
            ref: S
          }), n.id)
        })
      })
    })
  },
  x = e => {
    let {
      disableAnimation: t,
      enlargeScaleFactor: n,
      enlargeWithName: a,
      isInteracting: o,
      positionRef: s,
      size: l,
      sticker: d
    } = e, p = (0, u.e7)([_.Z], () => _.Z.useReducedMotion), m = i.useRef(null), g = {
      transform: "scale(".concat(p ? 1 : 1 / n, ")"),
      opacity: 0
    }, E = (0, f.Yzy)(o, {
      ref: m,
      from: g,
      enter: {
        transform: "scale(1)",
        opacity: 1
      },
      leave: g,
      config: A
    }), b = i.useRef(null), y = (0, f.q_F)({
      ref: b,
      transform: o || p ? "translateY(0)" : "translateY(-25px)",
      opacity: +!!o,
      config: C
    }, "animate-always");
    return (0, c.useChain)(o ? [m, b] : [b, m], o ? [0, .0625] : [0, 0]), E((e, i) => i && (0, r.jsx)(h.W5, {
      className: O.positionedLayer,
      fixed: true,
      align: "center",
      position: "center",
      targetRef: s,
      children: () => (0, r.jsxs)("div", {
        className: O.overlayWrapper,
        children: [(0, r.jsx)(c.animated.div, {
          className: O.overlayStickerWrapper,
          style: e,
          children: (0, r.jsx)(L, {
            className: O.__invalid_overlaySticker,
            disableAnimation: t,
            enlargeOnInteraction: false,
            isInteracting: o,
            maskAsset: false,
            sticker: d,
            size: Math.round(l * n),
            withLoadingIndicator: false
          })
        }), a && (0, r.jsx)(c.animated.div, {
          className: O.overlayLabelWrapper,
          style: y,
          children: (0, r.jsx)(f.Text, {
            variant: "text-sm/medium",
            className: O.overlayLabel,
            children: d.name
          })
        })]
      })
    }))
  },
  L = e => {
    let {
      isInteracting: t = false,
      disableAnimation: n = false,
      enlargeOnInteraction: a = false,
      enlargeWithName: o = true,
      enlargeScaleFactor: s = S,
      maskAsset: l = false,
      size: c,
      sticker: u,
      className: d,
      withLoadingIndicator: f,
      assetData: _,
      fileUri: p,
      onError: h
    } = e, b = (0, m.n)(), y = (0, g.t$)(t) && !n, O = i.useRef(null);
    if (null == u) return null;
    let v = u.format_type === E.u3.LOTTIE ? w : D;
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(v, {
        shouldAnimate: y,
        isFocused: b,
        size: c,
        sticker: u,
        className: d,
        maskAsset: l,
        positionRef: O,
        withLoadingIndicator: f,
        assetData: _,
        fileUri: p,
        onError: h
      }), a && (0, r.jsx)(x, {
        disableAnimation: n,
        enlargeScaleFactor: s,
        enlargeWithName: o,
        isInteracting: t,
        positionRef: O,
        size: c,
        sticker: u
      })]
    }, "".concat(u.id, ",").concat(c))
  },
  M = L