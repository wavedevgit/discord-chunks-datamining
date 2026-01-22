/** Chunk was on 97492 **/
/** chunk id: 950344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  var t;
  let {
    guildId: n,
    groupListingId: p,
    location: h,
    relevantSubscriptionListingIds: b
  } = e, g = (0, c.X)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: m
  } = (0, d.A)(p), A = null != m, y = (0, l.yK)([u.A], () => (null != b ? b : []).filter(e => {
    var t;
    return (null == (t = u.A.getSubscriptionListing(e)) ? true : t.published) === true
  }), [b]), {
    analyticsLocations: O
  } = (0, a.Ay)(null != (t = (0, s.UC)()) ? t : []), j = r.useRef(false);
  r.useEffect(() => {
    g && null != p && null != y && !j.current && (j.current = true, o.default.track(f.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, function(e) {
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
      is_premium_member: A,
      location_stack: O,
      location: h
    }, (0, i.H$)(n))))
  }, [n, p, g, h, y, A, O])
}