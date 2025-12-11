/** Chunk was on 92504 **/
/** chunk id: 448021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk603262 = require("./603262.js"),
  Chunk516450 = require("./516450.js");

function f(e) {
  let {
    application: t,
    carouselItems: n
  } = e, f = (0, l.e7)([d.Z], () => d.Z.isFocused()), b = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      className: m.errorImage,
      src: h,
      "aria-hidden": true,
      alt: ""
    }), (0, a.jsx)(i.X6q, {
      variant: "heading-xl/semibold",
      children: p.intl.string(p.t.UvDfMz)
    })]
  });
  n.forEach((e, a) => {
    e.alt = p.intl.formatToPlainString(p.t.sSEhHb, {
      index: a + 1,
      totalImages: n.length,
      name: t.name
    })
  });
  let g = r.useCallback((e, t) => {
    if (e.type === u.s9s.IMG) {
      let t = n.filter(e => e.type === u.s9s.IMG),
        a = t.findIndex(t => t === e);
      if (a < 0) return;
      let r = t.map(e => ({
        url: (0, s.Q)(e.src),
        original: e.src,
        width: e.width,
        height: e.height,
        type: "IMAGE"
      }));
      (0, c.K)({
        items: r,
        startingIndex: a,
        shouldHideMediaOptions: true,
        location: "GlobalDiscoveryAppsDetailCarousel"
      })
    }
  }, [n]);
  return 0 === n.length ? null : (0, a.jsx)(o.Z, {
    className: m.carousel,
    themedPagination: true,
    items: n,
    autoplayInterval: 8e3,
    paused: !f,
    videoAutoPlay: true,
    onCurrentItemClick: g,
    errorComponent: b
  })
}