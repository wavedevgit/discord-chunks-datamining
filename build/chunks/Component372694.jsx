/** Chunk was on 28636 **/
/** chunk id: 372694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk644576 = require("./644576.jsx"),
  Chunk256905 = require("./256905.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk504724 = require("./504724.js"),
  Chunk500226 = require("./500226.js");

function b(e) {
  let {
    application: t,
    carouselItems: n
  } = e, b = (0, i.bG)([d.A], () => d.A.isFocused()), f = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("img", {
      className: h.M,
      src: m,
      "aria-hidden": true,
      alt: ""
    }), (0, l.jsx)(r.DZT, {
      variant: "heading-xl/semibold",
      children: p.intl.string(p.t.UvDfMz)
    })]
  });
  n.forEach((e, l) => {
    e.alt = p.intl.formatToPlainString(p.t.sSEhHb, {
      index: l + 1,
      totalImages: n.length,
      name: t.name
    })
  });
  let g = a.useCallback((e, t) => {
    if (e.type === u.geh.IMG) {
      let t = n.filter(e => e.type === u.geh.IMG),
        l = t.findIndex(t => t === e);
      if (l < 0) return;
      let a = t.map(e => ({
        url: (0, s.o)(e.src),
        original: e.src,
        width: e.width,
        height: e.height,
        type: "IMAGE"
      }));
      (0, o.R)({
        items: a,
        startingIndex: l,
        shouldHideMediaOptions: true,
        location: "GlobalDiscoveryAppsDetailCarousel"
      })
    }
  }, [n]);
  return 0 === n.length ? null : (0, l.jsx)(c.A, {
    className: h.D,
    themedPagination: true,
    items: n,
    autoplayInterval: 8e3,
    paused: !b,
    videoAutoPlay: true,
    onCurrentItemClick: g,
    errorComponent: f
  })
}