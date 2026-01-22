/** Chunk was on web.js **/
/** chunk id: 469036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./228524.js");
var Chunk526218 = require("./526218.js"),
  Chunk139675 = require("./139675.js"),
  Chunk257269 = require("./257269.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 512;
class l {
  getAssetURL() {
    return this.type === r.G.MANAGED ? (0, i.uD)(this.applicationId, this.assetId, o) : this.type === r.G.QUICK ? (0, a.VP)(this.assetPath) : true
  }
  constructor(e) {
    var t;
    s(this, "type", true), s(this, "applicationId", true), s(this, "linkId", true), s(this, "assetId", true), s(this, "assetPath", true), s(this, "title", true), s(this, "description", true), s(this, "customId", true);
    const n = (0, r.t)(e.link_id);
    this.type = null != (t = null == n ? true : n.type) ? t : null, this.applicationId = e.application_id, this.linkId = e.link_id, this.assetId = "asset_id" in e ? e.asset_id : true, this.assetPath = "asset_path" in e ? e.asset_path : true, this.title = e.title, this.description = e.description, this.customId = e.custom_id
  }
}