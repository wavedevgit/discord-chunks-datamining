/** Chunk was on 77069 **/
/** chunk id: 793961, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => T
});
var Chunk945577 = require("./945577.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk315322 = require("./315322.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.J9)(Chunk313789.n.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["NxjN+q"]),
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["t4+fbe"])],
  useOptions: () => [{
    name: Chunk388032.intl.string(Chunk388032.t["t+fGsk"]),
    value: 0
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.MwlEGN),
    value: 1
  }],
  useValue: () => +!!Chunk695346.rR.useSetting(),
  setValue: t => {
    let e = 1 === t;
    e ? l.Z.cleanUpPrivateChannelSearchState() : l.Z.cleanUpSearchState({
      type: o.aib.DMS
    }), (0, s.yn)({
      prevIsCrossDMSettingEnabled: r.rR.getSetting(),
      isCrossDMSettingEnabled: e,
      location: s.Ix.USER_SETTINGS
    }), r.rR.updateSetting(e)
  },
  usePredicate: () => (0, Chunk945577.U)({
    location: "DefaultDMSearchBehavior"
  })
})