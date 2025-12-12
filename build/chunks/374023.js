/** Chunk was on web.js **/
/** chunk id: 374023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => o
});
var Chunk579806 = require("./579806.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  static get() {
    if (null == o.cached) {
      var e, t;
      let n = null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.processUtils) || null == (e = exports.getMainArgvSync) ? true : module.call(exports);
      null != require && require.length > 1 && require.shift(), o.cached = null != require ? require : []
    }
    return o.cached
  }
  static contains(e) {
    return o.get().includes(e)
  }
  static isEnvVariableTrue(e) {
    var t, n;
    if (true === r.Z) returnfalse;
    switch (null === r.Z || true === r.Z || null == (n = r.Z.process) || null == (t = n.env) ? true : t[e]) {
      case "1":
      case "true":
        returntrue
    }
    returnfalse
  }
  static isDisallowPopupsSet() {
    return o.contains("--disallow-popups") || o.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
  }
  static isDiscordTestSet() {
    return o.isEnvVariableTrue("DISCORD_TEST")
  }
  static isDiscordGatewayPlaintextSet() {
    returnfalse
  }
}
i(o, "cached", true)