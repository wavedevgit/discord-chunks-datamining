/** Chunk was on 77069 **/
/** chunk id: 468824, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  h: () => o
});
var Chunk524437 = require("./524437.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk817774 = require("./817774.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.J9)(Chunk313789.n.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["ms+Tme"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["4NN4+/"]),
  useOptions: () => [{
    name: Chunk388032.intl.string(Chunk388032.t.JIFnN9),
    value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.rRdsk1),
    value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.AolKwN),
    value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
  }],
  useValue: () => {
    let t = Chunk695346.JG.useSetting();
    return module === Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : module
  },
  setValue: t => s.JG.updateSetting(t),
  usePredicate: Chunk817774.W
})