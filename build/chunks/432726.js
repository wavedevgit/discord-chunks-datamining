/** Chunk was on 77069 **/
/** chunk id: 432726, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  p: () => T
});
var Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk817774 = require("./817774.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.XpBObB),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.oZsHTD, {
    helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLAYER_GAME_FRIENDS)
  }),
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["Uv/eTx"])],
  useValue: () => Chunk695346._j.useSetting(),
  setValue: t => s._j.updateSetting(t),
  usePredicate: Chunk817774.W
})