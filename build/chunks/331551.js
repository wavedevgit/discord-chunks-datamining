/** Chunk was on web.js **/
/** chunk id: 331551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => o
});
var Chunk815790 = require("./815790.js"),
  Chunk588215 = require("./588215.js");

function o(e, t) {
  let n = (0, r.Dw)(e.joinedAt);
  switch (t) {
    case i.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
      return n;
    case i.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
      return -n;
    case i.d$.ORDER_BY_USER_ID_ASC:
      return parseInt(e.userId);
    case i.d$.ORDER_BY_USER_ID_DESC:
      return -parseInt(e.userId);
    default:
      return -n
  }
}