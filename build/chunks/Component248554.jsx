/** Chunk was on 21585 **/
/** chunk id: 248554, original params: e,t,r (module,exports,require) **/
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
    coverImageUrl: r
  } = (0, l.$)(t);
  return null != r && "" !== r ? (0, n.jsx)("div", {
    className: a()(c.coverContainer, s.placeholderCover),
    children: (0, n.jsx)(o.o, {
      imageSrc: r
    })
  }) : (0, n.jsx)("div", {
    className: a()(c.loadingCover, s.placeholderCover)
  })
}

function d(e) {
  let {
    applicationId: t,
    size: r = "default"
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(s.container, s.placeholderDetailsCard, "small" === r && s.sizeSmall),
    "aria-hidden": true,
    children: [null != t ? (0, n.jsx)(u, {
      applicationId: t
    }) : (0, n.jsx)("div", {
      className: c.loadingCover
    }), (0, n.jsxs)("div", {
      className: s.placeholderText,
      children: [(0, n.jsx)("div", {
        className: s.placeholderBar
      }), (0, n.jsx)("div", {
        className: s.placeholderBar
      })]
    })]
  })
}

function f(e) {
  let {
    applicationIds: t,
    size: r = "default"
  } = e, i = "small" === r, l = i ? t.slice(0, 3) : t.slice(0, 4);
  return (0, n.jsx)("div", {
    className: a()(s.container, s.placeholderCoverGrid, i && s.sizeSmall),
    "aria-hidden": true,
    children: l.map((e, t) => (0, n.jsx)(u, {
      applicationId: e
    }, t))
  })
}