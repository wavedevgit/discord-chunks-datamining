/** Chunk was on 21087 **/
/** chunk id: 180216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk584825 = require("./584825.js"),
  Chunk406074 = require("./406074.js"),
  Chunk660196 = require("./660196.js"),
  Chunk36246 = require("./36246.jsx"),
  Chunk305342 = require("./305342.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116957 = require("./116957.js");

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e, b = (0, u.C)({
    guildId: t,
    channelId: n
  }), y = (0, c.GG)(t), x = (0, c.YB)(t), j = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]), _ = null == j ? true : j.name, O = (0, l.e7)([s.Z], () => s.Z.getChannel(n)), v = i.useMemo(() => {
    let e = {};
    for (let t of y)
      for (let n of t.subscription_listings_ids) e[n] = t.id;
    return e
  }, [y]);
  return ((0, d.Z)({
    guildId: t,
    location: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
    relevantSubscriptionListingIds: b.map(e => e.id)
  }), null == j) ? (0, r.jsx)("div", {
    className: m.__invalid_spinnerContainer,
    children: (0, r.jsx)(a.$jN, {
      className: m.__invalid_spinner
    })
  }) : (0, r.jsxs)(a.w0Z, {
    className: m.pageContainer,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xl/semibold",
      className: m.joinCtaTitle,
      children: g.intl.format(g.t.xHMpys, {
        serverName: _,
        channelName: null == O ? true : O.name
      })
    }), (0, r.jsx)(a.Text, {
      className: m.joinCtaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: null == x ? true : x.description
    }), (0, r.jsx)(h.Z, {
      guildId: t,
      children: b.filter(e => null != v[e.id]).map(e => (0, r.jsx)(p.Z, {
        guildId: t,
        listingId: e.id,
        groupListingId: v[e.id],
        analyticsLocation: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
      }, e.id))
    })]
  })
}