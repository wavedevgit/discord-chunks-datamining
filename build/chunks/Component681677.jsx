/** Chunk was on 60667 **/
/** chunk id: 681677, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk864145 = require("./864145.js"),
  Chunk14400 = require("./14400.js"),
  Chunk420650 = require("./420650.jsx"),
  Chunk985018 = require("./985018.jsx");

function o() {
  let {
    volume: e,
    onVolumeChange: t
  } = (0, l.A)();
  return (0, i.X9)({
    location: "UserSettingsSoundmojiVolume"
  }) ? (0, r.jsx)(s.A, {
    label: a.intl.string(a.t["2JbvKw"]),
    description: a.intl.string(a.t.INenzY),
    volume: e,
    onVolumeChange: t
  }) : null
}