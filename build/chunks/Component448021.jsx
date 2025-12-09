/** Chunk was on 69844 **/
/** chunk id: 448021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk445986 = require("./445986.jsx"),
  Chunk9807 = require("./9807.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk489060 = require("./489060.js"),
  Chunk516450 = require("./516450.js");

function g(e) {
  let {
    application: t,
    carouselItems: n
  } = e, g = (0, l.e7)([d.Z], () => d.Z.isFocused()), f = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      className: m.errorImage,
      src: h,
      "aria-hidden": true,
      alt: ""
    }), (0, r.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      children: p.intl.string(p.t.UvDfMz)
    })]
  });
  n.forEach((e, r) => {
    e.alt = p.intl.formatToPlainString(p.t.sSEhHb, {
      index: r + 1,
      totalImages: n.length,
      name: t.name
    })
  });
  let _ = a.useCallback((e, t) => {
    if (e.type === u.s9s.IMG) {
      let t = n.filter(e => e.type === u.s9s.IMG),
        r = t.findIndex(t => t === e);
      if (r < 0) return;
      let a = t.map(e => ({
        url: (0, s.Q)(e.src),
        original: e.src,
        width: e.width,
        height: e.height,
        type: "IMAGE"
      }));
      (0, c.K)({
        items: a,
        startingIndex: r,
        shouldHideMediaOptions: true,
        location: "GlobalDiscoveryAppsDetailCarousel"
      })
    }
  }, [n]);
  return 0 === n.length ? null : (0, r.jsx)(o.Z, {
    className: m.carousel,
    themedPagination: true,
    items: n,
    autoplayInterval: 8e3,
    paused: !g,
    videoAutoPlay: true,
    onCurrentItemClick: _,
    errorComponent: f
  })
}