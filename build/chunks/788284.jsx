/** Chunk was on 37082 **/
/** chunk id: 788284, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk451478 = require("./451478.js"),
  Chunk302221 = require("./302221.js"),
  Chunk464121 = require("./464121.js");
let g = [0, .5, 1],
  f = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function x(e, t) {
  let r = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
  return function(e, t, n) {
    for (let r in t) {
      let t = l().get(e, r);
      if (null == t) continue;
      let s = t.map((e, t) => {
        var r;
        return null != (r = n[t]) ? r : e
      });
      l().set(e, r, s)
    }
  }(r, f, t), r
}

function h(e) {
  var t;
  let {
    animationClassName: n,
    className: o,
    quest: i,
    useReducedMotion: l
  } = e, f = (0, c.e7)([d.Z], () => d.Z.isFocused()), h = s.useRef(null), [j, _] = s.useState(false), b = s.useMemo(() => {
    if (null == i) return null;
    let e = (0, p.oo)(i.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = g.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return x(i.id, n)
  }, [i]), v = (null == (t = i.userStatus) ? true : t.enrolledAt) != null, C = !l && f;
  s.useEffect(() => {
    var e, t, n, r;
    f ? C && (null == (r = h.current) || null == (n = r.animation) || n.play()) : null == (t = h.current) || null == (e = t.animation) || e.goToAndStop(0, true)
  }, [C, f]);
  let y = s.useCallback(() => {
    _(true)
  }, []);
  return null == b || v ? <div className={m.backgroundFallback} style={{
      backgroundImage: "linear-gradient(90deg, ".concat(i.config.colors.primary, ", ").concat(i.config.colors.secondary, ")")
    }} /> : <div className={a()(m.lottieAnimationBackgroundWrapper, o)}><u.Fmz ref={h} onComplete={y} importData={() => b} shouldAnimate={!j && C} className={a()(m.lottieAnimation, m.lottieAnimationBackground, n)} loop={0} rendererSettings={{
        preserveAspectRatio: "none"
      }} /></div>
}