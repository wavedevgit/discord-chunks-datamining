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

function l(e) {
  let {
    refreshStyles: t = false
  } = e, {
    volume: n,
    onVolumeChange: l
  } = (0, a.Z)();
  return (0, i.X0)({
    location: "UserSettingsSoundmojiVolume"
  }) ? (0, r.jsx)(o.Z, {
    title: s.intl.string(s.t.w9Hq8P),
    description: s.intl.string(s.t.INenzc),
    label: s.intl.string(s.t["2JbvKy"]),
    volume: n,
    onVolumeChange: l,
    refreshStyles: t
  }) : null
}