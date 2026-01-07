/** Chunk was on 77069 **/
/** chunk id: 513696, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk351780 = require("./351780.js"),
  Chunk231765 = require("./231765.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk246383 = require("./246383.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk242379 = require("./242379.js");
let d = (0, Chunk509613.wf)(Chunk313789.n.POGGERMODE_PANEL, {
    usePredicate: () => !(0, o.gN)("LegacyPoggermodePanel"),
    useTitle: () => c.intl.string(c.t.AtCukI),
    StronglyDiscouragedCustomComponent: Chunk231765.Z,
    buildLayout: () => []
  }),
  _ = (0, Chunk509613.wf)(Chunk313789.n.POGGERMODE_PANEL, {
    usePredicate: () => (0, o.gN)("PoggermodePanel"),
    useTitle: () => c.intl.string(c.t.AtCukI),
    buildLayout: () => [T.v]
  }),
  g = (0, Chunk509613.m7)(Chunk313789.n.POGGERMODE_SIDEBAR_ITEM, {
    useTitle: () => c.intl.string(c.t.AtCukI),
    getLegacySearchKey: () => (0, o.Gl)("PoggermodePanel") ? true : S.s6.POGGERMODE,
    icon: () => (0, i.jsx)("img", {
      alt: "",
      src: n(348621),
      className: E.poggermodeIcon
    }),
    usePredicate: () => (0, l.e7)([s.Z], () => s.Z.settingsVisible),
    buildLayout: () => (0, o.Gl)("PoggermodePanel") ? [_] : [d]
  })