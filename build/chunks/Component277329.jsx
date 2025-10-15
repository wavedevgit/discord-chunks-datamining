/** Chunk was on web.js **/
/** chunk id: 277329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk574755 = require("./574755.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk309739 = require("./309739.jsx"),
  Chunk293389 = require("./293389.jsx"),
  Chunk327885 = require("./327885.jsx"),
  Chunk326528 = require("./326528.js"),
  Chunk332325 = require("./332325.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830260 = require("./830260.js");

function g() {
  let e = (0, Chunk326528.b)(),
    t = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    n = null != exports && module.some(e => e.id === t) ? exports : module[0].id,
    g = e => {
      o.Z.setSection(p.oAB.GAMES, e)
    },
    E = () => {
      switch (require) {
        case Chunk332325.Z.CLIPS:
          return (0, Chunk951288.jsx)(Chunk574755.Z, {
            className: Chunk830260.body,
            showHeader: false
          });
        case Chunk332325.Z.OVERLAY:
          return (0, Chunk951288.jsx)(Chunk327885.Z, {
            className: Chunk830260.body,
            showHeader: false
          });
        case Chunk332325.Z.ACTIVITY_PRIVACY:
          return (0, Chunk951288.jsx)(Chunk309739.Z, {});
        case Chunk332325.Z.MY_GAMES:
        default:
          return (0, Chunk951288.jsx)(Chunk293389.Z, {
            className: Chunk830260.body,
            showHeader: false
          })
      }
    };
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      className: Chunk830260.heading,
      variant: "heading-xl/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.URyqtP)
    }), (0, Chunk951288.jsx)(Chunk481060.njP, {
      className: Chunk830260.tabBar,
      selectedItem: require,
      onItemSelect: g,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: module.map(e => (0, r.jsxs)(a.njP.Item, {
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