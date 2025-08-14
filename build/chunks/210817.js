/** Chunk was on web.js **/
/** chunk id: 210817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk877481 = require("./877481.js"),
  Chunk358085 = require("./358085.js"),
  Chunk817788 = require("./817788.js");
let a = {
  async getRobloxSubgameURL(e) {
    let t = (0, i.isMac)() ? (0, o.VX)(e) : o.HQ;
    return (0, i.isDesktop)() && await r.Z.isProtocolRegistered(t) ? (0, o.VX)(e) : (0, o.uf)(e)
  }
}