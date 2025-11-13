/** Chunk was on 9452 **/
/** chunk id: 650271, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  z: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk501348 = require("./501348.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.x1)(Chunk313789.n.APPEARANCE_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
    buildLayout: () => [],
    render: Chunk501348.Z
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.APPEARANCE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
    buildLayout: () => [E]
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.APPEARANCE_SIDEBAR_ITEM, {
    icon: Chunk657707.V3v,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
    getLegacySearchKey: () => Chunk726985.s6.APPEARANCE,
    buildLayout: () => [S],
    trailing: {
      type: Chunk28682.PU.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163.$Z,
      badgeComponent: Chunk620163.c$
    }
  })