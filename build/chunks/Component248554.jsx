/** Chunk was on 55827 **/
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
  } = (0, s.$)(a);
  return null != l && "" !== l ? (0, i.jsx)("div", {
    className: n()(c.coverContainer, o.placeholderCover),
    children: (0, i.jsx)(r.o, {
      imageSrc: l
    })
  }) : (0, i.jsx)("div", {
    className: n()(c.loadingCover, o.placeholderCover)
  })
}

function u(e) {
  let {
    applicationId: a,
    size: l = "default",
    className: t
  } = e;
  return (0, i.jsxs)("div", {
    className: n()(o.container, o.placeholderDetailsCard, {
      [o.sizeSmall]: "small" === l,
      [o.sizeMedium]: "medium" === l
    }, t),
    "aria-hidden": true,
    children: [null != a ? (0, i.jsx)(d, {
      applicationId: a
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

function m(e) {
  let {
    applicationIds: a,
    size: l = "default",
    className: t
  } = e, s = "small" === l ? a.slice(0, 3) : a.slice(0, 4);
  return (0, i.jsx)("div", {
    className: n()(o.container, o.placeholderCoverGrid, {
      [o.sizeSmall]: "small" === l,
      [o.sizeMedium]: "medium" === l
    }, t),
    "aria-hidden": true,
    children: s.map((e, a) => (0, i.jsx)(d, {
      applicationId: e
    }, a))
  })
}