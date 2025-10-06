/** Chunk was on 4539 **/
/** chunk id: 642633, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk310978 = require("./310978.jsx"),
  Chunk535895 = require("./535895.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk943970 = require("./943970.js"),
  Chunk233019 = require("./233019.js");

function u() {
  let {
    currentGame: e,
    planId: n
  } = (0, Chunk183369.aj)(), t = (0, Chunk943970.Z)(null == module ? true : module.gameId, "cover");
  if (null == module) return null;
  let u = null == module ? true : module.plans.find(e => e.id === n);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk233019.container,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk233019.content,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk233019.headerContainer,
        children: [(0, Chunk951288.jsx)("img", {
          src: null != require ? require : "",
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
            children: null == u ? true : u.name
          })]
        })]
      }), null != u && (0, Chunk951288.jsx)("div", {
        className: Chunk233019.statsGrid,
        children: u.specifications.map((e, n) => {
          var t;
          return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: d.statItem,
              children: [(0, r.jsx)(a.X6q, {
                variant: "heading-sm/semibold",
                color: "text-primary",
                children: e.title
              }), (0, r.jsx)(a.xvT, {
                variant: "text-sm/medium",
                color: "text-tertiary",
                children: e.description
              })]
            }), n !== (null != (t = null == u ? true : u.specifications.length) ? t : 0) - 1 && (0, r.jsx)("div", {
              className: d.divider
            })]
          }, n)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk233019.poweredBy,
        children: (0, Chunk951288.jsx)(Chunk535895.Z, {})
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk233019.imageBackground,
      children: (0, Chunk951288.jsx)(Chunk310978.M, {
        imageUrl: null != require ? require : ""
      })
    })]
  })
}