/** Chunk was on 26494 **/
/** chunk id: 657021, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk526746 = require("./526746.jsx"),
  Chunk562715 = require("./562715.jsx"),
  Chunk290511 = require("./290511.js");

function r(e) {
  let {
    connection: n
  } = e;
  return n.connection_type === o.zz.APPLICATION ? (0, l.jsx)(i.Z, {
    connection: n
  }) : n.connection_type === o.zz.PROVIDER_CONNECTED_ACCOUNT ? (0, l.jsx)(a.Z, {
    connection: n
  }) : null
}