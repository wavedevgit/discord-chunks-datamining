/** Chunk was on 39048 **/
/** chunk id: 149305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => r
});
let r = (0, require("./600975.js").C)({
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