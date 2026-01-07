/** Chunk was on 77069 **/
/** chunk id: 865121, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  T: () => T
});
var Chunk657707 = require("./657707.js"),
  Chunk230711 = require("./230711.js"),
  Chunk509613 = require("./509613.js"),
  Chunk906467 = require("./906467.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk342386 = require("./342386.js");
let T = (0, Chunk509613.m7)(Chunk313789.n.LEGACY_SETTINGS_SIDEBAR_ITEM, {
  useTitle: () => "Open Legacy Settings",
  icon: Chunk657707.ewm,
  onClick: () => {
    (0, o.default)(), l.Z.open()
  },
  usePredicate: () => (0, a.NT)("LegacySettingsSidebarItem") || u.Z.isDeveloper,
  buildLayout: () => []
})