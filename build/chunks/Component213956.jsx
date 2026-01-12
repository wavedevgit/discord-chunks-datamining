/** Chunk was on 9536 **/
/** chunk id: 213956, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk146473 = require("./146473.js");

function y() {
  let e, t = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
    n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
    y = (0, l.e7)([f.Z], () => f.Z.getCurrentPage());
  if (i.useEffect(() => {
      (0, o.Q3)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: j.L.AUTO
      })
    }, []), null == n) return null;
  let C = (0, x.Q)(n);
  switch (y) {
    case b.u.OVERVIEW:
      e = (0, r.jsx)(p.Z, {
        guild: n
      });
      break;
    case b.u.CAPTCHA_AND_RAID_PROTECTION:
      e = (0, r.jsx)(h.Z, {
        title: v.intl.string(v.t["53eF5o"]),
        settings: C[b.u.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case b.u.DM_AND_SPAM_PROTECTION:
      e = (0, r.jsx)(h.Z, {
        title: v.intl.string(v.t.O0SfFy),
        settings: C[b.u.DM_AND_SPAM_PROTECTION]
      });
      break;
    case b.u.AUTOMOD:
      e = (0, r.jsx)(c.Z, {
        guildId: n.id
      });
      break;
    case b.u.PERMISSIONS:
      e = (0, r.jsx)(h.Z, {
        title: v.intl.string(v.t.BXoNiT),
        settings: C[b.u.PERMISSIONS]
      })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [y !== b.u.OVERVIEW && (0, r.jsx)(s.P3F, {
      className: O.back,
      onClick: () => {
        (0, m.K)(b.u.OVERVIEW)
      },
      children: (0, r.jsxs)("div", {
        className: O.backButton,
        children: [(0, r.jsx)(d.Z, {
          direction: d.Z.Directions.LEFT
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: v.intl.string(v.t["13/7kX"])
        })]
      })
    }), e]
  })
}