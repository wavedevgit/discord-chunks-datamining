/** Chunk was on 87626 **/
/** chunk id: 248108, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk960231 = require("./960231.js"),
  Chunk948789 = require("./948789.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk950132 = require("./950132.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk431138 = require("./431138.js"),
  Chunk445075 = require("./445075.js");
let _ = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function N(e) {
  let {
    TrackClick: t,
    title: a,
    links: N,
    onClose: m,
    onOpen: p,
    isOpen: h = false,
    isMobile: I,
    avoidRouter: k
  } = e, g = (0, l.fQ)({
    history: (0, s.k6)()
  }), A = r.useId(), O = () => m(), f = () => p(a), b = () => h ? m() : p(a), v = I && h ? (0, n.jsx)("ul", {
    className: u.mobileSubMenuOpen,
    id: A,
    children: N.map(e => e.external ? (0, n.jsx)("li", {
      className: u.subListItemInactive,
      children: (0, n.jsx)(t, {
        eventName: _,
        className: u.subListItemLink,
        data: {
          linkClicked: "mobile-".concat(e.linkClicked)
        },
        rel: "me",
        href: e.route,
        children: e.title
      })
    }, e.route) : (0, n.jsx)("li", {
      className: g(e.route) ? u.subListItemActive : u.subListItemInactive,
      children: (0, n.jsx)(i.Z, {
        avoidRouter: k,
        to: e.route,
        from: c.j_.MAIN_NAVIGATION_MENU,
        children: (0, n.jsx)(t, {
          className: u.subListItemLink,
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
  return I ? (0, n.jsxs)("li", {
    className: u.__invalid_subListHeading,
    tabIndex: false,
    onClick: b,
    onKeyDown: e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), b())
    },
    children: [(0, n.jsxs)("span", {
      className: u.mobileMenuItem,
      "aria-label": "Open ".concat(a, " Nav"),
      "aria-expanded": h,
      "aria-controls": A,
      "aria-haspopup": "true",
      role: "menuitem",
      tabIndex: 0,
      children: [a, (0, n.jsx)("img", {
        src: d.r.ICON_ARROW_DOWN,
        className: u.iconArrow,
        alt: "Open Nav"
      })]
    }, "more"), v]
  }, "dropdown_".concat(a)) : (0, n.jsxs)("li", {
    role: "none",
    tabIndex: false,
    onFocus: f,
    onBlur: O,
    onMouseEnter: f,
    onMouseLeave: O,
    className: u.desktopSubMenuItem,
    children: [(0, n.jsxs)("span", {
      className: u.desktopMenuMore,
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "true",
      "aria-expanded": h,
      "aria-controls": A,
      children: [a, (0, n.jsx)("img", {
        src: d.r.ICON_ARROW_DOWN,
        className: u.iconArrow,
        alt: "Open Nav"
      })]
    }, "more"), (0, n.jsx)(o.h, {
      id: A,
      avoidRouter: k,
      TrackClick: t,
      isOpen: h,
      dropdownLinks: N,
      "aria-label": a
    })]
  }, "dropdown_".concat(a))
}