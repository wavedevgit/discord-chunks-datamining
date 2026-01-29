/** Chunk was on 4670 **/
/** chunk id: 211639, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  TC: () => C
});
var Chunk934551 = require("./934551.js"),
  Chunk824552 = require("./824552.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk130066 = require("./130066.jsx"),
  Chunk601954 = require("./601954.js"),
  Chunk978431 = require("./978431.js"),
  Chunk731542 = require("./731542.js"),
  Chunk674082 = require("./674082.js"),
  Chunk570874 = require("./570874.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.t_)(Chunk780964.X.CONTENT_AND_SOCIAL_PANEL, {
    useTitle: () => _.intl.string(_.t["+o1pDZ"]),
    StronglyDiscouragedCustomComponent: Chunk130066.A,
    usePredicate: () => !(0, a.dk)("ContentAndSocialPanel"),
    buildLayout: () => []
  }),
  g = (0, Chunk419954.dT)(Chunk780964.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
    getTitle: () => _.intl.string(_.t["/7xJCF"]),
    buildLayout: () => [d.e, A.q, T.N, c.Y]
  }),
  I = (0, Chunk419954.dT)(Chunk780964.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
    initialize: () => {
      l.A.fetch()
    },
    getTitle: () => _.intl.string(_.t.YpCiMt),
    buildLayout: () => [o.j]
  }),
  O = (0, Chunk419954.t_)(Chunk780964.X.CONTENT_AND_SOCIAL_PANEL, {
    useTitle: () => _.intl.string(_.t["+o1pDZ"]),
    usePredicate: () => (0, a.dk)("ContentAndSocialPanel"),
    buildLayout: () => [g, I]
  }),
  C = (0, Chunk419954.i4)(Chunk780964.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["+o1pDZ"]),
    getLegacySearchKey: () => (0, a.WJ)("ContentAndSocialPanel") ? true : S.H.CONTENT_SOCIAL,
    icon: Chunk934551.ShieldUserIcon,
    buildLayout: () => (0, a.WJ)("ContentAndSocialPanel") ? [O] : [E]
  })