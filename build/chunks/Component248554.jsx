/** Chunk was on 45956 **/
/** chunk id: 248554, original params: e,a,t (module,exports,require) **/
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
    coverImageUrl: t
  } = (0, r.$)(a);
  return null != t && "" !== t ? (0, i.jsx)("div", {
    className: n()(o.coverContainer, c.placeholderCover),
    children: (0, i.jsx)(s.o, {
      imageSrc: t
    })
  }) : (0, i.jsx)("div", {
    className: n()(o.loadingCover, c.placeholderCover)
  })
}

function u(e) {
  let {
    applicationId: a,
    size: t = "default",
    className: l
  } = e;
  return (0, i.jsxs)("div", {
    className: n()(c.container, c.placeholderDetailsCard, {
      [c.sizeSmall]: "small" === t,
      [c.sizeMedium]: "medium" === t
    }, l),
    "aria-hidden": true,
    children: [null != a ? (0, i.jsx)(d, {
      applicationId: a
    }) : (0, i.jsx)("div", {
      className: o.loadingCover
    }), (0, i.jsxs)("div", {
      className: c.placeholderText,
      children: [(0, i.jsx)("div", {
        className: c.placeholderBar
      }), (0, i.jsx)("div", {
        className: c.placeholderBar
      })]
    })]
  })
}

function m(e) {
  let {
    applicationIds: a,
    size: t = "default",
    className: l
  } = e, r = "small" === t ? a.slice(0, 3) : a.slice(0, 4);
  return (0, i.jsx)("div", {
    className: n()(c.container, c.placeholderCoverGrid, {
      [c.sizeSmall]: "small" === t,
      [c.sizeMedium]: "medium" === t
    }, l),
    "aria-hidden": true,
    children: r.map((e, a) => (0, i.jsx)(d, {
      applicationId: e
    }, a))
  })
}