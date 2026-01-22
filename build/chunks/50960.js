/** Chunk was on 28979 **/
/** chunk id: 50960, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  W: () => a
});
var Chunk968011 = require("./968011.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let a = (0, Chunk419954.zD)(Chunk780964.X.CHAT_TEXT_BOX_MENTION_SUGGESTIONS, {
  useTitle: () => u.intl.string(u.t.uXQ2xT),
  useValue: Chunk253932.ng.useSetting,
  setValue: Chunk253932.ng.updateSetting,
  usePredicate: () => {
    let {
      enabled: t
    } = (0, n.us)("MentionSuggestionsSettings", {
      autoTrackExposure: false
    });
    return t
  }
})