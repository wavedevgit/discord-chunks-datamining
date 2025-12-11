/** Chunk was on 87626 **/
/** chunk id: 388755, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  D: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk608863 = require("./608863.jsx"),
  Chunk66037 = require("./66037.jsx"),
  Chunk643103 = require("./643103.jsx"),
  Chunk34211 = require("./34211.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk431138 = require("./431138.js"),
  Chunk820014 = require("./820014.js");
let f = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function p(e) {
  let {
    className: t,
    TrackClick: a,
    onChangeLocale: s,
    avoidRouter: p,
    openNavAriaLabel: h,
    hideNavAriaLabel: I
  } = e, b = r.useId(), [k, g] = r.useState(false), A = r.useCallback(() => g(!k), [k]), O = r.useCallback(e => {
    ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), k && A())
  }, [k, A]);
  return r.useEffect(() => (window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O)), [O]), (0, n.jsx)("header", {
    className: l()(m.header, t),
    children: (0, n.jsxs)("nav", {
      className: m.headerInner,
      children: [(0, n.jsx)(a, {
        tag: "div",
        eventName: f,
        className: m.headerLogo,
        data: {
          linkClicked: "logo"
        },
        children: (0, n.jsx)(o.Z, {
          avoidRouter: p,
          className: m.logoWrapper,
          to: u.am.INDEX,
          from: u.j_.MAIN_NAVIGATION_MENU,
          children: (0, n.jsx)("img", {
            className: m.logo,
            src: N.r.ASSET_LOGO_DISCORD_SVG,
            alt: "Discord",
            itemProp: "logo"
          })
        })
      }), (0, n.jsx)(a, {
        tag: "div",
        className: m.hamburgerButton,
        eventName: f,
        data: {
          linkClicked: "mobile-menu"
        },
        children: (0, n.jsx)(i.r, {
          open: k,
          "aria-haspopup": "true",
          "aria-label": k ? I : h,
          "aria-expanded": k,
          "aria-controls": b,
          onClick: A
        })
      }), (0, n.jsxs)("ul", {
        className: k ? m.headerNavOpen : m.headerNav,
        children: [(0, n.jsx)(d.o, {
          avoidRouter: p,
          TrackClick: a,
          styles: m,
          isMobile: true,
          isVisible: k
        }), (0, n.jsx)(c.p, {
          onChange: s
        })]
      })]
    })
  })
}