/** Chunk was on 75708 **/
/** chunk id: 166021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk51636 = require("./51636.jsx"),
  Chunk687588 = require("./687588.js");
let u = e => {
  let {
    cards: t,
    className: n,
    cardType: s
  } = e, u = () => window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3, [m, p] = r.useState(0), [g, h] = r.useState(u()), f = t.length;
  r.useEffect(() => {
    let e = () => {
      h(u())
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []), r.useEffect(() => {
    p(e => f > g && e > f - g ? f - g : f <= g ? 0 : e)
  }, [f, g]);
  let b = m > 0,
    x = r.useCallback(e => ({
      x: (e - m) * 100
    }), [m]),
    [_, j] = (0, o.bYB)(t.length, x);
  return r.useEffect(() => {
    j(x)
  }, [j, x]), <div className={n}><div className={d.cardContainer}>{f > g && <o.P3F onClick={b ? () => {
          p(e => 0 === e ? f - g : e - 1)
        } : true} className={a()({
          [d.leftArrow]: b,
          [d.inactiveArrow]: !b
        })}><o.whL className={d.arrowIcon} colorClass={d.arrowIcon} /></o.P3F>}{<div className={d.cardInnerContainer}>{_.map((e, n) => {
          var r, a;
          let {
            x: o
          } = e;
          return (0, i.jsx)(l.animated.div, {
            className: d.card,
            style: {
              transform: null == o ? true : o.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, i.jsx)(c.Z, (r = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
                })
              }
              return e
            }({}, t[n]), a = a = {
              cardType: s
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
            }), r), "".concat(t[n].name, "_").concat(n, "_perks_card"))
          }, "".concat(t[n].name, "_").concat(n, "_animated_div"))
        })}</div>}{f > g && <o.P3F onClick={() => {
          p(e => e >= f - g ? 0 : e + 1)
        }} className={d.rightArrow}><o.ZSh className={d.arrowIcon} colorClass={d.arrowIcon} /></o.P3F>}{f > g && <div className={d.cardProgressBar}>{t.map((e, t) => {
          if (!(t > f - g)) return (0, i.jsx)("div", {
            className: t === m ? d.selectedDot : d.dot
          }, "progress_bar_dot_".concat(t))
        })}</div>}</div></div>
}