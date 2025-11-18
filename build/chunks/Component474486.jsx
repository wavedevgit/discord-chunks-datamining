/** Chunk was on 1272 **/
/** chunk id: 474486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => u,
  l: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk119269 = require("./119269.jsx"),
  Chunk227140 = require("./227140.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149094 = require("./149094.js");
let u = e => {
    let {
      children: t
    } = e, n = (0, r.jsxs)("div", {
      className: c.coachTipContainer,
      children: [(0, r.jsx)("div", {
        className: c.iconContainer,
        children: (0, r.jsx)(a.ZP, {
          staticPercentage: 100,
          iconClassName: c.icon,
          showAnimations: true,
          progressCircleVariation: a.Qo.NITRO_LOGO,
          ellipseOpacity: 1,
          customAnimationClassName: c.customCircleAnimation,
          circleColor: "url(#purple-gradient)"
        })
      }), (0, r.jsxs)("div", {
        className: c.coachtipContent,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-sm/bold",
          children: o.intl.string(o.t.USo4s7)
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          children: o.intl.format(o.t.AGKQq6, {
            numReferrals: 3
          })
        })]
      })]
    });
    return (0, r.jsx)(l.aML, {
      text: n,
      position: "right",
      "aria-label": o.intl.string(o.t.USo4s7),
      tooltipClassName: c.marketingBadgeTooltip,
      allowOverflow: true,
      tooltipContentClassName: c.tooltipContent,
      children: e => {
        var n, i;
        return (0, r.jsx)("div", (n = function(e) {
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
          children: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  },
  d = e => {
    let {
      isSelected: t,
      onSelect: n
    } = e;
    return i.useEffect(() => {
      t && n()
    }, [t, n]), (0, r.jsx)(s.Z, {
      copy: o.intl.string(o.t.y2b7CA)
    })
  }