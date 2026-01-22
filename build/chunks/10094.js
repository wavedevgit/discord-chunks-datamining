/** Chunk was on web.js **/
/** chunk id: 10094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => i,
  Y: () => a
});
var Chunk73153 = require("./73153.js");
let i = (e, t) => {
    r.h.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    }), r.h.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: t
    })
  },
  a = e => {
    r.h.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }