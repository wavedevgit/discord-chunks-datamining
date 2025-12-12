/** Chunk was on web.js **/
/** chunk id: 335131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => U,
  F$: () => x,
  Ov: () => F,
  R2: () => Z,
  Sm: () => P,
  _o: () => G,
  fK: () => k,
  fi: () => B,
  jr: () => j,
  lW: () => M,
  mK: () => N,
  oK: () => R,
  oc: () => D,
  p8: () => V,
  qg: () => L,
  wW: () => H
}), require("./388685.js"), require("./49124.js");
var Chunk561842 = require("./561842.js"),
  Chunk664081 = require("./664081.js"),
  Chunk311570 = require("./311570.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js");
require("./37234.js");
var Chunk881052 = require("./881052.js"),
  Chunk432877 = require("./432877.js");
require("./777639.js");
var Chunk703656 = require("./703656.js"),
  Chunk706454 = require("./706454.js"),
  Chunk597688 = require("./597688.js"),
  Chunk748147 = require("./748147.js"),
  Chunk1870 = require("./1870.js"),
  Chunk206788 = require("./206788.js"),
  Chunk833798 = require("./833798.js"),
  Chunk778787 = require("./778787.js"),
  Chunk161226 = require("./161226.js"),
  Chunk251728 = require("./251728.js"),
  Chunk303952 = require("./303952.js"),
  Chunk578976 = require("./578976.js"),
  Chunk411700 = require("./411700.js");
require("./215023.js");
var Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function C(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./328347.js"), require("./874703.js"), require("./52030.js");
let N = e => {
    var {
      tab: t
    } = e, r = C(e, ["tab"]);
    {
      let {
        default: e
      } = n(342386);
      P(r), e(), (0, u.uL)(t ? S.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t) : S.Z5c.COLLECTIBLES_SHOP)
    }
  },
  P = e => {
    s.Z.dispatch(T({
      type: "COLLECTIBLES_SHOP_OPEN"
    }, e))
  },
  R = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  w = (e, t) => !!e == !!t,
  D = (e, t) => w(null == e ? true : e.noCache, null == t ? true : t.noCache) && w(null == e ? true : e.includeUnpublished, null == t ? true : t.includeUnpublished) && w(null == e ? true : e.includeBundles, null == t ? true : t.includeBundles) && w(null == e ? true : e.includeDynamicBlocks, null == t ? true : t.includeDynamicBlocks) && w(null == e ? true : e.includeNameplatesOnMobile, null == t ? true : t.includeNameplatesOnMobile) && (null == e ? true : e.countryCode) === (null == t ? true : t.countryCode) && (null == e ? true : e.paymentGateway) === (null == t ? true : t.paymentGateway) && (null == e ? true : e.shopHomeConfig) === (null == t ? true : t.shopHomeConfig) && (null == e ? true : e.skipNumCategories) === (null == t ? true : t.skipNumCategories),
  x = async (e, t, n) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH",
      options: null != e ? e : {}
    });
    let r = (0, O.nW)(e),
      i = c.ZP.get("shop_show_debug_overlay");
    (null == e ? true : e.logPerf) && (0, y.n)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: y.a.CATEGORIES_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
      cacheDisabled: null == e ? true : e.noCache
    }), i && (0, p.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
    try {
      let a = await o.tn.get({
        url: S.ANM.COLLECTIBLES_CATEGORIES_V2,
        query: r,
        rejectWithError: true
      });
      (null == e ? true : e.logPerf) && (0, y.n)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: y.a.CATEGORIES_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
        cacheDisabled: null == e ? true : e.noCache
      }), i && (0, p.v)("fetchCollectiblesCategories completed ".concat(a.body.categories.length, " categories")), s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: m.C.fromServer(a.body),
        noOp: t
      })
    } catch (t) {
      let e = new l.Hx(t);
      (0, v.G)(e), s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), i && (0, p.v)("fetchCollectiblesCategories failed: ".concat(e.message))
    }
  }, L = async e => {
    if (_.Z.isFetching) return;
    s.Z.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    let t = c.ZP.get("shop_show_debug_overlay");
    t && (0, p.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
    try {
      let n = {
        url: S.ANM.COLLECTIBLES_PURCHASES,
        rejectWithError: true
      };
      (null == e ? true : e.variantsReturnStyle) === a.v.VARIANTS_GROUP && (n.query = {
        variants_return_style: a.v.VARIANTS_GROUP
      }), t && (0, p.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
      let r = await o.tn.get(n);
      t && (0, p.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")), s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: r.body.map(E.Z.fromServer)
      })
    } catch (n) {
      let e = new l.Hx(n);
      throw (0, v.G)(e), t && (0, p.v)("fetchCollectiblesPurchases failed: ".concat(e.message)), s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), e
    }
  }, j = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH",
      skuId: e
    });
    try {
      let n = {
        locale: d.default.locale
      };
      (null == t ? true : t.countryCode) !== null && (n.country_code = null == t ? true : t.countryCode), (null == t ? true : t.paymentGateway) !== null && (n.payment_gateway = null == t ? true : t.paymentGateway), (null == t ? true : t.includeBundles) !== null && (n.include_bundles = null == t ? true : t.includeBundles);
      let r = await o.tn.get({
        url: S.ANM.COLLECTIBLES_PRODUCTS(e),
        rejectWithError: true,
        query: n
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        skuId: e,
        product: g.Z.fromServer(r.body)
      })
    } catch (n) {
      let t = new l.Hx(n);
      (0, v.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        skuId: e,
        error: t
      })
    }
  }, M = async (e, t) => {
    f.Z.isFetchingProduct(e) || await j(e, t)
  }, k = async e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await o.tn.put({
        url: S.ANM.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null == (t = n.body) ? true : t.map(E.Z.fromServer)
      })
    } catch (n) {
      let t = new l.Hx(n);
      throw s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), t
    }
  }, U = async (e, t) => {
    try {
      return (await o.tn.get({
        url: S.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        },
        rejectWithError: true
      })).body.valid
    } catch (e) {
      return (0, v.G)(new l.Hx(e)), false
    }
  }, G = async (e, t) => {
    try {
      return (await o.tn.get({
        url: S.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH,
        query: {
          sku_ids: t,
          recipient_id: e
        },
        rejectWithError: true
      })).body
    } catch (e) {
      return (0, v.G)(new l.Hx(e)), {}
    }
  }, Z = async e => {
    let {
      release: t = i.P.PROD
    } = e;
    s.Z.dispatch({
      type: "COLLECTIBLES_MARKETING_FETCH"
    });
    let n = {
      platform: r.h.DESKTOP
    };
    t !== i.P.PROD && (n.release = t);
    try {
      let e = await o.tn.get({
        url: S.ANM.COLLECTIBLES_MARKETING,
        query: n,
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
        marketings: h.s.fromServer(e.body)
      })
    } catch (e) {
      (0, v.G)(new l.Hx(e)), s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_FAILURE"
      })
    }
  }, F = async (e, t, n) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SHOP_HOME_FETCH",
      tab: e,
      options: null != t ? t : {}
    });
    let r = (0, O.nW)(t, e);
    (null == t ? true : t.logPerf) && (0, y.n)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: y.a.SHOP_HOME_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
      cacheDisabled: null == t ? true : t.noCache
    });
    try {
      let i = await o.tn.get({
        url: S.ANM.COLLECTIBLES_SHOP,
        query: r,
        rejectWithError: true
      });
      (null == t ? true : t.logPerf) && (0, y.n)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: y.a.SHOP_HOME_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
        cacheDisabled: null == t ? true : t.noCache
      }), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
        tab: e,
        shopHome: b.Y.fromServer(i.body)
      })
    } catch (n) {
      let t = new l.Hx(n);
      (0, v.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
        tab: e,
        error: t
      })
    }
  }, B = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
      shopHomeConfigOverride: e
    })
  }, V = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
      skipNumCategories: e
    })
  }, H = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: t
    });
    try {
      var n;
      let r = await o.tn.put({
        url: S.ANM.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
        body: {
          category_id: e
        },
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: t,
        purchases: null == (n = r.body) ? true : n.map(E.Z.fromServer)
      })
    } catch (n) {
      let e = new l.Hx(n);
      throw s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: t,
        error: e
      }), e
    }
  }