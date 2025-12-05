/** Chunk was on 89522 **/
/** chunk id: 36246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk470134 = require("./470134.jsx"),
  Chunk245702 = require("./245702.js");

function d(e) {
  let {
    guildId: t,
    children: n,
    className: i
  } = e, {
    horizontalScrollNotice: d,
    handleScroll: u,
    handleSetScrollerRef: p,
    handleSetContainerRef: h
  } = (0, o.Z)(t), f = (0, r.jsx)("div", {
    className: c.tierPreviewsContainer,
    children: (0, r.jsx)("div", {
      className: l()(c.tierPreviews, i),
      children: n
    })
  });
  return a.tq || (f = (0, r.jsxs)(r.Fragment, {
    children: [d, (0, r.jsx)(s.Den, {
      className: c.scroller,
      orientation: "horizontal",
      ref: p,
      onScroll: u,
      children: f
    })]
  })), (0, r.jsx)("div", {
    className: c.carouselMaxWidth,
    ref: h,
    children: f
  })
}