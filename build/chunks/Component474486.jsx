/** Chunk was on 1272 **/
/** chunk id: 474486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => d,
  l: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk119269 = require("./119269.jsx"),
  Chunk227140 = require("./227140.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk630942 = require("./630942.js");
let d = e => {
    let {
      children: t
    } = e, n = (0, r.jsxs)("div", {
      className: u.nitroTabCoachtipContainer,
      children: [(0, r.jsx)("div", {
        className: u.iconContainer,
        children: (0, r.jsx)(o.ZP, {
          staticPercentage: 100,
          iconClassName: u.icon,
          showAnimations: true,
          progressCircleVariation: o.Qo.NITRO_LOGO,
          ellipseOpacity: 1,
          customAnimationClassName: u.customCircleAnimation,
          circleColor: "url(#purple-gradient)"
        })
      }), (0, r.jsxs)("div", {
        className: u.coachtipContent,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-sm/bold",
          children: c.intl.string(c.t.USo4s7)
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: c.intl.format(c.t.AGKQq6, {
            numReferrals: 3
          })
        })]
      })]
    });
    return (0, r.jsx)(l.u, {
      __unsupportedReactNodeAsText: n,
      position: "right",
      "aria-label": c.intl.string(c.t.USo4s7),
      asContainer: true,
      children: (0, r.jsx)("div", {
        children: t
      })
    })
  },
  p = e => {
    let {
      isSelected: t,
      onSelect: n
    } = e;
    return i.useEffect(() => {
      t && n()
    }, [t, n]), (0, r.jsx)(s.Z, {
      copy: c.intl.string(c.t.y2b7CA)
    })
  }