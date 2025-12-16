/** Chunk was on 77069 **/
/** chunk id: 125717, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  J: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk509613 = require("./509613.js"),
  Chunk63063 = require("./63063.js"),
  Chunk78451 = require("./78451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk580183 = require("./580183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.J9)(Chunk313789.n.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.tiCXaH),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t.RvjRRI, {
    appealLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SAFE_DIRECT_MESSAGING)
  }),
  useValue: Chunk580183.m,
  setValue: t => r.Xr.updateSetting(t),
  useOptions: function() {
    return Chunk473749.useMemo(() => (0, Chunk78451.c7)(), [])
  }
})