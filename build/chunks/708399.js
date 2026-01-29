/** Chunk was on 4670 **/
/** chunk id: 708399, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  I: () => d
});
var Chunk419954 = require("./419954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk542877 = require("./542877.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
  useTitle: () => o.intl.string(o.t.XpBObB),
  useSubtitle: () => o.intl.format(o.t.oZsHTD, {
    helpdeskArticle: l.A.getArticleURL(u.MVz.SLAYER_GAME_FRIENDS)
  }),
  useSearchTerms: () => [o.intl.string(o.t["Uv/eTx"])],
  useValue: () => s.Zk.useSetting(),
  setValue: e => s.Zk.updateSetting(e),
  usePredicate: Chunk542877.K
})