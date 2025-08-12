/** Chunk was on 21087 **/
/** chunk id: 36246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk470134 = require("./470134.jsx"),
  Chunk173224 = require("./173224.js");

function u(e) {
  let {
    guildId: t,
    children: n,
    className: i
  } = e, {
    horizontalScrollNotice: u,
    handleScroll: d,
    handleSetScrollerRef: h,
    handleSetContainerRef: p
  } = (0, o.Z)(t), f = (0, r.jsx)("div", {
    className: c.tierPreviewsContainer,
    children: (0, r.jsx)("div", {
      className: l()(c.tierPreviews, i),
      children: n
    })
  });
  return a.tq || (f = (0, r.jsxs)(r.Fragment, {
    children: [u, (0, r.jsx)(s.Den, {
      className: c.scroller,
      orientation: "horizontal",
      ref: h,
      onScroll: d,
      children: f
    })]
  })), (0, r.jsx)("div", {
    className: c.carouselMaxWidth,
    ref: p,
    children: f
  })
}