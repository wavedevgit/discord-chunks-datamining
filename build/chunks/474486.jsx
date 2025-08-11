/** Chunk was on 1272 **/
/** chunk id: 474486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => u,
  l: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk119269 = require("./119269.jsx"),
  Chunk227140 = require("./227140.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk742116 = require("./742116.js");
let u = e => {
    let {
      children: t
    } = e, n = <div className={c.coachTipContainer}>{<div className={c.iconContainer}><a.ZP staticPercentage={100} iconClassName={c.icon} showAnimations={true} progressCircleVariation={a.Qo.NITRO_LOGO} ellipseOpacity={1} customAnimationClassName={c.customCircleAnimation} circleColor={"url(#purple-gradient)"} /></div>}{<div className={c.coachtipContent}>{<l.X6q variant={"heading-sm/bold"}>{s.intl.string(s.t.USo4s7)}</l.X6q>}{<l.Text variant={"text-xs/normal"}>{s.intl.format(s.t.AGKQq6, {
            numReferrals: 3
          })}</l.Text>}</div>}</div>;
    return <l.ua7 text={n} position={"right"} aria-label={s.intl.string(s.t.USo4s7)} tooltipClassName={c.marketingBadgeTooltip} allowOverflow={true} tooltipContentClassName={c.tooltipContent}>{e => {
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
      }}</l.ua7>
  },
  d = e => {
    let {
      isSelected: t,
      onSelect: n
    } = e;
    return i.useEffect(() => {
      t && n()
    }, [t, n]), <o.Z copy={s.intl.string(s.t.y2b7CA)} />
  }