/** Chunk was on 28979 **/
/** chunk id: 198987, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  t: () => E
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk803224 = require("./803224.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk856134 = require("./856134.jsx"),
  Chunk662128 = require("./662128.js"),
  Chunk811231 = require("./811231.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.zZ)(Chunk780964.X.SOUNDS_CATEGORY, {
  useTitle: () => S.intl.string(S.t.MKWyKc),
  useInlineNotice: function() {
    let t = (0, l.bG)([u.A], () => u.A.getDisableAllSounds());
    return n.useMemo(() => {
      if (t) return {
        type: r.W.INLINE_NOTICE,
        noticeType: "warning",
        useText: () => S.intl.format(S.t.fRvixS, {
          onClick: () => (0, o.openUserSettings)(a.X.NOTIFICATIONS_SOUNDS_CATEGORY)
        })
      }
    }, [t])
  },
  buildLayout: () => [d.Y, T.F, A.D]
})