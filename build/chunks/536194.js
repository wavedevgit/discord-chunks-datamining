/** Chunk was on web.js **/
/** chunk id: 536194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => a
});
var Chunk77729 = require("./77729.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static get() {
    if (null == a.cached) {
      var e, t;
      let n = null === r.A || true === r.A || null == (t = r.A.processUtils) || null == (e = t.getMainArgvSync) ? true : e.call(t);
      null != n && n.length > 1 && n.shift(), a.cached = null != n ? n : []
    }
    return a.cached
  }
  static contains(e) {
    return a.get().includes(e)
  }
  static isEnvVariableTrue(e) {
    var t, n;
    if (true === r.A) returnfalse;
    switch (null === r.A || true === r.A || null == (n = r.A.process) || null == (t = n.env) ? true : t[e]) {
      case "1":
      case "true":
        returntrue
    }
    returnfalse
  }
  static isDisallowPopupsSet() {
    return a.contains("--disallow-popups") || a.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
  }
  static isDiscordTestSet() {
    return a.isEnvVariableTrue("DISCORD_TEST")
  }
  static isDiscordGatewayPlaintextSet() {
    returnfalse
  }
}
i(a, "cached", true)