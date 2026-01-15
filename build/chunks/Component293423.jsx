/** Chunk was on 1272 **/
/** chunk id: 293423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk905442 = require("./905442.js");
let b = e => {
  var t, n;
  let {
    guild: b
  } = e, E = (0, l.GG)(b.id)[0];
  (0, s.Z)({
    guildId: b.id,
    groupListingId: null == E ? true : E.id,
    location: g.Sbl.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == E ? true : E.subscription_listings_ids
  });
  let {
    activeSubscription: _
  } = (0, o.Z)(null == E ? true : E.id), O = (0, l.YB)(b.id), v = null == O ? true : O.description, {
    editStateIds: I
  } = a.B7(null != (t = null == E ? true : E.id) ? t : null, b.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(f.Z, {
      title: h.intl.format(h.t["rm+ojA"], {
        serverName: b.name
      }),
      description: null != v ? v : null,
      coverImageAsset: null != (n = null == O ? true : O.cover_image_asset) ? n : null,
      guild: b,
      children: [null != E ? (0, r.jsx)(c.Z, {
        className: m.pendingPlanChangeNotice,
        groupListingId: E.id,
        subscription: _
      }) : null, (0, r.jsx)(u.Z, {
        subscription: _
      })]
    }), (0, r.jsx)(i.y5t, {
      children: (0, r.jsx)(d.Z, {
        guildId: b.id,
        children: I.map(e => {
          var t;
          return (0, r.jsx)(p.Z, {
            guildId: b.id,
            groupListingId: null != (t = null == E ? true : E.id) ? t : "",
            listingId: e,
            analyticsLocation: g.Sbl.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })
      })
    })]
  })
}