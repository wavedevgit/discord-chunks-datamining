/** Chunk was on web.js **/
/** chunk id: 272280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => a
});
var Chunk264181 = require("./264181.js");

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
    i(this, "title", true), i(this, "body", true), i(this, "asset", true), i(this, "popoutAsset", true), i(this, "version", true), i(this, "revertTextColor", true), this.type = r.Z.BANNER, this.title = e.title, this.body = e.body, this.asset = e.asset, this.popoutAsset = e.popout_asset, this.version = e.version, this.revertTextColor = e.revert_text_color
  }
}