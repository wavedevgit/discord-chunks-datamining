/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => r
});
let r = (0, n(818083).B)({
  kind: "guild",
  id: "2023-08_deadchat_simple_prompt_guild",
  label: "Simple deadchat prompt",
  defaultConfig: {
    triggerDeadchat: !1,
    enableDeadchat: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      triggerDeadchat: !0,
      enableDeadchat: !1
    }
  }, {
    id: 1,
    label: "trigger deadchat upon connection open",
    config: {
      triggerDeadchat: !0,
      enableDeadchat: !0
    }
  }]
})