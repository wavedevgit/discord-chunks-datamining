/** Chunk was on 77069 **/
/** chunk id: 392779, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => c
}), require("./953529.js");
var Chunk442837 = require("./442837.js"),
  Chunk13245 = require("./13245.js"),
  Chunk624864 = require("./624864.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk794704 = require("./794704.jsx"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk794704.Wb)(true);

function S(t) {
  return (0, u.qs)(t.key, {
    useTitle: () => o.intl.string(t.title),
    useSubtitle: () => o.intl.string(t.description),
    useValue: () => !(0, i.e7)([s.Z], () => s.Z.getDisabledNotifications().has(t.disabledSetting)),
    setValue: e => {
      l.Z.setNotificationDisabledSetting(t.disabledSetting, !e)
    },
    usePredicate: t.usePredicate
  })
}
let c = (0, Chunk509613.Uc)(Chunk313789.n.OVERLAY_NOTIFICATIONS_LIST, {
  variant: "separators",
  buildLayout: () => T.map(S)
})