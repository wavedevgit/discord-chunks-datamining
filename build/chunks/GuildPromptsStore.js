/** Chunk was on 82124 **/
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
let o = {};
class s extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    for (let t in e) {
      let n = e[t];
      o[t] = new Set(n)
    }
  }
  hasViewedPrompt(e, t) {
    let n = o[t];
    return null != n && !!n.has(e)
  }
  getState() {
    return o
  }
}
a(s, "displayName", "GuildPromptsStore"), a(s, "persistKey", "GuildPromptsStore");
let c = new s(Chunk570140.Z, {
  GUILD_PROMPT_VIEWED: function(e) {
    let {
      prompt: t,
      guildId: n
    } = e, r = o[n];
    return null == r ? (o[n] = new Set, o[n].add(t), true) : !r.has(t) && (r.add(t), true)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return null != o[t.id] && !t.unavailable && (delete o[t.id], true)
  }
})