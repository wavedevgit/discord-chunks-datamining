/** Chunk was on web.js **/
/** chunk id: 237267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
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

function _(e) {
  let {
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: r,
    subscriptionIsPausedOrPausePending: i
  } = e;
  if (i) return {
    flavor: f.intl.format(f.t.doslJu, {
      onClick: () => (0, c.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, {
        section: u.nc_.SUBSCRIPTIONS
      })
    })
  };
  if (!r) return {
    subtitle: f.intl.string(f.t.oiWYAc)
  };
  if (t) return {
    subtitle: f.intl.string(f.t.W5rDjW),
    flavor: f.intl.format(f.t.cUHcaQ, {
      helpdeskArticle: a.A.getArticleURL(u.MVz.GUILD_SUBSCRIPTIONS)
    })
  };
  let p = d.hd[d.gD.PREMIUM_MONTH_GUILD],
    _ = s.Ay.getDefaultPrice(p.id, n),
    h = (0, o.CE)((0, o.$g)(_.amount, _.currency), p.interval, p.intervalCount);
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
    subscriptionIsPausedOrPausePending: s
  } = e, {
    subtitle: o,
    flavor: l
  } = _({
    hasAppliedGuildBoosts: t,
    hasBoostPerk: n,
    hasGuildAffinitiesOrInGuild: a,
    subscriptionIsPausedOrPausePending: s
  });
  return (0, r.jsxs)("div", {
    className: p.i,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/bold",
      className: p.V,
      children: o
    }), null != l && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: l
    })]
  })
}