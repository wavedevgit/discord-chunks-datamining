/** Chunk was on web.js **/
/** chunk id: 277329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk574755 = require("./574755.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk309739 = require("./309739.jsx"),
  Chunk293389 = require("./293389.jsx"),
  Chunk794704 = require("./794704.jsx"),
  Chunk326528 = require("./326528.js"),
  Chunk332325 = require("./332325.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk103554 = require("./103554.js");

function g() {
  let e = (0, f.b)(),
    t = (0, i.e7)([l.Z], () => l.Z.getSubsection()),
    n = null != t && e.some(e => e.id === t) ? t : e[0].id,
    g = e => {
      o.Z.setSection(_.oAB.GAMES, e)
    },
    E = () => {
      switch (n) {
        case p.Z.CLIPS:
          return (0, r.jsx)(s.Z, {});
        case p.Z.OVERLAY:
          return (0, r.jsx)(d.ZP, {});
        case p.Z.ACTIVITY_PRIVACY:
          return (0, r.jsx)(c.ZP, {});
        case p.Z.MY_GAMES:
        default:
          return (0, r.jsx)(u.ZP, {
            className: m.body,
            showHeader: false
          })
      }
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: m.heading,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t.URyqtP)
    }), (0, r.jsx)(a.njP, {
      className: m.tabBar,
      selectedItem: n,
      onItemSelect: g,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, r.jsxs)(a.njP.Item, {
        className: m.tab,
        id: e.id,
        "aria-label": e.title,
        children: [(0, r.jsx)(e.icon, {
          className: m.tabIcon,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: m.iconTitle,
          children: e.title
        })]
      }, e.id))
    }), E()]
  })
}