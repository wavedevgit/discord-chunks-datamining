/** Chunk was on web.js **/
/** chunk id: 644681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk735438 = require("./735438.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk654107 = require("./654107.js"),
  Chunk998304 = require("./998304.js"),
  Chunk735991 = require("./735991.js"),
  Chunk278597 = require("./278597.jsx"),
  Chunk645725 = require("./645725.jsx"),
  Chunk541781 = require("./541781.js");
let g = 20;

function E(e, t, n) {
  return t === n ? 1 : (0, o.clamp)((e - t) / (n - t), 0, 1)
}

function y(e, t, n) {
  return e + (t - e) * n
}

function b(e) {
  let [t, n] = i.useState(true);
  return i.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function O(e) {
  let {
    application: t,
    context: n,
    name: a,
    iconURL: O,
    scrollerRef: v,
    sectionName: A
  } = e, I = (0, l.qB)((0, u.Ay)()), S = i.useRef(null), T = i.useRef(null), C = i.useRef(null), N = i.useRef(null), w = (0, c.rdh)(c.LU0.colors.BACKGROUND_BASE_LOW).hex(), R = (0, d.Ay)("number" == typeof O ? "" : O, null != w ? w : ""), P = i.useMemo(() => {
    var e, t;
    return null != (e = null == (t = (0, f.lZ)({
      foreground: s()(R),
      background: s()(I ? "#000000" : "#ffffff"),
      ratio: 5,
      saturationFactor: .6
    })) ? true : t.hex()) ? e : R
  }, [R, I]), D = b(S), x = b(T), L = i.useCallback(() => {
    var e, t, n;
    let r = v.current,
      i = S.current,
      a = C.current,
      s = null == N ? true : N.current,
      l = parseInt(null != (e = null == D ? true : D.height) ? e : ""),
      c = parseInt(null != (t = null == x ? true : x.height) ? t : "");
    if (null != r && null != i && null != a && !isNaN(l) && !isNaN(c)) {
      let e = null != (n = r.scrollTop) ? n : 0,
        t = 0 !== r.scrollHeight ? r.scrollHeight : c + g,
        u = 0 !== r.clientHeight ? r.clientHeight : c + g,
        d = c - l,
        f = (0, o.clamp)(t - u, d + 1, c + g),
        p = E(e, d, f);
      i.style.filter = "brightness(".concat(y(1, I ? 1.4 : .6, p), ")"), i.style.backgroundColor = "color-mix(in oklab,".concat(R, " ").concat((1 - p) * 100, "%, ").concat(P, ")"), a.style.opacity = "".concat(y(0, 1, p)), a.style.transform = "translateY(".concat(y(l / 4, 0, p), "px)"), null != s && (s.style.opacity = "".concat(y(1, 0, p)))
    }
  }, [P, R, null == x ? true : x.height, I, v, null == D ? true : D.height]);
  return i.useEffect(() => {
    L()
  }, [L, I]), i.useEffect(() => {
    let e = v.current,
      t = () => {
        L()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [v, L]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: m.Xp,
      children: [(0, r.jsx)("div", {
        className: m.LO,
        children: (0, r.jsx)("div", {
          className: m.If,
          ref: S
        })
      }), (0, r.jsx)("div", {
        className: m.FY,
        children: (0, r.jsx)(_.A, {
          className: m.aY
        })
      }), (0, r.jsx)("div", {
        className: m.VW,
        children: (0, r.jsx)(c.Heading, {
          ref: C,
          className: m.n,
          variant: "heading-lg/extrabold",
          children: a
        })
      })]
    }), (0, p.$B)(t) ? (0, r.jsx)("div", {
      ref: N,
      className: m.Ch,
      children: (0, r.jsx)(h.A, {
        application: t,
        context: n,
        className: m.aY,
        sectionName: A
      })
    }) : null, (0, r.jsx)("div", {
      ref: T,
      className: m.b8,
      style: {
        backgroundColor: R
      }
    })]
  })
}