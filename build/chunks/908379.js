/** Chunk was on web.js **/
/** chunk id: 908379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk481613 = require("./481613.js"),
  i = require.n(Chunk481613),
  Chunk73153 = require("./73153.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk272355 = require("./272355.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk272355.A {
  _initialize() {
    a.h.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
  }
  _terminate() {
    a.h.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
  }
  constructor(...e) {
    super(...e), d(this, "handlePermission", e => {
      let {
        kind: t,
        granted: n
      } = e, r = "Firefox" === i().name ? c.MVz.ENABLE_MIC_FIREFOX : c.MVz.ENABLE_MIC_CHROME;
      if (!n) {
        let e = "audio" !== t;
        o.A.show({
          title: e ? u.intl.string(u.t.OqloH8) : u.intl.string(u.t["kI+OOV"]),
          body: e ? u.intl.string(u.t.l3P7K0) : u.intl.string(u.t.l3jwOd),
          onConfirm: () => window.open(l.A.getArticleURL(r), "_blank"),
          confirmText: u.intl.string(u.t.psXQHP)
        })
      }
    })
  }
}
let p = new f