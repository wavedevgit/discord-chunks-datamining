/** Chunk was on 4670 **/
/** chunk id: 309038, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  L: () => d
});
var Chunk753806 = require("./753806.jsx"),
  Chunk145331 = require("./145331.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.Qx)(Chunk780964.X.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
  useTitle: () => o.intl.string(o.t["NxjN+q"]),
  useSearchTerms: () => [o.intl.string(o.t["t4+fbe"])],
  useOptions: () => [{
    name: o.intl.string(o.t["t+fGsk"]),
    value: 0
  }, {
    name: o.intl.string(o.t.MwlEGN),
    value: 1
  }],
  useValue: () => +!!r.Hu.useSetting(),
  setValue: e => {
    let t = 1 === e;
    t ? n.A.cleanUpPrivateChannelSearchState() : n.A.cleanUpSearchState({
      type: u.I4_.DMS
    }), (0, l._k)({
      prevIsCrossDMSettingEnabled: r.Hu.getSetting(),
      isCrossDMSettingEnabled: t,
      location: l.vy.USER_SETTINGS
    }), r.Hu.updateSetting(t)
  }
})