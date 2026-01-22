/** Chunk was on 97492 **/
/** chunk id: 609511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class o extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      s[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = s[t];
    return null != n && !!n.has(e)
  }
  getState() {
    return s
  }
}
a(o, "displayName", "GuildPromptsStore"), a(o, "persistKey", "GuildPromptsStore");
let c = new o(Chunk73153.h, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, r = s[n];
    return null == r ? (s[n] = new Set, s[n].add(t), true) : !r.has(t) && (r.add(t), true)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != s[t.id] && !t.unavailable && (delete s[t.id], true)
  }
})