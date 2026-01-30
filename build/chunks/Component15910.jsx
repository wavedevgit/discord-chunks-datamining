/** Chunk was on 31748 **/
/** chunk id: 15910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk444058 = require("./444058.js"),
  Chunk970984 = require("./970984.js"),
  Chunk397927 = require("./397927.js"),
  Chunk927813 = require("./927813.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk626228 = require("./626228.js");

function p(e) {
  if (null != e) {
    let t = new Date,
      {
        hours: n,
        minutes: r,
        seconds: l
      } = (0, o.A)({
        start: t,
        end: e
      });
    return {
      hours: String(n).padStart(2, "0"),
      minutes: String(r).padStart(2, "0"),
      seconds: String(l).padStart(2, "0"),
      countdownString: d.intl.formatToPlainString(d.t.U0Hhr7, {
        duration: new Date(0, 0, 0, n, r, l)
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
let g = e => {
    let {
      digit: t
    } = e, n = (0, c.pnh)(t, {
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
      className: f.z$,
      children: n((e, t) => {
        var n, l;
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
          }({}, e), l = l = {
            position: "absolute",
            width: "100%",
            textAlign: "center"
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
          }), n),
          children: (0, r.jsx)(c.Text, {
            variant: "text-sm/bold",
            children: t
          })
        })
      })
    })
  },
  m = () => {
    let [e, t] = l.useState(false);
    l.useEffect(() => {
      let e;
      return ! function n() {
        let r = Date.now();
        e = setTimeout(() => {
          t(e => !e), n()
        }, Math.max(100, (Math.floor(r / u.A.Millis.HALF_SECOND) + 1) * u.A.Millis.HALF_SECOND - r))
      }(), () => {
        clearTimeout(e)
      }
    }, []);
    let n = (0, c.zhh)({
      opacity: e ? .5 : 1,
      config: {
        duration: 100
      }
    });
    return (0, r.jsxs)(s.animated.div, {
      style: n,
      className: f.Z5,
      children: [(0, r.jsx)("div", {
        className: f.Cj
      }), (0, r.jsx)("div", {
        className: f.Cj
      })]
    })
  },
  _ = e => {
    let {
      digits: t
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: f.JA,
        children: (0, r.jsx)(g, {
          digit: t[0]
        })
      }), (0, r.jsx)("div", {
        className: f.JA,
        children: (0, r.jsx)(g, {
          digit: t[1]
        })
      })]
    })
  },
  h = e => {
    let {
      countdown: t
    } = e;
    return (0, r.jsxs)("div", {
      className: f.eh,
      children: [(0, r.jsx)(_, {
        digits: t.hours
      }), (0, r.jsx)(m, {}), (0, r.jsx)(_, {
        digits: t.minutes
      }), (0, r.jsx)(m, {}), (0, r.jsx)(_, {
        digits: t.seconds
      })]
    })
  };

function y(e) {
  let {
    textVariant: t,
    className: n,
    catalogUpdateTime: i,
    isScrolled: o
  } = e, [s, u] = l.useState(() => p(i));
  return l.useEffect(() => {
    let e = setInterval(() => {
      u(() => p(i))
    }, 1e3);
    return () => clearInterval(e)
  }, [i]), (0, r.jsxs)("div", {
    className: a()(n, f.Pc, {
      [f.NW]: o
    }),
    "aria-label": s.countdownString,
    children: [(0, r.jsxs)("div", {
      className: f.zc,
      children: [(0, r.jsx)("div", {
        className: f.PG,
        children: (0, r.jsx)(c.O4, {
          size: "custom",
          height: 16,
          width: 16,
          color: "currentColor",
          colorClass: f.y
        })
      }), (0, r.jsx)(c.Text, {
        variant: null != t ? t : "text-sm/medium",
        color: "text-strong",
        children: d.intl.string(d.t.VZsY3r)
      })]
    }), (0, r.jsx)("div", {
      className: f.eh,
      children: (0, r.jsx)(h, {
        countdown: s
      })
    })]
  })
}