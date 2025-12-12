/** Chunk was on 87626 **/
/** chunk id: 950132, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  h: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk54111 = require("./54111.js"),
  Chunk948789 = require("./948789.js"),
  Chunk982905 = require("./982905.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk545438 = require("./545438.js");
let d = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function u(e) {
  let {
    isOpen: t,
    dropdownLinks: a,
    TrackClick: u,
    avoidRouter: N,
    id: m,
    "aria-label": f
  } = e, p = (0, s.fQ)({
    history: (0, r.k6)()
  }), h = a.map((e, t) => e.divider ? (0, n.jsx)("hr", {
    className: c.divider
  }, "divider-".concat(t)) : e.external ? (0, n.jsx)("li", {
    className: c.moreListItemInactive,
    children: (0, n.jsx)(u, {
      className: c.moreListLink,
      eventName: d,
      data: {
        linkClicked: e.linkClicked
      },
      href: e.route,
      rel: "me",
      children: (0, n.jsx)("span", {
        className: c.moreListLinkCopy,
        children: e.title
      })
    })
  }, e.route) : (0, n.jsx)("li", {
    className: (0, l.l)(c, "moreListItem", p(e.route) ? "Active" : "Inactive"),
    children: (0, n.jsx)(i.Z, {
      avoidRouter: N,
      className: c.moreListLink,
      to: e.route,
      from: o.j_.MAIN_NAVIGATION_MENU,
      role: "menuitem",
      children: (0, n.jsx)(u, {
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
  return (0, n.jsx)("ul", {
    id: m,
    className: (0, l.l)(c, "moreList", t ? "Open" : "Closed"),
    "aria-label": f,
    children: h
  })
}