/** Chunk was on 78376 **/
/** chunk id: 907838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk397927 = require("./397927.js"),
  Chunk180022 = require("./180022.jsx"),
  Chunk663244 = require("./663244.js");
let u = e => {
  let {
    cards: t,
    className: n,
    cardType: l
  } = e, u = () => window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3, [_, p] = i.useState(0), [m, g] = i.useState(u()), A = t.length;
  i.useEffect(() => {
    let e = () => {
      g(u())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), i.useEffect(() => {
    p(e => A > m && e > A - m ? A - m : A <= m ? 0 : e)
  }, [A, m]);
  let f = _ > 0,
    b = i.useCallback(e => ({
      x: (e - _) * 100
    }), [_]),
    [h, E] = (0, o.mX6)(t.length, b);
  return i.useEffect(() => {
    E(b)
  }, [E, b]), (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsxs)("div", {
      className: d.Ui,
      children: [A > m && (0, r.jsx)(o.DUT, {
        onClick: f ? () => {
          p(e => 0 === e ? A - m : e - 1)
        } : true,
        className: s()({
          [d.v5]: f,
          [d.$T]: !f
        }),
        children: (0, r.jsx)(o.rJJ, {
          className: d.D6,
          colorClass: d.D6
        })
      }), (0, r.jsx)("div", {
        className: d.C8,
        children: h.map((e, n) => {
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
      }), A > m && (0, r.jsx)(o.DUT, {
        onClick: () => {
          p(e => e >= A - m ? 0 : e + 1)
        },
        className: d.Ox,
        children: (0, r.jsx)(o.EdP, {
          className: d.D6,
          colorClass: d.D6
        })
      }), A > m && (0, r.jsx)("div", {
        className: d.$$,
        children: t.map((e, t) => {
          if (!(t > A - m)) return (0, r.jsx)("div", {
            className: t === _ ? d.fc : d.Om
          }, "progress_bar_dot_".concat(t))
        })
      })]
    })
  })
}