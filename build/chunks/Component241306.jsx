/** Chunk was on 3298 **/
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
  Chunk879125 = require("./879125.js");

function u() {
  let {
    currentGame: e,
    planId: n
  } = (0, s.JL)(), t = (0, d.Z)(null == e ? true : e.gameId, "cover");
  if (null == e) return null;
  let u = null == e ? true : e.plans.find(e => e.id === n);
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsxs)("div", {
      className: c.content,
      children: [(0, r.jsxs)("div", {
        className: c.headerContainer,
        children: [(0, r.jsx)("img", {
          src: null != t ? t : "",
          className: c.image,
          alt: e.name
        }), (0, r.jsxs)("div", {
          className: c.header,
          children: [(0, r.jsx)(a.X6q, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: e.name
          }), (0, r.jsx)(a.xvT, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: null == u ? true : u.name
          })]
        })]
      }), null != u && (0, r.jsx)("div", {
        className: c.statsGrid,
        children: u.specifications.map((e, n) => {
          var t;
          return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: c.statItem,
              children: [(0, r.jsx)(a.X6q, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: e.title
              }), (0, r.jsx)(a.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: e.description
              })]
            }), n !== (null != (t = null == u ? true : u.specifications.length) ? t : 0) - 1 && (0, r.jsx)("div", {
              className: c.divider
            })]
          }, n)
        })
      }), (0, r.jsx)("div", {
        className: c.poweredBy,
        children: (0, r.jsx)(o.Z, {})
      })]
    }), (0, r.jsx)("div", {
      className: c.imageBackground,
      children: (0, r.jsx)(l.b, {
        imageUrl: null != t ? t : ""
      })
    })]
  })
}