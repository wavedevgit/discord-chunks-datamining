/** Chunk was on 62987 **/
/** chunk id: 660196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  var t;
  let {
    guildId: n,
    groupListingId: h,
    location: f,
    relevantSubscriptionListingIds: m
  } = e, g = (0, c.f)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: b
  } = (0, d.Z)(h), y = null != b, _ = (0, i.Wu)([u.Z], () => (null != m ? m : []).filter(e => {
    var t;
    return (null == (t = u.Z.getSubscriptionListing(e)) ? true : t.published) === true
  }), [m]), {
    analyticsLocations: C
  } = (0, a.ZP)(null != (t = (0, o.DR)()) ? t : []), v = r.useRef(false);
  r.useEffect(() => {
    g && null != h && null != _ && !v.current && (v.current = true, s.default.track(p.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, function(e) {
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
      role_subscription_group_listing_id: h,
      role_subscription_listing_ids: _,
      is_premium_member: y,
      location_stack: C,
      location: f
    }, (0, l.hH)(n))))
  }, [n, h, g, f, _, y, C])
}