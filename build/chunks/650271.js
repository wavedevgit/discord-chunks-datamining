/** Chunk was on 77069 **/
/** chunk id: 650271, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  zn: () => C
});
var Chunk657707 = require("./657707.js"),
  Chunk93262 = require("./93262.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk501348 = require("./501348.jsx"),
  Chunk658091 = require("./658091.jsx"),
  Chunk601414 = require("./601414.js"),
  Chunk157177 = require("./157177.js"),
  Chunk781060 = require("./781060.js"),
  Chunk142751 = require("./142751.js"),
  Chunk490555 = require("./490555.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let A = (0, Chunk509613.wf)(Chunk313789.n.APPEARANCE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
    initialize: () => {
      (0, Chunk93262.w)()
    },
    buildLayout: () => [Chunk142751.D, Chunk601414.l, Chunk490555.G, Chunk157177.K, Chunk781060.t, Chunk658091.R]
  }),
  O = (0, Chunk509613.wf)(Chunk313789.n.APPEARANCE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
    StronglyDiscouragedCustomComponent: Chunk501348.ZP,
    buildLayout: () => []
  }),
  C = (0, Chunk509613.m7)(Chunk313789.n.APPEARANCE_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("AppearanceSidebarItem") ? true : Chunk726985.s6.APPEARANCE,
    icon: Chunk657707.V3v,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163.$Z,
      stronglyDiscouragedBadgeComponent: Chunk620163.c$
    },
    buildLayout: () => (0, Chunk526665.Gl)("AppearanceSidebarItem") ? [A] : [O]
  })