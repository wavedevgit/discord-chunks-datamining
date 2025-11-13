/** Chunk was on 9452 **/
/** chunk id: 595373, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  p: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk818710 = require("./818710.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk325808 = require("./325808.jsx"),
  Chunk962100 = require("./962100.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk345655 = require("./345655.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function N() {
  return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getActiveInputProfile() !== Chunk345655._.STUDIO)
}

function A() {
  let t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode() === Chunk65154.pM.PUSH_TO_TALK),
    e = Chunk647438.useCallback(t => {
      (0, S.XH)(t ? g.pM.PUSH_TO_TALK : g.pM.VOICE_ACTIVITY, [a.Z.USER_SETTINGS_VOICE_AND_VIDEO])
    }, []),
    n = Chunk818710.FB ? Chunk388032.intl.string(Chunk388032.t.tG4Np5) : Chunk388032.intl.string(Chunk388032.t.JMyQin),
    o = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()),
    I = Chunk647438.useMemo(() => Chunk818710.FB || Chunk509613 !== Chunk65154.pM.PUSH_TO_TALK ? Chunk388032.intl.format(Chunk388032.t.HVvn5T, {
      onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.KEYBINDS_PANEL, {
        section: Chunk981631.oAB.KEYBINDS
      })
    }) : Chunk388032.intl.format(Chunk388032.t.zvMPOc, {
      onDownloadClick: () => (0, Chunk962100.y)("Help Text PTT")
    }), [Chunk509613]);
  return (0, Chunk951288.jsxs)(Chunk793030.Kqy, {
    gap: 16,
    children: [(0, Chunk951288.jsx)(Chunk793030.M14, {
      type: "info",
      children: Chunk345655
    }), (0, Chunk951288.jsx)(Chunk793030.rsf, {
      label: require,
      description: Chunk388032.intl.string(Chunk388032.t.yept4k),
      checked: module,
      onChange: t => e(t)
    })]
  })
}
let f = (0, Chunk509613.ON)(Chunk313789.n.VOICE_PUSH_TO_TALK_SETTING, {
  usePredicate: N,
  render: () => (0, Chunk951288.jsx)(A, {}),
  useSearchTerms: () => [Chunk818710.FB ? Chunk388032.intl.string(Chunk388032.t.tG4Np5) : Chunk388032.intl.string(Chunk388032.t.JMyQin), Chunk388032.intl.string(Chunk388032.t["pS+K2L"]), Chunk388032.intl.string(Chunk388032.t.nuFtHH)]
})