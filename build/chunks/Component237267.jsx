/** Chunk was on 5606 **/
/** chunk id: 237267, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk689507 = require("./689507.js");
let m = function(e) {
  let {
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: m,
    subscriptionIsPausedOrPausePending: g
  } = e, {
    subtitle: f,
    flavor: b
  } = function(e) {
    let {
      hasAppliedGuildBoosts: t,
      hasBoostPerk: n,
      hasGuildAffinitiesOrInGuild: r,
      subscriptionIsPausedOrPausePending: i
    } = e;
    if (i) return {
      flavor: p.intl.format(p.t.doslJu, {
        onClick: () => (0, c.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
          section: d.nc_.SUBSCRIPTIONS
        })
      })
    };
    if (!r) return {
      subtitle: p.intl.string(p.t.oiWYAc)
    };
    if (t) return {
      subtitle: p.intl.string(p.t.W5rDjW),
      flavor: p.intl.format(p.t.cUHcaQ, {
        helpdeskArticle: l.A.getArticleURL(d.MVz.GUILD_SUBSCRIPTIONS)
      })
    };
    let _ = u.hd[u.gD.PREMIUM_MONTH_GUILD],
      m = s.Ay.getDefaultPrice(_.id, n),
      g = (0, a.CE)((0, a.$g)(m.amount, m.currency), _.interval, _.intervalCount);
    return {
      subtitle: n ? p.intl.string(p.t.bhPzXR) : p.intl.string(p.t.Zs9h9Z),
      flavor: p.intl.formatToPlainString(p.t.PGgTdA, {
        monthlyGuildBoostPrice: g
      })
    }
  }({
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: m,
    subscriptionIsPausedOrPausePending: g
  });
  return (0, r.jsxs)("div", {
    className: _.i,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: _.V,
      children: f
    }), null != b && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: b
    })]
  })
}