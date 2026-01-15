/** Chunk was on 77069 **/
/** chunk id: 466802, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => _
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk748717 = require("./748717.jsx"),
  Chunk126848 = require("./126848.jsx"),
  Chunk112121 = require("./112121.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.wf)(Chunk313789.n.NITRO_PANEL, {
    usePredicate: () => !(0, r.gN)("LegacyNitroPanel"),
    useTitle: () => c.intl.string(c.t.Ipxkog),
    StronglyDiscouragedCustomComponent: Chunk748717.Z,
    buildLayout: () => []
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.NITRO_PANEL, {
    usePredicate: () => (0, r.gN)("NitroPanel"),
    useTitle: () => c.intl.string(c.t.Ipxkog),
    buildLayout: () => [T.I]
  }),
  _ = (0, Chunk509613.m7)(Chunk313789.n.NITRO_SIDEBAR_ITEM, {
    useTitle: () => c.intl.string(c.t.Ipxkog),
    getLegacySearchKey: () => (0, r.Gl)("NitroPanel") ? true : S.s6.PREMIUM,
    icon: Chunk657707.NitroWheelIcon,
    trailing: {
      type: Chunk970013.W.STRONGLY_DISCOURAGED_CUSTOM,
      useCustomDecoration: (t, e) => (0, o.x)(e)
    },
    buildLayout: () => (0, r.Gl)("NitroPanel") ? [d] : [E]
  })