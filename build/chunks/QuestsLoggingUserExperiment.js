/** Chunk was on web.js **/
/** chunk id: 535584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => l
});
var Chunk710845 = require("./710845.js"),
  Chunk818083 = require("./818083.js"),
  Chunk231338 = require("./231338.js");
let o = (0, Chunk818083.B)({
    id: "2024-04_quests_logging",
    kind: "user",
    label: "Quests Logging",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Quest logging enabled",
      config: {
        enabled: true
      }
    }]
  }),
  s = () => o.getCurrentConfig({
    location: "quests_logging"
  }, {
    autoTrackExposure: false
  }).enabled;

function l() {
  let {
    quest: e,
    location: t
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = s(), i = null == module ? true : module.config.messages.questName, o = null != exports ? "-".concat(exports) : "", l = null != Chunk818083 ? "-".concat(Chunk818083, ")") : "", c = "QuestLogger".concat(o).concat(l), u = new Chunk710845.Z(c);
  return {
    log: require ? u.log : Chunk231338.dG,
    warn: require ? u.warn : Chunk231338.dG,
    error: require ? u.error : Chunk231338.dG,
    info: require ? u.info : Chunk231338.dG,
    verbose: require ? u.verbose : Chunk231338.dG,
    trace: require ? u.trace : Chunk231338.dG
  }
}