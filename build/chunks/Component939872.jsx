/** Chunk was on 48091 **/
/** chunk id: 939872, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk17894 = require("./17894.js"),
  Chunk430824 = require("./430824.js"),
  Chunk313550 = require("./313550.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk406671 = require("./406671.js");
let m = e => {
  let {
    onClose: t,
    listing: n,
    guildId: m
  } = e, p = (0, i.e7)([o.Z], () => o.Z.getGuild(m), [m]), f = (0, c.Z)({
    listing: n,
    guildId: m
  });
  return (0, r.jsxs)("div", {
    className: u.confirmationContainer,
    children: [(0, r.jsx)(a.X6q, {
      className: u.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: d.intl.format(d.t.I5dYFh, {
        serverName: null == p ? true : p.name,
        tierName: n.name
      })
    }), !f.isEmpty() && (0, r.jsx)(a.Text, {
      className: u.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: d.intl.format(d.t.TnhFHh, {
        benefits: f.asString()
      })
    }), (0, r.jsx)(l.zx, {
      className: u.openDiscordButton,
      onClick: () => (0, s.Z)("role_sub_mweb_success_modal"),
      children: d.intl.string(d.t.WWvswM)
    }), (0, r.jsx)(l.zx, {
      className: u.doneButton,
      look: l.zx.Looks.BLANK,
      onClick: () => t(true),
      children: d.intl.string(d.t.y84Dho)
    })]
  })
}