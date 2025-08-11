/** Chunk was on 75708 **/
/** chunk id: 912152, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839058 = require("./839058.js");
let p = function(e) {
  let {
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: p,
    subscriptionIsPausedOrPausePending: g
  } = e, {
    subtitle: h,
    flavor: f
  } = function(e) {
    let {
      hasAppliedGuildBoosts: t,
      hasBoostPerk: n,
      hasGuildAffinitiesOrInGuild: i,
      subscriptionIsPausedOrPausePending: r
    } = e;
    if (r) return {
      flavor: u.intl.format(u.t.doslJi, {
        onClick: () => s.Z.open(c.oAB.SUBSCRIPTIONS)
      })
    };
    if (!i) return {
      subtitle: u.intl.string(u.t.oiWYAQ)
    };
    if (t) return {
      subtitle: u.intl.string(u.t.W5rDjY),
      flavor: u.intl.format(u.t.cUHcaW, {
        helpdeskArticle: a.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS)
      })
    };
    let m = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
      p = l.ZP.getDefaultPrice(m.id, n),
      g = (0, o.og)((0, o.T4)(p.amount, p.currency), m.interval, m.intervalCount);
    return {
      subtitle: n ? u.intl.string(u.t.bhPzXV) : u.intl.string(u.t.Zs9h9f),
      flavor: u.intl.formatToPlainString(u.t.PGgTdH, {
        monthlyGuildBoostPrice: g
      })
    }
  }({
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: p,
    subscriptionIsPausedOrPausePending: g
  });
  return <div className={m.wrapper}>{<r.X6q variant={"heading-lg/bold"} className={m.subtitle}>{h}</r.X6q>}{null != f && <r.Text variant={"text-sm/normal"}>{f}</r.Text>}</div>
}