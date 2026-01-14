/** Chunk was on 77069 **/
/** chunk id: 217123, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  rV: () => O
});
var Chunk657707 = require("./657707.js"),
  Chunk384275 = require("./384275.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk949493 = require("./949493.jsx"),
  Chunk568246 = require("./568246.js"),
  Chunk318092 = require("./318092.js"),
  Chunk563092 = require("./563092.js"),
  Chunk735901 = require("./735901.js"),
  Chunk883626 = require("./883626.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.wf)(Chunk313789.n.CONTENT_AND_SOCIAL_PANEL, {
    useTitle: () => _.intl.string(_.t["+o1pDZ"]),
    StronglyDiscouragedCustomComponent: Chunk949493.Z,
    usePredicate: () => !(0, r.gN)("ContentAndSocialPanel"),
    buildLayout: () => []
  }),
  I = (0, Chunk509613.ZH)(Chunk313789.n.CONTENT_AND_SOCIAL_MAIN_TAB, {
    getTitle: () => _.intl.string(_.t["/7xJCF"]),
    buildLayout: () => [T.v, E.M, S._, c.f]
  }),
  N = (0, Chunk509613.ZH)(Chunk313789.n.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
    initialize: () => {
      l.Z.fetch()
    },
    getTitle: () => _.intl.string(_.t.YpCiMt),
    buildLayout: () => [o.k]
  }),
  A = (0, Chunk509613.wf)(Chunk313789.n.CONTENT_AND_SOCIAL_PANEL, {
    useTitle: () => _.intl.string(_.t["+o1pDZ"]),
    usePredicate: () => (0, r.gN)("ContentAndSocialPanel"),
    buildLayout: () => [I, N]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["+o1pDZ"]),
    getLegacySearchKey: () => (0, r.Gl)("ContentAndSocialPanel") ? true : d.s6.CONTENT_SOCIAL,
    icon: Chunk657707.lZ8,
    buildLayout: () => (0, r.Gl)("ContentAndSocialPanel") ? [A] : [g]
  })