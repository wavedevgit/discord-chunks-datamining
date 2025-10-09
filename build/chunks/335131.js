/** Chunk was on web.js **/
/** chunk id: 335131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => V,
  DR: () => x,
  F$: () => U,
  Ov: () => Y,
  R2: () => H,
  Sm: () => L,
  fK: () => F,
  fi: () => W,
  jr: () => B,
  lW: () => Z,
  mK: () => D,
  oK: () => M,
  oc: () => k,
  p8: () => K,
  qg: () => G
}), require("./388685.js"), require("./49124.js");
var Chunk561842 = require("./561842.js"),
  Chunk664081 = require("./664081.js"),
  Chunk311570 = require("./311570.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk37234 = require("./37234.js"),
  Chunk881052 = require("./881052.js"),
  Chunk432877 = require("./432877.js");
require("./777639.js");
var Chunk703656 = require("./703656.js"),
  Chunk706454 = require("./706454.js"),
  Chunk526665 = require("./526665.js"),
  Chunk597688 = require("./597688.js"),
  Chunk748147 = require("./748147.js"),
  Chunk1870 = require("./1870.js"),
  Chunk526503 = require("./526503.js"),
  Chunk206788 = require("./206788.js"),
  Chunk549616 = require("./549616.js"),
  Chunk833798 = require("./833798.js"),
  Chunk778787 = require("./778787.js"),
  Chunk161226 = require("./161226.js"),
  Chunk251728 = require("./251728.js"),
  Chunk303952 = require("./303952.js"),
  Chunk578976 = require("./578976.js"),
  Chunk411700 = require("./411700.js");
require("./215023.js");
var Chunk981631 = require("./981631.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./328347.js"), require("./874703.js"), require("./52030.js");
let D = e => {
    var {
      openInLayer: t = true,
      tab: r
    } = e, i = P(e, ["openInLayer", "tab"]);
    {
      let {
        default: e
      } = n(342386);
      L(i), (0, _.yP)("closeUserSettings") && e(), t ? (0, l.jN)(C.S9g.COLLECTIBLES_SHOP) : (0, d.uL)(r ? C.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r) : C.Z5c.COLLECTIBLES_SHOP)
    }
  },
  L = e => {
    s.Z.dispatch(R({
      type: "COLLECTIBLES_SHOP_OPEN"
    }, e))
  },
  x = () => {
    Chunk570140.Z.dispatch({
      type: "COLLECTIBLES_SHOP_CLOSE"
    }), (0, Chunk37234.xf)()
  },
  M = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  j = (e, t) => !!e == !!t,
  k = (e, t) => j(null == e ? true : e.noCache, null == t ? true : t.noCache) && j(null == e ? true : e.includeUnpublished, null == t ? true : t.includeUnpublished) && j(null == e ? true : e.includeBundles, null == t ? true : t.includeBundles) && j(null == e ? true : e.includePopularPicks, null == t ? true : t.includePopularPicks) && j(null == e ? true : e.includeDynamicBlocks, null == t ? true : t.includeDynamicBlocks) && j(null == e ? true : e.includeNameplatesOnMobile, null == t ? true : t.includeNameplatesOnMobile) && (null == e ? true : e.countryCode) === (null == t ? true : t.countryCode) && (null == e ? true : e.paymentGateway) === (null == t ? true : t.paymentGateway) && (null == e ? true : e.shopHomeConfig) === (null == t ? true : t.shopHomeConfig) && (null == e ? true : e.skipNumCategories) === (null == t ? true : t.skipNumCategories),
  U = async (e, t, n) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH",
      options: null != e ? e : {}
    });
    let r = (0, S.nW)(e),
      i = u.ZP.get("shop_show_debug_overlay");
    (null == e ? true : e.logPerf) && (0, T.n)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: T.a.CATEGORIES_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      isFullScreen: null == n ? true : n.isFullScreen,
      unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
      cacheDisabled: null == e ? true : e.noCache
    }), i && (0, h.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
    try {
      let a = (0, g.i)("CollectiblesActionCreators"),
        l = await o.tn.get({
          url: a ? C.ANM.COLLECTIBLES_CATEGORIES_V2 : C.ANM.COLLECTIBLES_CATEGORIES,
          query: r,
          rejectWithError: true
        });
      (null == e ? true : e.logPerf) && (0, T.n)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: T.a.CATEGORIES_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        isFullScreen: null == n ? true : n.isFullScreen,
        unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
        cacheDisabled: null == e ? true : e.noCache
      }), i && (0, h.v)("fetchCollectiblesCategories completed ".concat(a ? l.body.categories.length : l.body.length, " categories")), a ? s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS",
        categories: E.C.fromServer(l.body),
        noOp: t
      }) : s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: l.body.map(b.Z.fromServer),
        noOp: t
      })
    } catch (t) {
      let e = new c.Hx(t);
      (0, A.G)(e), s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), i && (0, h.v)("fetchCollectiblesCategories failed: ".concat(e.message))
    }
  }, G = async e => {
    if (m.Z.isFetching) return;
    s.Z.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    let t = u.ZP.get("shop_show_debug_overlay");
    t && (0, h.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
    try {
      let n = {
        url: C.ANM.COLLECTIBLES_PURCHASES,
        rejectWithError: true
      };
      (null == e ? true : e.variantsReturnStyle) === a.v.VARIANTS_GROUP && (n.query = {
        variants_return_style: a.v.VARIANTS_GROUP
      }), t && (0, h.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
      let r = await o.tn.get(n);
      t && (0, h.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")), s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: r.body.map(v.Z.fromServer)
      })
    } catch (n) {
      let e = new c.Hx(n);
      throw (0, A.G)(e), t && (0, h.v)("fetchCollectiblesPurchases failed: ".concat(e.message)), s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), e
    }
  }, B = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH",
      skuId: e
    });
    try {
      let n = {
        locale: f.default.locale
      };
      (null == t ? true : t.countryCode) !== null && (n.country_code = null == t ? true : t.countryCode), (null == t ? true : t.paymentGateway) !== null && (n.payment_gateway = null == t ? true : t.paymentGateway), (null == t ? true : t.includeBundles) !== null && (n.include_bundles = null == t ? true : t.includeBundles);
      let r = await o.tn.get({
        url: C.ANM.COLLECTIBLES_PRODUCTS(e),
        rejectWithError: true,
        query: n
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        skuId: e,
        product: O.Z.fromServer(r.body)
      })
    } catch (n) {
      let t = new c.Hx(n);
      (0, A.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        skuId: e,
        error: t
      })
    }
  }, Z = async (e, t) => {
    p.Z.isFetchingProduct(e) || await B(e, t)
  }, F = async e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await o.tn.put({
        url: C.ANM.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null == (t = n.body) ? true : t.map(v.Z.fromServer)
      })
    } catch (n) {
      let t = new c.Hx(n);
      throw s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), t
    }
  }, V = async (e, t) => {
    try {
      return (await o.tn.get({
        url: C.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        },
        rejectWithError: true
      })).body.valid
    } catch (e) {
      return (0, A.G)(new c.Hx(e)), false
    }
  }, H = async e => {
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
        url: C.ANM.COLLECTIBLES_MARKETING,
        query: n,
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
        marketings: y.s.fromServer(e.body)
      })
    } catch (e) {
      (0, A.G)(new c.Hx(e)), s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_FAILURE"
      })
    }
  }, Y = async (e, t, n) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SHOP_HOME_FETCH",
      tab: e,
      options: null != t ? t : {}
    });
    let r = (0, S.nW)(t, e);
    (null == t ? true : t.logPerf) && (0, T.n)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: T.a.SHOP_HOME_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      isFullScreen: null == n ? true : n.isFullScreen,
      unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
      cacheDisabled: null == t ? true : t.noCache
    });
    try {
      let i = await o.tn.get({
        url: C.ANM.COLLECTIBLES_SHOP,
        query: r,
        rejectWithError: true
      });
      (null == t ? true : t.logPerf) && (0, T.n)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: T.a.SHOP_HOME_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        isFullScreen: null == n ? true : n.isFullScreen,
        unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
        cacheDisabled: null == t ? true : t.noCache
      }), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
        tab: e,
        shopHome: I.Y.fromServer(i.body)
      })
    } catch (n) {
      let t = new c.Hx(n);
      (0, A.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
        tab: e,
        error: t
      })
    }
  }, W = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
      shopHomeConfigOverride: e
    })
  }, K = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
      skipNumCategories: e
    })
  }