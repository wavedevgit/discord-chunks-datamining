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
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = s(), i = null == e ? true : e.config.messages.questName, o = null != t ? "-".concat(t) : "", l = null != i ? "-".concat(i, ")") : "", c = "QuestLogger".concat(o).concat(l), u = new r.Z(c);
  return {
    log: n ? u.log : a.dG,
    warn: n ? u.warn : a.dG,
    error: n ? u.error : a.dG,
    info: n ? u.info : a.dG,
    verbose: n ? u.verbose : a.dG,
    trace: n ? u.trace : a.dG
  }
}