/** Chunk was on 9452 **/
/** chunk id: 95508, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.ON)(Chunk313789.n.SOUNDS_DISABLED_WARNING, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.MKWyKc)],
  usePredicate: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds()),
  render: () => (0, Chunk54381.jsx)(Chunk494620.Z, {
    look: Chunk494620.z.WARNING,
    children: Chunk388032.intl.format(Chunk388032.t.fRvixS, {
      onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.NOTIFICATIONS_SOUNDS_CATEGORY)
    })
  })
})