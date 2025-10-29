/** Chunk was on 91053 **/
/** chunk id: 660196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk730647 = require("./730647.jsx"),
  Chunk289393 = require("./289393.js"),
  Chunk934826 = require("./934826.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  var t;
  let {
    guildId: n,
    groupListingId: p,
    location: f,
    relevantSubscriptionListingIds: g
  } = e, m = (0, c.f)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: b
  } = (0, u.Z)(p), _ = null != b, y = (0, i.Wu)([d.Z], () => (null != g ? g : []).filter(e => {
    var t;
    return (null == (t = d.Z.getSubscriptionListing(e)) ? true : t.published) === true
  }), [g]), {
    analyticsLocations: x
  } = (0, a.ZP)(null != (t = (0, s.DR)()) ? t : []), j = r.useRef(false);
  r.useEffect(() => {
    m && null != p && null != y && !j.current && (j.current = true, o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      role_subscription_group_listing_id: p,
      role_subscription_listing_ids: y,
      is_premium_member: _,
      location_stack: x,
      location: f
    }, (0, l.hH)(n))))
  }, [n, p, m, f, y, _, x])
}