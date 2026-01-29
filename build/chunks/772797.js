/** Chunk was on 4670 **/
/** chunk id: 772797, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk555444 = require("./555444.js"),
  Chunk780964 = require("./780964.js"),
  Chunk903427 = require("./903427.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.zD)(Chunk780964.X.VOICE_PUSH_TO_TALK_LATCHING_SETTING, {
  useTitle: () => T.intl.string(T.t.EGn1eN),
  useSubtitle: () => T.intl.string(T.t.iT257i),
  useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
  useValue: function() {
    return (0, n.bG)([r.A], () => {
      let {
        pttLatchingEnabled: e
      } = r.A.getModeOptions();
      return null != e && e
    })
  },
  setValue: function(e) {
    l.A.setMode(d.TB.PUSH_TO_TALK, {
      pttLatchingEnabled: e
    })
  },
  usePredicate: function() {
    let e = (0, o.P)(),
      {
        enableLatching: t
      } = (0, a.y)({
        location: "PushToTalkLatchingSetting"
      });
    return e && t
  }
})