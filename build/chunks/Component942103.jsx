/** Chunk was on 45620 **/
/** chunk id: 942103, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk979554 = require("./979554.js"),
  Chunk429368 = require("./429368.js"),
  Chunk786040 = require("./786040.js"),
  Chunk453713 = require("./453713.jsx"),
  Chunk201964 = require("./201964.js"),
  Chunk361110 = require("./361110.js");
let u = e => {
    let {
      product: t
    } = e, n = (0, i.o)(t), {
      previewingVariantIndex: o,
      handleEntering: u,
      handleLeaving: d
    } = (0, c.f)(t), g = (0, a.o)(t, o);
    return (0, r.jsx)(s.P, {
      previewingVariantIndexProps: {
        previewingVariantIndex: o,
        handleEntering: u,
        handleLeaving: d
      },
      variantGroupProduct: t,
      selectedVariantIndex: n,
      minimal: true,
      alternativeBackgroundColor: (null == g ? true : g.type) === l.Z.PROFILE_EFFECT
    })
  },
  d = e => {
    let {
      skuId: t
    } = e, n = (0, o.LJ)(t);
    return null == n || n.type !== l.Z.VARIANTS_GROUP ? null : (0, r.jsx)(u, {
      product: n
    })
  }