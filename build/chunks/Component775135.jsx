/** Chunk was on 21738 **/
/** chunk id: 775135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk108722 = require("./108722.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk571616 = require("./571616.jsx"),
  Chunk541041 = require("./541041.jsx"),
  Chunk289357 = require("./289357.jsx"),
  Chunk264328 = require("./264328.jsx"),
  Chunk636781 = require("./636781.jsx"),
  Chunk935158 = require("./935158.jsx"),
  Chunk836953 = require("./836953.jsx"),
  Chunk314457 = require("./314457.jsx"),
  Chunk536194 = require("./536194.js"),
  Chunk612340 = require("./612340.jsx"),
  Chunk860768 = require("./860768.jsx"),
  Chunk90166 = require("./90166.jsx"),
  Chunk940447 = require("./940447.jsx"),
  Chunk665037 = require("./665037.js"),
  Chunk946960 = require("./946960.js"),
  Chunk49999 = require("./49999.js");
let C = new Set([Chunk554146.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, Chunk554146.M.CHANNEL_NOTICE_GUILD_BANNER]);

function N(e) {
  e.stopPropagation()
}

function T(e) {
  var t;
  let {
    guild: n
  } = e, [p, g] = i.useState(null != (t = s.w.get(v.hV)) ? t : 0), f = (0, l.yK)(v.cJ, () => v.cA.filter(e => {
    let {
      dismissibleContentType: t,
      store: r
    } = e;
    returntrue === (null == r ? true : r.channelNoticePredicate(n, p)) && !C.has(t)
  }).map(e => e.dismissibleContentType), [n, p]);
  return (0, r.jsx)(c.Ay, {
    contentTypes: f,
    groupName: S.m.CHANNEL_NOTICES,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e, l = () => {
        var e;
        e = Date.now(), s.w.set(v.hV, e), g(e), i(S.i.UNKNOWN)
      }, c = (() => {
        switch (t) {
          case a.M.CHANNEL_NOTICE_HUBLINK:
            return (0, r.jsx)(h.A, {
              guild: n,
              markAsDismissed: l
            });
          case a.M.CHANNEL_NOTICE_INVITE:
            return (0, r.jsx)(E.A, {
              guild: n,
              markAsDismissed: l
            });
          case a.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, r.jsx)(d.A, {
              guild: n,
              markAsDismissed: l
            });
          case a.M.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, r.jsx)(y.A, {
              guild: n,
              markAsDismissed: l
            });
          case a.M.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, r.jsx)(u.A, {
              guild: n,
              markAsDismissed: l
            });
          case a.M.LINKED_ROLE_ADMIN_GUILD:
            return (0, r.jsx)(o.A, {
              guild: n,
              markAsDismissed: () => i(S.i.UNKNOWN)
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
let j = e => {
  let {
    guild: t
  } = e;
  switch ((0, I.A)(t)) {
    case I.G.ENABLE_PUBLIC_GUILD:
      return (0, r.jsx)(A.A, {
        guild: t
      });
    case I.G.MAX_MEMBER_COUNT:
      return (0, r.jsx)(O.A, {
        guild: t
      });
    case I.G.GUILD_LIVE_CHANNEL:
      return (0, r.jsx)(p.Ay, {
        guild: t
      });
    case I.G.GUILD_MFA_WARNING:
      return (0, r.jsx)(b.A, {
        guild: t
      });
    case I.G.COMMANDS_MIGRATION:
      return (0, r.jsx)(f.A, {
        guild: t
      });
    case I.G.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return (0, r.jsx)(m.A, {
        guild: t
      });
    case I.G.HUB_STUDY_ROOM:
      return (0, r.jsx)(g.A, {
        guild: t
      })
  }
  return _.P.isDisallowPopupsSet() ? null : (0, r.jsx)(T, {
    guild: e.guild
  })
}