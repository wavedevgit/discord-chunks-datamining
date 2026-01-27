/** Chunk was on 92917 **/
/** chunk id: 486318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => a,
  e: () => l
});
var Chunk397927 = require("./397927.js"),
  Chunk871123 = require("./871123.js");

function l(e) {
  let {
    imageUrl: t,
    backgroundImageUrl: n,
    altText: i,
    customClassNames: l
  } = e;
  return {
    type: "dynamic",
    component: r.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
    aspectRatio: "16/9",
    props: {
      imageUrl: t,
      backgroundImageUrl: n,
      altText: i,
      customClassNames: l
    }
  }
}

function a(e) {
  return l({
    imageUrl: (0, i.fq)(e),
    backgroundImageUrl: (0, i.xf)(e),
    altText: e.name
  })
}