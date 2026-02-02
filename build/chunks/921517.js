/** Chunk was on 31294 **/
/** chunk id: 921517, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  RL: () => r,
  sH: () => i
});
var Chunk933681 = require("./933681.js"),
  Chunk945810 = require("./945810.js"),
  Chunk654487 = require("./654487.js");
let c = (0, Chunk945810.mj)({
  name: "2026-01-quest-bar-unfurl",
  kind: "user",
  defaultConfig: {
    enabled: false,
    variant: null
  },
  variations: {
    1: {
      enabled: true,
      variant: 0
    },
    2: {
      enabled: true,
      variant: 1
    }
  }
});

function r(e) {
  return e.features.includes(o.Li.QUEST_BAR_UNFURL)
}

function i() {
  let {
    enabled: e,
    variant: t
  } = c.useConfig({
    location: o.rE.QUESTS_BAR
  });
  return {
    unfurlEnabled: e,
    unfurlDurationInMilliseconds: function(e) {
      if (null != e) switch (e) {
        case 0:
          return 5e3;
        case 1:
          return 1e4;
        default:
          (0, n.dr)(e)
      }
    }(t)
  }
}