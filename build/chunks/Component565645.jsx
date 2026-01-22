/** Chunk was on web.js **/
/** chunk id: 565645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk724442 = require("./724442.js"),
  Chunk692051 = require("./692051.js"),
  Chunk129185 = require("./129185.jsx"),
  Chunk776231 = require("./776231.js"),
  Chunk830178 = require("./830178.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk256415 = require("./256415.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk218394 = require("./218394.js"),
  Chunk732139 = require("./732139.js");

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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let I = __OVERLAY__ ? () => (0, o.bG)([_.default], () => _.default.isInstanceFocused()) : Chunk218394.j;

function T(e) {
  var t, n;
  let {
    src: a,
    alt: o,
    className: c,
    emojiId: f,
    emojiName: _,
    channelId: g,
    messageId: b,
    animated: O,
    size: S = "default",
    isInteracting: T = false,
    shouldAnimate: C,
    onMouseEnter: N,
    onMouseLeave: R,
    canSelect: w = true,
    autoplay: P,
    registerInnerRef: D,
    registerAnimatedElementRef: x,
    surrogate: L
  } = e, j = v(e, ["src", "alt", "className", "emojiId", "emojiName", "channelId", "messageId", "animated", "size", "isInteracting", "shouldAnimate", "onMouseEnter", "onMouseLeave", "canSelect", "autoplay", "registerInnerRef", "registerAnimatedElementRef", "surrogate"]), [M, k] = i.useState(false), [U, G] = i.useState(true), V = i.useRef(true), {
    triggerAnimation: F,
    untriggerAnimation: B
  } = i.useContext(u.wE), H = p.Sf.useSetting(), Y = I(), W = null == P ? H : P, K = E.Ec[S], z = i.useRef(null), q = i.useMemo(() => {
    if (null != a) return a;
    if (null != f) {
      let e = true === C && W;
      return h.Ay.getEmojiURL({
        id: f,
        animated: Y && true === O && (e || M || true === T),
        size: K
      })
    }
    if (null != _) return m.Ay.getURL(_);
    throw Error("Unknown Src for Emoji")
  }, [O, W, f, _, K, Y, M, T, C, a]), X = i.useCallback(() => {
    null != q && (V.current = (0, d.yt)(q, e => {
      e || G(Date.now())
    }))
  }, [q]), Z = i.useCallback(e => {
    O && k(true), null == f && F(_), null == N || N(e)
  }, [O, _, N, F, f]), Q = i.useCallback(e => {
    O && k(false), null == f && B(_), null == R || R(e)
  }, [O, f, _, R, B]), $ = i.useMemo(() => {
    let e = null != f && "" !== f ? {
      "data-id": f
    } : {
      "data-name": _
    };
    return y(A(y({}, j), {
      className: s()("emoji", c, {
        jumboable: "jumbo" === S
      }),
      onError: X,
      onMouseEnter: Z,
      onMouseLeave: Q,
      "data-type": "emoji"
    }), e)
  }, [c, f, _, Z, Q, X, j, S]);
  i.useEffect(() => () => {
    var e;
    return null == (e = V.current) ? true : e.call(V)
  }, []);
  let J = i.useCallback(e => {
      z.current = e, null == D || D(e), null == x || x(e)
    }, [D, x]),
    ee = (0, l.A)(z);
  return null == q || "" === q ? (0, r.jsx)("span", A(y({}, $), {
    ref: J,
    className: s()("emoji", "emoji-text"),
    children: null != L ? L : _
  })) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.q6, {
      channelId: g,
      messageId: b,
      emojiName: _,
      disable: false === W || false === H,
      emojiRef: ee
    }), w ? (0, r.jsx)("img", A(y({}, $), {
      ref: J,
      src: q,
      alt: null != (t = null != o ? o : _) ? t : true,
      draggable: false
    }), U) : (0, r.jsx)("div", A(y({}, $), {
      ref: J,
      role: "img",
      "aria-label": null != (n = null != o ? o : _) ? n : true,
      style: {
        backgroundImage: "url(".concat(q, ")"),
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
  } = i.useContext(f.W), {
    animate: n,
    registerRef: a
  } = t(), {
    disableAnimations: s
  } = i.useContext(c.Y);
  return (0, r.jsx)(T, A(y({}, e), {
    registerAnimatedElementRef: a,
    shouldAnimate: n && !s
  }))
}

function N(e) {
  return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && true === e.shouldAnimate ? (0, r.jsx)(C, y({}, e)) : (0, r.jsx)(T, y({}, e))
}