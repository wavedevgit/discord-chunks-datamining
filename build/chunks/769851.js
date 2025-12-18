/** Chunk was on 77069 **/
/** chunk id: 769851, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  n: () => _
}), require("./388685.js");
var Chunk509613 = require("./509613.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk997950 = require("./997950.js"),
  Chunk639814 = require("./639814.js"),
  Chunk703115 = require("./703115.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["T+nevN"]),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.jXKQCu, {
    helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
  }),
  useValue: () => {
    let t = (0, Chunk639814.is)();
    return !Chunk695346.iH.useSetting().includes(module)
  },
  setValue: t => {
    let e = o.xu.getState().selectedGuildId,
      n = (0, u.rr)();
    t ? n.delete(e) : n.add(e), r.iH.updateSetting([...n]), l.default.track(E.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: S.Y.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: c.f4.USER_SETTINGS_PRIVACY_SAFETY,
      guild_id: e
    })
  },
  usePredicate: () => (0, Chunk639814.is)() !== Chunk997950.Th
})