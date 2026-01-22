/** Chunk was on 28979 **/
/** chunk id: 705013, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  H: () => _
}), require("./896048.js");
var Chunk419954 = require("./419954.js"),
  Chunk954571 = require("./954571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk612025 = require("./612025.js"),
  Chunk112469 = require("./112469.js"),
  Chunk542457 = require("./542457.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536482 = require("./536482.js");
let _ = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
  useTitle: () => S.intl.string(E.default.WhdCGP),
  useSubtitle: () => S.intl.string(E.default.UQ9RHJ),
  useValue: () => {
    let t = (0, o.Tx)();
    return !r.JG.useSetting().includes(t)
  },
  setValue: t => {
    let e = a.xk.getState().selectedGuildId,
      i = (0, s.Kk)();
    t ? i.delete(e) : i.add(e), r.JG.updateSetting([...i]), l.default.track(d.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: A.bf.USER_SETTINGS_PRIVACY_SAFETY,
      guild_id: e
    })
  },
  usePredicate: () => (0, o.Tx)() !== a.YG
})