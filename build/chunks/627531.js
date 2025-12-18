/** Chunk was on 77069 **/
/** chunk id: 627531, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  S: () => g
}), require("./388685.js");
var Chunk509613 = require("./509613.js"),
  Chunk626135 = require("./626135.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk997950 = require("./997950.js"),
  Chunk639814 = require("./639814.js"),
  Chunk703115 = require("./703115.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418924 = require("./418924.js");
let g = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk418924.default.WhdCGP),
  useSubtitle: () => Chunk388032.intl.string(Chunk418924.default.UQ9RHJ),
  useValue: () => {
    let t = (0, Chunk639814.is)();
    return !Chunk695346.SE.useSetting().includes(module)
  },
  setValue: t => {
    let e = a.xu.getState().selectedGuildId,
      n = (0, s._o)();
    t ? n.delete(e) : n.add(e), u.SE.updateSetting([...n]), l.default.track(c.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.Y.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: S.f4.USER_SETTINGS_PRIVACY_SAFETY,
      guild_id: e
    })
  },
  usePredicate: () => (0, Chunk639814.is)() !== Chunk997950.Th
})