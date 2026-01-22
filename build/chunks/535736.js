/** Chunk was on web.js **/
/** chunk id: 535736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk500208 = require("./500208.js"),
  Chunk652215 = require("./652215.js");
class a {
  getCreateAttachmentURL(e) {
    return i.Rsh.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return i.Rsh.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    return r.vN
  }
  getMaxAttachmentsCount() {
    return 10
  }
  getMaxTotalAttachmentSize() {
    return r._T
  }
  get shouldReactNativeCompressUploads() {
    returnfalse
  }
}