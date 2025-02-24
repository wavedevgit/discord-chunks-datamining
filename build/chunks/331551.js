/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  b: () => o
});
var r = n(815790),
  i = n(588215);

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