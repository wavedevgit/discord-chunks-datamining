/** Chunk was on web.js **/
/** chunk id: 788284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk451478 = require("./451478.js"),
  Chunk302221 = require("./302221.js"),
  Chunk746887 = require("./746887.js");
let p = [0, .5, 1],
  h = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function m(e, t) {
  let r = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
  return g(r, h, t), r
}

function g(e, t, n) {
  for (let r in t) {
    let t = l().get(e, r);
    if (null == t) continue;
    let i = t.map((e, t) => {
      var r;
      return null != (r = n[t]) ? r : e
    });
    l().set(e, r, i)
  }
}

function E(e) {
  var t;
  let {
    animationClassName: n,
    className: a,
    quest: s,
    useReducedMotion: l
  } = e, h = (0, c.e7)([d.Z], () => d.Z.isFocused()), g = i.useRef(null), [E, b] = i.useState(false), y = i.useMemo(() => {
    if (null == s) return null;
    let e = (0, f.oo)(s.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = p.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return m(s.id, n)
  }, [s]), O = (null == (t = s.userStatus) ? true : t.enrolledAt) != null, v = !l && h;
  i.useEffect(() => {
    var e, t, n, r;
    h ? v && (null == (r = g.current) || null == (n = r.animation) || n.play()) : null == (t = g.current) || null == (e = t.animation) || e.goToAndStop(0, true)
  }, [v, h]);
  let I = i.useCallback(() => {
    b(true)
  }, []);
  return null == y || O ? (0, r.jsx)("div", {
    className: _.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(s.config.colors.primary, ", ").concat(s.config.colors.secondary, ")")
    }
  }) : (0, r.jsx)("div", {
    className: o()(_.lottieAnimationBackgroundWrapper, a),
    children: (0, r.jsx)(u.Fmz, {
      ref: g,
      onComplete: I,
      importData: () => y,
      shouldAnimate: !E && v,
      className: o()(_.lottieAnimation, _.lottieAnimationBackground, n),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, s.config.colors.primary)
  })
}