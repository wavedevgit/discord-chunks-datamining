/** Chunk was on 5606 **/
/** chunk id: 907838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk397927 = require("./397927.js"),
  Chunk180022 = require("./180022.jsx"),
  Chunk663244 = require("./663244.js");
let u = e => {
  let {
    cards: t,
    className: n,
    cardType: l
  } = e, u = () => window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3, [p, _] = i.useState(0), [m, g] = i.useState(u()), f = t.length;
  i.useEffect(() => {
    let e = () => {
      g(u())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), i.useEffect(() => {
    _(e => f > m && e > f - m ? f - m : f <= m ? 0 : e)
  }, [f, m]);
  let b = p > 0,
    h = i.useCallback(e => ({
      x: (e - p) * 100
    }), [p]),
    [A, E] = (0, o.mX6)(t.length, h);
  return i.useEffect(() => {
    E(h)
  }, [E, h]), (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsxs)("div", {
      className: d.Ui,
      children: [f > m && (0, r.jsx)(o.DUT, {
        onClick: b ? () => {
          _(e => 0 === e ? f - m : e - 1)
        } : true,
        className: s()({
          [d.v5]: b,
          [d.$T]: !b
        }),
        children: (0, r.jsx)(o.rJJ, {
          className: d.D6,
          colorClass: d.D6
        })
      }), (0, r.jsx)("div", {
        className: d.C8,
        children: A.map((e, n) => {
          var i, s;
          let {
            x: o
          } = e;
          return (0, r.jsx)(a.animated.div, {
            className: d.Nr,
            style: {
              transform: null == o ? true : o.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, r.jsx)(c.A, (i = function(e) {
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
            }({}, t[n]), s = s = {
              cardType: l
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(s)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
            }), i), "".concat(t[n].name, "_").concat(n, "_perks_card"))
          }, "".concat(t[n].name, "_").concat(n, "_animated_div"))
        })
      }), f > m && (0, r.jsx)(o.DUT, {
        onClick: () => {
          _(e => e >= f - m ? 0 : e + 1)
        },
        className: d.Ox,
        children: (0, r.jsx)(o.EdP, {
          className: d.D6,
          colorClass: d.D6
        })
      }), f > m && (0, r.jsx)("div", {
        className: d.$$,
        children: t.map((e, t) => {
          if (!(t > f - m)) return (0, r.jsx)("div", {
            className: t === p ? d.fc : d.Om
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}