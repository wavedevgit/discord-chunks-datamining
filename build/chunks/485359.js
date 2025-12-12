/** Chunk was on web.js **/
/** chunk id: 485359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk570140 = require("./570140.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk317770 = require("./317770.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("MEDIA_ENGINE_PERMISSION", this.handlePermission)
  }
  constructor(...e) {
    super(...e), d(this, "handlePermission", e => {
      let {
        kind: t,
        granted: n
      } = e, r = "Firefox" === i().name ? c.BhN.ENABLE_MIC_FIREFOX : c.BhN.ENABLE_MIC_CHROME;
      if (!n) {
        let e = "audio" !== t;
        a.Z.show({
          title: e ? u.intl.string(u.t.OqloH8) : u.intl.string(u.t["kI+OOV"]),
          body: e ? u.intl.string(u.t.l3P7K0) : u.intl.string(u.t.l3jwOd),
          onConfirm: () => window.open(l.Z.getArticleURL(r), "_blank"),
          confirmText: u.intl.string(u.t.psXQHP)
        })
      }
    })
  }
}
let p = new f