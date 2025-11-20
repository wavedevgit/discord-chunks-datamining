/** Chunk was on 9452 **/
/** chunk id: 825193, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => T
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk64914 = require("./64914.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.x1)(Chunk313789.n.ADVANCED_PANE, {
    buildLayout: () => [],
    render: Chunk64914.ZP
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.ADVANCED_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8/udY0"]),
    buildLayout: () => [E]
  }),
  T = (0, Chunk509613.m7)(Chunk313789.n.ADVANCED_SIDEBAR_ITEM, {
    icon: Chunk657707.xhG,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8/udY0"]),
    getLegacySearchKey: () => Chunk726985.s6.SETTINGS_ADVANCED,
    buildLayout: () => [S],
    trailing: {
      type: Chunk28682.PU.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163.kQ,
      badgeComponent: Chunk620163.h5
    }
  })