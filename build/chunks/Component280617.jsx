/** Chunk was on 41031 **/
/** chunk id: 280617, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  i: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk359459 = require("./359459.jsx"),
  Chunk137540 = require("./137540.jsx"),
  Chunk709808 = require("./709808.jsx"),
  Chunk464261 = require("./464261.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk563853 = require("./563853.js"),
  Chunk510057 = require("./510057.js");
let p = Chunk818348.sE.MAIN_NAVIGATION_MENU;

function h(e) {
  let {
    className: t,
    TrackClick: a,
    onChangeLocale: r,
    avoidRouter: h,
    openNavAriaLabel: b,
    hideNavAriaLabel: f
  } = e, k = l.useId(), [I, O] = l.useState(false), m = l.useCallback(() => O(!I), [I]), g = l.useCallback(e => {
    ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), I && m())
  }, [I, m]);
  return l.useEffect(() => (window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g)), [g]), (0, s.jsx)("header", {
    className: n()(A.header, t),
    children: (0, s.jsxs)("nav", {
      className: A.headerInner,
      children: [(0, s.jsx)(a, {
        tag: "div",
        eventName: p,
        className: A.headerLogo,
        data: {
          linkClicked: "logo"
        },
        children: (0, s.jsx)(o.A, {
          avoidRouter: h,
          className: A.logoWrapper,
          to: u.Tk.INDEX,
          from: u.sE.MAIN_NAVIGATION_MENU,
          children: (0, s.jsx)("img", {
            className: A.logo,
            src: N.T.ASSET_LOGO_DISCORD_SVG,
            alt: "Discord",
            itemProp: "logo"
          })
        })
      }), (0, s.jsx)(a, {
        tag: "div",
        className: A.hamburgerButton,
        eventName: p,
        data: {
          linkClicked: "mobile-menu"
        },
        children: (0, s.jsx)(i._, {
          open: I,
          "aria-haspopup": "true",
          "aria-label": I ? f : b,
          "aria-expanded": I,
          "aria-controls": k,
          onClick: m
        })
      }), (0, s.jsxs)("ul", {
        className: I ? A.headerNavOpen : A.headerNav,
        children: [(0, s.jsx)(d.C, {
          avoidRouter: h,
          TrackClick: a,
          styles: A,
          isMobile: true,
          isVisible: I
        }), (0, s.jsx)(c.B, {
          onChange: r
        })]
      })]
    })
  })
}