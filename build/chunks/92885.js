/** Chunk was on 77069 **/
/** chunk id: 92885, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => T
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
let T = (0, Chunk509613.qs)(Chunk313789.n.NOTIFICATION_HOLIDAY_SOUNDPACK, {
  useTitle: () => {
    let t = Chunk197344.Z.useHolidaySoundpack();
    return null == module ? "" : Chunk388032.intl.format(Chunk388032.t["E/OyBr"], {
      soundpack: Chunk388032.intl.string(module.soundpackLabel)
    })
  },
  useValue: function() {
    let t = (0, Chunk442837.e7)([Chunk474873.Z], () => Chunk474873.Z.getSoundpack()),
      e = Chunk197344.Z.useHolidaySoundpack();
    return module === (null == exports ? true : exports.soundpack)
  },
  setValue: function(t) {
    let e = u.Z.getHolidaySoundpack();
    l()(null != e, "predicate should fail if no soundpack is available"), (0, a.c)(t ? e : S.Y.CLASSIC)
  },
  usePredicate: Chunk197344.Z.useIsEligible
})