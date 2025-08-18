/** Chunk was on 36878 **/
/** chunk id: 82334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk906467 = require("./906467.js"),
  Chunk287490 = require("./287490.jsx");
let s = (0, Chunk509613.x1)("ExperimentsPane", {
    useTitle: () => "Experiments",
    getLayout: () => [],
    render: Chunk287490.Z
  }),
  a = (0, Chunk509613.wf)("Experiments", {
    icon: Chunk657707.uOV,
    useTitle: () => "Experiments",
    usePredicate: () => Chunk906467.Z.isDeveloper,
    getLayout: () => [s]
  })