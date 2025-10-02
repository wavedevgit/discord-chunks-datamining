/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk597688 = require("./597688.js"),
  Chunk844035 = require("./844035.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk619899 = require("./619899.js");
let g = e => {
    let {
      product: t
    } = e, [n, l] = (0, c.SS)(t), a = (0, u.W)(t, n);
    return (0, r.jsx)(o.Z, {
      product: a,
      variantSwitcher: l,
      selectedVariantIndex: n
    })
  },
  p = e => {
    let {
      product: t
    } = e, [n, l] = (0, c.SS)(t), a = (0, u.W)(t, n);
    return (0, r.jsx)(o.Z, {
      product: a,
      variantSwitcher: l,
      selectedVariantIndex: n
    })
  },
  f = e => {
    let {
      product: t
    } = e, [n, l] = (0, c.SS)(t), a = (0, u.W)(t, n);
    return (0, r.jsx)(o.Z, {
      product: a,
      variantSwitcher: l,
      selectedVariantIndex: n
    })
  },
  C = e => {
    let {
      product: t
    } = e, [n, l] = (0, c.SS)(t), a = (0, u.W)(t, n);
    return (0, r.jsx)(o.Z, {
      product: a,
      variantSwitcher: l,
      selectedVariantIndex: n
    })
  },
  _ = e => {
    let {
      product: t
    } = e, [n, l] = (0, c.SS)(t), a = (0, u.W)(t, n);
    return (0, r.jsx)(o.Z, {
      product: a,
      variantSwitcher: l,
      selectedVariantIndex: n
    })
  },
  h = Chunk647438.memo(function(e) {
    let {
      skuId: t
    } = e, n = (0, i.e7)([s.Z], () => s.Z.getCategoryForProduct(t)), l = null == n ? true : n.products.find(e => e.skuId === t), o = (0, d.Cr)(l);
    if (null == o) return null;
    let u = (0, c.rC)(l);
    return u === a.Z.PROFILE_EFFECT ? (0, r.jsx)(g, {
      product: o
    }) : u === a.Z.AVATAR_DECORATION ? (0, r.jsx)(p, {
      product: o
    }) : u === a.Z.NAMEPLATE ? (0, r.jsx)(f, {
      product: o
    }) : u === a.Z.BUNDLE ? (0, r.jsx)(C, {
      product: o
    }) : u === a.Z.EXTERNAL_SKU ? (0, r.jsx)(_, {
      product: o
    }) : null
  })