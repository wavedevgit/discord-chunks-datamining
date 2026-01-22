/** Chunk was on web.js **/
/** chunk id: 465532, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk73153 = require("./73153.js");
let i = {
  clearDraft(e, t) {
    r.h.dispatch({
      type: "DRAFT_CLEAR",
      channelId: e,
      draftType: t
    })
  },
  saveDraft(e, t, n) {
    r.h.dispatch({
      type: "DRAFT_SAVE",
      channelId: e,
      draft: t,
      draftType: n
    })
  },
  changeDraft(e, t, n) {
    r.h.dispatch({
      type: "DRAFT_CHANGE",
      channelId: e,
      draft: t,
      draftType: n
    })
  },
  changeThreadSettings(e, t) {
    r.h.dispatch({
      type: "THREAD_SETTINGS_DRAFT_CHANGE",
      channelId: e,
      draft: t
    })
  }
}