/** Chunk was on web.js **/
/** chunk id: 679337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk861990 = require("./861990.js"),
  Chunk981631 = require("./981631.js");
class a {
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
    return i.dN1
  }
  getMaxTotalAttachmentSize() {
    return r.zz
  }
  get shouldReactNativeCompressUploads() {
    returntrue
  }
}