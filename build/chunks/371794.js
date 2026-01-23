/** Chunk was on web.js **/
/** chunk id: 371794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QB: () => I,
  VH: () => w,
  YE: () => C,
  ZH: () => M,
  aP: () => R,
  my: () => L,
  vy: () => T
}), require("./321073.js"), require("./896048.js"), require("./848778.js"), require("./65821.js"), require("./638769.js"), require("./938796.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk975975 = require("./975975.js"),
  l = require.n(Chunk975975),
  Chunk607399 = require("./607399.js"),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk384904 = require("./384904.js"),
  Chunk776231 = require("./776231.js"),
  Chunk961350 = require("./961350.js"),
  Chunk615405 = require("./615405.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk676279 = require("./676279.js"),
  Chunk403362 = require("./403362.js");
require("./723702.js");
var Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
require("./985018.jsx"), l().shim();
let I = !Chunk607399.Fr && !Chunk607399.v1 && false !== (0, Chunk676279.Z5)(),
  S = 3;

function T(e, t) {
  let {
    analyticsSource: n,
    analyticsProperties: r,
    storeListingId: i,
    slug: a,
    channelId: s,
    guildId: o
  } = t, l = {
    state: {
      analyticsSource: n,
      analyticsProperties: r
    },
    search: null != i ? "?store_listing_id=".concat(i) : ""
  };
  return A({
    pathname: null != s && null != o ? O.BVt.CHANNEL(o, s, e) : O.BVt.APPLICATION_STORE_LISTING_SKU(e, a)
  }, l)
}

function C(e, t, n, r) {
  var i;
  let a, s = window.GLOBAL_ENV.CDN_HOST;
  if (null == r) switch (t.mimeType || t.mime_type) {
    case "video/quicktime":
    case "video/mp4":
      r = "mp4";
      break;
    case "image/gif":
      r = "gif";
      break;
    default:
      r = "webp"
  }
  "webp" !== r || I || (r = "png");
  let o = "string" == typeof t ? t : t.id,
    l = i = "https:";
  return a = null != s ? "".concat(l, "//").concat(s, "/app-assets/").concat(e, "/store/").concat(o, ".").concat(r) : "".concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(O.Rsh.STORE_ASSET(e, o, r)), null != n && (a += "?size=".concat((0, p.kr)(n * (0, p.mZ)()))), a
}

function N() {
  return new Promise(async e => {
    if (g.A.hasFetchedSubscriptions()) e();
    else if (h.A.isSubscriptionFetching) {
      let t = () => {
        h.A.isSubscriptionFetching ? setTimeout(t, 50) : e()
      };
      t()
    } else await (0, f.hP)(), e()
  })
}
async function R(e) {
  var t, n, r, i;
  let a = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    s = _.default.isAuthenticated();
  if (a && s) {
    let e = [];
    m.A.hasFetchedPaymentSources || e.push(null != (r = h.A.paymentSourcesFetchRequest) ? r : (0, f.$o)()), h.A.ipCountryCodeLoaded || e.push((0, f.xe)()), e.push(N()), await Promise.race([Promise.allSettled(e), new Promise(e => setTimeout(e, 1e4))])
  }
  let o = m.A.getDefaultBillingCountryCode(),
    l = null != (t = null == (n = m.A.defaultPaymentSource) ? true : n.id) ? t : null,
    c = g.A.getPremiumTypeSubscription();
  null != c && null != c.paymentSourceId && (l = c.paymentSourceId), null === o && (o = null != (i = h.A.ipCountryCode) ? i : null);
  let u = {};
  if (null != o && (u.country_code = o), null != l && (u.payment_source_id = l), null != o || null != l) {
    if ("string" == typeof e && (e = {
        url: e,
        oldFormErrors: true,
        rejectWithError: false
      }), "string" == typeof e.query) throw Error("string query not supported");
    e.query = A({}, u, e.query)
  }
  return d.Bo.get(e)
}

function w(e, t, n) {
  let r = t.getApplication(e);
  return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId)
}

function P(e, t, n) {
  var r;
  let i = null != (r = n.getNowPlaying(e)) ? r : {},
    a = b.default.keys(i).map(e => {
      let n = t.getUser(e);
      return null == n ? null : {
        user: n,
        startTime: i[n.id].startedPlaying
      }
    }).filter(y.Vq).sort((e, t) => t.startTime - e.startTime);
  return 0 === a.length ? null : {
    type: O.g_B.NOW_PLAYING,
    userInfo: a
  }
}

function D(e, t, n) {
  let r = n.getStatisticsForApplication(e);
  if (null == r) return null;
  let i = r.map(e => {
    let n = t.getUser(e.user_id);
    return null == n ? null : {
      user: n,
      endTime: Date.parse(e.last_played_at)
    }
  }).filter(y.Vq).sort((e, t) => t.endTime - e.endTime);
  return 0 === i.length ? null : {
    type: O.g_B.EVER_PLAYED,
    userInfo: i
  }
}
let x = [];

function L(e, t, n, r, a) {
  let s = t.get(e);
  if (null == s) return x;
  let o = s.applicationId,
    l = [],
    c = [],
    u = P(o, n, r);
  null != u && (l.push(u), c = u.userInfo.map(e => {
    let {
      user: t
    } = e;
    return t.id
  }));
  let d = a.getStatisticsForApplication(o);
  if (null != d) {
    let e = d.map(e => e.user_id);
    if (i().difference(e, c).length > 0) {
      let e = D(o, n, a);
      null != e && l.push(e)
    }
  }
  return l
}
let j = [];

function M(e, t, n) {
  let r = t.get(e),
    i = n.getForSKU(e);
  if (null == r || null == i) return j;
  let a = [];
  (0, u.Lt)(r.flags, O.d68.HAS_FREE_PREMIUM_CONTENT) && a.push({
    type: O.g_B.HAS_FREE_PREMIUM_CONTENT
  });
  let o = r.releaseDate;
  return null != o && s()().diff(o, "months") < S && (r.accessType === O.ds3.EARLY_ACCESS ? a.push({
    type: O.g_B.EARLY_ACCESS,
    releaseDate: o
  }) : a.push({
    type: O.g_B.RECENT_RELEASE_DATE,
    releaseDate: o
  })), null != i.flavorText && a.push({
    type: O.g_B.FLAVOR_TEXT,
    flavorText: i.flavorText
  }), a
}