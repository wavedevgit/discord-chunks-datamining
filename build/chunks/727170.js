/** Chunk was on web.js **/
/** chunk id: 727170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk417597 = require("./417597.js"),
  Chunk954571 = require("./954571.js"),
  Chunk590180 = require("./590180.js"),
  Chunk993408 = require("./993408.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let d = {
    [Chunk575593.R.AVATAR_DECORATION]: Chunk788868.Ae.AVATAR_DECORATION,
    [Chunk575593.R.PROFILE_EFFECT]: Chunk788868.Ae.PROFILE_EFFECT,
    [Chunk575593.R.NAMEPLATE]: true,
    [Chunk575593.R.NONE]: true,
    [Chunk575593.R.BUNDLE]: true,
    [Chunk575593.R.VARIANTS_GROUP]: true,
    [Chunk575593.R.EXTERNAL_SKU]: true
  },
  f = e => {
    let t = (0, a.bG)([s.A], () => s.A.products);
    return (0, r.useCallback)(n => {
      let {
        type: r,
        skuId: i
      } = n, a = t.get(i);
      o.default.track(c.HAw.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: d[r],
        feature_tier: (0, l.G0)(a) ? u.tz.FREE : u.tz.PREMIUM_STANDARD,
        feature_selection: null == a ? true : a.name,
        location_stack: e
      })
    }, [t, e])
  }