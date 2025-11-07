/** Chunk was on 64982 **/
/** chunk id: 213956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk874993 = require("./874993.jsx"),
  Chunk768762 = require("./768762.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84613 = require("./84613.js"),
  Chunk392885 = require("./392885.js"),
  Chunk740903 = require("./740903.js"),
  Chunk464610 = require("./464610.jsx"),
  Chunk733629 = require("./733629.jsx"),
  Chunk598622 = require("./598622.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

function C() {
  let e, t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
    n = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    C = (0, Chunk442837.e7)([Chunk392885.Z], () => Chunk392885.Z.getCurrentPage());
  if (Chunk647438.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), null == require) return null;
  let y = (0, Chunk598622.Q)(require);
  switch (C) {
    case Chunk740903.u.OVERVIEW:
      e = (0, Chunk951288.jsx)(Chunk464610.Z, {
        guild: require
      });
      break;
    case Chunk740903.u.CAPTCHA_AND_RAID_PROTECTION:
      e = (0, Chunk951288.jsx)(Chunk733629.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["53eF5o"]),
        settings: y[Chunk740903.u.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case Chunk740903.u.DM_AND_SPAM_PROTECTION:
      e = (0, Chunk951288.jsx)(Chunk733629.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.O0SfFy),
        settings: y[Chunk740903.u.DM_AND_SPAM_PROTECTION]
      });
      break;
    case Chunk740903.u.AUTOMOD:
      e = (0, Chunk951288.jsx)(Chunk874993.Z, {
        guildId: require.id
      });
      break;
    case Chunk740903.u.PERMISSIONS:
      e = (0, Chunk951288.jsx)(Chunk733629.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.BXoNiT),
        settings: y[Chunk740903.u.PERMISSIONS]
      })
  }
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [C !== Chunk740903.u.OVERVIEW && (0, Chunk951288.jsxs)(Chunk755721.zx, {
      className: Chunk824804.back,
      innerClassName: Chunk824804.backButton,
      look: Chunk755721.zx.Looks.BLANK,
      size: Chunk755721.zx.Sizes.MIN,
      onClick: () => {
        (0, Chunk84613.K)(Chunk740903.u.OVERVIEW)
      },
      children: [(0, Chunk951288.jsx)(Chunk768762.Z, {
        className: Chunk824804.__invalid_arrow,
        direction: Chunk768762.Z.Directions.LEFT
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
        children: Chunk388032.intl.string(Chunk388032.t["13/7kX"])
      })]
    }), module]
  })
}