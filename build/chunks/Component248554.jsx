/** Chunk was on 39380 **/
/** chunk id: 248554, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  c: () => m,
  i: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk210753 = require("./210753.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk279280 = require("./279280.js"),
  Chunk651294 = require("./651294.js");

function o(e) {
  let {
    applicationId: a
  } = e, {
    coverImageUrl: l
  } = (0, r.$)(a);
  return null != l && "" !== l ? (0, i.jsx)("div", {
    className: n()(c.coverContainer, d.placeholderCover),
    children: (0, i.jsx)(s.o, {
      imageSrc: l
    })
  }) : (0, i.jsx)("div", {
    className: n()(c.loadingCover, d.placeholderCover)
  })
}

function u(e) {
  let {
    applicationId: a,
    size: l = "default",
    className: t
  } = e;
  return (0, i.jsxs)("div", {
    className: n()(d.container, d.placeholderDetailsCard, {
      [d.sizeSmall]: "small" === l,
      [d.sizeMedium]: "medium" === l
    }, t),
    "aria-hidden": true,
    children: [null != a ? (0, i.jsx)(o, {
      applicationId: a
    }) : (0, i.jsx)("div", {
      className: c.loadingCover
    }), (0, i.jsxs)("div", {
      className: d.placeholderText,
      children: [(0, i.jsx)("div", {
        className: d.placeholderBar
      }), (0, i.jsx)("div", {
        className: d.placeholderBar
      })]
    })]
  })
}

function m(e) {
  let {
    applicationIds: a,
    size: l = "default",
    className: t
  } = e, r = "small" === l ? a.slice(0, 3) : a.slice(0, 4);
  return (0, i.jsx)("div", {
    className: n()(d.container, d.placeholderCoverGrid, {
      [d.sizeSmall]: "small" === l,
      [d.sizeMedium]: "medium" === l
    }, t),
    "aria-hidden": true,
    children: r.map((e, a) => (0, i.jsx)(o, {
      applicationId: e
    }, a))
  })
}