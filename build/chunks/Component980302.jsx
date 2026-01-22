/** Chunk was on 41031 **/
/** chunk id: 980302, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  r: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk134402 = require("./134402.js"),
  Chunk877227 = require("./877227.js"),
  Chunk489569 = require("./489569.js"),
  Chunk137540 = require("./137540.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk705492 = require("./705492.js");
let d = Chunk818348.sE.MAIN_NAVIGATION_MENU;

function u(e) {
  let {
    isOpen: t,
    dropdownLinks: a,
    TrackClick: u,
    avoidRouter: N,
    id: A,
    "aria-label": p
  } = e, h = (0, r.dI)({
    history: (0, l.W6)()
  }), b = a.map((e, t) => e.divider ? (0, s.jsx)("hr", {
    className: c.divider
  }, "divider-".concat(t)) : e.external ? (0, s.jsx)("li", {
    className: c.moreListItemInactive,
    children: (0, s.jsx)(u, {
      className: c.moreListLink,
      eventName: d,
      data: {
        linkClicked: e.linkClicked
      },
      href: e.route,
      rel: "me",
      children: (0, s.jsx)("span", {
        className: c.moreListLinkCopy,
        children: e.title
      })
    })
  }, e.route) : (0, s.jsx)("li", {
    className: (0, n.t)(c, "moreListItem", h(e.route) ? "Active" : "Inactive"),
    children: (0, s.jsx)(i.A, {
      avoidRouter: N,
      className: c.moreListLink,
      to: e.route,
      from: o.sE.MAIN_NAVIGATION_MENU,
      role: "menuitem",
      children: (0, s.jsx)(u, {
        tag: "span",
        className: c.moreListLinkCopy,
        eventName: d,
        data: {
          linkClicked: e.linkClicked
        },
        children: e.title
      })
    })
  }, e.route));
  return (0, s.jsx)("ul", {
    id: A,
    className: (0, n.t)(c, "moreList", t ? "Open" : "Closed"),
    "aria-label": p,
    children: b
  })
}