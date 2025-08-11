/** Chunk was on 22988 **/
/** chunk id: 213956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk874993 = require("./874993.js"),
  Chunk768762 = require("./768762.js"),
  Chunk430824 = require("./430824.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84613 = require("./84613.js"),
  Chunk392885 = require("./392885.js"),
  Chunk740903 = require("./740903.js"),
  Chunk464610 = require("./464610.js"),
  Chunk733629 = require("./733629.js"),
  Chunk598622 = require("./598622.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk296205 = require("./296205.js");

function y() {
  let e, t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
    n = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    y = (0, Chunk442837.e7)([Chunk392885.Z], () => Chunk392885.Z.getCurrentPage());
  if (Chunk73800.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), null == require) return null;
  let C = (0, Chunk598622.Q)(require);
  switch (y) {
    case Chunk740903.u.OVERVIEW:
      e = <Chunk464610.Z guild={require} />;
      break;
    case Chunk740903.u.CAPTCHA_AND_RAID_PROTECTION:
      e = <Chunk733629.Z title={Chunk388032.intl.string(Chunk388032.t["53eF5u"])} settings={C[Chunk740903.u.CAPTCHA_AND_RAID_PROTECTION]} />;
      break;
    case Chunk740903.u.DM_AND_SPAM_PROTECTION:
      e = <Chunk733629.Z title={Chunk388032.intl.string(Chunk388032.t.O0SfFx)} settings={C[Chunk740903.u.DM_AND_SPAM_PROTECTION]} />;
      break;
    case Chunk740903.u.AUTOMOD:
      e = <Chunk874993.Z guildId={require.id} />;
      break;
    case Chunk740903.u.PERMISSIONS:
      e = <Chunk733629.Z title={Chunk388032.intl.string(Chunk388032.t.BXoNiY)} settings={C[Chunk740903.u.PERMISSIONS]} />
  }
  return <Chunk255367.Fragment>{y !== Chunk740903.u.OVERVIEW && <Chunk755721.zx className={Chunk296205.back} innerClassName={Chunk296205.backButton} look={Chunk755721.zx.Looks.BLANK} size={Chunk755721.zx.Sizes.MIN} onClick={() => {
        (0, Chunk84613.K)(Chunk740903.u.OVERVIEW)
      }}>{<Chunk768762.Z className={Chunk296205.__invalid_arrow} direction={Chunk768762.Z.Directions.LEFT} />}{<Chunk481060.Text variant={"text-sm/semibold"} color={"interactive-normal"}>{Chunk388032.intl.string(Chunk388032.t["13/7kZ"])}</Chunk481060.Text>}</Chunk755721.zx>}{module}</Chunk255367.Fragment>
}