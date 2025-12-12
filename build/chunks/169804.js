/** Chunk was on 77069 **/
/** chunk id: 169804, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  v: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.SYNC_PROFILE_THEMES, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["sSY+mD"]),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.u6UjrL, {
    onThemeClick() {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.APPEARANCE_PANEL, {
        section: Chunk981631.oAB.APPEARANCE
      })
    }
  }),
  useValue: () => (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.syncProfileThemeWithUserTheme),
  setValue: () => (0, Chunk857595.Uv)()
})