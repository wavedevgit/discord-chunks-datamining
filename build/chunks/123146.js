/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(861990),
  i = n(981631);
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
    return i.dN1
  }
  getMaxTotalAttachmentSize() {
    return r.zz
  }
  get shouldReactNativeCompressUploads() {
    return !0
  }
}