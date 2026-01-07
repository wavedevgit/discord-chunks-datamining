/** Chunk was on 77069 **/
/** chunk id: 92885, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => E
});
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk197344 = require("./197344.js"),
  Chunk509613 = require("./509613.js"),
  Chunk716364 = require("./716364.js"),
  Chunk474873 = require("./474873.js"),
  Chunk313789 = require("./313789.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.qs)(Chunk313789.n.NOTIFICATION_HOLIDAY_SOUNDPACK, {
  useTitle: () => {
    let t = u.Z.useHolidaySoundpack();
    return null == t ? "" : c.intl.format(c.t["E/OyBr"], {
      soundpack: c.intl.string(t.soundpackLabel)
    })
  },
  useValue: function() {
    let t = (0, s.e7)([o.Z], () => o.Z.getSoundpack()),
      e = u.Z.useHolidaySoundpack();
    return t === (null == e ? true : e.soundpack)
  },
  setValue: function(t) {
    let e = u.Z.getHolidaySoundpack();
    l()(null != e, "predicate should fail if no soundpack is available"), (0, a.c)(t ? e : S.Y.CLASSIC)
  },
  usePredicate: Chunk197344.Z.useIsEligible
})