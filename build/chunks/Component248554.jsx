/** Chunk was on 33131 **/
/** chunk id: 248554, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  c: () => m,
  i: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk210753 = require("./210753.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk713603 = require("./713603.js"),
  Chunk572102 = require("./572102.js");

function d(e) {
  let {
    applicationId: a
  } = e, {
    coverImageUrl: l
  } = (0, r.$)(a);
  return null != l && "" !== l ? (0, t.jsx)("div", {
    className: n()(c.coverContainer, o.placeholderCover),
    children: (0, t.jsx)(s.o, {
      imageSrc: l
    })
  }) : (0, t.jsx)("div", {
    className: n()(c.loadingCover, o.placeholderCover)
  })
}

function u(e) {
  let {
    applicationId: a,
    size: l = "default",
    className: i
  } = e;
  return (0, t.jsxs)("div", {
    className: n()(o.container, o.placeholderDetailsCard, {
      [o.sizeSmall]: "small" === l,
      [o.sizeMedium]: "medium" === l
    }, i),
    "aria-hidden": true,
    children: [null != a ? (0, t.jsx)(d, {
      applicationId: a
    }) : (0, t.jsx)("div", {
      className: c.loadingCover
    }), (0, t.jsxs)("div", {
      className: o.placeholderText,
      children: [(0, t.jsx)("div", {
        className: o.placeholderBar
      }), (0, t.jsx)("div", {
        className: o.placeholderBar
      })]
    })]
  })
}

function m(e) {
  let {
    applicationIds: a,
    size: l = "default",
    className: i
  } = e, r = "small" === l ? a.slice(0, 3) : a.slice(0, 4);
  return (0, t.jsx)("div", {
    className: n()(o.container, o.placeholderCoverGrid, {
      [o.sizeSmall]: "small" === l,
      [o.sizeMedium]: "medium" === l
    }, i),
    "aria-hidden": true,
    children: r.map((e, a) => (0, t.jsx)(d, {
      applicationId: e
    }, a))
  })
}