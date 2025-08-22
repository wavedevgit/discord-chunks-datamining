/** Chunk was on 93886 **/
/** chunk id: 264603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk246992 = require("./246992.js"),
  Chunk451429 = require("./451429.js"),
  Chunk441900 = require("./441900.js");
let x = [{
  label: "Unset",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
}, {
  label: "All",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
}, {
  label: "Users With Game",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
}, {
  label: "None",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
}];

function h() {
  let e = Chunk647438.useRef(null),
    t = Chunk695346.JG.useSetting();
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: i()(Chunk451429.panel, Chunk441900.panel),
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Receive DMs In Game"
    }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
      options: x,
      isSelected: e => e === t,
      select: Chunk695346.JG.updateSetting,
      popoutLayerContext: Chunk246992.O$,
      serialize: e => e.toString()
    })]
  })
}