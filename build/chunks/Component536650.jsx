/** Chunk was on 35755 **/
/** chunk id: 536650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk688619 = require("./688619.js"),
  a = require.n(Chunk688619),
  Chunk392711 = require("./392711.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk220082 = require("./220082.js"),
  Chunk302221 = require("./302221.js"),
  Chunk783097 = require("./783097.js"),
  Chunk772606 = require("./772606.jsx"),
  Chunk488977 = require("./488977.jsx"),
  Chunk42659 = require("./42659.js");

function y(e) {
  let [t, n] = i.useState(true);
  return i.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function x(e) {
  let {
    application: t,
    context: n,
    name: r,
    iconURL: x,
    scrollerRef: b,
    sectionName: g
  } = e, j = (0, s.ap)((0, u.ZP)()), N = i.useRef(null), C = i.useRef(null), E = i.useRef(null), P = i.useRef(null), O = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOW).hex(), A = (0, d.ZP)("number" == typeof x ? "" : x, null != O ? O : ""), _ = i.useMemo(() => {
    var e, t;
    return null != (t = null == (e = (0, p.wh)({
      foreground: a()(A),
      background: a()(j ? "#000000" : "#ffffff"),
      ratio: 5,
      saturationFactor: .6
    })) ? true : e.hex()) ? t : A
  }, [A, j]), I = y(N), S = y(C), T = i.useCallback(() => {
    var e, t, n, l;
    let i = b.current,
      r = N.current,
      a = E.current,
      s = null == P ? true : P.current,
      c = parseInt(null != (e = null == I ? true : I.height) ? e : ""),
      u = parseInt(null != (t = null == S ? true : S.height) ? t : "");
    if (null != i && null != r && null != a && !isNaN(c) && !isNaN(u)) {
      let e = null != (n = i.scrollTop) ? n : 0,
        t = 0 !== i.scrollHeight ? i.scrollHeight : u + 20,
        d = 0 !== i.clientHeight ? i.clientHeight : u + 20,
        p = u - c,
        m = (0, o.clamp)(t - d, p + 1, u + 20),
        f = p === m ? 1 : (0, o.clamp)((e - p) / (m - p), 0, 1);
      r.style.filter = "brightness(".concat(1 + ((j ? 1.4 : .6) - 1) * f, ")"), r.style.backgroundColor = "color-mix(in oklab,".concat(A, " ").concat((1 - f) * 100, "%, ").concat(_, ")"), a.style.opacity = "".concat(0 + +f), a.style.transform = "translateY(".concat((l = c / 4) + (0 - l) * f, "px)"), null != s && (s.style.opacity = "".concat(1 + false * f))
    }
  }, [_, A, null == S ? true : S.height, j, b, null == I ? true : I.height]);
  return i.useEffect(() => {
    T()
  }, [T, j]), i.useEffect(() => {
    let e = b.current,
      t = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [b, T]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: v.stickyContainer,
      children: [(0, l.jsx)("div", {
        className: v.stickyBannerContainer,
        children: (0, l.jsx)("div", {
          className: v.stickyBanner,
          ref: N
        })
      }), (0, l.jsx)("div", {
        className: v.backButtonContainer,
        children: (0, l.jsx)(f.Z, {
          className: v.headerButton
        })
      }), (0, l.jsx)("div", {
        className: v.nameContainer,
        children: (0, l.jsx)(c.X6q, {
          ref: E,
          className: v.textApplicationName,
          variant: "heading-lg/extrabold",
          children: r
        })
      })]
    }), (0, m.BQ)(t) ? (0, l.jsx)("div", {
      ref: P,
      className: v.moreMenuButtonContainer,
      children: (0, l.jsx)(h.Z, {
        application: t,
        context: n,
        className: v.headerButton,
        sectionName: g
      })
    }) : null, (0, l.jsx)("div", {
      ref: C,
      className: v.bannerBackground,
      style: {
        backgroundColor: A
      }
    })]
  })
}