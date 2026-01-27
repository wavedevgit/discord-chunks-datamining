/** Chunk was on web.js **/
/** chunk id: 374400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk492462 = require("./492462.js"),
  Chunk998218 = require("./998218.js");
let a = e => {
    if (null == e || "" === e) return null;
    try {
      let t = new URL(e);
      return i.A.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null
    } catch (e) {
      return null
    }
  },
  o = e => {
    let t = (0, r.parse)(e);
    return {
      desktop: a(t.desktop_link),
      mobile: a(t.mobile_link)
    }
  }