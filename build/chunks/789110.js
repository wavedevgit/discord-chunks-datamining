/** Chunk was on web.js **/
/** chunk id: 789110, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  handleMessageCreate(e) {
    let {
      message: t
    } = e;
    this._trackIfSessionMetadataExists(t)
  }
  handleMessageUpdate(e) {
    let {
      message: t
    } = e;
    this._trackIfSessionMetadataExists(t)
  }
  _getAuthorizedApplicationIds(e) {
    try {
      return e.authorized_application_ids
    } catch (e) {
      return null
    }
  }
  _trackIfSessionMetadataExists(e) {
    if (null != e.session_metadata) {
      var t;
      i.default.track(a.rMx.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, {
        message_id: e.id,
        channel_id: e.channel_id,
        author_id: null == (t = e.author) ? true : t.id,
        authorized_application_ids: this._getAuthorizedApplicationIds(e.session_metadata)
      })
    }
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      MESSAGE_CREATE: e => this.handleMessageCreate(e),
      MESSAGE_UPDATE: e => this.handleMessageUpdate(e)
    })
  }
}
let l = new s