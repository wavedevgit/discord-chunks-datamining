/** Chunk was on web.js **/
/** chunk id: 979219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk547943 = require("./547943.js"),
  Chunk147913 = require("./147913.js"),
  Chunk588529 = require("./588529.js"),
  Chunk616022 = require("./616022.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk147913.Z {
  _terminate() {
    this.questCompletionStates.clear()
  }
  constructor(...e) {
    super(...e), s(this, "questCompletionStates", new Map), s(this, "handleQuestStoreChange", () => {
      let e = o.Z.quests;
      e.forEach(e => {
        this.checkQuestCompletion(e.id, e)
      });
      let t = new Set(e.keys());
      for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e)
    }), s(this, "checkQuestCompletion", (e, t) => {
      var n, r;
      let i = null != (r = null == (n = t.userStatus) ? true : n.completedAt) ? r : null;
      if (!this.questCompletionStates.has(e)) return void this.questCompletionStates.set(e, i);
      null == this.questCompletionStates.get(e) && null != i && this.onQuestCompleted(e), this.questCompletionStates.set(e, i)
    }), s(this, "onQuestCompleted", e => {
      let t = "quest_completed_".concat(e);
      (0, a.Ox)(t), (0, a.Ox)(r.Y.QUEST_COMPLETED, {
        quest_id: e
      })
    }), s(this, "stores", new Map([
      [o.Z, this.handleQuestStoreChange]
    ])), s(this, "actions", {
      LOGOUT: () => {
        this.questCompletionStates.clear()
      }
    })
  }
}
let c = new l