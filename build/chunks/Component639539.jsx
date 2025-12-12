/** Chunk was on 43342 **/
/** chunk id: 639539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk164369 = require("./164369.js"),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk70956 = require("./70956.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk636433 = require("./636433.js");

function m(e) {
  if (null != e) {
    let t = new Date,
      {
        hours: n,
        minutes: r,
        seconds: i
      } = (0, a.Z)({
        start: t,
        end: e
      });
    return {
      hours: String(n).padStart(2, "0"),
      minutes: String(r).padStart(2, "0"),
      seconds: String(i).padStart(2, "0"),
      countdownString: d.intl.formatToPlainString(d.t.U0Hhr7, {
        duration: new Date(0, 0, 0, n, r, i)
      })
    }
  }
  return {
    hours: "",
    minutes: "",
    seconds: "",
    countdownString: ""
  }
}
let f = e => {
    let {
      digit: t
    } = e, n = (0, c.Yzy)(t, {
      from: {
        opacity: 0,
        translateY: "-100%"
      },
      enter: {
        opacity: 1,
        translateY: "0%"
      },
      leave: {
        opacity: 0,
        translateY: "100%"
      },
      config: {
        tension: 210,
        friction: 20,
        duration: 200
      }
    });
    return (0, r.jsx)("div", {
      className: p.animatedDigit,
      children: n((e, t) => {
        var n, i;
        return (0, r.jsx)(s.animated.div, {
          style: (n = function(e) {
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
          }({}, e), i = i = {
            position: "absolute",
            width: "100%",
            textAlign: "center"
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n),
          children: (0, r.jsx)(c.Text, {
            variant: "text-sm/bold",
            children: t
          })
        })
      })
    })
  },
  b = () => {
    let [e, t] = Chunk473749.useState(false);
    Chunk473749.useEffect(() => {
      let e;
      return ! function n() {
        let r = Date.now();
        e = setTimeout(() => {
          exports(e => !e), require()
        }, Math.max(100, (Math.floor(Chunk54381 / Chunk70956.Z.Millis.HALF_SECOND) + 1) * Chunk70956.Z.Millis.HALF_SECOND - Chunk54381))
      }(), () => {
        clearTimeout(module)
      }
    }, []);
    let n = (0, Chunk481060.q_F)({
      opacity: module ? .5 : 1,
      config: {
        duration: 100
      }
    });
    return (0, Chunk54381.jsxs)(Chunk467721.animated.div, {
      style: require,
      className: Chunk636433.colonContainer,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk636433.tinyDot
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk636433.tinyDot
      })]
    })
  },
  g = e => {
    let {
      digits: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: p.digitContainer,
        children: (0, r.jsx)(f, {
          digit: t[0]
        })
      }), (0, r.jsx)("div", {
        className: p.digitContainer,
        children: (0, r.jsx)(f, {
          digit: t[1]
        })
      })]
    })
  },
  v = e => {
    let {
      countdown: t
    } = e;
    return (0, r.jsxs)("div", {
      className: p.digitsContainer,
      children: [(0, r.jsx)(g, {
        digits: t.hours
      }), (0, r.jsx)(b, {}), (0, r.jsx)(g, {
        digits: t.minutes
      }), (0, r.jsx)(b, {}), (0, r.jsx)(g, {
        digits: t.seconds
      })]
    })
  };

function y(e) {
  let {
    textVariant: t,
    className: n,
    catalogUpdateTime: o,
    isScrolled: a
  } = e, [s, u] = i.useState(() => m(o));
  return i.useEffect(() => {
    let e = setInterval(() => {
      u(() => m(o))
    }, 1e3);
    return () => clearInterval(e)
  }, [o]), (0, r.jsxs)("div", {
    className: l()(n, p.countdownContainer, {
      [p.isScrolled]: a
    }),
    "aria-label": s.countdownString,
    children: [(0, r.jsxs)("div", {
      className: p.iconContainer,
      children: [(0, r.jsx)("div", {
        className: p.clockIconWrapper,
        children: (0, r.jsx)(c.T39, {
          size: "custom",
          height: 16,
          width: 16,
          color: "currentColor",
          colorClass: p.clockIcon
        })
      }), (0, r.jsx)(c.Text, {
        variant: null != t ? t : "text-sm/medium",
        color: "text-strong",
        children: d.intl.string(d.t.VZsY3r)
      })]
    }), (0, r.jsx)("div", {
      className: p.digitsContainer,
      children: (0, r.jsx)(v, {
        countdown: s
      })
    })]
  })
}