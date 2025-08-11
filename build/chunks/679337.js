/** Chunk was on web.js **/
/** chunk id: 679337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk861990 = require("./861990.js"),
  Chunk981631 = require("./981631.js");
class o {
  getCreateAttachmentURL(e) {
    return i.ANM.GRAVITY_ATTACHMENTS
  }
  getDeleteUploadURL(e) {
    return i.ANM.MESSAGE_DELETE_UPLOAD(e)
  }
  getMaxFileSize(e) {
    return i.mBz
  }
  getMaxAttachmentsCount() {
    return Chunk981631.dN1
  }
  getMaxTotalAttachmentSize() {
    return Chunk861990.zz
  }
  get shouldReactNativeCompressUploads() {
    returntrue
  }
}