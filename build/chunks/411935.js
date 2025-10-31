/** Chunk was on 84802 **/
/** chunk id: 411935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => o,
  m: () => s
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk164670 = require("./164670.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  try {
    var t;
    r.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD",
      guildId: e
    });
    let n = await a.tn.get({
      url: i.ANM.SOCIAL_LAYER_APPLICATION_STOREFRONT(e),
      rejectWithError: true
    });
    if (null == n.body || !n.ok) throw Error("Failed to fetch social layer storefront");
    let o = (0, l.Uc)(n.body);
    r.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS",
      guildId: e,
      storefront: o
    }), r.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: null != (t = n.body.store_listings) ? t : []
    })
  } catch (t) {
    r.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE",
      guildId: e
    })
  }
}

function s(e, t, n) {
  r.Z.dispatch({
    type: "SET_SOCIAL_LAYER_STOREFRONT_STATE",
    guildId: e,
    pageIndex: t,
    skuId: n
  })
}