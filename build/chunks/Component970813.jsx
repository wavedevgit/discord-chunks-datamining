/** Chunk was on 30202 **/
/** chunk id: 970813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk722932 = require("./722932.js"),
  Chunk824690 = require("./824690.js"),
  Chunk674343 = require("./674343.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    refreshStyles: t = false
  } = e, {
    volume: n,
    onVolumeChange: o
  } = (0, s.Z)();
  return (0, r.X0)({
    location: "UserSettingsSoundmojiVolume"
  }) ? (0, i.jsx)(a.Z, {
    title: l.intl.string(l.t.w9Hq8P),
    description: l.intl.string(l.t.INenzc),
    label: l.intl.string(l.t["2JbvKy"]),
    volume: n,
    onVolumeChange: o,
    refreshStyles: t
  }) : null
}