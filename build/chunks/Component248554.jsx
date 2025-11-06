/** Chunk was on 39380 **/
/** chunk id: 248554, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  c: () => p,
  i: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk210753 = require("./210753.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk978276 = require("./978276.js");

function d(e) {
  let {
    applicationId: l
  } = e, {
    coverImageUrl: a
  } = (0, r.$)(l);
  return null != a && "" !== a ? (0, i.jsx)("div", {
    className: n()(c.coverContainer, o.placeholderCover),
    children: (0, i.jsx)(s.o, {
      imageSrc: a
    })
  }) : (0, i.jsx)("div", {
    className: n()(c.loadingCover, o.placeholderCover)
  })
}

function u(e) {
  let {
    applicationId: l,
    size: a = "default",
    className: t
  } = e;
  return (0, i.jsxs)("div", {
    className: n()(o.container, o.placeholderDetailsCard, {
      [o.sizeSmall]: "small" === a,
      [o.sizeMedium]: "medium" === a
    }, t),
    "aria-hidden": true,
    children: [null != l ? (0, i.jsx)(d, {
      applicationId: l
    }) : (0, i.jsx)("div", {
      className: c.loadingCover
    }), (0, i.jsxs)("div", {
      className: o.placeholderText,
      children: [(0, i.jsx)("div", {
        className: o.placeholderBar
      }), (0, i.jsx)("div", {
        className: o.placeholderBar
      })]
    })]
  })
}

function p(e) {
  let {
    applicationIds: l,
    size: a = "default",
    className: t
  } = e, r = "small" === a ? l.slice(0, 3) : l.slice(0, 4);
  return (0, i.jsx)("div", {
    className: n()(o.container, o.placeholderCoverGrid, {
      [o.sizeSmall]: "small" === a,
      [o.sizeMedium]: "medium" === a
    }, t),
    "aria-hidden": true,
    children: r.map((e, l) => (0, i.jsx)(d, {
      applicationId: e
    }, l))
  })
}