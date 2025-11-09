/** Chunk was on 1272 **/
/** chunk id: 293423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk584825 = require("./584825.js"),
  Chunk290348 = require("./290348.js"),
  Chunk934826 = require("./934826.js"),
  Chunk660196 = require("./660196.js"),
  Chunk330181 = require("./330181.jsx"),
  Chunk939225 = require("./939225.jsx"),
  Chunk36246 = require("./36246.jsx"),
  Chunk305342 = require("./305342.jsx"),
  Chunk726324 = require("./726324.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk651254 = require("./651254.js");
let _ = e => {
  var t, n;
  let {
    guild: _
  } = e, b = (0, l.GG)(_.id)[0];
  (0, o.Z)({
    guildId: _.id,
    groupListingId: null == b ? true : b.id,
    location: h.Sbl.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == b ? true : b.subscription_listings_ids
  });
  let {
    activeSubscription: E
  } = (0, s.Z)(null == b ? true : b.id), O = (0, l.YB)(_.id), y = null == O ? true : O.description, {
    editStateIds: v
  } = a.B7(null != (t = null == b ? true : b.id) ? t : null, _.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.Z, {
      title: g.intl.format(g.t["rm+ojA"], {
        serverName: _.name
      }),
      description: null != y ? y : null,
      coverImageAsset: null != (n = null == O ? true : O.cover_image_asset) ? n : null,
      guild: _,
      children: [null != b ? (0, r.jsx)(c.Z, {
        className: m.pendingPlanChangeNotice,
        groupListingId: b.id,
        subscription: E
      }) : null, (0, r.jsx)(u.Z, {
        subscription: E
      })]
    }), (0, r.jsx)(i.y5t, {
      children: (0, r.jsx)(d.Z, {
        guildId: _.id,
        children: v.map(e => {
          var t;
          return (0, r.jsx)(p.Z, {
            guildId: _.id,
            groupListingId: null != (t = null == b ? true : b.id) ? t : "",
            listingId: e,
            analyticsLocation: h.Sbl.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}