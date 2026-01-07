/** Chunk was on 77069 **/
/** chunk id: 595373, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => _,
  Y: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk325808 = require("./325808.jsx"),
  Chunk962100 = require("./962100.jsx"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function _() {
  return (0, s.e7)([a.Z], () => a.Z.getMode() === E.pM.PUSH_TO_TALK)
}
let g = (0, Chunk509613.qs)(Chunk313789.n.VOICE_PUSH_TO_TALK_SETTING, {
  useTitle: function() {
    return l.FB ? d.intl.string(d.t.tG4Np5) : d.intl.string(d.t.JMyQin)
  },
  useSubtitle: function() {
    let t = (0, s.e7)([a.Z], () => a.Z.getMode());
    return i.useMemo(() => {
      if (!l.FB && t === E.pM.PUSH_TO_TALK) return d.intl.format(d.t["VHI4+Y"], {
        onDownloadClick: () => (0, S.y)("Help Text PTT")
      })
    }, [t])
  },
  usePredicate: function() {
    return (0, s.e7)([a.Z], () => a.Z.getActiveInputProfile() !== c._.STUDIO)
  },
  useValue: function() {
    return (0, s.e7)([a.Z], () => a.Z.getMode() === E.pM.PUSH_TO_TALK)
  },
  setValue: function(t) {
    (0, T.XH)(t ? E.pM.PUSH_TO_TALK : E.pM.VOICE_ACTIVITY, [u.Z.USER_SETTINGS_VOICE_AND_VIDEO])
  },
  useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)]
})