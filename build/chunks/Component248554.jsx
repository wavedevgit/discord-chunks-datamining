/** Chunk was on 22325 **/
/** chunk id: 248554, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f,
  i: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk210753 = require("./210753.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk978276 = require("./978276.js");

function u(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: n
  } = (0, l.$)(t);
  return null != n && "" !== n ? (0, r.jsx)("div", {
    className: a()(s.coverContainer, c.placeholderCover),
    children: (0, r.jsx)(o.o, {
      imageSrc: n
    })
  }) : (0, r.jsx)("div", {
    className: a()(s.loadingCover, c.placeholderCover)
  })
}

function d(e) {
  let {
    applicationId: t,
    size: n = "default",
    className: i
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.container, c.placeholderDetailsCard, "small" === n && c.sizeSmall, i),
    "aria-hidden": true,
    children: [null != t ? (0, r.jsx)(u, {
      applicationId: t
    }) : (0, r.jsx)("div", {
      className: s.loadingCover
    }), (0, r.jsxs)("div", {
      className: c.placeholderText,
      children: [(0, r.jsx)("div", {
        className: c.placeholderBar
      }), (0, r.jsx)("div", {
        className: c.placeholderBar
      })]
    })]
  })
}

function f(e) {
  let {
    applicationIds: t,
    size: n = "default",
    className: i
  } = e, l = "small" === n, o = l ? t.slice(0, 3) : t.slice(0, 4);
  return (0, r.jsx)("div", {
    className: a()(c.container, c.placeholderCoverGrid, l && c.sizeSmall, i),
    "aria-hidden": true,
    children: o.map((e, t) => (0, r.jsx)(u, {
      applicationId: e
    }, t))
  })
}