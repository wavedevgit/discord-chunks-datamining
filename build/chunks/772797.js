/** Chunk was on 28979 **/
/** chunk id: 772797, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk555444 = require("./555444.js"),
  Chunk780964 = require("./780964.js"),
  Chunk903427 = require("./903427.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.zD)(Chunk780964.X.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
  useTitle: () => d.intl.string(d.t.EGn1eN),
  useSubtitle: () => d.intl.string(d.t.iT257i),
  useSearchTerms: () => [d.intl.string(d.t["pS+K2L"]), d.intl.string(d.t.nuFtHH)],
  useValue: function() {
    return (0, n.bG)([r.A], () => {
      let {
        pttLatchingEnabled: t
      } = r.A.getModeOptions();
      return null != t && t
    })
  },
  setValue: function(t) {
    l.A.setMode(T.TB.PUSH_TO_TALK, {
      pttLatchingEnabled: t
    })
  },
  usePredicate: function() {
    let t = (0, o.P)(),
      {
        enableLatching: e
      } = (0, u.y)({
        location: "PushToTalkLatchingSetting"
      });
    return t && e
  }
})