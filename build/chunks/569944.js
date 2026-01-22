/** Chunk was on 50796 **/
/** chunk id: 569944, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => s
});
var Chunk260509 = require("./260509.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  return !!((0, l.bM)(e, t) || r.$3({
    permission: i.xBc.ADMINISTRATOR,
    context: e,
    user: t
  })) || r.$3({
    permission: i.xBc.MANAGE_GUILD,
    context: e,
    user: t
  }) && r.$3({
    permission: i.xBc.MANAGE_ROLES,
    context: e,
    user: t
  })
}