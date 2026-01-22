/** Chunk was on web.js **/
/** chunk id: 301736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk688810 = require("./688810.jsx"),
  Chunk80422 = require("./80422.js"),
  Chunk682262 = require("./682262.js"),
  Chunk725177 = require("./725177.js"),
  Chunk857266 = require("./857266.js");

function l() {
  let {
    shouldMergeGameSettings: e
  } = i.X.getCurrentConfig({
    location: "useOpenGameSettings"
  }), {
    analyticsLocations: t
  } = (0, r.Ay)();
  if ((0, a.Pi)()) return () => {
    (0, s.A)(e ? o.J.MY_GAMES : o.J.ACTIVITY_PRIVACY, {
      analyticsLocations: t
    })
  }
}