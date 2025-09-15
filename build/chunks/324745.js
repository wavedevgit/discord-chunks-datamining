/** Chunk was on web.js **/
/** chunk id: 324745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk906732 = require("./906732.jsx"),
  Chunk202527 = require("./202527.js"),
  Chunk168308 = require("./168308.js"),
  Chunk547972 = require("./547972.js"),
  Chunk332325 = require("./332325.js");

function l() {
  let {
    shouldMergeGameSettings: e
  } = Chunk202527.b.getCurrentConfig({
    location: "useOpenGameSettings"
  }), {
    analyticsLocations: t
  } = (0, Chunk906732.ZP)();
  if ((0, Chunk168308.Jw)()) return () => {
    (0, Chunk547972.Z)(module ? Chunk332325.Z.MY_GAMES : Chunk332325.Z.ACTIVITY_PRIVACY, {
      analyticsLocations: exports
    })
  }
}