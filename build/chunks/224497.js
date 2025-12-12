/** Chunk was on web.js **/
/** chunk id: 224497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk830496 = require("./830496.js");
let l = {
  getUploadPayload: function(e) {
    var t, n;
    let r = e.item.file;
    return i()(null != r, "file data must not be empty"), {
      filename: r.name,
      file_size: r.size,
      id: a().uniqueId(),
      is_clip: null != e.clip,
      title: null == (t = e.clip) ? true : t.name,
      application_id: null == (n = e.clip) ? true : n.applicationId,
      clip_created_at: null != e.clip ? (0, s.U)(e.clip.id) : true,
      clip_participant_ids: null != e.clip ? (0, s.Z)(e.clip.users) : true,
      original_content_type: e.mimeType
    }
  }
}