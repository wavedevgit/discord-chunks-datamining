/** Chunk was on 1272 **/
/** chunk id: 293423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk584825 = require("./584825.js"),
  Chunk290348 = require("./290348.js"),
  Chunk934826 = require("./934826.js"),
  Chunk660196 = require("./660196.js"),
  Chunk330181 = require("./330181.js"),
  Chunk939225 = require("./939225.js"),
  Chunk36246 = require("./36246.jsx"),
  Chunk305342 = require("./305342.js"),
  Chunk726324 = require("./726324.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk210998 = require("./210998.js");
let b = e => {
  var t, n;
  let {
    guild: b
  } = e, _ = (0, l.GG)(b.id)[0];
  (0, s.Z)({
    guildId: b.id,
    groupListingId: null == _ ? true : _.id,
    location: h.Sbl.ROLE_SUBSCRIPTIONS_TAB,
    relevantSubscriptionListingIds: null == _ ? true : _.subscription_listings_ids
  });
  let {
    activeSubscription: O
  } = (0, o.Z)(null == _ ? true : _.id), E = (0, l.YB)(b.id), y = null == E ? true : E.description, {
    editStateIds: v
  } = a.B7(null != (t = null == _ ? true : _.id) ? t : null, b.id);
  return <r.Fragment>{<f.Z title={g.intl.format(g.t["rm+ojI"], {
        serverName: b.name
      })} description={null != y ? y : null} coverImageAsset={null != (n = null == E ? true : E.cover_image_asset) ? n : null} guild={b}>{null != _ ? <c.Z className={m.pendingPlanChangeNotice} groupListingId={_.id} subscription={O} /> : null}{<u.Z subscription={O} />}</f.Z>}{<i.y5t><d.Z guildId={b.id}>{v.map(e => {
          var t;
          return (0, r.jsx)(p.Z, {
            guildId: b.id,
            groupListingId: null != (t = null == _ ? true : _.id) ? t : "",
            listingId: e,
            analyticsLocation: h.Sbl.ROLE_SUBSCRIPTIONS_TAB
          }, e)
        })}</d.Z></i.y5t>}</r.Fragment>
}