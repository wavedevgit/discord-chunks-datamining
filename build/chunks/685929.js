/** Chunk was on 99905 **/
/** chunk id: 685929, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  C: () => c,
  Y: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function c(n) {
  let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.Z;
  return null != n && null != n.linkedLobby && e.can(i.Plq.MANAGE_CHANNELS, n) && e.can(i.Plq.VIEW_CHANNEL, n) && e.can(i.Plq.SEND_MESSAGES, n)
}

function o(n) {
  return (0, r.e7)([l.Z], () => c(n, l.Z))
}