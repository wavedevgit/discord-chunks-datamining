/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(607070),
  c = n(124347),
  u = n(52824),
  d = n(549635),
  f = n(217702),
  p = n(388032),
  _ = n(383244);
let h = 40;

function m(e) {
  return "media-view-scroll-thumbnail-".concat(e)
}

function g(e) {
  return "IMAGE" === e.type ? (0, u.q)({
    proxyURL: e.proxyUrl,
    url: e.url
  }) : "VIDEO" === e.type && null != e.proxyUrl ? (0, d.D)(e.proxyUrl) : null
}

function E(e) {
  var t, n;
  let {
    item: i
  } = e, o = g(i);
  return null == o ? null : (0, r.jsx)(c.ZP, {
    width: null !== (t = i.width) && void 0 !== t ? t : h,
    height: null !== (n = i.height) && void 0 !== n ? n : h,
    maxWidth: h,
    maxHeight: h,
    useFullWidth: !0,
    src: o,
    shouldAnimate: !1,
    shouldRenderAccessory: !1,
    srcIsAnimated: i.srcIsAnimated,
    alt: i.alt,
    mediaLayoutType: f.hV.MOSAIC
  })
}
let v = i.memo(E);

function b(e) {
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
    className: a()(_.galleryContainer, c),
    children: (0, r.jsx)(s.h21, {
      orientation: "horizontal",
      className: a()(_.gallery, c),
      ref: u,
      onClick: e => e.stopPropagation(),
      children: t.map((e, i) => {
        let l = i === n,
          c = l ? p.t["qv/U5e"] : p.t.zviMAA;
        return (0, r.jsx)(s.P3F, {
          id: m(i),
          className: a()(_.galleryItem, {
            [_.inactive]: !l,
            [_.first]: 0 === i,
            [_.last]: i === t.length - 1
          }),
          "aria-label": p.NW.formatToPlainString(c, {
            pageNumber: i + 1,
            totalPages: t.length
          }),
          onClick: () => o(i),
          children: (0, r.jsx)(v, {
            item: e
          })
        }, i)
      })
    })
  })
}