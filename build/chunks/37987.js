/** Chunk was on 4670 **/
/** chunk id: 37987, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  q: () => o
});
var Chunk873298 = require("./873298.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk542877 = require("./542877.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.Qx)(Chunk780964.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
  useTitle: () => u.intl.string(u.t["ms+Tme"]),
  useSubtitle: () => u.intl.string(u.t["4NN4+/"]),
  useOptions: () => [{
    name: u.intl.string(u.t.JIFnN9),
    value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
  }, {
    name: u.intl.string(u.t.rRdsk1),
    value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
  }, {
    name: u.intl.string(u.t.AolKwN),
    value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
  }],
  useValue: () => {
    let e = s.TA.useSetting();
    return e === n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e
  },
  setValue: e => s.TA.updateSetting(e),
  usePredicate: Chunk542877.K
})