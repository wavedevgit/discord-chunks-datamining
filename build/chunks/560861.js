/** Chunk was on 28979 **/
/** chunk id: 560861, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  g: () => E
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
let E = (0, Chunk419954.zD)(Chunk780964.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
  useTitle: () => {
    let t = r.A.useHolidaySoundpack();
    return null == t ? "" : S.intl.format(S.t["E/OyBr"], {
      soundpack: S.intl.string(t.soundpackLabel)
    })
  },
  useValue: function() {
    let t = (0, s.bG)([o.A], () => o.A.getSoundpack()),
      e = r.A.useHolidaySoundpack();
    return t === (null == e ? true : e.soundpack)
  },
  setValue: function(t) {
    let e = r.A.getHolidaySoundpack();
    l()(null != e, "predicate should fail if no soundpack is available"), (0, a.p)(t ? e : A.i.CLASSIC)
  },
  usePredicate: Chunk552122.A.useIsEligible
})