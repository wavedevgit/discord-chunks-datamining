/** Chunk was on 91053 **/
/** chunk id: 180216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk200813 = require("./200813.js");

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e, b = (0, d.C)({
    guildId: t,
    channelId: n
  }), _ = (0, c.GG)(t), y = (0, c.YB)(t), v = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]), j = null == v ? true : v.name, x = (0, l.e7)([s.Z], () => s.Z.getChannel(n)), O = i.useMemo(() => {
    let e = {};
    for (let t of _)
      for (let n of t.subscription_listings_ids) e[n] = t.id;
    return e
  }, [_]);
  return ((0, u.Z)({
    guildId: t,
    location: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
    relevantSubscriptionListingIds: b.map(e => e.id)
  }), null == v) ? (0, r.jsx)("div", {
    className: m.__invalid_spinnerContainer,
    children: (0, r.jsx)(a.$jN, {
      className: m.__invalid_spinner
    })
  }) : (0, r.jsxs)(a.w0Z, {
    className: m.pageContainer,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      className: m.joinCtaTitle,
      children: g.intl.format(g.t.xHMpym, {
        serverName: j,
        channelName: null == x ? true : x.name
      })
    }), (0, r.jsx)(a.Text, {
      className: m.joinCtaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: null == y ? true : y.description
    }), (0, r.jsx)(p.Z, {
      guildId: t,
      children: b.filter(e => null != O[e.id]).map(e => (0, r.jsx)(h.Z, {
        guildId: t,
        listingId: e.id,
        groupListingId: O[e.id],
        analyticsLocation: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
      }, e.id))
    })]
  })
}