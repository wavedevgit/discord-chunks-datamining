/** Chunk was on 77069 **/
/** chunk id: 212473, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  KL: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk657707 = require("./657707.js"),
  Chunk924557 = require("./924557.js"),
  Chunk703288 = require("./703288.jsx"),
  Chunk574755 = require("./574755.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk698151 = require("./698151.js"),
  Chunk183353 = require("./183353.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.x1)(Chunk313789.n.CLIPS_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk54381.jsx)(Chunk574755.Z, {}),
    usePredicate: () => !(0, Chunk526665.BK)("LegacyClipsPane")
  }),
  g = (0, Chunk509613.x1)(Chunk313789.n.CLIPS_PANE, {
    buildLayout: () => [Chunk183353.Z, Chunk698151.Z],
    usePredicate: () => {
      let t = (0, Chunk526665.BK)("ClipsPanel"),
        e = (0, Chunk924557.w9)();
      return module && exports
    }
  }),
  _ = (0, Chunk509613.wf)(Chunk313789.n.CLIPS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.z2jK6X),
    useBadge: () => (0, Chunk54381.jsx)(Chunk703288.Z, {}),
    buildLayout: () => (0, Chunk526665.Ml)("ClipsPanel") ? [g] : [T]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.CLIPS_SIDEBAR_ITEM, {
    icon: Chunk657707.AlX,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.z2jK6X),
    getLegacySearchKey: () => (0, Chunk526665.Ml)("ClipsPanel") ? true : Chunk726985.s6.CLIPS,
    buildLayout: () => [_]
  })