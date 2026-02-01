/** Chunk was on 30485 **/
/** chunk id: 861061, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Jj: () => E
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk768908 = require("./768908.jsx"),
  Chunk682262 = require("./682262.js"),
  Chunk644619 = require("./644619.js"),
  Chunk474069 = require("./474069.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let S = (0, Chunk419954.t_)(Chunk780964.X.REGISTERED_GAMES_PANEL, {
    useTitle: () => A.intl.string(A.t.AVDyEj),
    StronglyDiscouragedCustomComponent: Chunk768908.Ay,
    buildLayout: () => [],
    usePredicate: () => !(0, r.dk)("RegisteredGamesPanel")
  }),
  c = (0, Chunk419954.t_)(Chunk780964.X.REGISTERED_GAMES_PANEL, {
    useTitle: () => A.intl.string(A.t.AVDyEj),
    usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
    buildLayout: () => [d.i, o.G]
  }),
  E = (0, Chunk419954.i4)(Chunk780964.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
    useTitle: () => A.intl.string(A.t.AVDyEj),
    getLegacySearchKey: () => (0, r.WJ)("RegisteredGamesPanel") ? true : T.H.REGISTERED_GAMES,
    icon: Chunk934551.GameControllerIcon,
    usePredicate: Chunk682262.Pi,
    buildLayout: () => (0, r.WJ)("RegisteredGamesPanel") ? [c] : [S]
  })