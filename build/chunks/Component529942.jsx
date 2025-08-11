/** Chunk was on 67544 **/
/** chunk id: 529942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk717976 = require("./717976.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js");
let u = ["right", "left"];

function d(e) {
  var t;
  let {
    className: n,
    width: o,
    imageSize: d,
    minSteps: f = 1,
    maxSteps: p = 1,
    minYDistance: m = 0,
    maxYDistance: g = 0,
    maxYDelta: b,
    minSpeed: y,
    maxSpeed: h,
    isPaused: x,
    children: v
  } = e, [O, j] = (0, s.useState)(0), [N, P] = (0, s.useState)(null != (t = a().sample(u)) ? t : u[0]), _ = (0, s.useRef)(a().random(y, h)), C = (0, s.useRef)(a().random(f, p)), Z = "right" === N ? -d : o + d, w = "right" === N ? o + d : -d, [E, S] = (0, l.q_F)(() => ({
    x: a().random(o),
    y: 0,
    rotateZ: 0
  }));
  return (0, s.useEffect)(() => {
    let e = false;
    return (async () => {
      var t, n;
      let r = (w - Z) / C.current,
        s = Math.abs((E.x.get() - Z) / r),
        i = C.current - s;
      for (let n = 0; n < i && !e; n++) {
        let e = E.x.get(),
          n = E.y.get(),
          s = (t = a().random(m, g), null != b && (n + t > b || n + t < -b) ? t < 0 ? -b : b : t),
          o = E.x.get() + r,
          i = "right" === N ? Math.min(o, w) : Math.max(o, w),
          l = s - n,
          u = Math.abs(i - e),
          d = 180 / Math.PI * Math.atan2(l, u) * ("right" === N ? 1 : false),
          f = Math.sqrt(u ** 2 + l ** 2) / _.current * 1e3;
        await S({
          x: i,
          y: s,
          rotateZ: d,
          config: {
            easing: c.Z.Easing.linear,
            duration: f
          }
        })
      }
      if (!e) {
        C.current = a().random(f, p), _.current = a().random(y, h);
        let e = null != (n = a().sample(u)) ? n : u[0],
          t = "right" === e ? -d : o + d;
        await S({
          x: t,
          y: 0,
          rotateZ: 0,
          immediate: true
        }), P(e)
      }
      j(O + 1)
    })(), () => {
      e = true
    }
  }, [E.x, E.y, N, w, d, O, h, p, b, g, y, f, m, S, _, Z, o]), (0, s.useEffect)(() => {
    try {
      x ? (E.x.pause(), E.y.pause(), E.rotateZ.pause()) : (E.x.resume(), E.y.resume(), E.rotateZ.resume())
    } catch (e) {}
  }, [E.rotateZ, E.x, E.y, x]), (0, r.jsx)(i.animated.div, {
    style: E,
    className: n,
    children: v(N)
  })
}