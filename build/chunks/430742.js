/** Chunk was on web.js **/
/** chunk id: 430742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk570140 = require("./570140.js");
let i = {
  clearDraft(e, t) {
    r.Z.dispatch({
      type: "DRAFT_CLEAR",
      channelId: e,
      draftType: t
    })
  },
  saveDraft(e, t, n) {
    r.Z.dispatch({
      type: "DRAFT_SAVE",
      channelId: e,
      draft: t,
      draftType: n
    })
  },
  changeDraft(e, t, n) {
    r.Z.dispatch({
      type: "DRAFT_CHANGE",
      channelId: e,
      draft: t,
      draftType: n
    })
  },
  changeThreadSettings(e, t) {
    r.Z.dispatch({
      type: "THREAD_SETTINGS_DRAFT_CHANGE",
      channelId: e,
      draft: t
    })
  }
}