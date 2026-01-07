/** Chunk was on 77069 **/
/** chunk id: 756893, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => E
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
let E = (0, Chunk509613.k4)(Chunk313789.n.SOUNDS_CATEGORY, {
  useTitle: () => c.intl.string(c.t.MKWyKc),
  useNotice: function() {
    let t = (0, l.e7)([r.Z], () => r.Z.getDisableAllSounds());
    return i.useMemo(() => {
      if (t) return {
        type: u.v.INLINE_NOTICE,
        noticeType: "warning",
        useText: () => c.intl.format(c.t.fRvixS, {
          onClick: () => (0, o.openUserSettings)(a.n.NOTIFICATIONS_SOUNDS_CATEGORY)
        })
      }
    }, [t])
  },
  buildLayout: () => [S.J, T.X]
})