/** Chunk was on web.js **/
/** chunk id: 912702, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GI: () => s,
  Oo: () => c,
  Qm: () => l,
  py: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk306522 = require("./306522.js");
let s = async e => {
  r.h.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: e
  });
  try {
    let t = await a.oG(e);
    r.h.dispatch({
      type: "GUILD_PRODUCTS_FETCH_SUCCESS",
      guildId: e,
      products: t
    })
  } catch (t) {
    r.h.dispatch({
      type: "GUILD_PRODUCTS_FETCH_FAILURE",
      guildId: e
    })
  }
}, o = async (e, t) => {
  r.h.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: t
  });
  try {
    let n = await a.bq(e, t);
    return r.h.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: n
    }), n
  } catch (e) {
    throw r.h.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: t,
      error: new i.LG(e)
    }), e
  }
};
async function l(e, t, n) {
  let i = await a.Qm(e, t, n);
  return r.h.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: i
  }), i
}
async function c(e, t) {
  return await a.Oo(e, t), r.h.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: t
  }), true
}