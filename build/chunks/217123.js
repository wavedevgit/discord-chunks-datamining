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
  Chunk563092 = require("./563092.jsx"),
  Chunk735901 = require("./735901.js"),
  Chunk883626 = require("./883626.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.wf)(Chunk313789.n.CONTENT_AND_SOCIAL_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+o1pDZ"]),
    StronglyDiscouragedCustomComponent: Chunk949493.Z,
    usePredicate: () => !(0, Chunk526665.gN)("ContentAndSocialPanel"),
    buildLayout: () => []
  }),
  I = (0, Chunk509613.ZH)(Chunk313789.n.CONTENT_AND_SOCIAL_MAIN_TAB, {
    getTitle: () => Chunk388032.intl.string(Chunk388032.t["/7xJCF"]),
    buildLayout: () => [Chunk318092.v, Chunk883626.M, Chunk563092._, Chunk735901.f]
  }),
  N = (0, Chunk509613.ZH)(Chunk313789.n.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
    initialize: () => {
      Chunk384275.Z.fetch()
    },
    getTitle: () => Chunk388032.intl.string(Chunk388032.t.YpCiMt),
    buildLayout: () => [Chunk568246.k]
  }),
  A = (0, Chunk509613.wf)(Chunk313789.n.CONTENT_AND_SOCIAL_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+o1pDZ"]),
    usePredicate: () => (0, Chunk526665.gN)("ContentAndSocialPanel"),
    buildLayout: () => [I, N]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+o1pDZ"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("ContentAndSocialPanel") ? true : Chunk726985.s6.CONTENT_SOCIAL,
    icon: Chunk657707.lZ8,
    buildLayout: () => (0, Chunk526665.Gl)("ContentAndSocialPanel") ? [A] : [g]
  })