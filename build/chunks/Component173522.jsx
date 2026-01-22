/** Chunk was on 21738 **/
/** chunk id: 173522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => p,
  T: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk344904 = require("./344904.jsx"),
  Chunk622037 = require("./622037.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk542780 = require("./542780.js");
let d = e => {
    let {
      children: t
    } = e, n = (0, r.jsxs)("div", {
      className: u.IL,
      children: [(0, r.jsx)("div", {
        className: u.zc,
        children: (0, r.jsx)(s.Ay, {
          staticPercentage: 100,
          iconClassName: u.Kk,
          showAnimations: true,
          progressCircleVariation: s.BN.NITRO_LOGO,
          ellipseOpacity: 1,
          customAnimationClassName: u.Qd,
          circleColor: "url(#purple-gradient)"
        })
      }), (0, r.jsxs)("div", {
        className: u.XE,
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
    return (0, r.jsx)(l.m, {
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
    }, [t, n]), (0, r.jsx)(o.A, {
      copy: c.intl.string(c.t.y2b7CA)
    })
  }