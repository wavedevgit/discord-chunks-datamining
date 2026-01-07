/** Chunk was on 77069 **/
/** chunk id: 754680, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  i: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk509613 = require("./509613.js"),
  Chunk131951 = require("./131951.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
  useTitle: () => o.intl.string(o.t.BbESsg),
  useSubtitle: () => o.intl.string(o.t.LoOB1F),
  useValue: function() {
    return (0, i.e7)([u.Z], () => {
      let {
        vadUseKrisp: t
      } = u.Z.getModeOptions();
      return t
    })
  },
  setValue: function(t) {
    let e = u.Z.getMode();
    l.Z.setMode(e, {
      vadUseKrisp: t
    })
  },
  useDisabled: function() {
    return (0, i.e7)([u.Z], () => {
      let t = u.Z.getMode(),
        e = u.Z.getModeOptions().autoThreshold;
      return t === a.pM4.VOICE_ACTIVITY && e
    })
  },
  usePredicate: function() {
    return (0, i.e7)([u.Z], () => u.Z.isAdvancedVoiceActivitySupported() && u.Z.isInputProfileCustom())
  }
})