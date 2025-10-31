/** Chunk was on web.js **/
/** chunk id: 210218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
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

function s(e) {
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

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {},
  d = {};

function f(e) {
  let {
    guildId: t
  } = e;
  d[t] = {
    storefront: null,
    loading: true,
    error: false
  }, d = s({}, d)
}

function _(e) {
  let {
    guildId: t,
    storefront: n
  } = e;
  d[t] = {
    storefront: n,
    loading: false,
    error: false
  }, d = s({}, d)
}

function p(e) {
  let {
    guildId: t,
    storefront: n
  } = e, r = d[t];
  (null == r ? true : r.storefront) != null ? d[t] = c(s({}, r), {
    storefront: c(s({}, r.storefront), {
      assets: s({}, r.storefront.assets, n.assets)
    })
  }) : d[t] = {
    storefront: n,
    loading: false,
    error: false
  }, d = s({}, d)
}

function h(e) {
  let {
    guildId: t
  } = e;
  d[t] = {
    storefront: null,
    loading: false,
    error: true
  }, d = s({}, d)
}

function m(e) {
  let {
    guildId: t,
    pageIndex: n,
    skuId: r
  } = e;
  u[t] = {
    activePage: n,
    activeSkuId: r
  }, u = s({}, u)
}
class g extends(r = Chunk442837.ZP.Store) {
  getStorefrontData(e) {
    return d[e]
  }
  getStorefrontState(e) {
    return u[e]
  }
}
o(g, "displayName", "SocialLayerStorefrontStore");
let E = new g(Chunk570140.Z, {
  SOCIAL_LAYER_STOREFRONT_LOAD: f,
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: _,
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: p,
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: h,
  SET_SOCIAL_LAYER_STOREFRONT_STATE: m
})