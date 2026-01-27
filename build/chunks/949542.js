/** Chunk was on 38939 **/
/** chunk id: 949542, original params: t,e,r (module,exports,require) **/
"use strict";
var n, Chunk534535 = require("./534535.js"),
  o = "Unknown",
  a = new Chunk534535().getResult(),
  s = function(t) {
    if (!t) return {
      major: "",
      minor: ""
    };
    var e = t.split(".");
    return {
      major: e[0],
      minor: e[1]
    }
  }(a.browser.version);
module.exports = {
  browserArchitecture: a.cpu.architecture || o,
  browserFullVersion: a.browser.version || o,
  browserMinorVersion: s.minor || o,
  browserName: a.browser.name || o,
  browserVersion: a.browser.major || o,
  deviceName: a.device.model || o,
  engineName: a.engine.name || o,
  engineVersion: a.engine.version || o,
  platformArchitecture: a.cpu.architecture || o,
  platformName: ({
    "Mac OS": "Mac OS X"
  })[n = a.os.name] || n || o,
  platformVersion: a.os.version || o,
  platformFullVersion: a.os.version || o
}