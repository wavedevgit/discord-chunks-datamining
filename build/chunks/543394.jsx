/** Chunk was on 67544 **/
/** chunk id: 543394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk359013 = require("./359013.js"),
  Chunk115092 = require("./115092.js"),
  Chunk3072 = require("./3072.js"),
  Chunk401258 = require("./401258.js"),
  Chunk477839 = require("./477839.js"),
  Chunk657864 = require("./657864.js"),
  Chunk113824 = require("./113824.js"),
  Chunk412902 = require("./412902.js"),
  Chunk793843 = require("./793843.js"),
  Chunk895075 = require("./895075.js"),
  Chunk146358 = require("./146358.js"),
  Chunk74688 = require("./74688.js"),
  Chunk15358 = require("./15358.js");
let Chunk774809 = require("./774809.js"),
  j = [Chunk113824, Chunk412902, Chunk793843, Chunk895075, Chunk146358, Chunk74688, Chunk15358].map(e => ({
    src: e,
    colorize: false
  })),
  N = new Chunk505266.qA({
    wind: false
  }),
  P = [],
  _ = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 0,
        y: 1
      },
      maxValue: {
        x: 3,
        y: 3
      }
    },
    size: {
      type: "static-random",
      minValue: 10,
      maxValue: 50,
      uniformVectorValues: true
    }
  };

function C(e) {
  var t, n;
  let {
    isPaused: m,
    width: g,
    windowKey: b
  } = e, y = c.Mq[f.yN.RAIN];
  (0, u.is)(O, m);
  let [h, x] = (0, s.useState)(null), [v, C] = (0, s.useState)(null), Z = (0, o.uR)(h, v), w = (0, a.e7)([i.Z], () => i.Z.getWindow(b)), E = (0, s.useCallback)(() => {
    var e, t;
    Z.createConfetti((e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, _), t = t = {
      position: {
        type: "static-random",
        minValue: {
          x: -g / 2 + 400,
          y: false
        },
        maxValue: {
          x: g + 800,
          y: false
        }
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, [Z, g]);
  return (0, l.Z)({
    onInterval: E,
    interval: 1e3 / 60,
    isPaused: m || !Z.isReady
  }), <r.Fragment>{<o.Ji ref={C} sprites={j} colors={P} spriteWidth={50} spriteHeight={50} />}{<o.O_ className={p.canvas} environment={N} ref={x} requestAnimationFrame={null != (t = null == w ? true : w.requestAnimationFrame) ? t : requestAnimationFrame} cancelAnimationFrame={null != (n = null == w ? true : w.cancelAnimationFrame) ? n : cancelAnimationFrame} />}{<d.Z itemId={f.yN.RAIN} pointsPerInterval={y.points} interval={1e3} isPaused={m} />}</r.Fragment>
}