/** Chunk was on web.js **/
/** chunk id: 536650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk220082 = require("./220082.js"),
  Chunk564334 = require("./564334.js"),
  Chunk302221 = require("./302221.js"),
  Chunk783097 = require("./783097.js"),
  Chunk772606 = require("./772606.js"),
  Chunk488977 = require("./488977.jsx"),
  Chunk614266 = require("./614266.js");
let m = 20;

function g(e, t, n) {
  return t === n ? 1 : (0, o.clamp)((e - t) / (n - t), 0, 1)
}

function E(e, t, n) {
  return e + (t - e) * n
}

function b(e) {
  let [t, n] = i.useState(true);
  return i.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function y(e) {
  let {
    application: t,
    context: n,
    name: y,
    iconURL: O,
    scrollerRef: v,
    sectionName: I
  } = e, T = (0, a.ap)((0, l.ZP)()), S = i.useRef(null), A = i.useRef(null), N = i.useRef(null), C = i.useRef(null), R = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOW).hex(), P = (0, c.ZP)("number" == typeof O ? "" : O, null != R ? R : ""), w = i.useMemo(() => {
    var e, t;
    let n = (0, o.compact)([u.Z.parseHexString(P), u.Z.parseHexString(T ? "#000000" : "#ffffff")]);
    return null != (t = null == (e = (0, d.k8)({
      colors: n,
      ratio: 5,
      saturationFactor: .6
    })) ? true : e.toHexString()) ? t : P
  }, [P, T]), D = b(S), L = b(A), x = i.useCallback(() => {
    var e, t, n;
    let r = v.current,
      i = S.current,
      a = N.current,
      s = null == C ? true : C.current,
      l = parseInt(null != (e = null == D ? true : D.height) ? e : ""),
      c = parseInt(null != (t = null == L ? true : L.height) ? t : "");
    if (null != r && null != i && null != a && !isNaN(l) && !isNaN(c)) {
      let e = null != (n = r.scrollTop) ? n : 0,
        t = 0 !== r.scrollHeight ? r.scrollHeight : c + m,
        u = 0 !== r.clientHeight ? r.clientHeight : c + m,
        d = c - l,
        f = (0, o.clamp)(t - u, d + 1, c + m),
        _ = g(e, d, f);
      i.style.filter = "brightness(".concat(E(1, T ? 1.4 : .6, _), ")"), i.style.backgroundColor = "color-mix(in oklab,".concat(P, " ").concat((1 - _) * 100, "%, ").concat(w, ")"), a.style.opacity = "".concat(E(0, 1, _)), a.style.transform = "translateY(".concat(E(l / 4, 0, _), "px)"), null != s && (s.style.opacity = "".concat(E(1, 0, _)))
    }
  }, [w, P, null == L ? true : L.height, T, v, null == D ? true : D.height]);
  return i.useEffect(() => {
    x()
  }, [x, T]), i.useEffect(() => {
    let e = v.current,
      t = () => {
        x()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [v, x]), <r.Fragment>{<div className={h.stickyContainer}>{<div className={h.stickyBannerContainer}><div className={h.stickyBanner} ref={S} /></div>}{<div className={h.backButtonContainer}><_.Z className={h.headerButton} /></div>}{<div className={h.nameContainer}><s.X6q ref={N} className={h.textApplicationName} variant={"heading-lg/extrabold"}>{y}</s.X6q></div>}</div>}{(0, f.BQ)(t) ? <div ref={C} className={h.moreMenuButtonContainer}><p.Z application={t} context={n} className={h.headerButton} sectionName={I} /></div> : null}{<div ref={A} className={h.bannerBackground} style={{
        backgroundColor: P
      }} />}</r.Fragment>
}