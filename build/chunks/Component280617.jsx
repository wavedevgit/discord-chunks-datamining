/** Chunk was on 41031 **/
/** chunk id: 280617, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  i: () => p
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
let A = Chunk818348.sE.MAIN_NAVIGATION_MENU;

function p(e) {
  let {
    className: t,
    TrackClick: a,
    onChangeLocale: l,
    avoidRouter: p,
    openNavAriaLabel: h,
    hideNavAriaLabel: m
  } = e, I = s.useId(), [k, g] = s.useState(false), O = s.useCallback(() => g(!k), [k]), T = s.useCallback(e => {
    ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), k && O())
  }, [k, O]);
  return s.useEffect(() => (window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T)), [T]), (0, r.jsx)("header", {
    className: n()(N.header, t),
    children: (0, r.jsxs)("nav", {
      className: N.headerInner,
      children: [(0, r.jsx)(a, {
        tag: "div",
        eventName: A,
        className: N.headerLogo,
        data: {
          linkClicked: "logo"
        },
        children: (0, r.jsx)(o.A, {
          avoidRouter: p,
          className: N.logoWrapper,
          to: u.Tk.INDEX,
          from: u.sE.MAIN_NAVIGATION_MENU,
          children: (0, r.jsx)("img", {
            className: N.logo,
            src: _.T.ASSET_LOGO_DISCORD_SVG,
            alt: "Discord",
            itemProp: "logo"
          })
        })
      }), (0, r.jsx)(a, {
        tag: "div",
        className: N.hamburgerButton,
        eventName: A,
        data: {
          linkClicked: "mobile-menu"
        },
        children: (0, r.jsx)(i._, {
          open: k,
          "aria-haspopup": "true",
          "aria-label": k ? m : h,
          "aria-expanded": k,
          "aria-controls": I,
          onClick: O
        })
      }), (0, r.jsxs)("ul", {
        className: k ? N.headerNavOpen : N.headerNav,
        children: [(0, r.jsx)(d.C, {
          avoidRouter: p,
          TrackClick: a,
          styles: N,
          isMobile: true,
          isVisible: k
        }), (0, r.jsx)(c.B, {
          onChange: l
        })]
      })]
    })
  })
}