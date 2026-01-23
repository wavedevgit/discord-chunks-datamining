/** Chunk was on 41031 **/
/** chunk id: 112895, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk134402 = require("./134402.js"),
  Chunk877227 = require("./877227.js"),
  Chunk137540 = require("./137540.jsx"),
  Chunk980302 = require("./980302.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk563853 = require("./563853.js"),
  Chunk138649 = require("./138649.js");
let _ = Chunk818348.sE.MAIN_NAVIGATION_MENU;

function N(e) {
  let {
    TrackClick: t,
    title: a,
    links: N,
    onClose: A,
    onOpen: p,
    isOpen: h = false,
    isMobile: m,
    avoidRouter: I
  } = e, k = (0, n.dI)({
    history: (0, l.W6)()
  }), g = s.useId(), O = () => A(), T = () => p(a), b = () => h ? A() : p(a), f = m && h ? (0, r.jsx)("ul", {
    className: u.Er,
    id: g,
    children: N.map(e => e.external ? (0, r.jsx)("li", {
      className: u.ni,
      children: (0, r.jsx)(t, {
        eventName: _,
        className: u.qz,
        data: {
          linkClicked: "mobile-".concat(e.linkClicked)
        },
        rel: "me",
        href: e.route,
        children: e.title
      })
    }, e.route) : (0, r.jsx)("li", {
      className: k(e.route) ? u.wL : u.ni,
      children: (0, r.jsx)(i.A, {
        avoidRouter: I,
        to: e.route,
        from: c.sE.MAIN_NAVIGATION_MENU,
        children: (0, r.jsx)(t, {
          className: u.qz,
          tag: "span",
          eventName: _,
          data: {
            linkClicked: "mobile-".concat(e.linkClicked)
          },
          children: e.title
        })
      })
    }, e.route))
  }) : null;
  return m ? (0, r.jsxs)("li", {
    className: u.__invalid_subListHeading,
    tabIndex: false,
    onClick: b,
    onKeyDown: e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), b())
    },
    children: [(0, r.jsxs)("span", {
      className: u.DC,
      "aria-label": "Open ".concat(a, " Nav"),
      "aria-expanded": h,
      "aria-controls": g,
      "aria-haspopup": "true",
      role: "menuitem",
      tabIndex: 0,
      children: [a, (0, r.jsx)("img", {
        src: d.T.ICON_ARROW_DOWN,
        className: u.fr,
        alt: "Open Nav"
      })]
    }, "more"), f]
  }, "dropdown_".concat(a)) : (0, r.jsxs)("li", {
    role: "none",
    tabIndex: false,
    onFocus: T,
    onBlur: O,
    onMouseEnter: T,
    onMouseLeave: O,
    className: u.pX,
    children: [(0, r.jsxs)("span", {
      className: u.Bc,
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "true",
      "aria-expanded": h,
      "aria-controls": g,
      children: [a, (0, r.jsx)("img", {
        src: d.T.ICON_ARROW_DOWN,
        className: u.fr,
        alt: "Open Nav"
      })]
    }, "more"), (0, r.jsx)(o.r, {
      id: g,
      avoidRouter: I,
      TrackClick: t,
      isOpen: h,
      dropdownLinks: N,
      "aria-label": a
    })]
  }, "dropdown_".concat(a))
}