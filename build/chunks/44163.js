/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(585483),
  i = n(5967),
  o = n(933513),
  a = n(981631);
let s = {
  init() {
    document.addEventListener("paste", e => {
      (0, o.Z)((0, i.uB)(e)) || r.S.dispatchToLastSubscribed(a.CkL.GLOBAL_CLIPBOARD_PASTE, {
        event: e
      })
    })
  }
}