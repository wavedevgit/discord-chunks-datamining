/** Chunk was on web.js **/
/** chunk id: 824389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Je: () => p,
  gs: () => g,
  mh: () => _,
  p9: () => h,
  uV: () => m
});
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = async (e, t, n) => {
  var {
    priceTier: o,
    imageName: s,
    createNewRole: c,
    unlinkRole: f
  } = n, p = d(n, ["priceTier", "imageName", "createNewRole", "unlinkRole"]);
  try {
    return (await r.tn.patch({
      url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
      body: u(l({}, p), {
        image_name: s,
        price_tier: o,
        create_new_role: c,
        unlink_role: f
      }),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, _ = async (e, t) => {
  try {
    await r.tn.del({
      url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}, m = async e => {
  try {
    return (await (0, o.Kb)({
      url: a.ANM.GUILD_PRODUCT_LISTINGS(e),
      rejectWithError: false
    })).body.listings
  } catch (e) {
    throw new i.Hx(e)
  }
}, h = async (e, t) => {
  try {
    return (await (0, o.Kb)({
      url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}, g = async e => {
  let {
    guildId: t,
    productId: n,
    attachmentId: o
  } = e;
  try {
    return (await r.tn.post({
      url: a.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, o),
      rejectWithError: false
    })).body
  } catch (e) {
    throw new i.Hx(e)
  }
}