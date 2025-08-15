/** Chunk was on 91584 **/
/** chunk id: 947268, original params: t,e,r (module,exports,require) **/
"use strict";
var n, Chunk567701 = require("./567701.js"),
  o = "Unknown",
  a = new Chunk567701().getResult(),
  u = function(t) {
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
  browserMinorVersion: u.minor || o,
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