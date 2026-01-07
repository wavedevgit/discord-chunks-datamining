/** Chunk was on web.js **/
/** chunk id: 277985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk302463 = require("./302463.js"),
  Chunk981631 = require("./981631.js");
class a {
  getCreateAttachmentURL(e) {
    return i.ANM.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
  }
  getDeleteUploadURL(e) {
    return i.ANM.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    return r.ve
  }
  getMaxAttachmentsCount() {
    return r.pt
  }
  getMaxTotalAttachmentSize() {
    return r.S5
  }
  get shouldReactNativeCompressUploads() {
    returnfalse
  }
}