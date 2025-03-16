/** Chunk was on web.js **/
"use strict";
n.d(t, {
  b: () => c
});
var r = n(200651),
  i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(755419),
  l = n(992379);
let c = e => {
  let {
    product: t,
    animationState: n,
    className: i
  } = e, c = t.skuId, u = s.KO[c];
  if (null != u) {
    let {
      size: e
    } = a.ny6[a.EFr.SIZE_152];
    return (0, r.jsxs)("div", {
      className: o()(l.externalProductWrapper, i),
      children: [void 0 !== u.asset && (0, r.jsx)("img", {
        src: u.asset,
        alt: t.name,
        height: e
      }), void 0 !== u.renderAsset && u.renderAsset({
        animationState: n
      })]
    })
  }
  return null
}