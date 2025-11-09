/** Chunk was on 41794 **/
/** chunk id: 890477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
let i = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2023-08_deadchat_simple_prompt_guild",
  label: "Simple deadchat prompt",
  defaultConfig: {
    triggerDeadchat: false,
    enableDeadchat: false
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      triggerDeadchat: true,
      enableDeadchat: false
    }
  }, {
    id: 1,
    label: "trigger deadchat upon connection open",
    config: {
      triggerDeadchat: true,
      enableDeadchat: true
    }
  }]
})