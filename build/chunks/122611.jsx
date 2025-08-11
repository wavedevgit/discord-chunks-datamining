/** Chunk was on 1272 **/
/** chunk id: 122611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk705348 = require("./705348.js"),
  Chunk243778 = require("./243778.js"),
  Chunk377743 = require("./377743.js"),
  Chunk834743 = require("./834743.js"),
  Chunk862099 = require("./862099.js"),
  Chunk704631 = require("./704631.js"),
  Chunk819792 = require("./819792.js"),
  Chunk919285 = require("./919285.js"),
  Chunk118470 = require("./118470.jsx"),
  Chunk413307 = require("./413307.js"),
  Chunk374023 = require("./374023.js"),
  Chunk661599 = require("./661599.js"),
  Chunk617899 = require("./617899.js"),
  Chunk8521 = require("./8521.jsx"),
  Chunk760326 = require("./760326.js"),
  Chunk785203 = require("./785203.js"),
  Chunk652785 = require("./652785.js"),
  Chunk921944 = require("./921944.js");
let N = new Set([Chunk704215.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, Chunk704215.z.CHANNEL_NOTICE_GUILD_BANNER]);

function T(e) {
  e.stopPropagation()
}

function P(e) {
  var t;
  let {
    guild: n
  } = e, [p, h] = i.useState(null != (t = o.K.get(C.Iv)) ? t : 0), g = e => {
    o.K.set(C.Iv, e), h(e)
  }, m = (0, l.Wu)(C.HG, () => C.XN.filter(e => {
    let {
      dismissibleContentType: t,
      store: r
    } = e;
    returntrue === (null == r ? true : r.channelNoticePredicate(n, p)) && !N.has(t)
  }).map(e => e.dismissibleContentType), [n, p]);
  return <c.ZP contentTypes={m} groupName={S.R.CHANNEL_NOTICES}>{e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e, l = () => {
        g(Date.now()), i(S.L.UNKNOWN)
      }, o = (() => {
        switch (t) {
          case a.z.CHANNEL_NOTICE_HUBLINK:
            return (0, r.jsx)(f.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_INVITE:
            return (0, r.jsx)(E.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
            return (0, r.jsx)(d.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
            return (0, r.jsx)(v.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.CHANNEL_NOTICE_GUILD_BANNER:
            return (0, r.jsx)(u.Z, {
              guild: n,
              markAsDismissed: l
            });
          case a.z.LINKED_ROLE_ADMIN_GUILD:
            return (0, r.jsx)(s.Z, {
              guild: n,
              markAsDismissed: () => i(S.L.UNKNOWN)
            });
          default:
            return null
        }
      })();
      return null == o ? null : (0, r.jsx)("div", {
        onContextMenu: T,
        children: o
      })
    }}</c.ZP>
}
let j = e => {
  let {
    guild: t
  } = e;
  switch ((0, I.Z)(t)) {
    case I.R.ENABLE_PUBLIC_GUILD:
      return <b.Z guild={t} />;
    case I.R.MAX_MEMBER_COUNT:
      return <y.Z guild={t} />;
    case I.R.GUILD_LIVE_CHANNEL:
      return <p.ZP guild={t} />;
    case I.R.GUILD_MFA_WARNING:
      return <O.Z guild={t} />;
    case I.R.COMMANDS_MIGRATION:
      return <g.Z guild={t} />;
    case I.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
      return <m.Z guild={t} />;
    case I.R.HUB_STUDY_ROOM:
      return <h.Z guild={t} />
  }
  return _.s.isDisallowPopupsSet() ? null : <P guild={e.guild} />
}