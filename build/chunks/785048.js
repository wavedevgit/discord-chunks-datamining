/** Chunk was on 28979 **/
/** chunk id: 785048, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  U: () => _
}), require("./896048.js");
var Chunk419954 = require("./419954.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk612025 = require("./612025.js"),
  Chunk112469 = require("./112469.js"),
  Chunk542457 = require("./542457.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
  useTitle: () => d.intl.string(d.t["T+nevN"]),
  useSubtitle: () => d.intl.format(d.t.jXKQCu, {
    helpdeskArticle: s.A.getArticleURL(E.MVz.ACTIVITY_STATUS_SETTINGS)
  }),
  useValue: () => {
    let t = (0, T.Tx)();
    return !u.pE.useSetting().includes(t)
  },
  setValue: t => {
    let e = o.xk.getState().selectedGuildId,
      i = (0, r.CN)();
    t ? i.delete(e) : i.add(e), u.pE.updateSetting([...i]), l.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: A.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: S.bf.USER_SETTINGS_PRIVACY_SAFETY,
      guild_id: e
    })
  },
  usePredicate: () => (0, T.Tx)() !== o.YG
})