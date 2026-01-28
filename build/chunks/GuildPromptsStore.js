/** Chunk was on 78528 **/
/** chunk id: 609511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {};
class o extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      a[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = a[t];
    return null != n && !!n.has(e)
  }
  getState() {
    return a
  }
}
s(o, "displayName", "GuildPromptsStore"), s(o, "persistKey", "GuildPromptsStore");
let c = new o(Chunk73153.h, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, r = a[n];
    return null == r ? (a[n] = new Set, a[n].add(t), true) : !r.has(t) && (r.add(t), true)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != a[t.id] && !t.unavailable && (delete a[t.id], true)
  }
})