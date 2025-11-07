/** Chunk was on 26494 **/
/** chunk id: 657021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk526746 = require("./526746.jsx"),
  Chunk562715 = require("./562715.jsx"),
  Chunk290511 = require("./290511.js");

function a(e) {
  let {
    connection: t,
    guildId: n,
    location: a
  } = e;
  return t.connection_type === o.zz.APPLICATION ? (0, l.jsx)(i.Z, {
    connection: t,
    guildId: n,
    location: a
  }) : t.connection_type === o.zz.PROVIDER_CONNECTED_ACCOUNT ? (0, l.jsx)(r.Z, {
    connection: t,
    guildId: n,
    location: a
  }) : null
}