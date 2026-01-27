/** Chunk was on web.js **/
/** chunk id: 900482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d,
  m: () => u
});
var Chunk535736 = require("./535736.js"),
  Chunk63044 = require("./63044.js"),
  Chunk734057 = require("./734057.js"),
  Chunk453771 = require("./453771.js"),
  Chunk292348 = require("./292348.js"),
  Chunk652215 = require("./652215.js");
class c {
  getCreateAttachmentURL(e) {
    return l.Rsh.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return l.Rsh.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    let t = a.A.getBasicChannel(e);
    return o.o2(null == t ? true : t.guild_id)
  }
  getMaxAttachmentsCount() {
    return l.XgB
  }
  getMaxTotalAttachmentSize() {
    return s.eM
  }
  get shouldReactNativeCompressUploads() {
    returntrue
  }
}
var u = function(e) {
  return e[e.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", e[e.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT", e[e.GRAVITY_ATTACHMENT = 2] = "GRAVITY_ATTACHMENT", e
}({});

function d(e) {
  switch (e) {
    case 1:
      return new r.A;
    case 2:
      return new i.A;
    default:
      return new c
  }
}