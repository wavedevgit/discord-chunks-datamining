/** Chunk was on 83767 **/
/** chunk id: 414506, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk180798 = require("./180798.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var t;
  let {
    user: n,
    guildId: i,
    onSelect: c,
    analyticsLocations: s,
    onCloseContextMenu: _,
    isViewOnly: b
  } = e, {
    analyticsLocations: f
  } = (0, a.Ay)(u.A.CONTEXT_MENU), E = null != (t = null == s ? true : s[0]) ? t : f[0], g = (0, d.A)(n.id, i, true, E, b);
  return (0, l.jsx)(r.W1t, {
    "data-menu-migrated": true,
    navId: "guild-moderation-roles",
    onClose: () => {
      (0, o.Z_)(), null == _ || _()
    },
    "aria-label": A.intl.string(A.t.liqwPJ),
    onSelect: c,
    children: (0, l.jsx)(r.rXV, {
      children: g
    })
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_MODERATION_USER_MENU])