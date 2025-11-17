/** Chunk was on 26473 **/
/** chunk id: 241306, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk441494 = require("./441494.jsx"),
  Chunk296643 = require("./296643.jsx"),
  Chunk343312 = require("./343312.jsx"),
  Chunk162190 = require("./162190.js"),
  Chunk333275 = require("./333275.js");

function u() {
  let {
    currentGame: e,
    planId: n
  } = (0, Chunk343312.JL)(), t = (0, Chunk162190.Z)(null == module ? true : module.gameId, "cover");
  if (null == module) return null;
  let u = null == module ? true : module.plans.find(e => e.id === n);
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk333275.container,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk333275.content,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk333275.headerContainer,
        children: [(0, Chunk54381.jsx)("img", {
          src: null != require ? require : "",
          className: Chunk333275.image,
          alt: module.name
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk333275.header,
          children: [(0, Chunk54381.jsx)(Chunk793030.X6q, {
            variant: "heading-lg/semibold",
            color: "text-primary",
            children: module.name
          }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: null == u ? true : u.name
          })]
        })]
      }), null != u && (0, Chunk54381.jsx)("div", {
        className: Chunk333275.statsGrid,
        children: u.specifications.map((e, n) => {
          var t;
          return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: c.statItem,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-sm/semibold",
                color: "text-primary",
                children: e.title
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-tertiary",
                children: e.description
              })]
            }), n !== (null != (t = null == u ? true : u.specifications.length) ? t : 0) - 1 && (0, r.jsx)("div", {
              className: c.divider
            })]
          }, n)
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk333275.poweredBy,
        children: (0, Chunk54381.jsx)(Chunk296643.Z, {})
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk333275.imageBackground,
      children: (0, Chunk54381.jsx)(Chunk441494.b, {
        imageUrl: null != require ? require : ""
      })
    })]
  })
}