/** Chunk was on 77069 **/
/** chunk id: 212473, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  KL: () => I
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
let _ = (0, Chunk509613.wf)(Chunk313789.n.CLIPS_PANEL, {
    useTitle: () => d.intl.string(d.t.z2jK6X),
    useBadge: () => (0, i.jsx)(u.Z, {}),
    usePredicate: () => !(0, T.BK)("LegacyClipsPane"),
    StronglyDiscouragedCustomComponent: Chunk574755.Z,
    buildLayout: () => []
  }),
  g = (0, Chunk509613.wf)(Chunk313789.n.CLIPS_PANEL, {
    useTitle: () => d.intl.string(d.t.z2jK6X),
    useBadge: () => (0, i.jsx)(u.Z, {}),
    usePredicate: () => {
      let t = (0, T.BK)("ClipsPanel"),
        e = (0, s.w9)();
      return t && e
    },
    buildLayout: () => [c.x, S.K]
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.CLIPS_SIDEBAR_ITEM, {
    useTitle: () => d.intl.string(d.t.z2jK6X),
    icon: Chunk657707.ClipsIcon,
    getLegacySearchKey: () => (0, T.Ml)("ClipsPanel") ? true : E.s6.CLIPS,
    buildLayout: () => (0, T.Ml)("ClipsPanel") ? [g] : [_]
  })