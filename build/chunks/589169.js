/** Chunk was on 77069 **/
/** chunk id: 589169, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  T: () => a
});
var Chunk657871 = require("./657871.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let a = (0, Chunk509613.qs)(Chunk313789.n.CHAT_TEXT_BOX_MENTION_SUGGESTIONS, {
  useTitle: () => r.intl.string(r.t.uXQ2xT),
  useValue: Chunk695346.HV.useSetting,
  setValue: Chunk695346.HV.updateSetting,
  usePredicate: () => {
    let {
      enabled: t
    } = (0, i.zM)("MentionSuggestionsSettings", {
      autoTrackExposure: false
    });
    return t
  }
})