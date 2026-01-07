/** Chunk was on web.js **/
/** chunk id: 983544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d,
  e: () => u
});
var Chunk277985 = require("./277985.js"),
  Chunk679337 = require("./679337.js"),
  Chunk592125 = require("./592125.js"),
  Chunk403182 = require("./403182.js"),
  Chunk861990 = require("./861990.js"),
  Chunk981631 = require("./981631.js");
class c {
  getCreateAttachmentURL(e) {
    return l.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return l.ANM.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    let t = a.Z.getBasicChannel(e);
    return o.dg(null == t ? true : t.guild_id)
  }
  getMaxAttachmentsCount() {
    return l.dN1
  }
  getMaxTotalAttachmentSize() {
    return s.zz
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
      return new r.Z;
    case 2:
      return new i.Z;
    default:
      return new c
  }
}