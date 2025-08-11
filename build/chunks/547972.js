/** Chunk was on web.js **/
/** chunk id: 547972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk230711 = require("./230711.js"),
  Chunk202527 = require("./202527.js"),
  Chunk332325 = require("./332325.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  switch (e) {
    case o.Z.MY_GAMES:
      return a.oAB.REGISTERED_GAMES;
    case o.Z.CLIPS:
      return a.oAB.CLIPS;
    case o.Z.OVERLAY:
      return a.oAB.OVERLAY;
    case o.Z.ACTIVITY_PRIVACY:
      return a.oAB.ACTIVITY_PRIVACY
  }
}

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      shouldMergeGameSettings: n
    } = i.b.getCurrentConfig({
      location: "navigator"
    }, {
      autoTrackExposure: false
    });
  n ? r.Z.open(a.oAB.GAMES, e, t) : r.Z.open(s(e), null, t)
}