/** Chunk was on 77069 **/
/** chunk id: 191694, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  qn: () => g
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk293389 = require("./293389.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk586929 = require("./586929.js"),
  Chunk916936 = require("./916936.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.wf)(Chunk313789.n.REGISTERED_GAMES_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AVDyEj),
    StronglyDiscouragedCustomComponent: Chunk293389.ZP,
    buildLayout: () => [],
    usePredicate: () => !(0, Chunk526665.gN)("RegisteredGamesPanel")
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.REGISTERED_GAMES_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AVDyEj),
    usePredicate: () => (0, Chunk526665.gN)("RegisteredGamesPanel"),
    buildLayout: () => [Chunk916936.A, Chunk586929._]
  }),
  g = (0, Chunk509613.m7)(Chunk313789.n.REGISTERED_GAMES_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AVDyEj),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("RegisteredGamesPanel") ? true : Chunk726985.s6.REGISTERED_GAMES,
    icon: Chunk657707.iWm,
    usePredicate: Chunk168308.Jw,
    buildLayout: () => (0, Chunk526665.Gl)("RegisteredGamesPanel") ? [d] : [E]
  })