/** Chunk was on 26434 **/
/** chunk id: 824389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Je: () => a,
  gs: () => d,
  mh: () => s,
  p9: () => u,
  uV: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js");
let a = async (e, t, n) => {
  var l, a, {
      priceTier: s,
      imageName: c,
      createNewRole: u,
      unlinkRole: d
    } = n,
    p = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(n, ["priceTier", "imageName", "createNewRole", "unlinkRole"]);
  try {
    return (await r.tn.patch({
      url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
      body: (l = function(e) {
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
      }({}, p), a = {
        image_name: c,
        price_tier: s,
        create_new_role: u,
        unlink_role: d
      }, a = null != a ? a : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
      }), l),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, s = async (e, t) => {
  try {
    await r.tn.del({
      url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}, c = async e => {
  try {
    return (await (0, l.Kb)({
      url: o.ANM.GUILD_PRODUCT_LISTINGS(e),
      rejectWithError: false
    })).body.listings
  } catch (e) {
    throw new i.Hx(e)
  }
}, u = async (e, t) => {
  try {
    return (await (0, l.Kb)({
      url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, d = async e => {
  let {
    guildId: t,
    productId: n,
    attachmentId: l
  } = e;
  try {
    return (await r.tn.post({
      url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}