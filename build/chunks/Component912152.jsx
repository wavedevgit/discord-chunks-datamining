/** Chunk was on web.js **/
/** chunk id: 912152, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk99997 = require("./99997.js");

function _(e) {
  let {
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: r,
    subscriptionIsPausedOrPausePending: i
  } = e;
  if (i) return {
    flavor: d.intl.format(d.t.doslJi, {
      onClick: () => a.Z.open(c.oAB.SUBSCRIPTIONS)
    })
  };
  if (!r) return {
    subtitle: d.intl.string(d.t.oiWYAQ)
  };
  if (t) return {
    subtitle: d.intl.string(d.t.W5rDjY),
    flavor: d.intl.format(d.t.cUHcaW, {
      helpdeskArticle: o.Z.getArticleURL(c.BhN.GUILD_SUBSCRIPTIONS)
    })
  };
  let f = u.GP[u.Xh.PREMIUM_MONTH_GUILD],
    _ = s.ZP.getDefaultPrice(f.id, n),
    p = (0, l.og)((0, l.T4)(_.amount, _.currency), f.interval, f.intervalCount);
  return {
    subtitle: n ? d.intl.string(d.t.bhPzXV) : d.intl.string(d.t.Zs9h9f),
    flavor: d.intl.formatToPlainString(d.t.PGgTdH, {
      monthlyGuildBoostPrice: p
    })
  }
}
let p = function(e) {
  let {
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: a,
    subscriptionIsPausedOrPausePending: o
  } = e, {
    subtitle: s,
    flavor: l
  } = _({
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: a,
    subscriptionIsPausedOrPausePending: o
  });
  return (0, r.jsxs)("div", {
    className: f.wrapper,
    children: [(0, r.jsx)(i.X6q, {
      variant: "heading-lg/bold",
      className: f.subtitle,
      children: s
    }), null != l && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: l
    })]
  })
}