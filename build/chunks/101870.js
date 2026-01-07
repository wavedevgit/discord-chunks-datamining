/** Chunk was on 77069 **/
/** chunk id: 101870, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  o: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk200645 = require("./200645.jsx"),
  Chunk788869 = require("./788869.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.wf)(Chunk313789.n.LINUX_PANEL, {
    useTitle: () => S.intl.string(S.t["7pPjTW"]),
    buildLayout: () => [o.P]
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.LINUX_PANEL, {
    useTitle: () => S.intl.string(S.t["7pPjTW"]),
    StronglyDiscouragedCustomComponent: Chunk200645.Z,
    buildLayout: () => []
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.LINUX_SIDEBAR_ITEM, {
    useTitle: () => S.intl.string(S.t["7pPjTW"]),
    getLegacySearchKey: () => (0, r.Gl)("LinuxPanel") ? true : T.s6.LINUX_SETTINGS,
    icon: Chunk657707.pzj,
    usePredicate: () => s.isPlatformEmbedded && (0, s.isLinux)(),
    buildLayout: () => [(0, r.Gl)("LinuxPanel") ? c : E]
  })