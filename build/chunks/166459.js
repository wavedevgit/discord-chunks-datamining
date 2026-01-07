/** Chunk was on web.js **/
/** chunk id: 166459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./953529.js");
var Chunk570140 = require("./570140.js");
let i = {
  popFirstFile(e) {
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_POP_FILE",
      channelId: e
    })
  },
  addFiles(e) {
    let {
      files: t,
      channelId: n,
      draftType: i
    } = e;
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_ADD_FILES",
      channelId: n,
      files: t,
      draftType: i
    })
  },
  addFile(e) {
    let {
      file: t,
      channelId: n,
      draftType: i,
      allowOptimization: a
    } = e;
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_ADD_FILES",
      channelId: n,
      files: [t],
      draftType: i,
      allowOptimization: a
    })
  },
  remove(e, t, n) {
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_REMOVE_FILE",
      channelId: e,
      id: t,
      draftType: n
    })
  },
  removeFiles(e, t, n) {
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
      channelId: e,
      attachmentIds: t,
      draftType: n
    })
  },
  clearAll(e, t) {
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES",
      channelId: e,
      draftType: t
    })
  },
  update(e, t, n, i) {
    let {
      description: a,
      filename: o,
      spoiler: s,
      thumbnail: l
    } = i;
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
      channelId: e,
      id: t,
      filename: o,
      description: a,
      thumbnail: l,
      spoiler: s,
      draftType: n
    })
  },
  setUploads(e) {
    let {
      uploads: t,
      channelId: n,
      draftType: i,
      resetState: a
    } = e;
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_SET_UPLOADS",
      channelId: n,
      uploads: a ? t.map(e => e.resetState()) : t,
      draftType: i
    })
  },
  setFile(e) {
    let {
      file: t,
      channelId: n,
      id: i,
      draftType: a,
      allowOptimization: o
    } = e;
    r.Z.dispatch({
      type: "UPLOAD_ATTACHMENT_SET_FILE",
      channelId: n,
      id: i,
      file: t,
      draftType: a,
      allowOptimization: o
    })
  }
}