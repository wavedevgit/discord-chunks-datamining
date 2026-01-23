/** Chunk was on 42944 **/
/** chunk id: 492280, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  E: () => u,
  l: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk585958 = require("./585958.js"),
  Chunk788593 = require("./788593.jsx"),
  Chunk461349 = require("./461349.js"),
  Chunk640830 = require("./640830.js");

function d(e) {
  let {
    applicationId: a
  } = e, {
    coverImageUrl: n
  } = (0, r.n)(a);
  return null != n && "" !== n ? (0, t.jsx)("div", {
    className: i()(o.PY, c.LH),
    children: (0, t.jsx)(s.R, {
      imageSrc: n
    })
  }) : (0, t.jsx)("div", {
    className: i()(o.mD, c.LH)
  })
}

function u(e) {
  let {
    applicationId: a,
    size: n = "default",
    className: l
  } = e;
  return (0, t.jsxs)("div", {
    className: i()(c.kL, c.Yi, {
      [c.PG]: "small" === n,
      [c.$g]: "medium" === n
    }, l),
    "aria-hidden": true,
    children: [null != a ? (0, t.jsx)(d, {
      applicationId: a
    }) : (0, t.jsx)("div", {
      className: o.mD
    }), (0, t.jsxs)("div", {
      className: c.RC,
      children: [(0, t.jsx)("div", {
        className: c.h$
      }), (0, t.jsx)("div", {
        className: c.h$
      })]
    })]
  })
}

function m(e) {
  let {
    applicationIds: a,
    size: n = "default",
    className: l
  } = e, r = "small" === n ? a.slice(0, 3) : a.slice(0, 4);
  return (0, t.jsx)("div", {
    className: i()(c.kL, c.Nu, {
      [c.PG]: "small" === n,
      [c.$g]: "medium" === n
    }, l),
    "aria-hidden": true,
    children: r.map((e, a) => (0, t.jsx)(d, {
      applicationId: e
    }, a))
  })
}