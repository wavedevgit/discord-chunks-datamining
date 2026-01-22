/** Chunk was on 28979 **/
/** chunk id: 881318, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  $: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
  useTitle: () => o.intl.string(o.t.BbESsg),
  useSubtitle: () => o.intl.string(o.t.LoOB1F),
  useValue: function() {
    return (0, n.bG)([r.A], () => {
      let {
        vadUseKrisp: t
      } = r.A.getModeOptions();
      return t
    })
  },
  setValue: function(t) {
    let e = r.A.getMode();
    l.A.setMode(e, {
      vadUseKrisp: t
    })
  },
  useDisabled: function() {
    return (0, n.bG)([r.A], () => {
      let t = r.A.getMode(),
        e = r.A.getModeOptions().autoThreshold;
      return t === a.TBI.VOICE_ACTIVITY && e
    })
  },
  usePredicate: function() {
    return (0, n.bG)([r.A], () => r.A.isAdvancedVoiceActivitySupported() && r.A.isInputProfileCustom())
  }
})