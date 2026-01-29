/** Chunk was on 4670 **/
/** chunk id: 560861, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  g: () => A
});
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk552122 = require("./552122.js"),
  Chunk419954 = require("./419954.js"),
  Chunk965957 = require("./965957.js"),
  Chunk312671 = require("./312671.js"),
  Chunk780964 = require("./780964.js"),
  Chunk235079 = require("./235079.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.zD)(Chunk780964.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
  useTitle: () => {
    let e = r.A.useHolidaySoundpack();
    return null == e ? "" : c.intl.format(c.t["E/OyBr"], {
      soundpack: c.intl.string(e.soundpackLabel)
    })
  },
  useValue: function() {
    let e = (0, s.bG)([o.A], () => o.A.getSoundpack()),
      t = r.A.useHolidaySoundpack();
    return e === (null == t ? true : t.soundpack)
  },
  setValue: function(e) {
    let t = r.A.getHolidaySoundpack();
    l()(null != t, "predicate should fail if no soundpack is available"), (0, u.p)(e ? t : T.i.CLASSIC)
  },
  usePredicate: Chunk552122.A.useIsEligible
})