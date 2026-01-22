/** Chunk was on web.js **/
/** chunk id: 894992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk517846 = require("./517846.js"),
  Chunk439372 = require("./439372.js"),
  Chunk236698 = require("./236698.js"),
  Chunk859703 = require("./859703.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk439372.A {
  _terminate() {
    this.questCompletionStates.clear()
  }
  constructor(...e) {
    super(...e), o(this, "questCompletionStates", new Map), o(this, "handleQuestStoreChange", () => {
      let e = s.A.quests;
      e.forEach(e => {
        this.checkQuestCompletion(e.id, e)
      });
      let t = new Set(e.keys());
      for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e)
    }), o(this, "checkQuestCompletion", (e, t) => {
      var n, r;
      let i = null != (n = null == (r = t.userStatus) ? true : r.completedAt) ? n : null;
      this.questCompletionStates.has(e) && null == this.questCompletionStates.get(e) && null != i && this.onQuestCompleted(e), this.questCompletionStates.set(e, i)
    }), o(this, "onQuestCompleted", e => {
      (0, a.hs)(r.w.QUEST_COMPLETED, {
        quest_id: e
      })
    }), o(this, "stores", new Map([
      [s.A, this.handleQuestStoreChange]
    ])), o(this, "actions", {
      LOGOUT: () => {
        this.questCompletionStates.clear()
      }
    })
  }
}
let c = new l