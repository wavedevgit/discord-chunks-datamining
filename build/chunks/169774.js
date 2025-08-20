/** Chunk was on web.js **/
/** chunk id: 169774, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk947268 = require("./947268.js"),
  Chunk881886 = require("./881886.js");

function a(e, t, n, r) {
  if (e === n) returntrue;
  if (!n.startsWith(e)) returnfalse;
  var a = n.slice(e.length);
  return !!t && (a = r ? r(a) : a, i.contains(a, t))
}

function o(e) {
  return "Windows" === r.platformName ? e.replace(/^\s*NT/, "") : e
}
module.exports = require("./267100.js")({
  isBrowser: function(e) {
    return a(r.browserName, r.browserFullVersion, e)
  },
  isBrowserArchitecture: function(e) {
    return a(r.browserArchitecture, null, e)
  },
  isDevice: function(e) {
    return a(r.deviceName, null, e)
  },
  isEngine: function(e) {
    return a(r.engineName, r.engineVersion, e)
  },
  isPlatform: function(e) {
    return a(r.platformName, r.platformFullVersion, e, o)
  },
  isPlatformArchitecture: function(e) {
    return a(r.platformArchitecture, null, e)
  }
}, require("./746154.js"))