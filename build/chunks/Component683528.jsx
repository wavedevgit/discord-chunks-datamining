/** Chunk was on web.js **/
/** chunk id: 683528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk52824 = require("./52824.js"),
  Chunk549635 = require("./549635.jsx"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk27505 = require("./27505.js");
let h = 40;

function m(e) {
  return "media-view-scroll-thumbnail-".concat(e)
}

function g(e) {
  return "IMAGE" === e.type ? (0, u.q)({
    proxyURL: e.proxyUrl,
    url: e.url
  }) : "VIDEO" === e.type && null != e.proxyUrl ? (0, d.Dt)(e.proxyUrl) : null
}

function E(e) {
  var t, n;
  let {
    item: i
  } = e, o = g(i);
  return null == o ? null : (0, r.jsx)(c.ZP, {
    width: null != (t = i.width) ? t : h,
    height: null != (n = i.height) ? n : h,
    maxWidth: h,
    maxHeight: h,
    useFullWidth: true,
    src: o,
    shouldAnimate: false,
    shouldRenderAccessory: false,
    srcIsAnimated: i.srcIsAnimated,
    alt: i.alt,
    mediaLayoutType: f.hV.MOSAIC
  })
}
let b = Chunk647438.memo(E);

function y(e) {
  let {
    items: t,
    currentIndex: n,
    onGalleryItemClick: o,
    className: c
  } = e, u = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = document.getElementById(m(n));
    null != u.current && null != e && u.current.scrollIntoViewNode({
      node: e,
      animate: !l.Z.useReducedMotion,
      padding: h / 2
    })
  }, [n]), (0, r.jsx)("div", {
    className: a()(p.galleryContainer, c),
    children: (0, r.jsx)(s.h21, {
      orientation: "horizontal",
      className: a()(p.gallery, c),
      ref: u,
      onClick: e => e.stopPropagation(),
      children: t.map((e, i) => {
        let l = i === n,
          c = l ? _.t["qv/U5e"] : _.t.zviMAA;
        return (0, r.jsx)(s.P3F, {
          id: m(i),
          className: a()(p.galleryItem, {
            [p.inactive]: !l,
            [p.first]: 0 === i,
            [p.last]: i === t.length - 1
          }),
          "aria-label": _.intl.formatToPlainString(c, {
            pageNumber: i + 1,
            totalPages: t.length
          }),
          onClick: () => o(i),
          children: (0, r.jsx)(b, {
            item: e
          })
        }, i)
      })
    })
  })
}