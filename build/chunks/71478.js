/** Chunk was on 88615 **/
/** chunk id: 71478, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  return (0, r.bG)([n.A], () => {
    var t;
    return (null == (t = n.A.getGuild(e)) ? true : t.features.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true
  }) ? {
    shouldShow: true,
    text: o.intl.string(s.default.l9n4QZ)
  } : {
    shouldShow: false,
    text: ""
  }
}