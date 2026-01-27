/** Chunk was on 21738 **/
/** chunk id: 492280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => d,
  l: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk585958 = require("./585958.js"),
  Chunk788593 = require("./788593.jsx"),
  Chunk461349 = require("./461349.js"),
  Chunk640830 = require("./640830.js");

function u(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: n
  } = (0, a.n)(t);
  return null != n && "" !== n ? (0, r.jsx)("div", {
    className: l()(o.PY, c.LH),
    children: (0, r.jsx)(s.R, {
      imageSrc: n
    })
  }) : (0, r.jsx)("div", {
    className: l()(o.mD, c.LH)
  })
}

function d(e) {
  let {
    applicationId: t,
    size: n = "default",
    className: i
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(c.kL, c.Yi, {
      [c.PG]: "small" === n,
      [c.$g]: "medium" === n
    }, i),
    "aria-hidden": true,
    children: [null != t ? (0, r.jsx)(u, {
      applicationId: t
    }) : (0, r.jsx)("div", {
      className: o.mD
    }), (0, r.jsxs)("div", {
      className: c.RC,
      children: [(0, r.jsx)("div", {
        className: c.h$
      }), (0, r.jsx)("div", {
        className: c.h$
      })]
    })]
  })
}

function p(e) {
  let {
    applicationIds: t,
    size: n = "default",
    className: i
  } = e, a = "small" === n ? t.slice(0, 3) : t.slice(0, 4);
  return (0, r.jsx)("div", {
    className: l()(c.kL, c.Nu, {
      [c.PG]: "small" === n,
      [c.$g]: "medium" === n
    }, i),
    "aria-hidden": true,
    children: a.map((e, t) => (0, r.jsx)(u, {
      applicationId: e
    }, t))
  })
}