/** Chunk was on web.js **/
/** chunk id: 596454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk990169 = require("./990169.js"),
  Chunk249458 = require("./249458.js"),
  Chunk146128 = require("./146128.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk959258 = require("./959258.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk237997 = require("./237997.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk506071 = require("./506071.js"),
  Chunk149203 = require("./149203.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./54453.js");
let S = __OVERLAY__ ? () => (0, Chunk442837.e7)([Chunk237997.default], () => Chunk237997.default.isInstanceFocused()) : Chunk506071.n;

function A(e) {
  var t, n, {
      src: a,
      alt: s,
      className: c,
      emojiId: f,
      emojiName: p,
      channelId: g,
      messageId: b,
      animated: O,
      size: T = "default",
      isInteracting: A = false,
      shouldAnimate: C,
      onMouseEnter: N,
      onMouseLeave: R,
      canSelect: P = true,
      autoplay: D,
      registerInnerRef: w,
      registerAnimatedElementRef: L,
      surrogate: x
    } = e,
    M = I(e, ["src", "alt", "className", "emojiId", "emojiName", "channelId", "messageId", "animated", "size", "isInteracting", "shouldAnimate", "onMouseEnter", "onMouseLeave", "canSelect", "autoplay", "registerInnerRef", "registerAnimatedElementRef", "surrogate"]);
  let [k, j] = i.useState(false), [U, G] = i.useState(true), B = i.useRef(true), {
    triggerAnimation: Z,
    untriggerAnimation: F
  } = i.useContext(u.Rm), V = _.Yk.useSetting(), H = S(), Y = null == D ? V : D, W = E.kV[T], K = i.useRef(null), z = i.useMemo(() => {
    if (null != a) return a;
    if (null != f) {
      let e = true === C && Y;
      return h.ZP.getEmojiURL({
        id: f,
        animated: H && true === O && (e || k || true === A),
        size: W
      })
    }
    if (null != p) return m.ZP.getURL(p);
    throw Error("Unknown Src for Emoji")
  }, [O, Y, f, p, W, H, k, A, C, a]), q = i.useCallback(() => {
    null != z && (B.current = (0, d.po)(z, e => {
      e || G(Date.now())
    }))
  }, [z]), X = i.useCallback(e => {
    O && j(true), null == f && Z(p), null == N || N(e)
  }, [O, p, N, Z, f]), Q = i.useCallback(e => {
    O && j(false), null == f && F(p), null == R || R(e)
  }, [O, f, p, R, F]), J = i.useMemo(() => {
    let e = null != f && "" !== f ? {
      "data-id": f
    } : {
      "data-name": p
    };
    return y(v(y({}, M), {
      className: o()("emoji", c, {
        jumboable: "jumbo" === T
      }),
      onError: q,
      onMouseEnter: X,
      onMouseLeave: Q,
      "data-type": "emoji"
    }), e)
  }, [c, f, p, X, Q, q, M, T]);
  i.useEffect(() => () => {
    var e;
    return null == (e = B.current) ? true : e.call(B)
  }, []);
  let $ = i.useCallback(e => {
      K.current = e, null == w || w(e), null == L || L(e)
    }, [w, L]),
    ee = (0, l.Z)(K);
  return null == z || "" === z ? (0, r.jsx)("span", v(y({}, J), {
    ref: $,
    className: o()("emoji", "emoji-text"),
    children: null != x ? x : p
  })) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.aO, {
      channelId: g,
      messageId: b,
      emojiName: p,
      disable: false === Y || false === V,
      emojiRef: ee
    }), P ? (0, r.jsx)("img", v(y({}, J), {
      ref: $,
      src: z,
      alt: null != (t = null != s ? s : p) ? t : true,
      draggable: false
    }), U) : (0, r.jsx)("div", v(y({}, J), {
      ref: $,
      role: "img",
      "aria-label": null != (n = null != s ? s : p) ? n : true,
      style: {
        backgroundImage: "url(".concat(z, ")"),
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      }
    }), U)]
  })
}

function C(e) {
  let {
    useThoughtfullyAnimated: t
  } = i.useContext(f.q), {
    animate: n,
    registerRef: a
  } = t(), {
    disableAnimations: o
  } = i.useContext(c.G);
  return (0, r.jsx)(A, v(y({}, e), {
    registerAnimatedElementRef: a,
    shouldAnimate: n && !o
  }))
}

function N(e) {
  return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && true === e.shouldAnimate ? (0, r.jsx)(C, y({}, e)) : (0, r.jsx)(A, y({}, e))
}