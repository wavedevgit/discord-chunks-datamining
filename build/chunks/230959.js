/** Chunk was on web.js **/
/** chunk id: 230959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => a
});
var Chunk157347 = require("./157347.js"),
  Chunk70738 = require("./70738.js");

function a(e, t) {
  let n = (0, r.vn)(e.joinedAt);
  switch (t) {
    case i.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
      return n;
    case i.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
      return -n;
    case i.mF.ORDER_BY_USER_ID_ASC:
      return parseInt(e.userId);
    case i.mF.ORDER_BY_USER_ID_DESC:
      return -parseInt(e.userId);
    default:
      return -n
  }
}