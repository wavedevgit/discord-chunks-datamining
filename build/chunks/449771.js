/** Chunk was on 77069 **/
/** chunk id: 449771, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk283595 = require("./283595.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.ADVANCED_SHOW_GAME_LIBRARY, {
  usePredicate: () => (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.fi3UQN),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["8mYp37"]),
  useValue: () => !Chunk695346.bm.useSetting(),
  setValue: t => r.bm.updateSetting(!t)
})