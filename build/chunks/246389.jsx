/** Chunk was on 45130 **/
/** chunk id: 246389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk931617 = require("./931617.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
let b = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: i,
    onSelect: u,
    analyticsLocations: s,
    onCloseContextMenu: b,
    isViewOnly: f
  } = e, {
    analyticsLocations: E
  } = (0, a.ZP)(c.Z.CONTEXT_MENU), g = null != (t = null == s ? true : s[0]) ? t : E[0], O = (0, d.Z)(n.id, i, true, g, f);
  return <r.v2r navId={"guild-moderation-roles"} onClose={() => {
      (0, o.Zy)(), null == b || b()
    }} aria-label={_.intl.string(_.t.liqwPD)} onSelect={u}><r.kSQ>{O}</r.kSQ></r.v2r>
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_MODERATION_USER_MENU])