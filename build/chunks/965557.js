/** Chunk was on 77069 **/
/** chunk id: 965557, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  d: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk906467 = require("./906467.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk287490 = require("./287490.jsx"),
  Chunk430404 = require("./430404.js");
let c = (0, Chunk509613.k4)(Chunk313789.n.EXPERIMENTS_CATEGORY, {
    buildLayout: () => [Chunk430404.z]
  }),
  T = (0, Chunk509613.wf)(Chunk313789.n.EXPERIMENTS_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacyExperimentsPanel"),
    useTitle: () => "Experiments",
    StronglyDiscouragedCustomComponent: Chunk287490.Z,
    buildLayout: () => []
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.EXPERIMENTS_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("ExperimentsPanel"),
    useTitle: () => "Experiments",
    buildLayout: () => [c]
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.EXPERIMENTS_SIDEBAR_ITEM, {
    useTitle: () => "Experiments",
    icon: Chunk657707.uOV,
    usePredicate: () => Chunk906467.Z.isDeveloper,
    buildLayout: () => (0, Chunk526665.Gl)("ExperimentsPanel") ? [S] : [T]
  })