/** Chunk was on web.js **/
/** chunk id: 368111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk81825 = require("./81825.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk81825.Z {
  toString() {
    return this.name
  }
  constructor(e) {
    super(), i(this, "id", true), i(this, "type", true), i(this, "name", true), i(this, "revoked", true), i(this, "integrations", true), i(this, "visibility", true), i(this, "friendSync", true), i(this, "verified", true), i(this, "showActivity", true), i(this, "twoWayLink", true), i(this, "accessToken", true), i(this, "metadata", true), i(this, "metadataVisibility", true), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || false, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || false, this.showActivity = e.show_activity || false, this.verified = e.verified || false, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || false, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
  }
}