/** Chunk was on web.js **/
/** chunk id: 979219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk588529 = require("./588529.js"),
  Chunk616022 = require("./616022.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  _terminate() {
    this.questCompletionStates.clear()
  }
  constructor(...e) {
    super(...e), o(this, "questCompletionStates", new Map), o(this, "handleQuestStoreChange", () => {
      let e = a.Z.quests;
      e.forEach(e => {
        this.checkQuestCompletion(e.id, e)
      });
      let t = new Set(e.keys());
      for (let e of this.questCompletionStates.keys()) t.has(e) || this.questCompletionStates.delete(e)
    }), o(this, "checkQuestCompletion", (e, t) => {
      var n, r;
      let i = null != (r = null == (n = t.userStatus) ? true : n.completedAt) ? r : null;
      if (!this.questCompletionStates.has(e)) return void this.questCompletionStates.set(e, i);
      null == this.questCompletionStates.get(e) && null != i && this.onQuestCompleted(e), this.questCompletionStates.set(e, i)
    }), o(this, "onQuestCompleted", e => {
      let t = "quest_completed_".concat(e);
      (0, i.Ox)(t)
    }), o(this, "stores", new Map([
      [a.Z, this.handleQuestStoreChange]
    ])), o(this, "actions", {
      LOGOUT: () => {
        this.questCompletionStates.clear()
      }
    })
  }
}
let l = new s