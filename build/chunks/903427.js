/** Chunk was on 28979 **/
/** chunk id: 903427, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  K: () => I,
  P: () => _
});
var Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk330688 = require("./330688.jsx"),
  Chunk825468 = require("./825468.jsx"),
  Chunk509381 = require("./509381.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function _() {
  return (0, s.bG)([a.A], () => a.A.getMode() === E.TB.PUSH_TO_TALK)
}
let I = (0, Chunk419954.zD)(Chunk780964.X.VOICE_PUSH_TO_TALK_SETTING, {
  useTitle: function() {
    return l.Av ? d.intl.string(d.t.tG4Np5) : d.intl.string(d.t.JMyQin)
  },
  useSubtitle: function() {
    let t = (0, s.bG)([a.A], () => a.A.getMode());
    return n.useMemo(() => {
      if (!l.Av && t === E.TB.PUSH_TO_TALK) return d.intl.format(d.t["VHI4+Y"], {
        onDownloadClick: () => (0, A._)("Help Text PTT")
      })
    }, [t])
  },
  usePredicate: function() {
    return (0, s.bG)([a.A], () => a.A.getActiveInputProfile() !== S.my.STUDIO)
  },
  useValue: function() {
    return (0, s.bG)([a.A], () => a.A.getMode() === E.TB.PUSH_TO_TALK)
  },
  setValue: function(t) {
    (0, T.TU)(t ? E.TB.PUSH_TO_TALK : E.TB.VOICE_ACTIVITY, [r.A.USER_SETTINGS_VOICE_AND_VIDEO])
  },
  useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)]
})