/** Chunk was on 1272 **/
/** chunk id: 122611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk705348 = require("./705348.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk377743 = require("./377743.jsx"),
  Chunk834743 = require("./834743.jsx"),
  Chunk862099 = require("./862099.jsx"),
  Chunk704631 = require("./704631.jsx"),
  Chunk819792 = require("./819792.jsx"),
  Chunk919285 = require("./919285.jsx"),
  Chunk118470 = require("./118470.jsx"),
  Chunk413307 = require("./413307.jsx"),
  Chunk374023 = require("./374023.js"),
  Chunk661599 = require("./661599.jsx"),
  Chunk617899 = require("./617899.jsx"),
  Chunk8521 = require("./8521.jsx"),
  Chunk760326 = require("./760326.jsx"),
  Chunk536687 = require("./536687.js"),
  Chunk652785 = require("./652785.js"),
  Chunk921944 = require("./921944.js");
let T = new Set([Chunk704215.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, Chunk704215.z.CHANNEL_NOTICE_GUILD_BANNER]);

function N(e) {
  e.stopPropagation()
}

function j(e) {
  var t;
  let {
    guild: n
  } = e, [p, g] = i.useState(null != (t = s.K.get(C.Iv)) ? t : 0), h = (0, l.Wu)(C.HG, () => C.XN.filter(e => {
    let {
      dismissibleContentType: t,
      store: r
    } = e;
    returntrue === (null == r ? true : r.channelNoticePredicate(n, p)) && !T.has(t)
  }).map(e => e.dismissibleContentType), [n, p]);
  return (0, r.jsx)(c.ZP, {
    contentTypes: h,
    groupName: S.R.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e, l = () => {
        var e;
        e = Date.now(), s.K.set(C.Iv, e), g(e), i(S.L.UNKNOWN)
      }, c = (() => {
        switch (t) {
          case a.z.CHANNEL_NOTICE_HUBLINK:
            return (0, r.jsx)(f.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_INVITE:
            return (0, r.jsx)(O.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, r.jsx)(d.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, r.jsx)(y.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, r.jsx)(u.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.LINKED_ROLE_ADMIN_GUILD:
            return (0, r.jsx)(o.Z, {
              guild: n,
              markAsDismissed: () => i(S.L.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == c ? null : (0, r.jsx)("div", {
        onContextMenu: N,
        children: c
      })
    }
  })
}
let P = e => {
  let {
    guild: t
  } = e;
  switch ((0, I.Z)(t)) {
    case I.R.ENABLE_PUBLIC_GUILD:
      return (0, r.jsx)(_.Z, {
        guild: t
      });
    case I.R.MAX_MEMBER_COUNT:
      return (0, r.jsx)(v.Z, {
        guild: t
      });
    case I.R.GUILD_LIVE_CHANNEL:
      return (0, r.jsx)(p.ZP, {
        guild: t
      });
    case I.R.GUILD_MFA_WARNING:
      return (0, r.jsx)(E.Z, {
        guild: t
      });
    case I.R.COMMANDS_MIGRATION:
      return (0, r.jsx)(h.Z, {
        guild: t
      });
    case I.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, r.jsx)(m.Z, {
        guild: t
      });
    case I.R.HUB_STUDY_ROOM:
      return (0, r.jsx)(g.Z, {
        guild: t
      })
  }
  return b.s.isDisallowPopupsSet() ? null : (0, r.jsx)(j, {
    guild: e.guild
  })
}