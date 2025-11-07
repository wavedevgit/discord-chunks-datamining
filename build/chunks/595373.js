/** Chunk was on 9452 **/
/** chunk id: 595373, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => T,
  p: () => S
});
var Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk325808 = require("./325808.jsx"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function S() {
  return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getActiveInputProfile() !== Chunk345655._.STUDIO)
}
let T = (0, Chunk509613.qs)(Chunk313789.n.VOICE_PUSH_TO_TALK_SETTING, {
  useTitle: () => Chunk818710.FB ? Chunk388032.intl.string(Chunk388032.t.tG4Np5) : Chunk388032.intl.string(Chunk388032.t.JMyQin),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.yept4k),
  usePredicate: S,
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode() === Chunk65154.pM.PUSH_TO_TALK)
  },
  setValue: function(t) {
    (0, o.XH)(t ? E.pM.PUSH_TO_TALK : E.pM.VOICE_ACTIVITY, [r.Z.USER_SETTINGS_VOICE_AND_VIDEO])
  },
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["pS+K2L"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)]
})