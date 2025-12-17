/** Chunk was on web.js **/
/** chunk id: 882508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => a,
  c: () => o
});
var Chunk481060 = require("./481060.js"),
  Chunk164670 = require("./164670.js");

function a(e) {
  let {
    imageUrl: t,
    backgroundImageUrl: n,
    altText: i,
    customClassNames: a
  } = e;
  return {
    type: "dynamic",
    component: r.AX$.SOCIAL_LAYER_SKU_PREVIEW,
    aspectRatio: "16/9",
    props: {
      imageUrl: t,
      backgroundImageUrl: n,
      altText: i,
      customClassNames: a
    }
  }
}

function o(e) {
  return a({
    imageUrl: (0, i.Do)(e),
    backgroundImageUrl: (0, i.a7)(e),
    altText: e.name
  })
}