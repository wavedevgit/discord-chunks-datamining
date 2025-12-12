/** Chunk was on 45130 **/
/** chunk id: 246389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk931617 = require("./931617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let f = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: i,
    onSelect: u,
    analyticsLocations: s,
    onCloseContextMenu: f,
    isViewOnly: b
  } = e, {
    analyticsLocations: E
  } = (0, a.ZP)(c.Z.CONTEXT_MENU), g = null != (t = null == s ? true : s[0]) ? t : E[0], O = (0, d.Z)(n.id, i, true, g, b);
  return (0, l.jsx)(r.v2r, {
    navId: "guild-moderation-roles",
    onClose: () => {
      (0, o.Zy)(), null == f || f()
    },
    "aria-label": _.intl.string(_.t.liqwPJ),
    onSelect: u,
    children: (0, l.jsx)(r.kSQ, {
      children: O
    })
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_MODERATION_USER_MENU])