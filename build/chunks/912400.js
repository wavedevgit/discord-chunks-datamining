/** Chunk was on 77069 **/
/** chunk id: 912400, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => I
});
var Chunk657707 = require("./657707.js"),
  Chunk384275 = require("./384275.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk795594 = require("./795594.jsx"),
  Chunk134287 = require("./134287.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.k4)(Chunk313789.n.AUTHORIZED_APPS_CATEGORY, {
    buildLayout: () => [Chunk134287.Z],
    initialize: () => (Chunk384275.Z.fetch(), () => {
      Chunk795594.JJ.setState({
        searchQuery: ""
      })
    })
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacyAuthorizedAppsPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["f6kk+r"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk795594.ZP,
    buildLayout: () => []
  }),
  g = (0, Chunk509613.wf)(Chunk313789.n.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("AuthorizedAppsPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["f6kk+r"]),
    hideInStreamerMode: true,
    buildLayout: () => [T]
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.AUTHORIZED_APPS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["f6kk+r"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("AuthorizedAppsPanel") ? true : Chunk726985.s6.AUTHORIZED_APPS,
    icon: Chunk657707.jje,
    buildLayout: () => (0, Chunk526665.Gl)("AuthorizedAppsPanel") ? [g] : [S]
  })