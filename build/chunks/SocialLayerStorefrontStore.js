/** Chunk was on 77033 **/
/** chunk id: 210218, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function i(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}

function d(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      i(e, n, t[n])
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
      guildId: n
    } = e;
    c[n] = {
      storefront: null,
      loading: true,
      error: false
    }, c = d({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function(e) {
    let {
      guildId: n,
      storefront: t
    } = e;
    c[n] = {
      storefront: t,
      loading: false,
      error: false
    }, c = d({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function(e) {
    let {
      guildId: n
    } = e;
    c[n] = {
      storefront: null,
      loading: false,
      error: true
    }, c = d({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_SELECT_PAGE: function(e) {
    var n;
    let {
      guildId: t,
      pageIndex: a
    } = e;
    o[t] = {
      activePage: a,
      activeSkuId: null == (n = o[t]) ? true : n.activeSkuId
    }
  },
  SOCIAL_LAYER_STOREFRONT_SELECT_SKU: function(e) {
    var n, t;
    let {
      guildId: a,
      skuId: l
    } = e;
    o[a] = {
      activePage: null != (t = null == (n = o[a]) ? true : n.activePage) ? t : 0,
      activeSkuId: l
    }
  }
})