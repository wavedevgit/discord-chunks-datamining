/** Chunk was on 22988 **/
/** chunk id: 178387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk158638 = require("./158638.js"),
  Chunk496675 = require("./496675.js"),
  Chunk999382 = require("./999382.js"),
  Chunk92533 = require("./92533.jsx"),
  Chunk249363 = require("./249363.js"),
  Chunk464865 = require("./464865.js"),
  Chunk888125 = require("./888125.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk162161 = require("./162161.js");

function x() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE), t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild, []), {
    isGuildAdmin: n,
    canManageGuild: x
  } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
    isGuildAdmin: null != exports && Chunk496675.Z.can(Chunk981631.Plq.ADMINISTRATOR, exports),
    canManageGuild: null != exports && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, exports)
  })), j = (0, Chunk158638.g1)(null == exports ? true : exports.id, "GuildSettingsBoostPerks");
  return null == exports ? null : <Chunk906732.Gt value={module}><main className={Chunk162161.container}>{<Chunk793030.X6 variant={"heading-lg/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.UKgg5O)}</Chunk793030.X6>}{<Chunk888125.w canManageGuild={x} premiumProgressBarEnabled={exports.premiumProgressBarEnabled} />}{<div className={Chunk162161.divider} />}{<Chunk92533.A guild={exports} canManageGuild={x} />}{<div className={Chunk162161.divider} />}{j ? <Chunk255367.Fragment>{require && <Chunk255367.Fragment>{<Chunk464865.V guild={exports} />}{<div className={Chunk162161.divider} />}</Chunk255367.Fragment>}{<Chunk249363.A guild={exports} canManageGuild={x} />}</Chunk255367.Fragment> : <Chunk255367.Fragment>{<Chunk249363.A guild={exports} canManageGuild={x} />}{require && <Chunk255367.Fragment>{<div className={Chunk162161.divider} />}{<Chunk464865.V guild={exports} />}</Chunk255367.Fragment>}</Chunk255367.Fragment>}</main></Chunk906732.Gt>
}