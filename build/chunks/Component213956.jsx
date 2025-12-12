/** Chunk was on 384 **/
/** chunk id: 213956, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
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

function O() {
  let e, t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
    n = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(exports)),
    O = (0, Chunk442837.e7)([Chunk392885.Z], () => Chunk392885.Z.getCurrentPage());
  if (Chunk473749.useEffect(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: Chunk921944.L.AUTO
      })
    }, []), null == require) return null;
  let C = (0, Chunk598622.Q)(require);
  switch (O) {
    case Chunk740903.u.OVERVIEW:
      e = (0, Chunk54381.jsx)(Chunk464610.Z, {
        guild: require
      });
      break;
    case Chunk740903.u.CAPTCHA_AND_RAID_PROTECTION:
      e = (0, Chunk54381.jsx)(Chunk733629.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["53eF5o"]),
        settings: C[Chunk740903.u.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case Chunk740903.u.DM_AND_SPAM_PROTECTION:
      e = (0, Chunk54381.jsx)(Chunk733629.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.O0SfFy),
        settings: C[Chunk740903.u.DM_AND_SPAM_PROTECTION]
      });
      break;
    case Chunk740903.u.AUTOMOD:
      e = (0, Chunk54381.jsx)(Chunk874993.Z, {
        guildId: require.id
      });
      break;
    case Chunk740903.u.PERMISSIONS:
      e = (0, Chunk54381.jsx)(Chunk733629.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.BXoNiT),
        settings: C[Chunk740903.u.PERMISSIONS]
      })
  }
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [O !== Chunk740903.u.OVERVIEW && (0, Chunk54381.jsx)(Chunk481060.P3F, {
      className: Chunk824804.back,
      onClick: () => {
        (0, Chunk84613.K)(Chunk740903.u.OVERVIEW)
      },
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk824804.backButton,
        children: [(0, Chunk54381.jsx)(Chunk768762.Z, {
          direction: Chunk768762.Z.Directions.LEFT
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: Chunk388032.intl.string(Chunk388032.t["13/7kX"])
        })]
      })
    }), module]
  })
}