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
    className: a()(c.coverContainer, s.placeholderCover),
    children: (0, r.jsx)(o.o, {
      imageSrc: n
    })
  }) : (0, r.jsx)("div", {
    className: a()(c.loadingCover, s.placeholderCover)
  })
}

function d(e) {
  let {
    applicationId: t,
    size: n = "default",
    className: i
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(s.container, s.placeholderDetailsCard, "small" === n && s.sizeSmall, i),
    "aria-hidden": true,
    children: [null != t ? (0, r.jsx)(u, {
      applicationId: t
    }) : (0, r.jsx)("div", {
      className: c.loadingCover
    }), (0, r.jsxs)("div", {
      className: s.placeholderText,
      children: [(0, r.jsx)("div", {
        className: s.placeholderBar
      }), (0, r.jsx)("div", {
        className: s.placeholderBar
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
    className: a()(s.container, s.placeholderCoverGrid, l && s.sizeSmall, i),
    "aria-hidden": true,
    children: o.map((e, t) => (0, r.jsx)(u, {
      applicationId: e
    }, t))
  })
}