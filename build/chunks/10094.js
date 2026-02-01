/** Chunk was on 9207 **/
/** chunk id: 10094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => l,
  Y: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js");
let l = (e, t) => {
    r.h.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    });
    let n = null != t ? t : i.default.getCurrentUser();
    null != n && r.h.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: n
    })
  },
  s = e => {
    r.h.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }