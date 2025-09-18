/** Chunk was on 47129 **/
/** chunk id: 965557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk906467 = require("./906467.js"),
  Chunk313789 = require("./313789.js"),
  Chunk287490 = require("./287490.jsx");
let a = (0, Chunk509613.x1)(Chunk313789.n.EXPERIMENTS_PANE, {
    getLayout: () => [],
    render: Chunk287490.Z
  }),
  u = (0, Chunk509613.wf)(Chunk313789.n.EXPERIMENTS_PANEL, {
    icon: Chunk657707.uOV,
    useTitle: () => "Experiments",
    usePredicate: () => Chunk906467.Z.isDeveloper,
    getLayout: () => [a]
  })