/** Chunk was on 21738 **/
/** chunk id: 715837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
let A = e => {
  var t, n;
  let {
    guild: A
  } = e, _ = (0, l.uk)(A.id)[0];
  (0, o.A)({
    guildId: A.id,
    groupListingId: null == _ ? true : _.id,
    location: g.ThZ.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == _ ? true : _.subscription_listings_ids
  });
  let {
    activeSubscription: b
  } = (0, s.A)(null == _ ? true : _.id), E = (0, l.Tq)(A.id), O = null == E ? true : E.description, {
    editStateIds: y
  } = a.d0(null != (t = null == _ ? true : _.id) ? t : null, A.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(h.A, {
      title: m.intl.format(m.t["rm+ojA"], {
        serverName: A.name
      }),
      description: null != O ? O : null,
      coverImageAsset: null != (n = null == E ? true : E.cover_image_asset) ? n : null,
      guild: A,
      children: [null != _ ? (0, r.jsx)(c.A, {
        className: f.Ds,
        groupListingId: _.id,
        subscription: b
      }) : null, (0, r.jsx)(u.A, {
        subscription: b
      })]
    }), (0, r.jsx)(i.Fmo, {
      children: (0, r.jsx)(d.A, {
        guildId: A.id,
        children: y.map(e => {
          var t;
          return (0, r.jsx)(p.A, {
            guildId: A.id,
            groupListingId: null != (t = null == _ ? true : _.id) ? t : "",
            listingId: e,
            analyticsLocation: g.ThZ.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}