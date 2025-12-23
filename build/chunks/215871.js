/** Chunk was on 77069 **/
/** chunk id: 215871, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b: () => N
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk794704 = require("./794704.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk732120 = require("./732120.js"),
  Chunk920819 = require("./920819.js"),
  Chunk768381 = require("./768381.js"),
  Chunk853111 = require("./853111.js"),
  Chunk773458 = require("./773458.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.wf)(Chunk313789.n.OVERLAY_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("OverlayPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9cb1Uz"]),
    buildLayout: () => [Chunk853111.I, Chunk732120.K, Chunk920819.n, Chunk773458.k, Chunk768381.N]
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.OVERLAY_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("OverlayPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9cb1Uz"]),
    StronglyDiscouragedCustomComponent: Chunk794704.ZP,
    buildLayout: () => []
  }),
  N = (0, Chunk509613.m7)(Chunk313789.n.OVERLAY_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["9cb1Uz"]),
    icon: Chunk657707.epB,
    usePredicate: Chunk168308.bC,
    getLegacySearchKey: () => (0, Chunk526665.Gl)("OverlayPanel") ? true : Chunk726985.s6.OVERLAY,
    buildLayout: () => (0, Chunk526665.Gl)("OverlayPanel") ? [g] : [I]
  })