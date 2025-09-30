/** Chunk was on 54965 **/
/** chunk id: 642633, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk310978 = require("./310978.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20426 = require("./20426.js");

function m() {
  let {
    currentGame: e,
    planId: n
  } = (0, Chunk183369.aj)(), t = (0, Chunk943970.Z)(null == module ? true : module.gameId, "cover");
  if (null == module) return null;
  let m = null == module ? true : module.plans.find(e => e.id === n);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk20426.container,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk20426.content,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk20426.headerContainer,
        children: [(0, Chunk951288.jsx)("img", {
          src: null != require ? require : "",
          className: Chunk20426.image,
          alt: module.name
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk20426.header,
          children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/semibold",
            color: "text-primary",
            children: module.name
          }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: null == m ? true : m.name
          })]
        })]
      }), null != m && (0, Chunk951288.jsx)("div", {
        className: Chunk20426.statsGrid,
        children: m.specifications.map((e, n) => {
          var t;
          return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: u.statItem,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-sm/semibold",
                color: "text-primary",
                children: e.title
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-tertiary",
                children: e.description
              })]
            }), n !== (null != (t = null == m ? true : m.specifications.length) ? t : 0) - 1 && (0, r.jsx)("div", {
              className: u.divider
            })]
          }, n)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk20426.poweredBy,
        children: (0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk401561.default.JWpue3, {
            developer: module.developer
          })
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk20426.imageBackground,
      children: (0, Chunk951288.jsx)(Chunk310978.M, {
        imageUrl: null != require ? require : ""
      })
    })]
  })
}