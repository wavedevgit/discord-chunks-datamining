/** Chunk was on 9452 **/
/** chunk id: 513696, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk351780 = require("./351780.js"),
  Chunk231765 = require("./231765.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781652 = require("./781652.js");
let d = (0, Chunk509613.x1)(Chunk313789.n.POGGERMODE_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AtCukI),
    buildLayout: () => [],
    render: Chunk231765.Z
  }),
  T = (0, Chunk509613.wf)(Chunk313789.n.POGGERMODE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AtCukI),
    buildLayout: () => [d]
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.POGGERMODE_SIDEBAR_ITEM, {
    icon: () => (0, Chunk951288.jsx)("img", {
      alt: "",
      src: require("./348621.js"),
      className: Chunk781652.poggermodeIcon
    }),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.AtCukI),
    legacySearchKey: Chunk726985.s6.POGGERMODE,
    usePredicate: () => (0, Chunk442837.e7)([Chunk351780.Z], () => Chunk351780.Z.settingsVisible),
    buildLayout: () => [T]
  })