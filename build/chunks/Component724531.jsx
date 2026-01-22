/** Chunk was on 16939 **/
/** chunk id: 724531, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk118633 = require("./118633.jsx"),
  Chunk739836 = require("./739836.jsx"),
  Chunk539916 = require("./539916.js");

function o(e) {
  let {
    connection: t,
    guildId: n,
    location: o
  } = e;
  return t.connection_type === a.wZ.APPLICATION ? (0, l.jsx)(r.A, {
    connection: t,
    guildId: n,
    location: o
  }) : t.connection_type === a.wZ.PROVIDER_CONNECTED_ACCOUNT ? (0, l.jsx)(i.A, {
    connection: t,
    guildId: n,
    location: o
  }) : null
}