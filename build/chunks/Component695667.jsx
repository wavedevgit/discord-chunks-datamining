/** Chunk was on 14691 **/
/** chunk id: 695667, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk165655 = require("./165655.jsx"),
  Chunk468946 = require("./468946.jsx"),
  Chunk27023 = require("./27023.jsx"),
  Chunk225180 = require("./225180.js"),
  Chunk794567 = require("./794567.js");

function u() {
  let {
    currentGame: e,
    planId: t
  } = (0, d.bv)(), l = (0, c.A)(null == e ? true : e.gameId, "cover");
  if (null == e) return null;
  let u = null == e ? true : e.plans.find(e => e.id === t);
  return (0, r.jsxs)("div", {
    className: o.kL,
    children: [(0, r.jsxs)("div", {
      className: o.Qs,
      children: [(0, r.jsxs)("div", {
        className: o.N1,
        children: [(0, r.jsx)("img", {
          src: null != l ? l : "",
          className: o.Sl,
          alt: e.name
        }), (0, r.jsxs)("div", {
          className: o.wx,
          children: [(0, r.jsx)(s.DZT, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: e.name
          }), (0, r.jsx)(s.EYj, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: null == u ? true : u.name
          })]
        })]
      }), null != u && (0, r.jsx)("div", {
        className: o.wL,
        children: u.specifications.map((e, t) => {
          var l;
          return (0, r.jsxs)(n.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: o._Y,
              children: [(0, r.jsx)(s.DZT, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: e.title
              }), (0, r.jsx)(s.EYj, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: e.description
              })]
            }), t !== (null != (l = null == u ? true : u.specifications.length) ? l : 0) - 1 && (0, r.jsx)("div", {
              className: o.yF
            })]
          }, t)
        })
      }), (0, r.jsx)("div", {
        className: o.UK,
        children: (0, r.jsx)(a.A, {})
      })]
    }), (0, r.jsx)("div", {
      className: o.uV,
      children: (0, r.jsx)(i.T, {
        imageUrl: null != l ? l : ""
      })
    })]
  })
}