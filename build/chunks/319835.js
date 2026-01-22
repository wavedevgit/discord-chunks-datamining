/** Chunk was on web.js **/
/** chunk id: 319835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
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
    i(this, "title", true), i(this, "body", true), i(this, "bannerUrl", true), i(this, "endTime", true), i(this, "textColor", true), this.type = r.g.COUNTDOWN_TIMER, this.title = e.title, this.body = e.body, this.bannerUrl = e.banner_url, this.endTime = new Date(e.end_time), this.textColor = e.text_color
  }
}