/** Chunk was on 20501 **/
/** chunk id: 535664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => r,
  u: () => s
});
var Chunk570140 = require("./570140.js");
let r = (e, t) => {
    i.Z.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    }), i.Z.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: t
    })
  },
  s = e => {
    i.Z.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }