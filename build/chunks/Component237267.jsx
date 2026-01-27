/** Chunk was on 60667 **/
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
    subtitle: A,
    flavor: f
  } = function(e) {
    let {
      hasAppliedGuildBoosts: t,
      hasBoostPerk: n,
      hasGuildAffinitiesOrInGuild: r,
      subscriptionIsPausedOrPausePending: i
    } = e;
    if (i) return {
      flavor: _.intl.format(_.t.doslJu, {
        onClick: () => (0, c.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
          section: d.nc_.SUBSCRIPTIONS
        })
      })
    };
    if (!r) return {
      subtitle: _.intl.string(_.t.oiWYAc)
    };
    if (t) return {
      subtitle: _.intl.string(_.t.W5rDjW),
      flavor: _.intl.format(_.t.cUHcaQ, {
        helpdeskArticle: l.A.getArticleURL(d.MVz.GUILD_SUBSCRIPTIONS)
      })
    };
    let p = u.hd[u.gD.PREMIUM_MONTH_GUILD],
      m = s.Ay.getDefaultPrice(p.id, n),
      g = (0, a.CE)((0, a.$g)(m.amount, m.currency), p.interval, p.intervalCount);
    return {
      subtitle: n ? _.intl.string(_.t.bhPzXR) : _.intl.string(_.t.Zs9h9Z),
      flavor: _.intl.formatToPlainString(_.t.PGgTdA, {
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
    className: p.i,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: p.V,
      children: A
    }), null != f && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: f
    })]
  })
}