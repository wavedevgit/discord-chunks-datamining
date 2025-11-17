/** Chunk was on web.js **/
/** chunk id: 311395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./314940.js");
var Chunk473749 = require("./473749.js"),
  Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk626135 = require("./626135.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let f = e => {
  let t = (0, o.e7)([l.Z], () => l.Z.products);
  return (0, r.useCallback)(n => {
    let {
      type: r,
      skuId: o
    } = n, l = t.get(o);
    s.default.track(u.rMx.PREMIUM_FEATURE_TRY_OUT, {
      feature_name: (0, i.EQ)(r).with(a.Z.AVATAR_DECORATION, () => d.QP.AVATAR_DECORATION).with(a.Z.PROFILE_EFFECT, () => d.QP.PROFILE_EFFECT).otherwise(() => true),
      feature_tier: (0, c.G1)(l) ? d.h1.FREE : d.h1.PREMIUM_STANDARD,
      feature_selection: null == l ? true : l.name,
      location_stack: e
    })
  }, [t, e])
}