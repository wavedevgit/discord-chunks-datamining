/** Chunk was on web.js **/
/** chunk id: 970813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722932 = require("./722932.js"),
  Chunk824690 = require("./824690.js"),
  Chunk674343 = require("./674343.jsx"),
  Chunk388032 = require("./388032.jsx");

function l() {
  let {
    volume: e,
    onVolumeChange: t
  } = (0, Chunk824690.Z)();
  return (0, Chunk722932.X0)({
    location: "UserSettingsSoundmojiVolume"
  }) ? (0, Chunk951288.jsx)(Chunk674343.Z, {
    label: Chunk388032.intl.string(Chunk388032.t["2JbvKy"]),
    description: Chunk388032.intl.string(Chunk388032.t.INenzc),
    volume: module,
    onVolumeChange: exports
  }) : null
}