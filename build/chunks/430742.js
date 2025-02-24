/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(570140);
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