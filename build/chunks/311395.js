/** Chunk was on web.js **/
/** chunk id: 311395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk626135 = require("./626135.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let d = {
    [Chunk979554.Z.AVATAR_DECORATION]: Chunk474936.QP.AVATAR_DECORATION,
    [Chunk979554.Z.PROFILE_EFFECT]: Chunk474936.QP.PROFILE_EFFECT,
    [Chunk979554.Z.NAMEPLATE]: true,
    [Chunk979554.Z.NONE]: true,
    [Chunk979554.Z.BUNDLE]: true,
    [Chunk979554.Z.VARIANTS_GROUP]: true,
    [Chunk979554.Z.EXTERNAL_SKU]: true
  },
  f = e => {
    let t = (0, a.e7)([s.Z], () => s.Z.products);
    return (0, r.useCallback)(n => {
      let {
        type: r,
        skuId: i
      } = n, a = t.get(i);
      o.default.track(c.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: d[r],
        feature_tier: (0, l.G1)(a) ? u.h1.FREE : u.h1.PREMIUM_STANDARD,
        feature_selection: null == a ? true : a.name,
        location_stack: e
      })
    }, [t, e])
  }