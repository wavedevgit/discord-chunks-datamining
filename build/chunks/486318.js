/** Chunk was on web.js **/
/** chunk id: 486318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => s,
  e: () => a
});
var Chunk397927 = require("./397927.js"),
  Chunk871123 = require("./871123.js");

function a(e) {
  let {
    imageUrl: t,
    backgroundImageUrl: n,
    altText: i,
    customClassNames: a
  } = e;
  return {
    type: "dynamic",
    component: r.Oz7.SOCIAL_LAYER_SKU_PREVIEW,
    aspectRatio: "16/9",
    props: {
      imageUrl: t,
      backgroundImageUrl: n,
      altText: i,
      customClassNames: a
    }
  }
}

function s(e) {
  return a({
    imageUrl: (0, i.fq)(e),
    backgroundImageUrl: (0, i.xf)(e),
    altText: e.name
  })
}