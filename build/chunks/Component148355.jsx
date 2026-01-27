/** Chunk was on web.js **/
/** chunk id: 148355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M,
  h: () => w
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk776231 = require("./776231.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk218394 = require("./218394.js"),
  Chunk256449 = require("./256449.js"),
  Chunk842086 = require("./842086.js"),
  Chunk378058 = require("./378058.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk259843 = require("./259843.js");
let v = e => e.preventDefault(),
  A = .7,
  I = 33,
  S = 1.55,
  T = {
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
    "data-id": t.id,
    "data-name": t.name,
    "data-format-type": t.format_type
  })
}

function w(e) {
  let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
  return b.intl.formatToPlainString(b.t.rk6pOw, {
    stickerName: t
  })
}
let R = e => {
    let {
      children: t,
      hasError: n,
      isLoading: i,
      maskAsset: a,
      size: s,
      withLoadingIndicator: l = true
    } = e, c = s >= I;
    return (0, r.jsxs)("div", {
      className: o()(O.c6, {
        [O.v2]: n || a
      }),
      style: {
        height: s,
        width: s
      },
      children: [n ? (0, r.jsxs)("div", {
        className: O.z3,
        children: [(0, r.jsx)(f.d4M, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: O.ik
        }), c && (0, r.jsx)(f.Text, {
          className: O.kc,
          color: "text-default",
          variant: "text-sm/normal",
          children: b.intl.string(b.t["tWYWJ+"])
        })]
      }) : t, l && i && (0, r.jsx)("div", {
        className: O.Mz
      })]
    })
  },
  P = e => {
    let {
      shouldAnimate: t,
      size: a,
      sticker: o,
      fileUri: s,
      assetData: c,
      isFocused: u,
      className: d,
      maskAsset: f,
      positionRef: p,
      withLoadingIndicator: h,
      onError: m
    } = e, g = i.useRef(null), E = i.useRef(null), [v, A] = i.useState(true), [I, S] = i.useState(false), T = i.useRef(false);
    T.current = t && u;
    let C = null == s ? (0, y.zg)(o) : s;
    return (l()(null != C, "Unable to determine sticker asset URL. Sticker ID: ".concat(o.id)), i.useEffect(() => {
      if (null == g.current || null == C) return;
      let e = Math.min(2, (0, _.mZ)());
      g.current.width = a * e, g.current.height = a * e;
      let t = false;
      return (async () => {
        let {
          default: e
        } = await n.e("9330").then(n.bind(n, 140521));
        null != g.current && (E.current = new e({
          canvas: g.current,
          animationId: o.id,
          assetUrl: C,
          assetData: c,
          onInitialDraw: () => {
            t || A(false)
          },
          onError: () => {
            t || (A(false), S(true), null == m || m())
          }
        }), T.current && E.current.setState(true))
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
      "aria-label": I ? b.intl.string(b.t.yEvsK9) : w(o),
      ref: p,
      children: (0, r.jsx)(R, {
        hasError: I,
        isLoading: v,
        maskAsset: f,
        size: a,
        withLoadingIndicator: h,
        children: N((0, r.jsx)("canvas", {
          className: O.ex,
          ref: g
        }), o)
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
      fileUri: p
    } = e, [_, h] = i.useState(false), [m, g] = i.useState(true), [E, b] = i.useState(false), I = i.useRef(null), S = i.useRef(null), T = null != p ? p : (0, y.zg)(n, {
      isPreview: !t || !_ || !a,
      size: s
    }), C = i.useCallback(() => {
      g(false)
    }, []), P = i.useCallback(() => {
      b(true)
    }, []);
    return (i.useEffect(() => {
      if (null != I.current) {
        let {
          isVisible: e
        } = I.current;
        h(e)
      }
    }, []), i.useLayoutEffect(() => {
      var e;
      (null == (e = S.current) ? true : e.complete) === true && g(false)
    }, []), null == T) ? null : (0, r.jsx)(d.L, {
      innerRef: u,
      ref: I,
      onChange: h,
      threshold: A,
      children: (0, r.jsx)("div", {
        className: o()(l, O.__invalid_pngImageWrapper),
        ref: u,
        children: (0, r.jsx)(R, {
          hasError: E,
          isLoading: m,
          maskAsset: c,
          size: s,
          withLoadingIndicator: f,
          children: N((0, r.jsx)("img", {
            className: O.r3,
            alt: w(n),
            src: T,
            draggable: false,
            onError: P,
            onLoad: C,
            onContextMenu: v,
            ref: S
          }), n)
        })
      })
    })
  },
  L = e => {
    let {
      disableAnimation: t,
      enlargeScaleFactor: n,
      enlargeWithName: a,
      isInteracting: o,
      positionRef: s,
      size: l,
      sticker: d
    } = e, _ = (0, u.bG)([p.A], () => p.A.useReducedMotion), m = i.useRef(null), g = {
      transform: "scale(".concat(_ ? 1 : 1 / n, ")"),
      opacity: 0
    }, E = (0, f.pnh)(o, {
      ref: m,
      from: g,
      enter: {
        transform: "scale(1)",
        opacity: 1
      },
      leave: g,
      config: T
    }), y = i.useRef(null), b = (0, f.zhh)({
      ref: y,
      transform: o || _ ? "translateY(0)" : "translateY(-25px)",
      opacity: +!!o,
      config: C
    }, "animate-always");
    return (0, c.useChain)(o ? [m, y] : [y, m], o ? [0, .0625] : [0, 0]), E((e, i) => i && (0, r.jsx)(h.nE, {
      className: O.O2,
      fixed: true,
      align: "center",
      position: "center",
      targetRef: s,
      children: () => (0, r.jsxs)("div", {
        className: O._7,
        children: [(0, r.jsx)(c.animated.div, {
          className: O.tm,
          style: e,
          children: (0, r.jsx)(x, {
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
          className: O.av,
          style: b,
          children: (0, r.jsx)(f.Text, {
            variant: "text-sm/medium",
            className: O.FZ,
            children: d.name
          })
        })]
      })
    }))
  },
  x = e => {
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
      assetData: p,
      fileUri: _,
      onError: h
    } = e, y = (0, m.j)(), b = (0, g.Th)(t) && !n, O = i.useRef(null);
    if (null == u) return null;
    let v = u.format_type === E.TG.LOTTIE ? P : D;
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(v, {
        shouldAnimate: b,
        isFocused: y,
        size: c,
        sticker: u,
        className: d,
        maskAsset: l,
        positionRef: O,
        withLoadingIndicator: f,
        assetData: p,
        fileUri: _,
        onError: h
      }), a && (0, r.jsx)(L, {
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
  M = x