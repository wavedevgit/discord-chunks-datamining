/** Chunk was on web.js **/
/** chunk id: 722733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => s,
  yy: () => l
});
var Chunk403428 = require("./403428.js"),
  Chunk314897 = require("./314897.js"),
  Chunk823379 = require("./823379.js"),
  Chunk633289 = require("./633289.js");

function s(e) {
  return (0, r.Z)(e, o.Z, l)
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
      (0, a.vE)(e)
  }
}