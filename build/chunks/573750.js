/** Chunk was on 38939 **/
/** chunk id: 573750, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk949542 = require("./949542.js"),
  Chunk256937 = require("./256937.js");

function o(t, e, r, n) {
  if (t === r) returntrue;
  if (!r.startsWith(t)) returnfalse;
  var o = r.slice(t.length);
  return !!e && (o = n ? n(o) : o, i.contains(o, e))
}

function a(t) {
  return "Windows" === n.platformName ? t.replace(/^\s*NT/, "") : t
}
module.exports = require("./816627.js")({
  isBrowser: function(t) {
    return o(n.browserName, n.browserFullVersion, t)
  },
  isBrowserArchitecture: function(t) {
    return o(n.browserArchitecture, null, t)
  },
  isDevice: function(t) {
    return o(n.deviceName, null, t)
  },
  isEngine: function(t) {
    return o(n.engineName, n.engineVersion, t)
  },
  isPlatform: function(t) {
    return o(n.platformName, n.platformFullVersion, t, a)
  },
  isPlatformArchitecture: function(t) {
    return o(n.platformArchitecture, null, t)
  }
}, require("./531465.js"))