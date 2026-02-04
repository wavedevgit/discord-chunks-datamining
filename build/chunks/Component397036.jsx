/** Chunk was on 44669 **/
/** chunk id: 397036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk599941 = require("./599941.js"),
  Chunk251766 = require("./251766.js"),
  Chunk950344 = require("./950344.js"),
  Chunk136179 = require("./136179.jsx"),
  Chunk250253 = require("./250253.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk18318 = require("./18318.js");

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e, b = (0, u.e)({
    guildId: t,
    channelId: n
  }), A = (0, c.uk)(t), y = (0, c.Tq)(t), O = (0, i.bG)([o.A], () => o.A.getGuild(t), [t]), j = null == O ? true : O.name, _ = (0, i.bG)([a.A], () => a.A.getChannel(n)), x = l.useMemo(() => {
    let e = {};
    for (let t of A)
      for (let n of t.subscription_listings_ids) e[n] = t.id;
    return e
  }, [A]);
  return ((0, d.A)({
    guildId: t,
    location: g.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
    relevantSubscriptionListingIds: b.map(e => e.id)
  }), null == O) ? (0, r.jsx)("div", {
    className: m.__invalid_spinnerContainer,
    children: (0, r.jsx)(s.y$y, {
      className: m.__invalid_spinner
    })
  }) : (0, r.jsxs)(s.ArX, {
    className: m.$$,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: m.DX,
      children: f.intl.format(f.t.xHMpym, {
        serverName: j,
        channelName: null == _ ? true : _.name
      })
    }), (0, r.jsx)(s.Text, {
      className: m.Lv,
      variant: "text-md/normal",
      color: "text-default",
      children: null == y ? true : y.description
    }), (0, r.jsx)(p.A, {
      guildId: t,
      children: b.filter(e => null != x[e.id]).map(e => (0, r.jsx)(h.A, {
        guildId: t,
        listingId: e.id,
        groupListingId: x[e.id],
        analyticsLocation: g.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL
      }, e.id))
    })]
  })
}