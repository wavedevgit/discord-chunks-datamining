/** Chunk was on 9753 **/
/** chunk id: 912702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GI: () => a,
  Oo: () => c,
  Qm: () => o,
  py: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk306522 = require("./306522.js");
let a = async e => {
  r.h.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: e
  });
  try {
    let t = await l.oG(e);
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
}, s = async (e, t) => {
  r.h.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: t
  });
  try {
    let n = await l.bq(e, t);
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
async function o(e, t, n) {
  let i = await l.Qm(e, t, n);
  return r.h.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: i
  }), i
}
async function c(e, t) {
  return await l.Oo(e, t), r.h.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: t
  }), true
}