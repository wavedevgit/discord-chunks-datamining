/** Chunk was on 49902 **/
/** chunk id: 248554, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  c: () => f,
  i: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk210753 = require("./210753.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk978276 = require("./978276.js");

function u(e) {
  let {
    applicationId: t
  } = e, {
    coverImageUrl: r
  } = (0, a.$)(t);
  return null != r && "" !== r ? (0, n.jsx)("div", {
    className: l()(o.coverContainer, c.placeholderCover),
    children: (0, n.jsx)(s.o, {
      imageSrc: r
    })
  }) : (0, n.jsx)("div", {
    className: l()(o.loadingCover, c.placeholderCover)
  })
}

function d(e) {
  let {
    applicationId: t,
    size: r = "default"
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(c.container, c.placeholderDetailsCard, "small" === r && c.sizeSmall),
    "aria-hidden": true,
    children: [null != t ? (0, n.jsx)(u, {
      applicationId: t
    }) : (0, n.jsx)("div", {
      className: o.loadingCover
    }), (0, n.jsxs)("div", {
      className: c.placeholderText,
      children: [(0, n.jsx)("div", {
        className: c.placeholderBar
      }), (0, n.jsx)("div", {
        className: c.placeholderBar
      })]
    })]
  })
}

function f(e) {
  let {
    applicationIds: t,
    size: r = "default"
  } = e, i = "small" === r, a = i ? t.slice(0, 3) : t.slice(0, 4);
  return (0, n.jsx)("div", {
    className: l()(c.container, c.placeholderCoverGrid, i && c.sizeSmall),
    "aria-hidden": true,
    children: a.map((e, t) => (0, n.jsx)(u, {
      applicationId: e
    }, t))
  })
}