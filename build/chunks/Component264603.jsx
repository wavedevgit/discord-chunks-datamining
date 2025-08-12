/** Chunk was on 93886 **/
/** chunk id: 264603, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk246992 = require("./246992.js"),
  Chunk881291 = require("./881291.js"),
  Chunk726271 = require("./726271.js");
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
  let e = Chunk73800.useRef(null),
    t = Chunk695346.JG.useSetting();
  return (0, Chunk255367.jsxs)("div", {
    ref: module,
    className: i()(Chunk881291.panel, Chunk726271.panel),
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      children: "Receive DMs In Game"
    }), (0, Chunk255367.jsx)(Chunk481060.PhF, {
      options: x,
      isSelected: e => e === t,
      select: Chunk695346.JG.updateSetting,
      popoutLayerContext: Chunk246992.O$,
      serialize: e => e.toString()
    })]
  })
}