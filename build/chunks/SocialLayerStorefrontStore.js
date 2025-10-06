/** Chunk was on 77033 **/
/** chunk id: 210218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}
let o = {},
  c = {};
class s extends(a = Chunk442837.ZP.Store) {
  getStorefrontData(e) {
    return c[e]
  }
  getStorefrontState(e) {
    return o[e]
  }
}
i(s, "displayName", "SocialLayerStorefrontStore");
let u = new s(Chunk570140.Z, {
  SOCIAL_LAYER_STOREFRONT_LOAD: function(e) {
    let {
      guildId: t
    } = e;
    c[t] = {
      storefront: null,
      loading: true,
      error: false
    }, c = d({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function(e) {
    let {
      guildId: t,
      storefront: n
    } = e;
    c[t] = {
      storefront: n,
      loading: false,
      error: false
    }, c = d({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    c[t] = {
      storefront: null,
      loading: false,
      error: true
    }, c = d({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_SELECT_PAGE: function(e) {
    var t;
    let {
      guildId: n,
      pageIndex: a
    } = e;
    o[n] = {
      activePage: a,
      activeSkuId: null == (t = o[n]) ? true : t.activeSkuId
    }
  },
  SOCIAL_LAYER_STOREFRONT_SELECT_SKU: function(e) {
    var t, n;
    let {
      guildId: a,
      skuId: r
    } = e;
    o[a] = {
      activePage: null != (n = null == (t = o[a]) ? true : t.activePage) ? n : 0,
      activeSkuId: r
    }
  }
})