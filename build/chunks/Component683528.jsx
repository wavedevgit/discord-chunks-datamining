/** Chunk was on web.js **/
/** chunk id: 683528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk991621 = require("./991621.js"),
  Chunk629710 = require("./629710.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk52824 = require("./52824.js"),
  Chunk549635 = require("./549635.jsx"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk27505 = require("./27505.js");
let g = 40;

function E(e) {
  return "media-view-scroll-thumbnail-".concat(e)
}

function b(e) {
  return "IMAGE" === e.type ? (0, f.q)({
    proxyURL: e.proxyUrl,
    url: e.url
  }) : "VIDEO" === e.type && null != e.proxyUrl ? (0, _.Dt)(e.proxyUrl) : null
}

function y(e) {
  var t, n;
  let {
    item: i,
    enabledContentHarmTypeFlags: a = 0
  } = e, o = b(i);
  return null == o ? null : (0, u.g4)({
    type: c.l.GenericMedia,
    media: i
  }, a) ? (0, r.jsx)(s.Kqy, {
    align: "center",
    justify: "center",
    className: m.obscured,
    style: {
      width: g,
      height: g
    },
    children: (0, r.jsx)(s.fFY, {
      size: "sm",
      color: "white"
    })
  }) : (0, r.jsx)(d.ZP, {
    width: null != (t = i.width) ? t : g,
    height: null != (n = i.height) ? n : g,
    maxWidth: g,
    maxHeight: g,
    useFullWidth: true,
    src: o,
    shouldAnimate: false,
    shouldRenderAccessory: false,
    srcIsAnimated: i.srcIsAnimated,
    alt: i.alt,
    mediaLayoutType: p.hV.MOSAIC
  })
}
let O = Chunk473749.memo(y);

function v(e) {
  let {
    items: t,
    currentIndex: n,
    onGalleryItemClick: a,
    className: c,
    enabledContentHarmTypeFlags: u
  } = e, d = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = document.getElementById(E(n));
    null != d.current && null != e && d.current.scrollIntoViewNode({
      node: e,
      animate: !l.Z.useReducedMotion,
      padding: g / 2
    })
  }, [n]), (0, r.jsx)("div", {
    className: o()(m.galleryContainer, c),
    children: (0, r.jsx)(s.h21, {
      orientation: "horizontal",
      className: o()(m.gallery, c),
      ref: d,
      onClick: e => e.stopPropagation(),
      children: t.map((e, i) => {
        let l = i === n,
          c = l ? h.t["qv/U5V"] : h.t.zviMAG;
        return (0, r.jsx)(s.P3F, {
          id: E(i),
          className: o()(m.galleryItem, {
            [m.inactive]: !l,
            [m.first]: 0 === i,
            [m.last]: i === t.length - 1
          }),
          "aria-label": h.intl.formatToPlainString(c, {
            pageNumber: i + 1,
            totalPages: t.length
          }),
          onClick: () => a(i),
          children: (0, r.jsx)(O, {
            item: e,
            enabledContentHarmTypeFlags: u
          })
        }, i)
      })
    })
  })
}