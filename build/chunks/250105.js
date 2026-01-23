/** Chunk was on web.js **/
/** chunk id: 250105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => l,
  cT: () => c
}), require("./896048.js");
var Chunk720757 = require("./720757.js"),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk403362 = require("./403362.js"),
  Chunk217222 = require("./217222.js");

function l(e) {
  return (0, r.A)(e, o.A, c, u)
}

function c(e, t) {
  switch (e) {
    case "guild":
      return t.guildId;
    case "user":
      return a.default.getId();
    case "installation":
      var n;
      return null != (n = a.default.getInstallationForTracking()) ? n : "";
    default:
      (0, s.xb)(e)
  }
}

function u(e, t) {
  let [n, r] = (0, i.yK)([a.default], () => [a.default.getId(), a.default.getInstallationForTracking()]);
  switch (e) {
    case "guild":
      return t.guildId;
    case "user":
      return n;
    case "installation":
      return null != r ? r : "";
    default:
      (0, s.xb)(e)
  }
}