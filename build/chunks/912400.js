/** Chunk was on 77069 **/
/** chunk id: 912400, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => _
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
let c = (0, Chunk509613.k4)(Chunk313789.n.AUTHORIZED_APPS_CATEGORY, {
    buildLayout: () => [o.Z],
    initialize: () => (l.Z.fetch(), () => {
      a.JJ.setState({
        searchQuery: ""
      })
    })
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => !(0, r.gN)("LegacyAuthorizedAppsPanel"),
    useTitle: () => S.intl.string(S.t["f6kk+r"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk795594.ZP,
    buildLayout: () => []
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.AUTHORIZED_APPS_PANEL, {
    usePredicate: () => (0, r.gN)("AuthorizedAppsPanel"),
    useTitle: () => S.intl.string(S.t["f6kk+r"]),
    hideInStreamerMode: true,
    buildLayout: () => [c]
  }),
  _ = (0, Chunk509613.m7)(Chunk313789.n.AUTHORIZED_APPS_SIDEBAR_ITEM, {
    useTitle: () => S.intl.string(S.t["f6kk+r"]),
    getLegacySearchKey: () => (0, r.Gl)("AuthorizedAppsPanel") ? true : T.s6.AUTHORIZED_APPS,
    icon: Chunk657707.jje,
    buildLayout: () => (0, r.Gl)("AuthorizedAppsPanel") ? [d] : [E]
  })