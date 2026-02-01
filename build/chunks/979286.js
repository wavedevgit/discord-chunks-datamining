/** Chunk was on web.js **/
/** chunk id: 979286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BX: () => Y,
  CK: () => L,
  Cz: () => N,
  JJ: () => U,
  Jp: () => M,
  LX: () => V,
  Og: () => G,
  Or: () => B,
  RD: () => R,
  RE: () => j,
  Sw: () => w,
  gB: () => x,
  gn: () => D,
  h$: () => F,
  iJ: () => k,
  ue: () => H
}), require("./896048.js"), require("./457529.js");
var Chunk782111 = require("./782111.js"),
  Chunk148803 = require("./148803.js"),
  Chunk635358 = require("./635358.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js");
require("./398590.js");
var Chunk198982 = require("./198982.js"),
  Chunk865116 = require("./865116.js");
require("./250953.js");
var Chunk976860 = require("./976860.js"),
  Chunk773669 = require("./773669.js"),
  Chunk590180 = require("./590180.js"),
  Chunk752447 = require("./752447.js"),
  Chunk4227 = require("./4227.js"),
  Chunk355889 = require("./355889.js"),
  Chunk526751 = require("./526751.js"),
  Chunk986630 = require("./986630.js"),
  Chunk739380 = require("./739380.js"),
  Chunk360148 = require("./360148.js"),
  Chunk100057 = require("./100057.js"),
  Chunk181774 = require("./181774.js"),
  Chunk18572 = require("./18572.js");
require("./758836.js");
var Chunk652215 = require("./652215.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = C(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
require("./870216.js"), require("./457421.js"), require("./295811.js");
let N = e => {
    let {
      tab: t
    } = e, r = T(e, ["tab"]);
    {
      let {
        default: e
      } = n(12901);
      w(r), e(), (0, u.pX)(t ? A.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : A.BVt.COLLECTIBLES_SHOP)
    }
  },
  w = e => {
    s.h.dispatch(S({
      type: "COLLECTIBLES_SHOP_OPEN"
    }, e))
  },
  R = e => {
    s.h.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      skuId: e
    })
  },
  P = (e, t) => !!e == !!t,
  D = (e, t) => P(null == e ? true : e.noCache, null == t ? true : t.noCache) && P(null == e ? true : e.includeUnpublished, null == t ? true : t.includeUnpublished) && P(null == e ? true : e.includeBundles, null == t ? true : t.includeBundles) && P(null == e ? true : e.includeDynamicBlocks, null == t ? true : t.includeDynamicBlocks) && (null == e ? true : e.countryCode) === (null == t ? true : t.countryCode) && (null == e ? true : e.paymentGateway) === (null == t ? true : t.paymentGateway) && (null == e ? true : e.shopHomeConfig) === (null == t ? true : t.shopHomeConfig) && (null == e ? true : e.skipNumCategories) === (null == t ? true : t.skipNumCategories),
  L = async (e, t, n) => {
    s.h.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH",
      options: null != e ? e : {}
    });
    let r = (0, O.ao)(e),
      i = c.Ay.get("shop_show_debug_overlay");
    (null == e ? true : e.logPerf) && (0, b.z)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: b.t.CATEGORIES_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
      cacheDisabled: null == e ? true : e.noCache
    }), i && (0, p.l)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
    try {
      let a = await o.Bo.get({
        url: A.Rsh.COLLECTIBLES_CATEGORIES_V2,
        query: r,
        rejectWithError: true
      });
      (null == e ? true : e.logPerf) && (0, b.z)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: b.t.CATEGORIES_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
        cacheDisabled: null == e ? true : e.noCache
      }), i && (0, p.l)("fetchCollectiblesCategories completed ".concat(a.body.categories.length, " categories")), s.h.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: h.x.fromServer(a.body),
        noOp: t
      })
    } catch (t) {
      let e = new l.LG(t);
      (0, v.o)(e), s.h.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), i && (0, p.l)("fetchCollectiblesCategories failed: ".concat(e.message))
    }
  }, x = async e => {
    if (_.A.isFetching) return;
    s.h.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    let t = c.Ay.get("shop_show_debug_overlay");
    t && (0, p.l)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
    try {
      let n = {
        url: A.Rsh.COLLECTIBLES_PURCHASES,
        rejectWithError: true
      };
      (null == e ? true : e.variantsReturnStyle) === a.g.VARIANTS_GROUP && (n.query = {
        variants_return_style: a.g.VARIANTS_GROUP
      }), t && (0, p.l)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
      let r = await o.Bo.get(n);
      t && (0, p.l)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")), s.h.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: r.body.map(E.A.fromServer)
      })
    } catch (n) {
      let e = new l.LG(n);
      throw (0, v.o)(e), t && (0, p.l)("fetchCollectiblesPurchases failed: ".concat(e.message)), s.h.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), e
    }
  }, M = async (e, t) => {
    s.h.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH",
      skuId: e
    });
    try {
      let n = {
        locale: d.default.locale
      };
      (null == t ? true : t.countryCode) !== null && (n.country_code = null == t ? true : t.countryCode), (null == t ? true : t.paymentGateway) !== null && (n.payment_gateway = null == t ? true : t.paymentGateway), (null == t ? true : t.includeBundles) !== null && (n.include_bundles = null == t ? true : t.includeBundles);
      let r = await o.Bo.get({
        url: A.Rsh.COLLECTIBLES_PRODUCTS(e),
        rejectWithError: true,
        query: n
      });
      s.h.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        skuId: e,
        product: g.A.fromServer(r.body)
      })
    } catch (n) {
      let t = new l.LG(n);
      (0, v.o)(t), s.h.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        skuId: e,
        error: t
      })
    }
  }, j = async (e, t) => {
    f.A.isFetchingProduct(e) || await M(e, t)
  }, k = async e => {
    s.h.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await o.Bo.put({
        url: A.Rsh.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      s.h.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null == (t = n.body) ? true : t.map(E.A.fromServer)
      })
    } catch (n) {
      let t = new l.LG(n);
      throw s.h.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), t
    }
  }, U = async (e, t) => {
    try {
      return (await o.Bo.get({
        url: A.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        },
        rejectWithError: true
      })).body.valid
    } catch (e) {
      return (0, v.o)(new l.LG(e)), false
    }
  }, G = async (e, t) => {
    try {
      return (await o.Bo.get({
        url: A.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH,
        query: {
          sku_ids: t,
          recipient_id: e
        },
        rejectWithError: true
      })).body
    } catch (e) {
      return (0, v.o)(new l.LG(e)), {}
    }
  }, V = async e => {
    let {
      release: t = i.P.PROD
    } = e;
    s.h.dispatch({
      type: "COLLECTIBLES_MARKETING_FETCH"
    });
    let n = {
      platform: r.b.DESKTOP
    };
    t !== i.P.PROD && (n.release = t);
    try {
      let e = await o.Bo.get({
        url: A.Rsh.COLLECTIBLES_MARKETING,
        query: n,
        rejectWithError: true
      });
      s.h.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
        marketings: m.M.fromServer(e.body)
      })
    } catch (e) {
      (0, v.o)(new l.LG(e)), s.h.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_FAILURE"
      })
    }
  }, F = async (e, t, n) => {
    s.h.dispatch({
      type: "COLLECTIBLES_SHOP_HOME_FETCH",
      tab: e,
      options: null != t ? t : {}
    });
    let r = (0, O.ao)(t, e);
    (null == t ? true : t.logPerf) && (0, b.z)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: b.t.SHOP_HOME_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
      cacheDisabled: null == t ? true : t.noCache
    });
    try {
      let i = await o.Bo.get({
        url: A.Rsh.COLLECTIBLES_SHOP,
        query: r,
        rejectWithError: true
      });
      (null == t ? true : t.logPerf) && (0, b.z)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: b.t.SHOP_HOME_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
        cacheDisabled: null == t ? true : t.noCache
      }), s.h.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
        tab: e,
        shopHome: y.a.fromServer(i.body)
      })
    } catch (n) {
      let t = new l.LG(n);
      (0, v.o)(t), s.h.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
        tab: e,
        error: t
      })
    }
  }, B = e => {
    s.h.dispatch({
      type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
      shopHomeConfigOverride: e
    })
  }, H = e => {
    s.h.dispatch({
      type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
      skipNumCategories: e
    })
  }, Y = async (e, t) => {
    s.h.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: t
    });
    try {
      var n;
      let r = await o.Bo.put({
        url: A.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
        body: {
          category_id: e
        },
        rejectWithError: true
      });
      s.h.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: t,
        purchases: null == (n = r.body) ? true : n.map(E.A.fromServer)
      })
    } catch (n) {
      let e = new l.LG(n);
      throw s.h.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: t,
        error: e
      }), e
    }
  }