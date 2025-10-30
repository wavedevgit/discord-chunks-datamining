/** Chunk was on 35755 **/
/** chunk id: 536650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk236050 = require("./236050.js");

function y(e) {
  let [t, n] = l.useState(true);
  return l.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function g(e) {
  let {
    application: t,
    context: n,
    name: r,
    iconURL: g,
    scrollerRef: x,
    sectionName: b
  } = e, N = (0, s.ap)((0, u.ZP)()), j = l.useRef(null), C = l.useRef(null), E = l.useRef(null), P = l.useRef(null), A = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOW).hex(), _ = (0, d.ZP)("number" == typeof g ? "" : g, null != A ? A : ""), O = l.useMemo(() => {
    var e, t;
    return null != (t = null == (e = (0, p.wh)({
      foreground: a()(_),
      background: a()(N ? "#000000" : "#ffffff"),
      ratio: 5,
      saturationFactor: .6
    })) ? true : e.hex()) ? t : _
  }, [_, N]), I = y(j), S = y(C), T = l.useCallback(() => {
    var e, t, n, i;
    let l = x.current,
      r = j.current,
      a = E.current,
      s = null == P ? true : P.current,
      c = parseInt(null != (e = null == I ? true : I.height) ? e : ""),
      u = parseInt(null != (t = null == S ? true : S.height) ? t : "");
    if (null != l && null != r && null != a && !isNaN(c) && !isNaN(u)) {
      let e = null != (n = l.scrollTop) ? n : 0,
        t = 0 !== l.scrollHeight ? l.scrollHeight : u + 20,
        d = 0 !== l.clientHeight ? l.clientHeight : u + 20,
        p = u - c,
        m = (0, o.clamp)(t - d, p + 1, u + 20),
        f = p === m ? 1 : (0, o.clamp)((e - p) / (m - p), 0, 1);
      r.style.filter = "brightness(".concat(1 + ((N ? 1.4 : .6) - 1) * f, ")"), r.style.backgroundColor = "color-mix(in oklab,".concat(_, " ").concat((1 - f) * 100, "%, ").concat(O, ")"), a.style.opacity = "".concat(0 + +f), a.style.transform = "translateY(".concat((i = c / 4) + (0 - i) * f, "px)"), null != s && (s.style.opacity = "".concat(1 + false * f))
    }
  }, [O, _, null == S ? true : S.height, N, x, null == I ? true : I.height]);
  return l.useEffect(() => {
    T()
  }, [T, N]), l.useEffect(() => {
    let e = x.current,
      t = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [x, T]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: v.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: v.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: v.stickyBanner,
          ref: j
        })
      }), (0, i.jsx)("div", {
        className: v.backButtonContainer,
        children: (0, i.jsx)(f.Z, {
          className: v.headerButton
        })
      }), (0, i.jsx)("div", {
        className: v.nameContainer,
        children: (0, i.jsx)(c.Heading, {
          ref: E,
          className: v.textApplicationName,
          variant: "heading-lg/extrabold",
          children: r
        })
      })]
    }), (0, m.BQ)(t) ? (0, i.jsx)("div", {
      ref: P,
      className: v.moreMenuButtonContainer,
      children: (0, i.jsx)(h.Z, {
        application: t,
        context: n,
        className: v.headerButton,
        sectionName: b
      })
    }) : null, (0, i.jsx)("div", {
      ref: C,
      className: v.bannerBackground,
      style: {
        backgroundColor: _
      }
    })]
  })
}