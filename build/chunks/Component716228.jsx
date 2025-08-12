/** Chunk was on 67544 **/
/** chunk id: 716228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk359013 = require("./359013.js"),
  Chunk115092 = require("./115092.js"),
  Chunk284539 = require("./284539.js"),
  Chunk67411 = require("./67411.js"),
  Chunk529942 = require("./529942.jsx"),
  Chunk26141 = require("./26141.jsx"),
  Chunk18582 = require("./18582.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk401258 = require("./401258.js"),
  Chunk81829 = require("./81829.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk830013 = require("./830013.js"),
  Chunk220371 = require("./220371.js"),
  Chunk839538 = require("./839538.js"),
  Chunk332536 = require("./332536.js"),
  Chunk225893 = require("./225893.js"),
  Chunk483586 = require("./483586.js");

function C(e) {
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
}
let Chunk97996 = require("./97996.js"),
  Chunk675755 = require("./675755.js"),
  E = [Chunk483586],
  S = [Chunk220371, Chunk839538, Chunk332536],
  I = [{
    src: Chunk225893,
    colorize: false
  }],
  k = [],
  M = new Chunk505266.qA,
  R = [Chunk477839.FK.LAWNMOWER_1, Chunk477839.FK.LAWNMOWER_2];

function A(e) {
  var t, n, O;
  let {
    isPaused: j,
    width: N,
    windowKey: P
  } = e, [_, A] = (0, s.useState)(0), T = (0, s.useRef)("right"), [L, B] = (0, s.useState)(null), [D, F] = (0, s.useState)(null), U = (0, s.useRef)(null), G = (0, o.uR)(L, D), W = l.Mq[x.yN.LAWNMOWER], [K, V] = (0, s.useState)({}), H = (0, i.e7)([c.Z], () => c.Z.getWindow(P)), [q, z] = (0, d.Z)(x.yN.LAWNMOWER), Y = null != (t = q.count) ? t : 0;
  (0, b.is)(Z, j);
  let X = (0, b.eR)(w);
  (0, f.Z)(R, Y);
  let J = (0, s.useCallback)(() => {
      if (G.isReady && null != U.current) {
        let {
          x: e,
          y: t
        } = U.current.getBoundingClientRect(), n = "right" === T.current ? 45 : 25;
        G.createMultipleConfetti({
          position: {
            type: "static",
            value: {
              x: e + n,
              y: t + 25
            }
          },
          velocity: {
            type: "static-random",
            minValue: {
              x: 15,
              y: false
            },
            maxValue: {
              x: false,
              y: false
            }
          },
          rotation: {
            type: "linear-random",
            minValue: 0,
            maxValue: 360,
            minAddValue: false,
            maxAddValue: 25
          },
          size: {
            type: "static-random",
            minValue: 2,
            maxValue: 8
          }
        }, 15)
      }
      V(e => {
        var t, n, r;
        return n = C({}, e), r = r = {
          [(0, a.Z)()]: null != (t = W.points) ? t : 0
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n
      })
    }, [G, W.points]),
    Q = (0, s.useCallback)(() => {
      A(1), z({
        count: Y + 1
      }), X()
    }, [Y, X, z]),
    $ = (0, s.useCallback)(() => {
      1 === _ && A(2)
    }, [_]),
    ee = (0, s.useCallback)(() => {
      2 === _ && .1 >= Math.random() && A(0)
    }, [_]);
  (0, u.Z)({
    onInterval: ee,
    interval: 1e3,
    isPaused: j
  });
  let et = (0, s.useCallback)(e => {
    delete K[e], V(C({}, K))
  }, [K]);
  return 2 === _ ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Ji, {
      ref: F,
      sprites: I,
      colors: k,
      spriteWidth: 8,
      spriteHeight: 8
    }), (0, r.jsx)(y.Z, {
      interval: 1e3,
      pointsPerInterval: W.points,
      isPaused: j || 0 !== _,
      itemId: x.yN.LAWNMOWER,
      onPointsInterval: J
    }), (0, r.jsx)(g.Z, {
      className: v.lawnmowerClickable,
      onClick: Q,
      children: (0, r.jsx)(p.Z, {
        className: v.lawnmower,
        width: N,
        minSpeed: 50,
        maxSpeed: 75,
        imageSize: 80,
        isPaused: j || 0 !== _,
        children: e => (T.current = e, (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(h.Z, {
            renderedPoints: K,
            onRemovePoint: et
          }), (0, r.jsx)(m.Z, {
            imageRef: U,
            className: "left" === e ? v.imageFlipped : v.image,
            isPaused: j,
            interval: 200,
            sources: 0 === _ ? E : S,
            onLoopEnd: $
          })]
        }))
      })
    }), (0, r.jsx)(o.O_, {
      className: v.confettiCanvas,
      environment: M,
      ref: B,
      requestAnimationFrame: null != (n = null == H ? true : H.requestAnimationFrame) ? n : requestAnimationFrame,
      cancelAnimationFrame: null != (O = null == H ? true : H.cancelAnimationFrame) ? O : cancelAnimationFrame
    })]
  })
}