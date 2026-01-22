/** Chunk was on 21738 **/
/** chunk id: 5591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk480900 = require("./480900.jsx"),
  Chunk293260 = require("./293260.jsx");
class o extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
  }
  _terminate() {
    i.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
  }
  handleShow(e) {
    let {
      role: t,
      guildId: n
    } = e;
    if (!(0, r.kBI)("GUILD_ROLE_CONNECTIONS_MODAL_KEY")) {
      var i;
      null != t && (null == (i = t.tags) ? true : i.guild_connections) === null ? (0, a.b)(t, n) : (0, s.c0)(n)
    }
  }
}
let c = new o