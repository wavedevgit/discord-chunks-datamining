/** Chunk was on 75708 **/
/** chunk id: 914677, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk119269 = require("./119269.jsx"),
  Chunk3504 = require("./3504.js");
let c = "url(#gradient)",
  d = (e, t) => {
    switch (e) {
      case l.Qo.NITRO_LOGO:
        return t ? "0.3" : "0.2";
      case l.Qo.NITRO_GEM:
      case l.Qo.AVATAR_DECO:
      default:
        return
    }
  },
  u = e => {
    switch (e) {
      case l.Qo.NITRO_GEM:
      case l.Qo.AVATAR_DECO:
        return "var(--background-base-low)";
      case l.Qo.NITRO_LOGO:
        return "var(--premium-tier-2-purple)";
      default:
        return
    }
  },
  m = (e, t) => {
    switch (t) {
      case l.Qo.NITRO_GEM:
      case l.Qo.AVATAR_DECO:
        return c;
      case l.Qo.NITRO_LOGO:
        return e ? "url(#gradient_nitro_logo)" : c;
      default:
        return
    }
  },
  p = e => {
    let {
      percentage: t = 0,
      children: n,
      animationClassName: c,
      initialPercentage: p = 0,
      progressCircleStrokeSize: g = 2,
      progressCircleVariation: h,
      progressCircleStroke: f
    } = e, b = 43 + g / 2, x = 2 * Math.PI * b, [_, j] = r.useState(p);
    r.useEffect(() => {
      let e = setTimeout(() => {
        j(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]);
    let E = (0, a.ZP)(),
      C = (0, s.ap)(E),
      O = u(h),
      v = d(h, C),
      S = null != f ? f : m(C, h);
    return <div className={o.circleContainer}>{<svg viewBox={"0 0 100 100"} className={o.circleSVG}>{<circle className={h === l.Qo.NITRO_GEM || h === l.Qo.AVATAR_DECO ? o.baseProgressCircle : true} fill={"transparent"} strokeWidth={g} r={"".concat(b)} cx={"50%"} cy={"50%"} stroke={O} strokeOpacity={v} />}{<circle stroke={S} strokeWidth={g} strokeLinecap={"round"} strokeDasharray={"".concat(x, " ").concat(x)} className={c} style={{
            strokeDashoffset: (1 - _ / 100) * x
          }} r={"".concat(b)} cx={"50%"} cy={"50%"} />}</svg>}{<svg width={"0"} height={"0"}>{<linearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"100%"} y2={"100%"}>{<stop offset={"0%"} style={{
              stopColor: "#FFBDF2"
            }} />}{<stop offset={"100%"} style={{
              stopColor: "#E742E1"
            }} />}</linearGradient>}{<linearGradient id={"gradient_nitro_logo"} x1={"2.99995"} y1={"67.6298"} x2={"132.55"} y2={"67.6298"} gradientUnits={"userSpaceOnUse"}>{<stop stopColor={"#F9A0E8"} />}{<stop offset={"1"} stopColor={"#E742E1"} />}</linearGradient>}{<linearGradient id={"dark-purple-gradient"} x1={"0%"} y1={"0%"} x2={"100%"} y2={"0%"}>{<stop offset={"0%"} style={{
              stopColor: "#241731",
              stopOpacity: 1
            }} />}{<stop offset={"100%"} style={{
              stopColor: "#241731",
              stopOpacity: 1
            }} />}</linearGradient>}</svg>}{<div className={o.childrenContainer}>{n}</div>}</div>
  }