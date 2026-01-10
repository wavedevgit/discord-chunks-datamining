/** Chunk was on 81985 **/
/** chunk id: 36246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk470134 = require("./470134.jsx"),
  Chunk775396 = require("./775396.js");

function u(e) {
  let {
    guildId: t,
    children: n,
    className: i
  } = e, {
    horizontalScrollNotice: u,
    handleScroll: d,
    handleSetScrollerRef: p,
    handleSetContainerRef: f
  } = (0, s.Z)(t), h = (0, r.jsx)("div", {
    className: c.tierPreviewsContainer,
    children: (0, r.jsx)("div", {
      className: l()(c.tierPreviews, i),
      children: n
    })
  });
  return a.tq || (h = (0, r.jsxs)(r.Fragment, {
    children: [u, (0, r.jsx)(o.Den, {
      className: c.scroller,
      orientation: "horizontal",
      ref: p,
      onScroll: d,
      children: h
    })]
  })), (0, r.jsx)("div", {
    className: c.carouselMaxWidth,
    ref: f,
    children: h
  })
}