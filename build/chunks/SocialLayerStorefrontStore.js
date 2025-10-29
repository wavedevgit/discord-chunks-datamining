/** Chunk was on 56710 **/
/** chunk id: 210218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let s = {},
  c = {};
class u extends(r = Chunk442837.ZP.Store) {
  getStorefrontData(e) {
    return c[e]
  }
  getStorefrontState(e) {
    return s[e]
  }
}
o(u, "displayName", "SocialLayerStorefrontStore");
let d = new u(Chunk570140.Z, {
  SOCIAL_LAYER_STOREFRONT_LOAD: function(e) {
    let {
      guildId: t
    } = e;
    c[t] = {
      storefront: null,
      loading: true,
      error: false
    }, c = a({}, c)
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
    }, c = a({}, c)
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    c[t] = {
      storefront: null,
      loading: false,
      error: true
    }, c = a({}, c)
  },
  SET_SOCIAL_LAYER_STOREFRONT_STATE: function(e) {
    let {
      guildId: t,
      pageIndex: n,
      skuId: r
    } = e;
    s[t] = {
      activePage: n,
      activeSkuId: r
    }, s = a({}, s)
  }
})