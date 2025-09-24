/** Chunk was on 45620 **/
/** chunk id: 653126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
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
      product: t,
      config: n
    } = e, [l, a] = (0, c.SS)(t), i = (0, u.W)(t, l);
    return (0, r.jsx)(o.Z, {
      product: i,
      config: n,
      variantSwitcher: a,
      selectedVariantIndex: l
    })
  },
  p = e => {
    let {
      product: t,
      config: n
    } = e, [l, a] = (0, c.SS)(t), i = (0, u.W)(t, l);
    return (0, r.jsx)(o.Z, {
      product: i,
      config: n,
      variantSwitcher: a,
      selectedVariantIndex: l
    })
  },
  f = e => {
    let {
      product: t,
      config: n
    } = e, [l, a] = (0, c.SS)(t), i = (0, u.W)(t, l);
    return (0, r.jsx)(o.Z, {
      product: i,
      config: n,
      variantSwitcher: a,
      selectedVariantIndex: l
    })
  },
  h = e => {
    let {
      product: t,
      config: n
    } = e, [l, a] = (0, c.SS)(t), i = (0, u.W)(t, l);
    return (0, r.jsx)(o.Z, {
      product: i,
      config: n,
      variantSwitcher: a,
      selectedVariantIndex: l
    })
  },
  C = e => {
    let {
      product: t,
      config: n
    } = e, [l, a] = (0, c.SS)(t), i = (0, u.W)(t, l);
    return (0, r.jsx)(o.Z, {
      product: i,
      config: n,
      variantSwitcher: a,
      selectedVariantIndex: l
    })
  },
  _ = Chunk647438.memo(function(e) {
    let {
      skuId: t,
      config: n
    } = e, l = (0, i.e7)([s.Z], () => s.Z.getCategoryForProduct(t)), o = null == l ? true : l.products.find(e => e.skuId === t), u = (0, d.Cr)(o);
    if (null == u) return null;
    let _ = (0, c.rC)(o);
    return _ === a.Z.PROFILE_EFFECT ? (0, r.jsx)(g, {
      product: u,
      config: n
    }) : _ === a.Z.AVATAR_DECORATION ? (0, r.jsx)(p, {
      product: u,
      config: n
    }) : _ === a.Z.NAMEPLATE ? (0, r.jsx)(f, {
      product: u,
      config: n
    }) : _ === a.Z.BUNDLE ? (0, r.jsx)(h, {
      product: u,
      config: n
    }) : _ === a.Z.EXTERNAL_SKU ? (0, r.jsx)(C, {
      product: u,
      config: n
    }) : null
  })