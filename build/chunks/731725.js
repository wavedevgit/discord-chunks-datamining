/** Chunk was on web.js **/
/** chunk id: 731725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk666572 = require("./666572.js"),
  Chunk81063 = require("./81063.js"),
  Chunk649256 = require("./649256.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 512;
class l {
  getAssetURL() {
    return this.type === Chunk666572.e.MANAGED ? (0, Chunk81063.xF)(this.applicationId, this.assetId, s) : this.type === Chunk666572.e.QUICK ? (0, Chunk649256.xB)(this.assetPath) : true
  }
  constructor(e) {
    var t;
    a(this, "type", true), a(this, "applicationId", true), a(this, "linkId", true), a(this, "assetId", true), a(this, "assetPath", true), a(this, "title", true), a(this, "description", true), a(this, "customId", true);
    let n = (0, r._)(e.link_id);
    this.type = null != (t = null == n ? true : n.type) ? t : null, this.applicationId = e.application_id, this.linkId = e.link_id, this.assetId = "asset_id" in e ? e.asset_id : true, this.assetPath = "asset_path" in e ? e.asset_path : true, this.title = e.title, this.description = e.description, this.customId = e.custom_id
  }
}