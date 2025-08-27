/** Chunk was on web.js **/
/** chunk id: 535664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i,
  u: () => a
});
var Chunk570140 = require("./570140.js");
let i = (e, t) => {
    r.Z.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    }), r.Z.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: t
    })
  },
  a = e => {
    r.Z.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }