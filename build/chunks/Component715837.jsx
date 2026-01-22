/** Chunk was on 21738 **/
/** chunk id: 715837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk599941 = require("./599941.js"),
  Chunk922975 = require("./922975.js"),
  Chunk700206 = require("./700206.js"),
  Chunk950344 = require("./950344.js"),
  Chunk815332 = require("./815332.jsx"),
  Chunk456540 = require("./456540.jsx"),
  Chunk136179 = require("./136179.jsx"),
  Chunk250253 = require("./250253.jsx"),
  Chunk406140 = require("./406140.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk510465 = require("./510465.js");
let m = e => {
  var t, n;
  let {
    guild: m
  } = e, b = (0, l.uk)(m.id)[0];
  (0, o.A)({
    guildId: m.id,
    groupListingId: null == b ? true : b.id,
    location: h.ThZ.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == b ? true : b.subscription_listings_ids
  });
  let {
    activeSubscription: _
  } = (0, s.A)(null == b ? true : b.id), E = (0, l.Tq)(m.id), O = null == E ? true : E.description, {
    editStateIds: y
  } = a.d0(null != (t = null == b ? true : b.id) ? t : null, m.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.A, {
      title: A.intl.format(A.t["rm+ojA"], {
        serverName: m.name
      }),
      description: null != O ? O : null,
      coverImageAsset: null != (n = null == E ? true : E.cover_image_asset) ? n : null,
      guild: m,
      children: [null != b ? (0, r.jsx)(c.A, {
        className: g.Ds,
        groupListingId: b.id,
        subscription: _
      }) : null, (0, r.jsx)(u.A, {
        subscription: _
      })]
    }), (0, r.jsx)(i.Fmo, {
      children: (0, r.jsx)(d.A, {
        guildId: m.id,
        children: y.map(e => {
          var t;
          return (0, r.jsx)(p.A, {
            guildId: m.id,
            groupListingId: null != (t = null == b ? true : b.id) ? t : "",
            listingId: e,
            analyticsLocation: h.ThZ.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}