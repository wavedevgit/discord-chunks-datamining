/** Chunk was on 77069 **/
/** chunk id: 375258, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  E: () => Z,
  h: () => C
});
var Chunk442837 = require("./442837.js"),
  Chunk323472 = require("./323472.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk292591 = require("./292591.js"),
  Chunk51397 = require("./51397.js"),
  Chunk894470 = require("./894470.js"),
  Chunk422767 = require("./422767.js"),
  Chunk754680 = require("./754680.js"),
  Chunk919723 = require("./919723.js"),
  Chunk792971 = require("./792971.js"),
  Chunk956853 = require("./956853.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");

function O(t) {
  return t ? _.intl.string(_.t.KHsSWK) : _.intl.string(_.t.PPDo5V)
}

function N() {
  return [Chunk292591.Z, Chunk754680.Z, Chunk894470.Z, Chunk956853.Z, Chunk422767.Z, Chunk51397.Z, Chunk919723.Z, Chunk792971.Z]
}

function A() {
  return (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getActiveInputProfile() !== Chunk345655._.STUDIO)
}

function f(t) {
  let e = (0, i.e7)([r.Z], () => r.Z.isInputProfileCustom());
  return (0, l.u)(t, {
    limit: e ? 3 : 2
  })
}
let Z = (0, Chunk509613.CB)(Chunk313789.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION, {
    useTitle: O,
    useCollapsedSubtitle: () => f(Chunk313789.n.INPUT_MODE_VOICE_ADVANCED_ACCORDION),
    buildLayout: N,
    usePredicate: A
  }),
  C = (0, Chunk509613.CB)(Chunk313789.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
    useTitle: O,
    useCollapsedSubtitle: () => f(Chunk313789.n.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION),
    buildLayout: N,
    usePredicate: () => !A()
  })