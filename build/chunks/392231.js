/** Chunk was on 77069 **/
/** chunk id: 392231, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.TEXT_TO_SPEECH_COMMAND, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["btbS+Z"]),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.Q5crhR, {
    onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.ACCESSIBILITY_PANEL, {
      section: Chunk981631.oAB.ACCESSIBILITY
    })
  }),
  useValue: Chunk695346.OW.useSetting,
  setValue: Chunk695346.OW.updateSetting
})