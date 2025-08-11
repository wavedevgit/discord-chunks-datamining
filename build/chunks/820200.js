/** Chunk was on web.js **/
/** chunk id: 820200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
});
var Chunk685816 = require("./685816.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  static fromServer(e) {
    return new o(e)
  }
  constructor(e) {
    i(this, "bannerAsset", true), i(this, "title", true), i(this, "body", true), i(this, "help_center_url", true), i(this, "textColor", true), i(this, "endTime", true), this.type = r.z.IMMERSIVE_BANNER, this.bannerAsset = e.banner_asset, this.title = e.title, this.body = e.body, this.help_center_url = e.help_center_url, this.textColor = e.text_color, this.endTime = null != e.end_time ? new Date(e.end_time) : true
  }
}