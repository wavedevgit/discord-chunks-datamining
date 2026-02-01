/** Chunk was on 21738 **/
/** chunk id: 442802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js");
let a = [require("./426560.js")],
  s = ["#FFFFFF"],
  o = 1e3 / 60,
  c = {
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
    rotation: {
      type: "linear-random",
      minValue: {
        x: 0,
        y: 0,
        z: 0
      },
      maxValue: {
        x: 0,
        y: 0,
        z: 360
      },
      minAddValue: {
        x: 0,
        y: 0,
        z: false
      },
      maxAddValue: {
        x: 0,
        y: 0,
        z: 5
      }
    },
    size: {
      type: "static-random",
      minValue: 2,
      maxValue: 6
    },
    dragCoefficient: {
      type: "static",
      value: 830
    },
    opacity: {
      type: "static",
      value: .3
    }
  };

function u(e) {
  let {
    className: t,
    firing: n = true,
    wind: u = 2,
    sprites: d = a,
    spriteColors: p = s,
    confettiConfig: h
  } = e, [g, m] = i.useState(null), [f, A] = i.useState(null), _ = (0, l.f9)(f, g), b = i.useMemo(() => new l.OH({
    wind: u
  }), [u]), E = i.useCallback(() => {
    var e, t;
    let n = null == f ? true : f.getCanvas();
    if (null == n) return;
    let r = n.getBoundingClientRect();
    _.createConfetti((e = function(e) {
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
    }({}, c, h), t = t = {
      position: {
        type: "static-random",
        minValue: {
          x: -r.width / 2,
          y: false
        },
        maxValue: {
          x: r.width,
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
  }, [_, f, h]);
  return i.useEffect(() => {
    let e = n ? setInterval(E, o) : null;
    return () => clearInterval(e)
  }, [n, E]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Fk, {
      ref: A,
      className: t,
      environment: b
    }), (0, r.jsx)(l.K_, {
      ref: m,
      colors: p,
      sprites: d,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}