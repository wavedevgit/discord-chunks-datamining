/** Chunk was on 77069 **/
/** chunk id: 756893, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk103644 = require("./103644.jsx"),
  Chunk320851 = require("./320851.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.k4)(Chunk313789.n.SOUNDS_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.MKWyKc),
  useNotice: function() {
    let t = (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds());
    return Chunk473749.useMemo(() => {
      if (module) return {
        type: Chunk970013.v.INLINE_NOTICE,
        noticeType: "warning",
        useText: () => Chunk388032.intl.format(Chunk388032.t.fRvixS, {
          onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.NOTIFICATIONS_SOUNDS_CATEGORY)
        })
      }
    }, [module])
  },
  buildLayout: () => [Chunk320851.J, Chunk103644.X]
})