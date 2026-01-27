/** Chunk was on 92917 **/
/** chunk id: 306522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Oo: () => o,
  P0: () => d,
  Qm: () => s,
  bq: () => u,
  oG: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk371794 = require("./371794.js"),
  Chunk652215 = require("./652215.js");
let s = async (e, t, n) => {
  let {
    priceTier: l,
    imageName: s,
    createNewRole: o,
    unlinkRole: c
  } = n, u = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(n, ["priceTier", "imageName", "createNewRole", "unlinkRole"]);
  try {
    var d, p;
    return (await r.Bo.patch({
      url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
      body: (d = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, u), p = {
        image_name: s,
        price_tier: l,
        create_new_role: o,
        unlink_role: c
      }, p = null != p ? p : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(p)).forEach(function(e) {
        Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e))
      }), d),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.LG(e)
  }
}, o = async (e, t) => {
  try {
    await r.Bo.del({
      url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.LG(e)
  }
}, c = async e => {
  try {
    return (await (0, l.aP)({
      url: a.Rsh.GUILD_PRODUCT_LISTINGS(e),
      rejectWithError: false
    })).body.listings
  } catch (e) {
    throw new i.LG(e)
  }
}, u = async (e, t) => {
  try {
    return (await (0, l.aP)({
      url: a.Rsh.GUILD_PRODUCT_LISTINGS(e, t),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.LG(e)
  }
}, d = async e => {
  let {
    guildId: t,
    productId: n,
    attachmentId: l
  } = e;
  try {
    return (await r.Bo.post({
      url: a.Rsh.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.LG(e)
  }
}