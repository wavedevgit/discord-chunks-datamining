/** Chunk was on 83767 **/
/** chunk id: 414506, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
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
let A = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var t;
  let {
    user: n,
    guildId: o,
    onSelect: u,
    analyticsLocations: s,
    onCloseContextMenu: A,
    isViewOnly: b
  } = e, {
    analyticsLocations: E
  } = (0, a.Ay)(c.A.CONTEXT_MENU), f = null != (t = null == s ? true : s[0]) ? t : E[0], O = (0, d.A)(n.id, o, true, f, b);
  return (0, l.jsx)(r.W1t, {
    navId: "guild-moderation-roles",
    onClose: () => {
      (0, i.Z_)(), null == A || A()
    },
    "aria-label": _.intl.string(_.t.liqwPJ),
    onSelect: u,
    children: (0, l.jsx)(r.rXV, {
      children: O
    })
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GUILD_MODERATION_USER_MENU])