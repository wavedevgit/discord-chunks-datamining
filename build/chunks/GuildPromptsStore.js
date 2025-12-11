/** Chunk was on 41700 **/
/** chunk id: 420438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class o extends(r = Chunk442837.ZP.PersistedStore) {
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
let c = new o(Chunk570140.Z, {
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