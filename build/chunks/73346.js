/** Chunk was on web.js **/
/** chunk id: 73346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gg: () => L,
  Kb: () => R,
  Ww: () => M,
  ZI: () => A,
  _W: () => C,
  uF: () => P
}), require("./539854.js"), require("./388685.js"), require("./993155.js"), require("./415506.js"), require("./642613.js"), require("./997841.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk991637 = require("./991637.js"),
  l = require.n(Chunk991637),
  Chunk873546 = require("./873546.js"),
  Chunk544891 = require("./544891.js"),
  Chunk355467 = require("./355467.js"),
  Chunk134432 = require("./134432.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk526167 = require("./526167.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js");
require("./358085.js");
var Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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
require("./388032.jsx"), l().shim();
let T = !Chunk873546.tq && !Chunk873546.Em && false !== (0, Chunk526167.vu)(),
  S = 3;

function A(e, t) {
  let {
    analyticsSource: n,
    analyticsProperties: r,
    storeListingId: i,
    slug: o,
    channelId: a,
    guildId: s
  } = t, l = {
    state: {
      analyticsSource: n,
      analyticsProperties: r
    },
    search: null != i ? "?store_listing_id=".concat(i) : ""
  };
  return I({
    pathname: null != a && null != s ? O.Z5c.CHANNEL(s, a, e) : O.Z5c.APPLICATION_STORE_LISTING_SKU(e, o)
  }, l)
}

function C(e, t, n, r) {
  var i;
  let o, a = window.GLOBAL_ENV.CDN_HOST;
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
  "webp" !== r || T || (r = "png");
  let s = "string" == typeof t ? t : t.id,
    l = i = "https:";
  return o = null != a ? "".concat(l, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(s, ".").concat(r) : "".concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(O.ANM.STORE_ASSET(e, s, r)), null != n && (o += "?size=".concat((0, f.oO)(n * (0, f.x_)()))), o
}

function N() {
  return new Promise(async e => {
    if (m.Z.hasFetchedSubscriptions()) e();
    else if (p.Z.isSubscriptionFetching) {
      let t = () => {
        p.Z.isSubscriptionFetching ? setTimeout(t, 50) : e()
      };
      t()
    } else await (0, d.jg)(), e()
  })
}
async function R(e) {
  var t, n, r, i;
  let o = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    a = _.default.isAuthenticated();
  if (o && a) {
    let e = [];
    h.Z.hasFetchedPaymentSources || e.push(null != (n = p.Z.paymentSourcesFetchRequest) ? n : (0, d.tZ)()), p.Z.ipCountryCodeLoaded || e.push((0, d.GE)()), e.push(N()), await Promise.race([Promise.allSettled(e), new Promise(e => setTimeout(e, 1e4))])
  }
  let s = h.Z.getDefaultBillingCountryCode(),
    l = null != (r = null == (t = h.Z.defaultPaymentSource) ? true : t.id) ? r : null,
    c = m.Z.getPremiumTypeSubscription();
  null != c && null != c.paymentSourceId && (l = c.paymentSourceId), null === s && (s = null != (i = p.Z.ipCountryCode) ? i : null);
  let f = {};
  if (null != s && (f.country_code = s), null != l && (f.payment_source_id = l), null != s || null != l) {
    if ("string" == typeof e && (e = {
        url: e,
        oldFormErrors: true,
        rejectWithError: false
      }), "string" == typeof e.query) throw Error("string query not supported");
    e.query = I({}, f, e.query)
  }
  return u.tn.get(e)
}

function P(e, t, n) {
  let r = t.getApplication(e);
  return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId)
}

function w(e, t, n) {
  var r;
  let i = null != (r = n.getNowPlaying(e)) ? r : {},
    o = y.default.keys(i).map(e => {
      let n = t.getUser(e);
      return null == n ? null : {
        user: n,
        startTime: i[n.id].startedPlaying
      }
    }).filter(b.lm).sort((e, t) => t.startTime - e.startTime);
  return 0 === o.length ? null : {
    type: O.AzA.NOW_PLAYING,
    userInfo: o
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
  }).filter(b.lm).sort((e, t) => t.endTime - e.endTime);
  return 0 === i.length ? null : {
    type: O.AzA.EVER_PLAYED,
    userInfo: i
  }
}
let x = [];

function L(e, t, n, r, o) {
  let a = t.get(e);
  if (null == a) return x;
  let s = a.applicationId,
    l = [],
    c = [],
    u = w(s, n, r);
  null != u && (l.push(u), c = u.userInfo.map(e => {
    let {
      user: t
    } = e;
    return t.id
  }));
  let d = o.getStatisticsForApplication(s);
  if (null != d) {
    let e = d.map(e => e.user_id);
    if (i().difference(e, c).length > 0) {
      let e = D(s, n, o);
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
  let o = [];
  (0, E.yE)(r.flags, O.l4R.HAS_FREE_PREMIUM_CONTENT) && o.push({
    type: O.AzA.HAS_FREE_PREMIUM_CONTENT
  });
  let s = r.releaseDate;
  return null != s && a()().diff(s, "months") < S && (r.accessType === O.kGb.EARLY_ACCESS ? o.push({
    type: O.AzA.EARLY_ACCESS,
    releaseDate: s
  }) : o.push({
    type: O.AzA.RECENT_RELEASE_DATE,
    releaseDate: s
  })), null != i.flavorText && o.push({
    type: O.AzA.FLAVOR_TEXT,
    flavorText: i.flavorText
  }), o
}