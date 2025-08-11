/** Chunk was on 25548 **/
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
  Chunk107782 = require("./107782.js");
let m = e => {
  let {
    onClose: t,
    listing: n,
    guildId: m
  } = e, f = (0, r.e7)([o.Z], () => o.Z.getGuild(m), [m]), h = (0, c.Z)({
    listing: n,
    guildId: m
  });
  return <div className={u.confirmationContainer}>{<a.X6q className={u.confirmationHeader} variant={"heading-lg/extrabold"}>{d.intl.format(d.t.I5dYFh, {
        serverName: null == f ? true : f.name,
        tierName: n.name
      })}</a.X6q>}{!h.isEmpty() && <a.Text className={u.confirmationSubtitle} variant={"text-sm/normal"} color={"header-secondary"}>{d.intl.format(d.t.TnhFHh, {
        benefits: h.asString()
      })}</a.Text>}{<l.zx className={u.openDiscordButton} onClick={() => (0, s.Z)("role_sub_mweb_success_modal")}>{d.intl.string(d.t.WWvswM)}</l.zx>}{<l.zx className={u.doneButton} look={l.zx.Looks.BLANK} onClick={() => t(true)}>{d.intl.string(d.t.y84Dho)}</l.zx>}</div>
}