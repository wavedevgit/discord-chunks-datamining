/** Chunk was on web.js **/
/** chunk id: 495437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EB: () => a,
  Je: () => l,
  cf: () => s,
  mh: () => c
});
var Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk824389 = require("./824389.js");
let a = async e => {
  r.Z.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: e
  });
  try {
    let t = await o.uV(e);
    r.Z.dispatch({
      type: "GUILD_PRODUCTS_FETCH_SUCCESS",
      guildId: e,
      products: t
    })
  } catch (t) {
    r.Z.dispatch({
      type: "GUILD_PRODUCTS_FETCH_FAILURE",
      guildId: e
    })
  }
}, s = async (e, t) => {
  r.Z.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: t
  });
  try {
    let n = await o.p9(e, t);
    return r.Z.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: n
    }), n
  } catch (e) {
    throw r.Z.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: t,
      error: new i.Hx(e)
    }), e
  }
};
async function l(e, t, n) {
  let i = await o.Je(e, t, n);
  return r.Z.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: i
  }), i
}
async function c(e, t) {
  return await o.mh(e, t), r.Z.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: t
  }), true
}