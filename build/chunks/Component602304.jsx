/** Chunk was on 9452 **/
/** chunk id: 602304, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk649157 = require("./649157.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.LOCALE_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk54381.jsx)(Chunk649157.Z, {})
  }),
  d = (0, Chunk509613.wf)(Chunk313789.n.LOCALE_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.IHMsPn),
    buildLayout: () => [c]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.LOCALE_SIDEBAR_ITEM, {
    icon: Chunk657707.os0,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.IHMsPn),
    getLegacySearchKey: () => Chunk726985.s6.LANGUAGE,
    buildLayout: () => [d]
  })