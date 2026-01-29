/** Chunk was on 4670 **/
/** chunk id: 198987, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  t: () => S
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
let S = (0, Chunk419954.zZ)(Chunk780964.X.SOUNDS_CATEGORY, {
  useTitle: () => A.intl.string(A.t.MKWyKc),
  useInlineNotice: function() {
    let e = (0, l.bG)([a.A], () => a.A.getDisableAllSounds());
    return n.useMemo(() => {
      if (e) return {
        type: r.W.INLINE_NOTICE,
        noticeType: "warning",
        useText: () => A.intl.format(A.t.fRvixS, {
          onClick: () => (0, o.openUserSettings)(u.X.NOTIFICATIONS_SOUNDS_CATEGORY)
        })
      }
    }, [e])
  },
  buildLayout: () => [c.Y, d.F, T.D]
})