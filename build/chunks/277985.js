/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(302463),
  i = n(981631);
class o {
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
    return !1
  }
}