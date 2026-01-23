/** Chunk was on 14691 **/
/** chunk id: 695667, original params: e,t,n (module,exports,require) **/
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
  } = (0, d.bv)(), n = (0, o.A)(null == e ? true : e.gameId, "cover");
  if (null == e) return null;
  let u = null == e ? true : e.plans.find(e => e.id === t);
  return (0, r.jsxs)("div", {
    className: c.kL,
    children: [(0, r.jsxs)("div", {
      className: c.Qs,
      children: [(0, r.jsxs)("div", {
        className: c.N1,
        children: [(0, r.jsx)("img", {
          src: null != n ? n : "",
          className: c.Sl,
          alt: e.name
        }), (0, r.jsxs)("div", {
          className: c.wx,
          children: [(0, r.jsx)(i.DZT, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: e.name
          }), (0, r.jsx)(i.EYj, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: null == u ? true : u.name
          })]
        })]
      }), null != u && (0, r.jsx)("div", {
        className: c.wL,
        children: u.specifications.map((e, t) => {
          var n;
          return (0, r.jsxs)(l.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: c._Y,
              children: [(0, r.jsx)(i.DZT, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: e.title
              }), (0, r.jsx)(i.EYj, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: e.description
              })]
            }), t !== (null != (n = null == u ? true : u.specifications.length) ? n : 0) - 1 && (0, r.jsx)("div", {
              className: c.yF
            })]
          }, t)
        })
      }), (0, r.jsx)("div", {
        className: c.UK,
        children: (0, r.jsx)(a.A, {})
      })]
    }), (0, r.jsx)("div", {
      className: c.uV,
      children: (0, r.jsx)(s.T, {
        imageUrl: null != n ? n : ""
      })
    })]
  })
}