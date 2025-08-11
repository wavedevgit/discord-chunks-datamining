/** Chunk was on web.js **/
/** chunk id: 169774, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk947268 = require("./947268.js"),
  Chunk881886 = require("./881886.js");

function o(e, t, n, r) {
  if (e === n) returntrue;
  if (!n.startsWith(e)) returnfalse;
  var o = n.slice(e.length);
  return !!t && (o = r ? r(o) : o, i.contains(o, t))
}

function a(e) {
  return "Windows" === r.platformName ? e.replace(/^\s*NT/, "") : e
}
module.exports = require("./267100.js")({
  isBrowser: function(e) {
    return o(r.browserName, r.browserFullVersion, e)
  },
  isBrowserArchitecture: function(e) {
    return o(r.browserArchitecture, null, e)
  },
  isDevice: function(e) {
    return o(r.deviceName, null, e)
  },
  isEngine: function(e) {
    return o(r.engineName, r.engineVersion, e)
  },
  isPlatform: function(e) {
    return o(r.platformName, r.platformFullVersion, e, a)
  },
  isPlatformArchitecture: function(e) {
    return o(r.platformArchitecture, null, e)
  }
}, require("./746154.js"))