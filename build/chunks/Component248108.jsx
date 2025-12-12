/** Chunk was on 87626 **/
/** chunk id: 248108, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk54111 = require("./54111.js"),
  Chunk948789 = require("./948789.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk950132 = require("./950132.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk431138 = require("./431138.js"),
  Chunk361010 = require("./361010.js");
let N = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function m(e) {
  let {
    TrackClick: t,
    title: a,
    links: m,
    onClose: f,
    onOpen: p,
    isOpen: h = false,
    isMobile: I,
    avoidRouter: b
  } = e, k = (0, l.fQ)({
    history: (0, s.k6)()
  }), g = r.useId(), A = () => f(), O = () => p(a), _ = () => h ? f() : p(a), v = I && h ? (0, n.jsx)("ul", {
    className: u.mobileSubMenuOpen,
    id: g,
    children: m.map(e => e.external ? (0, n.jsx)("li", {
      className: u.subListItemInactive,
      children: (0, n.jsx)(t, {
        eventName: N,
        className: u.subListItemLink,
        data: {
          linkClicked: "mobile-".concat(e.linkClicked)
        },
        rel: "me",
        href: e.route,
        children: e.title
      })
    }, e.route) : (0, n.jsx)("li", {
      className: k(e.route) ? u.subListItemActive : u.subListItemInactive,
      children: (0, n.jsx)(i.Z, {
        avoidRouter: b,
        to: e.route,
        from: c.j_.MAIN_NAVIGATION_MENU,
        children: (0, n.jsx)(t, {
          className: u.subListItemLink,
          tag: "span",
          eventName: N,
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
    onClick: _,
    onKeyDown: e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _())
    },
    children: [(0, n.jsxs)("span", {
      className: u.mobileMenuItem,
      "aria-label": "Open ".concat(a, " Nav"),
      "aria-expanded": h,
      "aria-controls": g,
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
    onFocus: O,
    onBlur: A,
    onMouseEnter: O,
    onMouseLeave: A,
    className: u.desktopSubMenuItem,
    children: [(0, n.jsxs)("span", {
      className: u.desktopMenuMore,
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "true",
      "aria-expanded": h,
      "aria-controls": g,
      children: [a, (0, n.jsx)("img", {
        src: d.r.ICON_ARROW_DOWN,
        className: u.iconArrow,
        alt: "Open Nav"
      })]
    }, "more"), (0, n.jsx)(o.h, {
      id: g,
      avoidRouter: b,
      TrackClick: t,
      isOpen: h,
      dropdownLinks: m,
      "aria-label": a
    })]
  }, "dropdown_".concat(a))
}