/** Chunk was on 28979 **/
/** chunk id: 861061, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Jj: () => _
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
let E = (0, Chunk419954.t_)(Chunk780964.X.REGISTERED_GAMES_PANEL, {
    useTitle: () => S.intl.string(S.t.AVDyEj),
    StronglyDiscouragedCustomComponent: Chunk768908.Ay,
    buildLayout: () => [],
    usePredicate: () => !(0, r.dk)("RegisteredGamesPanel")
  }),
  d = (0, Chunk419954.t_)(Chunk780964.X.REGISTERED_GAMES_PANEL, {
    useTitle: () => S.intl.string(S.t.AVDyEj),
    usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
    buildLayout: () => [T.i, o.G]
  }),
  _ = (0, Chunk419954.i4)(Chunk780964.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
    useTitle: () => S.intl.string(S.t.AVDyEj),
    getLegacySearchKey: () => (0, r.WJ)("RegisteredGamesPanel") ? true : A.H.REGISTERED_GAMES,
    icon: Chunk934551.GameControllerIcon,
    usePredicate: Chunk682262.Pi,
    buildLayout: () => (0, r.WJ)("RegisteredGamesPanel") ? [d] : [E]
  })