/** Chunk was on 87626 **/
/** chunk id: 388755, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  D: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk608863 = require("./608863.jsx"),
  Chunk66037 = require("./66037.jsx"),
  Chunk643103 = require("./643103.jsx"),
  Chunk34211 = require("./34211.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk431138 = require("./431138.js"),
  Chunk368955 = require("./368955.js");
let m = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function p(e) {
  let {
    className: t,
    TrackClick: a,
    onChangeLocale: s,
    avoidRouter: p,
    openNavAriaLabel: h,
    hideNavAriaLabel: I
  } = e, k = r.useId(), [g, A] = r.useState(false), O = r.useCallback(() => A(!g), [g]), f = r.useCallback(e => {
    ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), g && O())
  }, [g, O]);
  return r.useEffect(() => (window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f)), [f]), (0, n.jsx)("header", {
    className: l()(N.header, t),
    children: (0, n.jsxs)("nav", {
      className: N.headerInner,
      children: [(0, n.jsx)(a, {
        tag: "div",
        eventName: m,
        className: N.headerLogo,
        data: {
          linkClicked: "logo"
        },
        children: (0, n.jsx)(o.Z, {
          avoidRouter: p,
          className: N.logoWrapper,
          to: u.am.INDEX,
          from: u.j_.MAIN_NAVIGATION_MENU,
          children: (0, n.jsx)("img", {
            className: N.logo,
            src: _.r.ASSET_LOGO_DISCORD_SVG,
            alt: "Discord",
            itemProp: "logo"
          })
        })
      }), (0, n.jsx)(a, {
        tag: "div",
        className: N.hamburgerButton,
        eventName: m,
        data: {
          linkClicked: "mobile-menu"
        },
        children: (0, n.jsx)(i.r, {
          open: g,
          "aria-haspopup": "true",
          "aria-label": g ? I : h,
          "aria-expanded": g,
          "aria-controls": k,
          onClick: O
        })
      }), (0, n.jsxs)("ul", {
        className: g ? N.headerNavOpen : N.headerNav,
        children: [(0, n.jsx)(d.o, {
          avoidRouter: p,
          TrackClick: a,
          styles: N,
          isMobile: true,
          isVisible: g
        }), (0, n.jsx)(c.p, {
          onChange: s
        })]
      })]
    })
  })
}