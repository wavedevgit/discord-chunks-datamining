/** Chunk was on web.js **/
/** chunk id: 122924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk762555 = require("./762555.js");
let l = {
  getUploadPayload: function(e) {
    var t, n;
    let r = e.item.file;
    return i()(null != r, "file data must not be empty"), {
      filename: r.name,
      file_size: r.size,
      id: o().uniqueId(),
      is_clip: null != e.clip,
      title: null == (t = e.clip) ? true : t.name,
      application_id: null == (n = e.clip) ? true : n.applicationId,
      clip_created_at: null != e.clip ? (0, s.U)(e.clip.id) : true,
      clip_participant_ids: null != e.clip ? (0, s.g)(e.clip.users) : true,
      original_content_type: e.mimeType
    }
  }
}