/** Chunk was on web.js **/
/** chunk id: 912152, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923540 = require("./923540.js");

function _(e) {
  let {
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: r,
    subscriptionIsPausedOrPausePending: i
  } = e;
  if (i) return {
    flavor: f.intl.format(f.t.doslJu, {
      onClick: () => (0, c.openUserSettings)(l.n.SUBSCRIPTIONS_PANEL, {
        section: u.oAB.SUBSCRIPTIONS
      })
    })
  };
  if (!r) return {
    subtitle: f.intl.string(f.t.oiWYAc)
  };
  if (t) return {
    subtitle: f.intl.string(f.t.W5rDjW),
    flavor: f.intl.format(f.t.cUHcaQ, {
      helpdeskArticle: a.Z.getArticleURL(u.BhN.GUILD_SUBSCRIPTIONS)
    })
  };
  let p = d.GP[d.Xh.PREMIUM_MONTH_GUILD],
    _ = o.ZP.getDefaultPrice(p.id, n),
    h = (0, s.og)((0, s.T4)(_.amount, _.currency), p.interval, p.intervalCount);
  return {
    subtitle: n ? f.intl.string(f.t.bhPzXR) : f.intl.string(f.t.Zs9h9Z),
    flavor: f.intl.formatToPlainString(f.t.PGgTdA, {
      monthlyGuildBoostPrice: h
    })
  }
}
let h = function(e) {
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
    className: p.wrapper,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: p.subtitle,
      children: s
    }), null != l && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: l
    })]
  })
}