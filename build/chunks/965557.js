/** Chunk was on 77069 **/
/** chunk id: 965557, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  d: () => c
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk906467 = require("./906467.js"),
  Chunk313789 = require("./313789.js"),
  Chunk287490 = require("./287490.jsx");
let a = (0, Chunk509613.x1)(Chunk313789.n.EXPERIMENTS_PANE, {
    buildLayout: () => [],
    render: Chunk287490.Z
  }),
  o = (0, Chunk509613.wf)(Chunk313789.n.EXPERIMENTS_PANEL, {
    useTitle: () => "Experiments",
    buildLayout: () => [a]
  }),
  c = (0, Chunk509613.m7)(Chunk313789.n.EXPERIMENTS_SIDEBAR_ITEM, {
    icon: Chunk657707.uOV,
    useTitle: () => "Experiments",
    usePredicate: () => Chunk906467.Z.isDeveloper,
    buildLayout: () => [o]
  })