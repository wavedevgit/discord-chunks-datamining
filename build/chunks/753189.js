/** Chunk was on web.js **/
/** chunk id: 753189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk439372.A {
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
      i.default.track(a.HAw.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, {
        message_id: e.id,
        channel_id: e.channel_id,
        author_id: null == (t = e.author) ? true : t.id,
        authorized_application_ids: this._getAuthorizedApplicationIds(e.session_metadata)
      })
    }
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      MESSAGE_CREATE: e => this.handleMessageCreate(e),
      MESSAGE_UPDATE: e => this.handleMessageUpdate(e)
    })
  }
}
let l = new o