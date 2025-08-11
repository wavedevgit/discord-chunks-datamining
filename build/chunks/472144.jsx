/** Chunk was on 27458 **/
/** chunk id: 472144, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569379 = require("./569379.js"),
  Chunk642145 = require("./642145.js"),
  Chunk704247 = require("./704247.js");
let f = Chunk73800.forwardRef((e, t) => {
  let {
    quest: r,
    percentComplete: s,
    size: o = 42,
    strokeWidth: f = 3,
    glowBlur: p = .4,
    percentCompleteText: x,
    percentCompleteTextVariant: j = "text-lg/medium",
    children: g
  } = e, h = (0, a.E)(r, s > 0), b = o / 2, m = o / 2 - f / 2, y = 2 * Math.PI * m, C = y - s * y, O = {
    strokeDasharray: "".concat(y, " ").concat(y),
    strokeDashoffset: C
  }, k = {
    strokeDasharray: "".concat(y, " ").concat(y),
    strokeDashoffset: -s * y
  }, v = {
    boxShadow: "0 0 30px 0px ".concat(h.glow)
  }, {
    progressTextAnimation: S
  } = (0, i.q_F)({
    progressTextAnimation: +(null != x && 1 !== s),
    config: u.Y
  });
  return <div className={d.outer} ref={t}>{<div className={d.inner} style={v}>{g}{<c.animated.div style={{
          opacity: S
        }} className={l()(d.coverContent, d.progressTextWrapper)}>{<div className={l()(d.coverContent, d.progressTextOverlay)} />}{<i.Text variant={j} color={"text-primary"} className={d.progressText}>{x}</i.Text>}</c.animated.div>}</div>}{<svg className={d.progressBar} height={o} width={o}>{<defs>{<filter id={"glow"}>{<feGaussianBlur result={"coloredBlur"} stdDeviation={p} />}{<feMerge>{<feMergeNode in={"coloredBlur"} />}{<feMergeNode in={"coloredBlur"} />}{<feMergeNode in={"coloredBlur"} />}{<feMergeNode in={"SourceGraphic"} />}</feMerge>}</filter>}{<linearGradient id={"linear"} x1={"100%"} y1={"0%"} x2={"0%"} y2={"0%"}>{<stop offset={"0%"} stopColor={h.backgroundTop} />}{<stop offset={"100%"} stopColor={h.backgroundBottom} />}</linearGradient>}</defs>}{<circle className={d.progress} strokeWidth={f} fill={"transparent"} r={m} cx={b} cy={b} stroke={"url(#linear)"} style={k} />}{<circle className={d.progress} strokeWidth={f} fill={"transparent"} r={m} cx={b} cy={b} stroke={h.foreground} style={O} />}</svg>}</div>
})