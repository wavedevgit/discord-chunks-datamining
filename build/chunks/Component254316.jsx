/** Chunk was on 8497 **/
/** chunk id: 254316, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544199 = require("./544199.js"),
  Chunk448564 = require("./448564.js"),
  Chunk997509 = require("./997509.js"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  let {
    guildId: t
  } = e, n = (0, o.bG)([S.A], () => S.A.getGuild(t)), [E, G] = r.useState(true);
  return (r.useEffect(() => {
    let e = setTimeout(() => {
      null == n && (0, c.pX)(b.BVt.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-onboarding"))
    }, 3e3);
    return () => clearTimeout(e)
  }, [n]), r.useEffect(() => {
    null != n && E && (d.A.hasSeenCreatorOnboardingForGuild(n.id) || (0, l.G)(n.id), u.A.open(n.id, b.BEX.ROLE_SUBSCRIPTIONS), G(false))
  }, [E, n]), null == n || E) ? (0, i.jsx)("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    },
    children: (0, i.jsx)(s.y$y, {})
  }) : (0, i.jsx)(a.rd, {
    to: b.BVt.CHANNEL(t)
  })
}