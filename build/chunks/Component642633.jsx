/** Chunk was on 39159 **/
/** chunk id: 642633, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk183369 = require("./183369.jsx"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk233019 = require("./233019.js");

function d() {
  let {
    currentGame: e,
    planId: n
  } = (0, Chunk183369.aj)();
  if (null == module) return null;
  let t = null == module ? true : module.plans.find(e => e.id === n);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk233019.container,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk233019.content,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk233019.headerContainer,
        children: [(0, Chunk951288.jsx)("img", {
          className: Chunk233019.image,
          alt: module.name
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk233019.header,
          children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/semibold",
            color: "text-primary",
            children: module.name
          }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: null == require ? true : require.name
          })]
        })]
      }), null != require && (0, Chunk951288.jsx)("div", {
        className: Chunk233019.statsGrid,
        children: require.specifications.map((e, n) => {
          var l;
          return (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsxs)("div", {
              className: c.statItem,
              children: [(0, i.jsx)(a.X6q, {
                variant: "heading-sm/semibold",
                color: "text-primary",
                children: e.title
              }), (0, i.jsx)(a.xvT, {
                variant: "text-sm/medium",
                color: "text-tertiary",
                children: e.description
              })]
            }), n !== (null != (l = null == t ? true : t.specifications.length) ? l : 0) - 1 && (0, i.jsx)("div", {
              className: c.divider
            })]
          }, n)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk233019.poweredBy,
        children: (0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk440589.default.JWpue3, {
            developer: module.developer
          })
        })
      })]
    })
  })
}