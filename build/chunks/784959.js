/** Chunk was on 4670 **/
/** chunk id: 784959, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk640068 = require("./640068.jsx"),
  Chunk1626 = require("./1626.js");
let o = (0, Chunk419954.zZ)(Chunk780964.X.EXPERIMENTS_CATEGORY, {
    buildLayout: () => [u.h]
  }),
  d = (0, Chunk419954.t_)(Chunk780964.X.EXPERIMENTS_PANEL, {
    usePredicate: () => !(0, r.dk)("LegacyExperimentsPanel"),
    useTitle: () => "Experiments",
    StronglyDiscouragedCustomComponent: Chunk640068.A,
    buildLayout: () => []
  }),
  T = (0, Chunk419954.t_)(Chunk780964.X.EXPERIMENTS_PANEL, {
    usePredicate: () => (0, r.dk)("ExperimentsPanel"),
    useTitle: () => "Experiments",
    buildLayout: () => [o]
  }),
  c = (0, Chunk419954.i4)(Chunk780964.X.EXPERIMENTS_SIDEBAR_ITEM, {
    useTitle: () => "Experiments",
    icon: Chunk934551.BeakerIcon,
    buildLayout: () => (0, r.WJ)("ExperimentsPanel") ? [T] : [d]
  })