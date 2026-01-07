/** Chunk was on 1272 **/
/** chunk id: 9029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk507294 = require("./507294.jsx"),
  Chunk458034 = require("./458034.jsx");
class s extends Chunk317770.Z {
  _initialize() {
    i.Z.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
  }
  _terminate() {
    i.Z.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
  }
  handleShow(e) {
    let {
      role: t,
      guildId: n
    } = e;
    if (!(0, r.nfh)("GUILD_ROLE_CONNECTIONS_MODAL_KEY")) {
      var i;
      null != t && (null == (i = t.tags) ? true : i.guild_connections) === null ? (0, a.g)(t, n) : (0, o.Am)(n)
    }
  }
}
let c = new s