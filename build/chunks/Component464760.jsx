/** Chunk was on 55942 **/
/** chunk id: 464760, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk17079 = require("./17079.js"),
  Chunk709246 = require("./709246.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let {
    guildId: n
  } = e, t = (0, a.e7)([S.Z], () => S.Z.getGuild(n)), [E, p] = o.useState(true);
  return (o.useEffect(() => {
    let e = setTimeout(() => {
      null == t && (0, c.uL)(b.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-onboarding"))
    }, 3e3);
    return () => clearTimeout(e)
  }, [t]), o.useEffect(() => {
    null != t && E && (u.Z.hasSeenCreatorOnboardingForGuild(t.id) || (0, l.k)(t.id), d.Z.open(t.id, b.pNK.ROLE_SUBSCRIPTIONS), p(false))
  }, [E, t]), null == t || E) ? (0, i.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    },
    children: (0, i.jsx)(s.$jN, {})
  }) : (0, i.jsx)(r.l_, {
    to: b.Z5c.CHANNEL(n)
  })
}