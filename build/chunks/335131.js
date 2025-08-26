/** Chunk was on web.js **/
/** chunk id: 335131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => G,
  DR: () => w,
  F$: () => j,
  Ov: () => Z,
  R2: () => B,
  Sm: () => P,
  fK: () => U,
  fi: () => F,
  jr: () => k,
  mK: () => R,
  oK: () => D,
  oc: () => L,
  p8: () => V,
  qg: () => M
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

function S(e, t, n) {
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
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./597688.js"), require("./328347.js"), require("./874703.js"), require("./52030.js");
let R = e => {
    var {
      openInLayer: t = true,
      tab: n
    } = e;
    P(C(e, ["openInLayer", "tab"])), t ? (0, l.jN)(T.S9g.COLLECTIBLES_SHOP) : (0, d.uL)(n ? T.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) : T.Z5c.COLLECTIBLES_SHOP)
  },
  P = e => {
    s.Z.dispatch(A({
      type: "COLLECTIBLES_SHOP_OPEN"
    }, e))
  },
  w = () => {
    Chunk570140.Z.dispatch({
      type: "COLLECTIBLES_SHOP_CLOSE"
    }), (0, Chunk37234.xf)()
  },
  D = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  x = (e, t) => !!e == !!t,
  L = (e, t) => x(null == e ? true : e.noCache, null == t ? true : t.noCache) && x(null == e ? true : e.includeUnpublished, null == t ? true : t.includeUnpublished) && x(null == e ? true : e.includeBundles, null == t ? true : t.includeBundles) && x(null == e ? true : e.includePopularPicks, null == t ? true : t.includePopularPicks) && x(null == e ? true : e.includeDynamicBlocks, null == t ? true : t.includeDynamicBlocks) && x(null == e ? true : e.includeNameplatesOnMobile, null == t ? true : t.includeNameplatesOnMobile) && (null == e ? true : e.countryCode) === (null == t ? true : t.countryCode) && (null == e ? true : e.paymentGateway) === (null == t ? true : t.paymentGateway) && (null == e ? true : e.shopHomeConfig) === (null == t ? true : t.shopHomeConfig) && (null == e ? true : e.skipNumCategories) === (null == t ? true : t.skipNumCategories),
  j = async (e, t, n) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH",
      options: null != e ? e : {}
    });
    let r = (0, v.nW)(e),
      i = u.ZP.get("shop_show_debug_overlay");
    (null == e ? true : e.logPerf) && (0, O.n)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: O.a.CATEGORIES_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      isFullScreen: null == n ? true : n.isFullScreen,
      unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
      cacheDisabled: null == e ? true : e.noCache
    }), i && (0, f.v)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
    try {
      let o = (0, p.i)("CollectiblesActionCreators"),
        l = await a.tn.get({
          url: o ? T.ANM.COLLECTIBLES_CATEGORIES_V2 : T.ANM.COLLECTIBLES_CATEGORIES,
          query: r,
          rejectWithError: true
        });
      (null == e ? true : e.logPerf) && (0, O.n)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: O.a.CATEGORIES_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        isFullScreen: null == n ? true : n.isFullScreen,
        unpublishedCategoriesShown: null == e ? true : e.includeUnpublished,
        cacheDisabled: null == e ? true : e.noCache
      }), i && (0, f.v)("fetchCollectiblesCategories completed ".concat(o ? l.body.categories.length : l.body.length, " categories")), o ? s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_V2_FETCH_SUCCESS",
        categories: h.C.fromServer(l.body),
        noOp: t
      }) : s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: l.body.map(m.Z.fromServer),
        noOp: t
      })
    } catch (t) {
      let e = new c.Hx(t);
      (0, I.G)(e), s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), i && (0, f.v)("fetchCollectiblesCategories failed: ".concat(e.message))
    }
  }, M = async e => {
    if (_.Z.isFetching) return;
    s.Z.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    let t = u.ZP.get("shop_show_debug_overlay");
    t && (0, f.v)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
    try {
      let n = {
        url: T.ANM.COLLECTIBLES_PURCHASES,
        rejectWithError: true
      };
      (null == e ? true : e.variantsReturnStyle) === o.v.VARIANTS_GROUP && (n.query = {
        variants_return_style: o.v.VARIANTS_GROUP
      }), t && (0, f.v)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
      let r = await a.tn.get(n);
      t && (0, f.v)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")), s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: r.body.map(b.Z.fromServer)
      })
    } catch (n) {
      let e = new c.Hx(n);
      throw (0, I.G)(e), t && (0, f.v)("fetchCollectiblesPurchases failed: ".concat(e.message)), s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), e
    }
  }, k = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH",
      skuId: e
    });
    try {
      let n = {};
      (null == t ? true : t.countryCode) !== null && (n.country_code = null == t ? true : t.countryCode), (null == t ? true : t.paymentGateway) !== null && (n.payment_gateway = null == t ? true : t.paymentGateway);
      let r = await a.tn.get({
        url: T.ANM.COLLECTIBLES_PRODUCTS(e),
        query: n,
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        skuId: e,
        product: E.Z.fromServer(r.body)
      })
    } catch (n) {
      let t = new c.Hx(n);
      (0, I.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        skuId: e,
        error: t
      })
    }
  }, U = async e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await a.tn.put({
        url: T.ANM.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        },
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null == (t = n.body) ? true : t.map(b.Z.fromServer)
      })
    } catch (n) {
      let t = new c.Hx(n);
      throw s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), t
    }
  }, G = async (e, t) => {
    try {
      return (await a.tn.get({
        url: T.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        },
        rejectWithError: true
      })).body.valid
    } catch (e) {
      return (0, I.G)(new c.Hx(e)), false
    }
  }, B = async e => {
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
      let e = await a.tn.get({
        url: T.ANM.COLLECTIBLES_MARKETING,
        query: n,
        rejectWithError: true
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
        marketings: g.s.fromServer(e.body)
      })
    } catch (e) {
      (0, I.G)(new c.Hx(e)), s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_FAILURE"
      })
    }
  }, Z = async (e, t, n) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SHOP_HOME_FETCH",
      tab: e,
      options: null != t ? t : {}
    });
    let r = (0, v.nW)(t, e);
    (null == t ? true : t.logPerf) && (0, O.n)({
      sessionId: null == n ? true : n.sessionId,
      checkpoint: O.a.SHOP_HOME_FETCH_STARTED,
      tab: null == n ? true : n.tab,
      isFullScreen: null == n ? true : n.isFullScreen,
      unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
      cacheDisabled: null == t ? true : t.noCache
    });
    try {
      let i = await a.tn.get({
        url: T.ANM.COLLECTIBLES_SHOP,
        query: r,
        rejectWithError: true
      });
      (null == t ? true : t.logPerf) && (0, O.n)({
        sessionId: null == n ? true : n.sessionId,
        checkpoint: O.a.SHOP_HOME_FETCH_COMPLETED,
        tab: null == n ? true : n.tab,
        isFullScreen: null == n ? true : n.isFullScreen,
        unpublishedCategoriesShown: null == t ? true : t.includeUnpublished,
        cacheDisabled: null == t ? true : t.noCache
      }), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
        tab: e,
        shopHome: y.Y.fromServer(i.body)
      })
    } catch (n) {
      let t = new c.Hx(n);
      (0, I.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
        tab: e,
        error: t
      })
    }
  }, F = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
      shopHomeConfigOverride: e
    })
  }, V = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
      skipNumCategories: e
    })
  }