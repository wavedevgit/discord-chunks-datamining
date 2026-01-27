/** Chunk was on 77870 **/
/** chunk id: 950344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk300233 = require("./300233.jsx"),
  Chunk636194 = require("./636194.js"),
  Chunk700206 = require("./700206.js"),
  Chunk652215 = require("./652215.js");

function h(e) {
  var t;
  let {
    guildId: n,
    groupListingId: h,
    location: f,
    relevantSubscriptionListingIds: g
  } = e, m = (0, c.X)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: b
  } = (0, d.A)(h), A = null != b, y = (0, l.yK)([u.A], () => (null != g ? g : []).filter(e => {
    var t;
    return (null == (t = u.A.getSubscriptionListing(e)) ? true : t.published) === true
  }), [g]), {
    analyticsLocations: _
  } = (0, s.Ay)(null != (t = (0, a.UC)()) ? t : []), O = r.useRef(false);
  r.useEffect(() => {
    m && null != h && null != y && !O.current && (O.current = true, o.default.track(p.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, function(e) {
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
      role_subscription_listing_ids: y,
      is_premium_member: A,
      location_stack: _,
      location: f
    }, (0, i.H$)(n))))
  }, [n, h, m, f, y, A, _])
}