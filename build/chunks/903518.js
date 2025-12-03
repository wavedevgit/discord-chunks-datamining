/** Chunk was on 58227 **/
/** chunk id: 903518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => a
});
var Chunk601964 = require("./601964.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  return !!((0, l.eM)(e, t) || i.BT({
    permission: r.Plq.ADMINISTRATOR,
    context: e,
    user: t
  })) || i.BT({
    permission: r.Plq.MANAGE_GUILD,
    context: e,
    user: t
  }) && i.BT({
    permission: r.Plq.MANAGE_ROLES,
    context: e,
    user: t
  })
}