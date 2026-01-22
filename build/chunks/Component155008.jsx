/** Chunk was on 47841 **/
/** chunk id: 155008, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk826673 = require("./826673.js"),
  Chunk774780 = require("./774780.jsx"),
  Chunk532197 = require("./532197.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk555337 = require("./555337.js"),
  Chunk203498 = require("./203498.js"),
  Chunk982832 = require("./982832.js"),
  Chunk660496 = require("./660496.js"),
  Chunk88613 = require("./88613.jsx"),
  Chunk807334 = require("./807334.jsx"),
  Chunk5558 = require("./5558.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690450 = require("./690450.js");

function v() {
  let e, t = (0, l.bG)([f.A], () => f.A.getGuildId()),
    n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
    v = (0, l.bG)([b.A], () => b.A.getCurrentPage());
  if (i.useEffect(() => {
      (0, c.Dr)(s.M.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: j.i.AUTO
      })
    }, []), null == n) return null;
  let A = (0, h.N)(n);
  switch (v) {
    case m.C.OVERVIEW:
      e = (0, r.jsx)(p.A, {
        guild: n
      });
      break;
    case m.C.CAPTCHA_AND_RAID_PROTECTION:
      e = (0, r.jsx)(x.A, {
        title: O.intl.string(O.t["53eF5o"]),
        settings: A[m.C.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case m.C.DM_AND_SPAM_PROTECTION:
      e = (0, r.jsx)(x.A, {
        title: O.intl.string(O.t.O0SfFy),
        settings: A[m.C.DM_AND_SPAM_PROTECTION]
      });
      break;
    case m.C.AUTOMOD:
      e = (0, r.jsx)(o.A, {
        guildId: n.id
      });
      break;
    case m.C.PERMISSIONS:
      e = (0, r.jsx)(x.A, {
        title: O.intl.string(O.t.BXoNiT),
        settings: A[m.C.PERMISSIONS]
      })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [v !== m.C.OVERVIEW && (0, r.jsx)(a.DUT, {
      className: y.aX,
      onClick: () => {
        (0, g.K)(m.C.OVERVIEW)
      },
      children: (0, r.jsxs)("div", {
        className: y.Gv,
        children: [(0, r.jsx)(d.A, {
          direction: d.A.Directions.LEFT
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: O.intl.string(O.t["13/7kX"])
        })]
      })
    }), e]
  })
}