/** Chunk was on web.js **/
/** chunk id: 943849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => l
});
var Chunk626584 = require("./626584.js"),
  Chunk600975 = require("./600975.js"),
  Chunk818348 = require("./818348.js");
let s = (0, Chunk600975.C)({
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
  o = () => s.getCurrentConfig({
    location: "quests_logging"
  }, {
    autoTrackExposure: false
  }).enabled;

function l() {
  let {
    quest: e,
    location: t
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = o(), i = null == e ? true : e.config.messages.questName, s = null != t ? "-".concat(t) : "", l = null != i ? "-".concat(i, ")") : "", c = "QuestLogger".concat(s).concat(l), u = new r.A(c);
  return {
    log: n ? u.log : a.tE,
    warn: n ? u.warn : a.tE,
    error: n ? u.error : a.tE,
    info: n ? u.info : a.tE,
    verbose: n ? u.verbose : a.tE,
    trace: n ? u.trace : a.tE
  }
}