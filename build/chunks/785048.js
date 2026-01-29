/** Chunk was on 4670 **/
/** chunk id: 785048, original params: e,t,i (module,exports,require) **/
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
  useTitle: () => S.intl.string(S.t["T+nevN"]),
  useSubtitle: () => S.intl.format(S.t.jXKQCu, {
    helpdeskArticle: s.A.getArticleURL(A.MVz.ACTIVITY_STATUS_SETTINGS)
  }),
  useValue: () => {
    let e = (0, d.Tx)();
    return !a.pE.useSetting().includes(e)
  },
  setValue: e => {
    let t = o.xk.getState().selectedGuildId,
      i = (0, r.CN)();
    e ? i.delete(t) : i.add(t), a.pE.updateSetting([...i]), l.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: T.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: c.bf.USER_SETTINGS_PRIVACY_SAFETY,
      guild_id: t
    })
  },
  usePredicate: () => (0, d.Tx)() !== o.YG
})