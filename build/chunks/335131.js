/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  B1: () => L,
  DR: () => N,
  F$: () => P,
  K$: () => M,
  Ov: () => j,
  R2: () => k,
  Sm: () => I,
  fK: () => x,
  jr: () => D,
  mK: () => T,
  oK: () => A,
  oc: () => R,
  qg: () => w
});
var r = n(561842),
  i = n(664081),
  o = n(311570),
  a = n(544891),
  s = n(570140),
  l = n(37234),
  c = n(881052);
n(777639);
var u = n(703656),
  d = n(1870),
  f = n(549616),
  p = n(833798),
  _ = n(778787),
  h = n(161226),
  m = n(251728),
  g = n(578976),
  E = n(439170),
  v = n(981631);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
n(597688), n(574709), n(328347), n(874703), n(52030);
let I = e => {
    s.Z.dispatch(y({
      type: "COLLECTIBLES_SHOP_OPEN"
    }, e))
  },
  T = e => {
    var {
      openInLayer: t = !0,
      tab: n
    } = e;
    I(O(e, ["openInLayer", "tab"])), t ? (0, l.jN)(v.S9g.COLLECTIBLES_SHOP) : (0, u.uL)(n ? v.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n) : v.Z5c.COLLECTIBLES_SHOP)
  },
  N = () => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SHOP_CLOSE"
    }), (0, l.xf)()
  },
  A = e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  C = (e, t) => !!e == !!t,
  R = (e, t) => C(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && C(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && C(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && C(null == e ? void 0 : e.includePopularPicks, null == t ? void 0 : t.includePopularPicks) && C(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
  P = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH",
      options: null != e ? e : {}
    });
    let n = (0, g.n)(e);
    try {
      let e = await a.tn.get({
        url: v.ANM.COLLECTIBLES_CATEGORIES,
        query: n,
        rejectWithError: !0
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: e.body.map(f.Z.fromServer),
        noOp: t
      })
    } catch (t) {
      let e = new c.Hx(t);
      (0, E.G)(e), s.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      })
    }
  }, w = async e => {
    if (!d.Z.isFetching) {
      s.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH"
      });
      try {
        let t = {
          url: v.ANM.COLLECTIBLES_PURCHASES,
          rejectWithError: !0
        };
        (null == e ? void 0 : e.variantsReturnStyle) === o.v.VARIANTS_GROUP && (t.query = {
          variants_return_style: o.v.VARIANTS_GROUP
        });
        let n = await a.tn.get(t);
        s.Z.dispatch({
          type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
          purchases: n.body.map(h.Z.fromServer)
        })
      } catch (t) {
        let e = new c.Hx(t);
        throw s.Z.dispatch({
          type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
          error: e
        }), e
      }
    }
  }, D = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH",
      skuId: e
    });
    try {
      let n = {};
      (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
      let r = await a.tn.get({
        url: v.ANM.COLLECTIBLES_PRODUCTS(e),
        query: n,
        rejectWithError: !0
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        skuId: e,
        product: _.Z.fromServer(r.body)
      })
    } catch (n) {
      let t = new c.Hx(n);
      (0, E.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        skuId: e,
        error: t
      })
    }
  }, x = async e => {
    s.Z.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await a.tn.put({
        url: v.ANM.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        },
        rejectWithError: !0
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(h.Z.fromServer)
      })
    } catch (n) {
      let t = new c.Hx(n);
      throw s.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), t
    }
  }, L = async (e, t) => {
    try {
      return (await a.tn.get({
        url: v.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        },
        rejectWithError: !0
      })).body.valid
    } catch (e) {
      return (0, E.G)(new c.Hx(e)), !1
    }
  }, M = e => {
    s.Z.dispatch(y({
      type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED"
    }, e))
  }, k = async e => {
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
        url: v.ANM.COLLECTIBLES_MARKETING,
        query: n,
        rejectWithError: !0
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
        marketings: p.s.fromServer(e.body)
      })
    } catch (e) {
      (0, E.G)(new c.Hx(e)), s.Z.dispatch({
        type: "COLLECTIBLES_MARKETING_FETCH_FAILURE"
      })
    }
  }, j = async (e, t) => {
    s.Z.dispatch({
      type: "COLLECTIBLES_SHOP_HOME_FETCH",
      tab: e,
      options: null != t ? t : {}
    });
    let n = (0, g.n)(t, e);
    try {
      let t = await a.tn.get({
        url: v.ANM.COLLECTIBLES_SHOP,
        query: n,
        rejectWithError: !0
      });
      s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
        tab: e,
        shopHome: m.Y.fromServer(t.body)
      })
    } catch (n) {
      let t = new c.Hx(n);
      (0, E.G)(t), s.Z.dispatch({
        type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
        tab: e,
        error: t
      })
    }
  }