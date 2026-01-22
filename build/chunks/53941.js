/** Chunk was on web.js **/
/** chunk id: 53941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk651162 = require("./651162.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  static fromServer(e) {
    return new a(e)
  }
  constructor(e) {
    i(this, "title", true), i(this, "body", true), i(this, "helpCenterUrl", true), i(this, "textColor", true), i(this, "endTime", true), i(this, "bannerUrl", true), i(this, "bannerAnimatedUrl", true), this.type = r.g.IMMERSIVE_BANNER, this.title = e.title, this.body = e.body, this.helpCenterUrl = e.help_center_url, this.textColor = e.text_color, this.endTime = null != e.end_time ? new Date(e.end_time) : true, this.bannerUrl = e.banner_url, this.bannerAnimatedUrl = e.banner_animated_url
  }
}