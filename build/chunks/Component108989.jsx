/** Chunk was on 1272 **/
/** chunk id: 108989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js");
let a = [require("./123353.js")],
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
    confettiConfig: f
  } = e, [h, g] = i.useState(null), [m, _] = i.useState(null), b = (0, l.uR)(m, h), E = i.useMemo(() => new l.qA({
    wind: u
  }), [u]), O = i.useCallback(() => {
    var e, t;
    let n = null == m ? true : m.getCanvas();
    if (null == n) return;
    let r = n.getBoundingClientRect();
    b.createConfetti((e = function(e) {
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
    }({}, c, f), t = t = {
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
  }, [b, m, f]);
  return i.useEffect(() => {
    let e = n ? setInterval(O, o) : null;
    return () => clearInterval(e)
  }, [n, O]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.O_, {
      ref: _,
      className: t,
      environment: E
    }), (0, r.jsx)(l.Ji, {
      ref: g,
      colors: p,
      sprites: d,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}