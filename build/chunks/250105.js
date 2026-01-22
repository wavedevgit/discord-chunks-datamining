/** Chunk was on web.js **/
/** chunk id: 250105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => o,
  cT: () => l
});
var Chunk720757 = require("./720757.js"),
  Chunk961350 = require("./961350.js"),
  Chunk403362 = require("./403362.js"),
  Chunk217222 = require("./217222.js");

function o(e) {
  return (0, r.A)(e, s.A, l)
}

function l(e, t) {
  switch (e) {
    case "guild":
      return t.guildId;
    case "user":
      return i.default.getId();
    case "installation":
      var n;
      return null != (n = i.default.getInstallationForTracking()) ? n : "";
    default:
      (0, a.xb)(e)
  }
}