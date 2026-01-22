/** Chunk was on web.js **/
/** chunk id: 681677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk864145 = require("./864145.js"),
  Chunk14400 = require("./14400.js"),
  Chunk420650 = require("./420650.jsx"),
  Chunk985018 = require("./985018.jsx");

function l() {
  let {
    volume: e,
    onVolumeChange: t
  } = (0, a.A)();
  return (0, i.X9)({
    location: "UserSettingsSoundmojiVolume"
  }) ? (0, r.jsx)(s.A, {
    label: o.intl.string(o.t["2JbvKw"]),
    description: o.intl.string(o.t.INenzY),
    volume: e,
    onVolumeChange: t
  }) : null
}